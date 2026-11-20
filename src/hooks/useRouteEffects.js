import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  consumeQueuedScrollTarget,
  consumeRememberedProject,
  SECTION_NAV_OFFSET,
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

// Any of these means the reader has taken over scrolling (pointerdown covers
// dragging the scrollbar), so pending re-aims stop.
const SETTLE_CANCEL_EVENTS = ["wheel", "touchstart", "keydown", "pointerdown"];

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

    // Lazy images above the target can grow the page after the first scroll,
    // leaving the reader one section short. Re-aim a few times until the
    // target sits under the nav bar, and stop as soon as the reader scrolls.
    const settle = (isOnTarget, reaim, delays) => {
      let index = 0;
      const next = () => {
        if (index >= delays.length) {
          cancelSettle();
          return;
        }
        settleTimer = window.setTimeout(() => {
          if (!isOnTarget()) {
            reaim();
          }
          index += 1;
          next();
        }, delays[index]);
      };
      cancelSettle = () => {
        window.clearTimeout(settleTimer);
        SETTLE_CANCEL_EVENTS.forEach((type) =>
          window.removeEventListener(type, cancelSettle)
        );
      };
      SETTLE_CANCEL_EVENTS.forEach((type) =>
        window.addEventListener(type, cancelSettle, { passive: true })
      );
      next();
    };

    const timer = window.setTimeout(() => {
      if (targetId) {
        if (scrollToSectionId(targetId)) {
          let lastY = window.pageYOffset;
          settle(
            () => {
              const element = document.getElementById(targetId);
              if (!element) {
                return true;
              }
              // A smooth scroll still in flight will land on its own; let it.
              const stillMoving = Math.abs(window.pageYOffset - lastY) > 1;
              lastY = window.pageYOffset;
              if (stillMoving) {
                return true;
              }
              const top = element.getBoundingClientRect().top;
              const atPageEnd =
                window.innerHeight + window.pageYOffset >=
                document.documentElement.scrollHeight - 2;
              return Math.abs(top - SECTION_NAV_OFFSET) <= 24 || atPageEnd;
            },
            () => {
              scrollToSectionId(targetId);
              lastY = window.pageYOffset;
            },
            // The first check only records where the smooth scroll stopped.
            [700, 700, 700, 900]
          );
        }
        return;
      }

      if (lastProject && scrollToProjectCard(lastProject, { focus: true })) {
        // Lazy images above the card can shift the layout; settle once more.
        settle(() => false, () => scrollToProjectCard(lastProject), [420]);
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 120);

    return () => {
      window.clearTimeout(timer);
      window.clearTimeout(settleTimer);

      if (cancelSettle) {
        cancelSettle();
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
