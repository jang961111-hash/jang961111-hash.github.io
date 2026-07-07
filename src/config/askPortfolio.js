// "Ask my portfolio" 위젯 백엔드 엔드포인트 (Cloudflare Worker).
// 비어 있으면 위젯이 렌더되지 않는다 — 워커 배포 후 .env.production에
// REACT_APP_ASK_ENDPOINT를 설정할 것 (workers/ask-portfolio/README.md 참조).
export const ASK_PORTFOLIO_ENDPOINT = (
  process.env.REACT_APP_ASK_ENDPOINT || ""
).replace(/\/$/, "");
