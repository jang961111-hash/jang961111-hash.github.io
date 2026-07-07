# Ask my portfolio — Cloudflare Worker

포트폴리오 사이트의 "Ask my portfolio" AI 위젯 백엔드. Claude API 키를 브라우저에 노출하지 않기 위한 서버리스 프록시입니다.

## 구조

```
브라우저 위젯 → 이 Worker (키 보관·CORS·레이트리밋) → Claude API (claude-opus-4-8)
```

- 시스템 프롬프트에 포트폴리오 컨텍스트 주입 (`src/context.js` — 프로젝트 내용 크게 바뀌면 갱신)
- IP당 10분에 10회 레이트리밋(베스트에포트) + 메시지 길이/개수 검증 + 허용 오리진 제한

## 배포 (1회, 약 10분)

1. **Cloudflare 계정** (무료): https://dash.cloudflare.com/sign-up
2. **Anthropic API 키**: https://platform.claude.com/ → API Keys에서 발급.
   Console에서 workspace **spend limit**(예: 월 $5)을 꼭 설정해 비용 상한을 이중으로 걸 것.
3. 이 폴더에서:
   ```sh
   npm install
   npx wrangler login          # 브라우저 인증
   npx wrangler secret put ANTHROPIC_API_KEY   # 키 붙여넣기
   npx wrangler deploy
   ```
   배포 후 출력되는 URL(예: `https://ask-portfolio.<계정>.workers.dev`)을 복사.
4. **사이트에 연결**: 포트폴리오 저장소 루트에 `.env.production` 생성:
   ```
   REACT_APP_ASK_ENDPOINT=https://ask-portfolio.<계정>.workers.dev
   ```
   그리고 `npm run deploy`. (엔드포인트가 비어 있으면 위젯은 렌더되지 않음)

## 비용 감각

claude-opus-4-8 기준 질문 1건 ≈ 3K 입력 + 0.3K 출력 ≈ $0.03. 월 200 질문 ≈ $6.
더 저렴하게 쓰려면 `src/index.js`의 model을 `claude-haiku-4-5`로 바꾸면 약 1/5 비용(품질 트레이드오프).

## 로컬 테스트

```sh
npx wrangler dev   # http://localhost:8787
curl -s localhost:8787 -X POST -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"DailyLog에서 무슨 역할을 했나요?"}]}'
```
