import { useEffect, useState } from "react";
import { updateMetaTag } from "../utils/dom";

const THEME_STORAGE_KEY = "portfolio-theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

// A saved choice wins; without one the page follows the system setting.
const readStoredTheme = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);

    return savedTheme === "light" || savedTheme === "dark" ? savedTheme : null;
  } catch (error) {
    return null;
  }
};

const readSystemTheme = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return "light";
  }

  return window.matchMedia(DARK_QUERY).matches ? "dark" : "light";
};

const useTheme = () => {
  const [storedTheme, setStoredTheme] = useState(readStoredTheme);
  const [systemTheme, setSystemTheme] = useState(readSystemTheme);
  const theme = storedTheme ?? systemTheme;

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia(DARK_QUERY);
    const handleChange = (event) => {
      setSystemTheme(event.matches ? "dark" : "light");
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    if (storedTheme) {
      root.setAttribute("data-theme", storedTheme);
    } else {
      root.removeAttribute("data-theme");
    }

    updateMetaTag(
      'meta[name="theme-color"]',
      theme === "dark" ? "#0d0f13" : "#fcfcfd"
    );
  }, [storedTheme, theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    setStoredTheme(nextTheme);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (error) {
      // Storage can be blocked; the choice still applies for this visit.
    }
  };

  return { theme, toggleTheme };
};

export default useTheme;
