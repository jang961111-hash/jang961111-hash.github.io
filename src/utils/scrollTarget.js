const SCROLL_TARGET_STORAGE_KEY = "portfolio-scroll-target";

export const queueScrollTarget = (targetId) => {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(SCROLL_TARGET_STORAGE_KEY, targetId);
};

export const consumeQueuedScrollTarget = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const targetId = window.sessionStorage.getItem(SCROLL_TARGET_STORAGE_KEY);

  if (!targetId) {
    return null;
  }

  window.sessionStorage.removeItem(SCROLL_TARGET_STORAGE_KEY);

  return targetId;
};

export const scrollToSectionId = (targetId) => {
  if (typeof window === "undefined") {
    return false;
  }

  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    return false;
  }

  const navHeight = 92;
  const elementPosition = targetElement.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - navHeight;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });

  return true;
};
