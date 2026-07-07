export const BASE_URL = "https://jang961111-hash.github.io";

export const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    path: "/",
    title: "장병헌 | AI 서비스 개발 · 기획 포트폴리오",
    description:
      "LLM·추천·벡터 검색을 실제 사용자 경험으로 구현해본 AI 서비스 개발자 장병헌의 포트폴리오. 문제 정의(기획)부터 React 구현까지 한 사이클을 완주합니다.",
    keywords:
      "장병헌, Jang Byeong Heon, AI 서비스 개발, LLM, Prompt Engineering, React, SSAFY, 서비스 기획, PM, AI Service Developer, Problem Framing",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    path: "/en/",
    title: "Jang Byeong Heon | AI Service Development · Planning Portfolio",
    description:
      "Portfolio of Jang Byeong Heon — an AI service builder who has shipped LLM, recommendation, and vector-search features as real user experiences, from problem framing to React implementation.",
    keywords:
      "Jang Byeong Heon, AI Service Development, LLM, Prompt Engineering, React, SSAFY, Service Planning, PM, Problem Framing",
  },
};

export const getPageUrl = (path) => {
  if (path === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${path}`;
};
