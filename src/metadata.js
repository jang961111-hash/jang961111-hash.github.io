export const BASE_URL = "https://jang961111-hash.github.io";

export const pageMetadata = {
  ko: {
    htmlLang: "ko",
    locale: "ko_KR",
    path: "/",
    title: "장병헌 | Technical Product Manager",
    description:
      "장병헌의 포트폴리오. 구조적 사고를 바탕으로 제품 방향을 정의하고, 플랫폼 확장성과 AI 의사결정 지원을 설계하는 Technical Product Manager입니다.",
    keywords:
      "장병헌, Byeongheon Jang, Product Manager, PM, Product Strategy, Platform Architecture, Technical PM, Decision Architecture, 제품 기획자, 서비스 기획자, 프로덕트 매니저",
  },
  en: {
    htmlLang: "en",
    locale: "en_US",
    path: "/en/",
    title: "Byeongheon Jang | Technical Product Manager",
    description:
      "Portfolio of Byeongheon Jang, a technical product manager focused on product direction, scalable platform systems, and AI-aware decision support.",
    keywords:
      "Byeongheon Jang, Product Manager, PM, Product Strategy, Platform Architecture, Technical PM, Decision Architecture",
  },
};

export const getPageUrl = (path) => {
  if (path === "/") {
    return `${BASE_URL}/`;
  }

  return `${BASE_URL}${path}`;
};
