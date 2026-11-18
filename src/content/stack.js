// Technologies used across the projects on this site.
// Every item lists the project slugs where it was actually used; the section
// links each name back to those project pages. Add an item only when the
// project's own records (repo, deck, or write-up) show it.
export const stackGroups = [
  {
    id: "ai",
    label: { ko: "AI", en: "AI" },
    items: [
      { name: "Claude API", projects: ["ansim-ieum"] },
      { name: "SenseVoice", projects: ["dailylog"] },
      { name: "Thompson Sampling", projects: ["dailylog"] },
      { name: "Gemini", projects: ["jangbogo"] },
      { name: "LangGraph", projects: ["incident-agent-ablation"] },
      { name: "MCP", projects: ["incident-agent-ablation"] },
      { name: "RAG", projects: ["incident-agent-ablation"] },
      { name: "LLM-as-a-Judge", projects: ["incident-agent-ablation"] },
    ],
  },
  {
    id: "backend",
    label: { ko: "백엔드와 데이터", en: "Backend & Data" },
    items: [
      { name: "Python", projects: ["ansim-ieum", "argus", "incident-agent-ablation"] },
      { name: "FastAPI", projects: ["ansim-ieum", "argus", "ssafy-startup-track"] },
      { name: "PostgreSQL", projects: ["ssafy-startup-track"] },
      { name: "SQLite", projects: ["ansim-ieum"] },
      { name: "pgvector", projects: ["dailylog"] },
      { name: "WebSocket (STOMP)", projects: ["loggy"] },
      { name: "OpenAPI", projects: ["argus"] },
    ],
  },
  {
    id: "frontend",
    label: { ko: "프런트엔드", en: "Frontend" },
    items: [
      { name: "React", projects: ["loggy", "ajob-radar"] },
      { name: "TypeScript", projects: ["loggy", "ssafy-startup-track"] },
      { name: "Next.js", projects: ["jangbogo", "ssafy-startup-track"] },
      { name: "Vue 3", projects: ["argus"] },
      { name: "Zustand", projects: ["loggy", "ssafy-startup-track"] },
      { name: "TanStack Query", projects: ["loggy", "ssafy-startup-track"] },
      { name: "React Native", projects: ["chronicle"] },
    ],
  },
  {
    id: "delivery",
    label: { ko: "배포와 협업", en: "Delivery & Collaboration" },
    items: [
      { name: "Docker", projects: ["ansim-ieum"] },
      { name: "AWS EC2", projects: ["ansim-ieum"] },
      { name: "GitHub Actions", projects: ["ansim-ieum", "incident-agent-ablation"] },
      { name: "GCP Cloud Run", projects: ["jangbogo"] },
      { name: "GA4", projects: ["ssafy-startup-track"] },
      { name: "Figma", projects: ["dailylog", "chronicle"] },
    ],
  },
];
