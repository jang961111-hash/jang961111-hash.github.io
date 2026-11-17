import { useEffect, useState } from "react";
import { updateMetaTag } from "../utils/dom";

const THEME_STORAGE_KEY = "portfolio-theme";

const getInitialTheme = () => {
  // Dark is the default look, whatever the system preference says.
  if (typeof window === "undefined") {
    return "dark";
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }
  } catch {
    // Storage can be blocked; fall back to the default.
  }

  return "dark";
};

const useTheme = () => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore blocked storage; the theme still applies for this visit.
    }

    updateMetaTag(
      'meta[name="theme-color"]',
      theme === "dark" ? "#000000" : "#f1eee6"
    );
    updateMetaTag(
      'meta[name="color-scheme"]',
      theme === "dark" ? "dark" : "light"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};

export default useTheme;
