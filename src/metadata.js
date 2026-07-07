export const BASE_URL = "https://jang961111-hash.github.io";

export const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    path: "/",
    title: "장병헌 | 서비스 기획 · 프론트엔드 포트폴리오",
    description:
      "장병헌의 포트폴리오. 철학 전공의 문제 구조화 사고와 SSAFY 1,725시간 AI/SW 교육을 바탕으로, 문제 정의부터 React 화면 구현까지 이어가는 서비스 기획자입니다.",
    keywords:
      "장병헌, Jang Byeong Heon, 서비스 기획, PM, 프론트엔드, React, SSAFY, AI 서비스 기획, Product Manager, Frontend Developer, Problem Framing",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    path: "/en/",
    title: "Jang Byeong Heon | Service Planning · Frontend Portfolio",
    description:
      "Portfolio of Jang Byeong Heon — a service planner who frames problems structurally and implements the answers in React, trained through 1,725 hours of AI/SW education at SSAFY.",
    keywords:
      "Jang Byeong Heon, Service Planning, PM, Frontend, React, SSAFY, AI Service Planning, Product Manager, Problem Framing",
  },
};

export const getPageUrl = (path) => {
  if (path === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${path}`;
};
