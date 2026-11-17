export const BASE_URL = "https://jang961111-hash.github.io";

export const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    path: "/",
    title: "장병헌 | AI 서비스 개발, 기획 포트폴리오",
    description:
      "AI를 서비스로 만드는 사람, 장병헌의 포트폴리오. 문제 정의, 평가 기준 설계, 검증까지 프로젝트 21개와 일하는 원칙을 담았습니다.",
    keywords:
      "장병헌, Jang Byeong Heon, AI 서비스 개발, LLM, Prompt Engineering, React, SSAFY, 서비스 기획, PM, AI Service Developer, Problem Framing",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    path: "/en/",
    title: "Jang Byeong Heon | AI Service Development and Planning Portfolio",
    description:
      "Portfolio of Jang Byeong Heon, who turns AI into services: 21 projects and the working principles behind them, from problem definition to evaluation design and verification.",
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
