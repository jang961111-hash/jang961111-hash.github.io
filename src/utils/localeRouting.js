export const getLocaleFromPathname = (pathname = "/") =>
  pathname.startsWith("/en") ? "en" : "ko";

export const getLocaleRootPath = (lang = "ko") =>
  lang === "en" ? "/en" : "/";

export const getFallbackPath = (pathname = "/") =>
  getLocaleRootPath(getLocaleFromPathname(pathname));

export const getProjectPath = (lang = "ko", slug) =>
  lang === "en" ? `/en/projects/${slug}` : `/projects/${slug}`;

export const getLocalizedPath = (pathname = "/", targetLang = "ko") => {
  const projectMatch = pathname.match(/^(?:\/en)?\/projects\/([^/]+)\/?$/);

  if (projectMatch) {
    return getProjectPath(targetLang, projectMatch[1]);
  }

  return getLocaleRootPath(targetLang);
};
