import { useEffect } from "react";

// One IntersectionObserver for the whole page. Blocks opt in with a
// `data-reveal` attribute; when a block enters the viewport it gets
// `data-revealed` and is unobserved, so each block animates once.
const REVEAL_SELECTOR = "[data-reveal]:not([data-revealed])";
const MIN_RATIO = 0.15;

let sharedObserver = null;

const markRevealed = (element) => {
  element.setAttribute("data-revealed", "");
};

const getSharedObserver = () => {
  if (sharedObserver) {
    return sharedObserver;
  }

  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
    return null;
  }

  sharedObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        // Tall blocks may never reach the ratio, so a quarter screen also counts.
        const visibleHeight = entry.intersectionRect?.height ?? 0;

        if (
          entry.intersectionRatio >= MIN_RATIO ||
          visibleHeight >= window.innerHeight * 0.25
        ) {
          markRevealed(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: [0, MIN_RATIO], rootMargin: "0px 0px -8% 0px" }
  );

  return sharedObserver;
};

const observePendingReveals = () => {
  if (typeof document === "undefined") {
    return;
  }

  const observer = getSharedObserver();

  document.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
    if (observer) {
      observer.observe(element);
    } else {
      markRevealed(element);
    }
  });
};

// Call once per page layout; it picks up every pending block after each render.
const useScrollReveal = () => {
  useEffect(() => {
    observePendingReveals();
  });
};

export default useScrollReveal;
