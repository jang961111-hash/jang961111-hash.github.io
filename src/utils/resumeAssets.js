import portfolioKo from "../assets/docs/portfolio_ko.pdf";
import portfolioEn from "../assets/docs/portfolio_en.pdf";

const RESUME_FILENAMES = {
  ko: "Jang-Byeong-Heon_Portfolio_KO.pdf",
  en: "Jang-Byeong-Heon_Portfolio_EN.pdf",
};

export const getResumeAsset = (lang) => {
  const isKorean = lang !== "en";

  return {
    href: isKorean ? portfolioKo : portfolioEn,
    downloadName: isKorean ? RESUME_FILENAMES.ko : RESUME_FILENAMES.en,
  };
};
