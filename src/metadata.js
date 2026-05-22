export const BASE_URL = "https://jang961111-hash.github.io";

export const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    path: "/",
    title: "장병헌 | AI/SW 기반 문제정의형 서비스 기획자 / PM",
    description:
      "장병헌의 포트폴리오. 철학 전공 기반 문제 구조화 역량과 SSAFY 기반 AI/SW 기술 이해를 바탕으로 사용자 경험과 기술 구조를 연결하는 서비스 기획자 / PM입니다.",
    keywords:
      "장병헌, Jang Byeong Heon, AI/SW, Product Manager, PM, Problem Framing, Service Planning, Product Strategy, Decision Architecture, 제품 기획자, 서비스 기획자, 프로덕트 매니저",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    path: "/en/",
    title: "Jang Byeong Heon | AI/SW Problem-Framing Service Planner / PM",
    description:
      "Portfolio of Jang Byeong Heon, an AI/SW problem-framing service planner and PM who connects user experience with technical structures.",
    keywords:
      "Jang Byeong Heon, AI/SW, Product Manager, PM, Problem Framing, Service Planning, Product Strategy, Decision Architecture",
  },
};

export const getPageUrl = (path) => {
  if (path === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${path}`;
};
