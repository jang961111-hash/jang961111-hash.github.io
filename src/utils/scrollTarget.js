const SCROLL_TARGET_STORAGE_KEY = "portfolio-scroll-target";

// sessionStorage can throw (blocked site data, quota). Scroll memory is a
// nicety, so every access fails quietly instead of breaking the page.
const safeStorage = {
  get: (key) => {
    try {
      return window.sessionStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  set: (key, value) => {
    try {
      window.sessionStorage.setItem(key, value);
    } catch (error) {
      // ignore
    }
  },
  remove: (key) => {
    try {
      window.sessionStorage.removeItem(key);
    } catch (error) {
      // ignore
    }
  },
};

export const queueScrollTarget = (targetId) => {
  if (typeof window === "undefined") {
    return;
  }

  safeStorage.set(SCROLL_TARGET_STORAGE_KEY, targetId);
};

export const consumeQueuedScrollTarget = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const targetId = safeStorage.get(SCROLL_TARGET_STORAGE_KEY);

  if (!targetId) {
    return null;
  }

  safeStorage.remove(SCROLL_TARGET_STORAGE_KEY);

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

const LAST_PROJECT_STORAGE_KEY = "portfolio-last-project";

export const getProjectCardId = (slug) => `card-${slug}`;

// The detail page records which project is open so the home page can put
// the reader back on that card instead of at the top of the list.
export const rememberProject = (slug) => {
  if (typeof window === "undefined" || !slug) {
    return;
  }

  safeStorage.set(LAST_PROJECT_STORAGE_KEY, slug);
};

// Read without clearing, for components that render before the scroll effect.
export const peekRememberedProject = () =>
  typeof window === "undefined" ? null : safeStorage.get(LAST_PROJECT_STORAGE_KEY);

const OPEN_GROUPS_STORAGE_KEY = "portfolio-open-groups";

// Which project groups the reader has expanded, kept for the browser session.
export const readOpenGroups = () => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const parsed = JSON.parse(safeStorage.get(OPEN_GROUPS_STORAGE_KEY) ?? "[]");

    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
};

export const writeOpenGroups = (groupIds) => {
  if (typeof window === "undefined") {
    return;
  }

  safeStorage.set(OPEN_GROUPS_STORAGE_KEY, JSON.stringify(groupIds));
};

export const consumeRememberedProject = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const slug = safeStorage.get(LAST_PROJECT_STORAGE_KEY);

  safeStorage.remove(LAST_PROJECT_STORAGE_KEY);

  return slug;
};

export const scrollToProjectCard = (slug, { focus = false } = {}) => {
  if (typeof window === "undefined") {
    return false;
  }

  const card = document.getElementById(getProjectCardId(slug));

  if (!card) {
    return false;
  }

  const rect = card.getBoundingClientRect();
  const navHeight = 92;
  const room = window.innerHeight - navHeight;
  // Center the card when it fits, otherwise pin its top under the nav bar.
  const offset = rect.height < room ? (room - rect.height) / 2 : 12;

  window.scrollTo({
    top: Math.max(0, rect.top + window.pageYOffset - navHeight - offset),
    behavior: "auto",
  });

  if (focus) {
    const link = card.querySelector("a");

    if (link) {
      link.focus({ preventScroll: true });
    }
  }

  return true;
};
