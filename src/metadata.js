export const BASE_URL = "https://jang961111-hash.github.io";

export const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    path: "/",
    title: "장병헌 | AI 서비스 개발자 포트폴리오",
    description:
      "AI 코딩 에이전트로 만들고 재현 테스트·독립 리뷰·전후 실측으로 검증하는 AI 서비스 개발자 장병헌의 포트폴리오. Spring Boot 동시성 수정, LLM 자가수정 검증 실험, 에이전트 결제 게이트웨이를 측정 조건과 함께 담았습니다.",
    keywords:
      "장병헌, Jang Byeong Heon, AI 서비스 개발자, AI Service Developer, LLM, AI 코딩 에이전트, Spring Boot, Next.js, React, 동시성, 테스트, SSAFY, SKALA",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    path: "/en/",
    title: "Jang Byeong Heon | AI Service Developer Portfolio",
    description:
      "Portfolio of Jang Byeong Heon, an AI service developer who builds with AI coding agents and verifies with reproduction tests, independent review, and before/after measurements — Spring Boot concurrency fixes, an LLM self-repair experiment, and an agent payment gateway, with measurement conditions.",
    keywords:
      "Jang Byeong Heon, AI Service Developer, LLM, AI Coding Agent, Spring Boot, Next.js, React, Concurrency, Testing, SSAFY, SKALA",
  },
};

export const getPageUrl = (path) => {
  if (path === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${path}`;
};
