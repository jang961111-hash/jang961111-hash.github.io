import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  consumeQueuedScrollTarget,
  consumeRememberedProject,
  scrollToProjectCard,
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
    // Always consumed, so an explicit section target wins and a stale
    // project never drags a later visit down the page.
    const lastProject = consumeRememberedProject();
    let settleTimer = 0;
    let cancelSettle = null;

    const timer = window.setTimeout(() => {
      if (targetId) {
        scrollToSectionId(targetId);
        return;
      }

      if (lastProject && scrollToProjectCard(lastProject, { focus: true })) {
        // Lazy images above the card can shift the layout; settle once more.
        settleTimer = window.setTimeout(() => scrollToProjectCard(lastProject), 420);
        cancelSettle = () => window.clearTimeout(settleTimer);
        ["wheel", "touchstart", "keydown"].forEach((type) =>
          window.addEventListener(type, cancelSettle, { once: true, passive: true })
        );
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 120);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(settleTimer);

      if (cancelSettle) {
        ["wheel", "touchstart", "keydown"].forEach((type) =>
          window.removeEventListener(type, cancelSettle)
        );
      }
    };
  }, [location.pathname]);
};

export const useProjectScrollReset = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
};
