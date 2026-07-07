import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "./context.js";

const ALLOWED_ORIGINS = new Set([
  "https://jang961111-hash.github.io",
  "http://localhost:3000",
]);

const MAX_TURNS = 8; // user+assistant 합산 메시지 수 상한
const MAX_CHARS = 600; // 메시지 1건 길이 상한
const RATE_LIMIT = { windowMs: 10 * 60 * 1000, max: 10 }; // IP당 10분에 10회

// isolate 단위 best-effort 레이트리밋 (엣지 특성상 완전하지 않음 — 비용 상한은
// Anthropic Console의 workspace spend limit으로 이중 방어할 것)
const buckets = new Map();

const rateLimited = (ip) => {
  const now = Date.now();
  const hits = (buckets.get(ip) || []).filter((t) => now - t < RATE_LIMIT.windowMs);
  if (hits.length >= RATE_LIMIT.max) return true;
  hits.push(now);
  buckets.set(ip, hits);
  return false;
};

const corsHeaders = (origin) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGINS.has(origin) ? origin : "https://jang961111-hash.github.io",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
});

const json = (body, status, origin) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders(origin) },
  });

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (request.method !== "POST") {
      return json({ error: "method_not_allowed" }, 405, origin);
    }
    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return json({ error: "forbidden_origin" }, 403, origin);
    }

    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    if (rateLimited(ip)) {
      return json({ error: "rate_limited" }, 429, origin);
    }

    let messages;
    try {
      ({ messages } = await request.json());
    } catch {
      return json({ error: "bad_json" }, 400, origin);
    }

    if (
      !Array.isArray(messages) ||
      messages.length === 0 ||
      messages.length > MAX_TURNS ||
      !messages.every(
        (m) =>
          m &&
          (m.role === "user" || m.role === "assistant") &&
          typeof m.content === "string" &&
          m.content.length > 0 &&
          m.content.length <= MAX_CHARS
      )
    ) {
      return json({ error: "bad_messages" }, 400, origin);
    }

    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

    try {
      const response = await client.messages.create({
        model: "claude-opus-4-8",
        max_tokens: 700,
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            // 프리픽스 캐싱 — 컨텍스트가 모델 최소 캐시 길이보다 짧으면 조용히
            // 캐시되지 않지만 무해함. 컨텍스트가 커지면 자동으로 효과 발생.
            cache_control: { type: "ephemeral" },
          },
        ],
        messages,
      });

      if (response.stop_reason === "refusal") {
        return json(
          { reply: "죄송해요, 그 질문에는 답변할 수 없어요. 포트폴리오에 대해 물어봐 주세요!" },
          200,
          origin
        );
      }

      const reply = response.content
        .filter((b) => b.type === "text")
        .map((b) => b.text)
        .join("");

      return json({ reply }, 200, origin);
    } catch (err) {
      if (err instanceof Anthropic.RateLimitError) {
        return json({ error: "upstream_rate_limited" }, 429, origin);
      }
      if (err instanceof Anthropic.APIError) {
        return json({ error: "upstream_error", status: err.status }, 502, origin);
      }
      return json({ error: "internal_error" }, 500, origin);
    }
  },
};
