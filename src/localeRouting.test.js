import {
  getFallbackPath,
  getLocaleFromPathname,
  getLocalizedPath,
  getProjectPath,
  isLocaleRootPath,
} from "./utils/localeRouting";

describe("locale routing helpers", () => {
  test("builds locale-aware project paths", () => {
    expect(getProjectPath("ko", "loggy")).toBe("/projects/loggy/");
    expect(getProjectPath("en", "loggy")).toBe("/en/projects/loggy/");
  });

  test("maps project detail routes between Korean and English", () => {
    expect(getLocaleFromPathname("/en/projects/loggy")).toBe("en");
    expect(getLocalizedPath("/projects/loggy", "en")).toBe(
      "/en/projects/loggy/"
    );
    expect(getLocalizedPath("/en/projects/loggy", "ko")).toBe(
      "/projects/loggy/"
    );
  });

  test("keeps unmatched english routes inside the english root", () => {
    expect(getFallbackPath("/en/unknown")).toBe("/en/");
    expect(getFallbackPath("/unknown")).toBe("/");
  });

  test("treats only the /en path segment as English", () => {
    expect(getLocaleFromPathname("/en")).toBe("en");
    expect(getLocaleFromPathname("/en/")).toBe("en");
    expect(getLocaleFromPathname("/enigma")).toBe("ko");
    expect(isLocaleRootPath("/")).toBe(true);
    expect(isLocaleRootPath("/en/")).toBe(true);
    expect(isLocaleRootPath("/en/projects/loggy/")).toBe(false);
  });
});
