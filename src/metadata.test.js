import { getPageUrl, pageMetadata } from "./metadata";

describe("portfolio metadata", () => {
  test("maps the Korean route to the site root", () => {
    expect(pageMetadata.ko.htmlLang).toBe("ko");
    expect(pageMetadata.ko.path).toBe("/");
    expect(getPageUrl(pageMetadata.ko.path)).toBe(
      "https://jang961111-hash.github.io/"
    );
  });

  test("maps the English route to /en with distinct metadata", () => {
    expect(pageMetadata.en.htmlLang).toBe("en");
    expect(pageMetadata.en.path).toBe("/en");
    expect(pageMetadata.en.title).not.toBe(pageMetadata.ko.title);
    expect(getPageUrl(pageMetadata.en.path)).toBe(
      "https://jang961111-hash.github.io/en"
    );
  });
});
