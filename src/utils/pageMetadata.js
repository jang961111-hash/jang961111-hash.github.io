import { getPageUrl, pageMetadata } from "../metadata";
import { getProjectPath } from "./localeRouting";

const updateMetaTag = (selector, content) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};

const updateLinkTag = (selector, attributes, href) => {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
};

export const applyPageMetadata = (metadata) => {
  const currentUrl = getPageUrl(metadata.path);

  document.documentElement.lang = metadata.htmlLang;
  document.title = metadata.title;

  updateMetaTag('meta[name="description"]', metadata.description);
  updateMetaTag('meta[property="og:title"]', metadata.title);
  updateMetaTag('meta[property="og:description"]', metadata.description);
  updateMetaTag('meta[property="og:locale"]', metadata.locale);
  updateMetaTag('meta[property="og:url"]', currentUrl);
  updateMetaTag('meta[name="twitter:title"]', metadata.title);
  updateMetaTag('meta[name="twitter:description"]', metadata.description);

  updateLinkTag("link[rel=\"canonical\"]", { rel: "canonical" }, currentUrl);
  updateLinkTag(
    'link[rel="alternate"][hreflang="ko"]',
    { rel: "alternate", hreflang: "ko" },
    getPageUrl(pageMetadata.ko.path)
  );
  updateLinkTag(
    'link[rel="alternate"][hreflang="en"]',
    { rel: "alternate", hreflang: "en" },
    getPageUrl(pageMetadata.en.path)
  );
  updateLinkTag(
    'link[rel="alternate"][hreflang="x-default"]',
    { rel: "alternate", hreflang: "x-default" },
    getPageUrl(pageMetadata.ko.path)
  );
};

export const buildProjectMetadata = (lang, project) => {
  const baseMetadata = pageMetadata[lang] ?? pageMetadata.ko;

  return {
    htmlLang: baseMetadata.htmlLang,
    locale: baseMetadata.locale,
    path: getProjectPath(lang, project.slug),
    title:
      lang === "en"
        ? `${project.title} | Byeongheon Jang`
        : `${project.title} | Portfolio`,
    description: project.summary,
  };
};
