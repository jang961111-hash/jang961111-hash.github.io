import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  consumeQueuedScrollTarget,
  scrollToSectionId,
} from "../utils/scrollTarget";

export const useLocaleLanguage = (lang) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [i18n, lang]);
};

export const useHomeScrollRestore = () => {
  const location = useLocation();

  useEffect(() => {
    const queuedTarget = consumeQueuedScrollTarget();
    const hashTarget = window.location.hash
      ? window.location.hash.replace(/^#/, "")
      : "";
    const targetId = queuedTarget || hashTarget;

    const timer = window.setTimeout(() => {
      if (targetId) {
        scrollToSectionId(targetId);
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);
};

export const useProjectScrollReset = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
};
