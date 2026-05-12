import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "portfolio-theme";

const updateMetaTag = (selector, content) => {
  const element = document.querySelector(selector);

  if (element) {
    element.setAttribute("content", content);
  }
};

const getInitialTheme = () => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return "light";
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);

    updateMetaTag(
      'meta[name="theme-color"]',
      theme === "dark" ? "#101418" : "#fcfaf6"
    );
    updateMetaTag(
      'meta[name="color-scheme"]',
      theme === "dark" ? "dark light" : "light dark"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
