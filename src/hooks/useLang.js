import { useTranslation } from "react-i18next";

const useLang = () => {
  const { i18n } = useTranslation();

  return i18n.language === "en" ? "en" : "ko";
};

export default useLang;
