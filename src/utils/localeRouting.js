const ENGLISH_PATH_PATTERN = /^\/en(?:\/|$)/;
const PROJECT_PATH_PATTERN = /^(?:\/en)?\/projects\/([^/]+)$/;

export const normalizePathname = (pathname = "/") => {
  if (!pathname) {
    return "/";
  }

  if (pathname === "/") {
    return pathname;
  }

  return pathname.replace(/\/+$/, "") || "/";
};

export const getLocaleFromPathname = (pathname = "/") =>
  ENGLISH_PATH_PATTERN.test(normalizePathname(pathname)) ? "en" : "ko";

export const getLocaleRootPath = (lang = "ko") =>
  lang === "en" ? "/en/" : "/";

export const isLocaleRootPath = (pathname = "/") => {
  const normalizedPathname = normalizePathname(pathname);

  return normalizedPathname === "/" || normalizedPathname === "/en";
};

export const getFallbackPath = (pathname = "/") =>
  getLocaleRootPath(getLocaleFromPathname(pathname));

export const getProjectPath = (lang = "ko", slug) =>
  lang === "en" ? `/en/projects/${slug}/` : `/projects/${slug}/`;

export const getLocalizedPath = (pathname = "/", targetLang = "ko") => {
  const projectMatch = normalizePathname(pathname).match(PROJECT_PATH_PATTERN);

  if (projectMatch) {
    return getProjectPath(targetLang, projectMatch[1]);
  }

  return getLocaleRootPath(targetLang);
};
