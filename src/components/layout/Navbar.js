import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getLocaleFromPathname,
  getLocaleRootPath,
  getLocalizedPath,
  isLocaleRootPath,
} from "../../utils/localeRouting";
import { queueScrollTarget, scrollToSectionId } from "../../utils/scrollTarget";
import { getResumeAsset } from "../../utils/resumeAssets";
import { getNavTabId, homeSections } from "../../config/sections";
import "./Navbar.css";

const navItems = homeSections.filter((section) => section.nav !== false);
// Every home section drives the terminal line, including ones without a tab.
const watchedSectionIds = ["hero", ...homeSections.map(({ id }) => id)];

const DRAWER_BREAKPOINT = 1120;

const getProjectSlug = (pathname) => {
  const match = pathname.match(/\/projects\/([^/]+)/);

  return match ? match[1] : "";
};

const SunIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path
      d="M12 2.5v2.2M12 19.3v2.2M4.6 4.6l1.6 1.6M17.8 17.8l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.6 19.4l1.6-1.6M17.8 6.2l1.6-1.6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      d="M20 14.6A8.2 8.2 0 0 1 9.4 4a8.2 8.2 0 1 0 10.6 10.6Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const scrolledRef = useRef(false);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = getLocaleFromPathname(location.pathname);
  const isKorean = currentLang === "ko";
  const isHomeRoute = isLocaleRootPath(location.pathname);
  const projectSlug = getProjectSlug(location.pathname);
  const resume = getResumeAsset(currentLang);
  const themeAriaLabel =
    theme === "dark" ? t("nav.themeToLightAria") : t("nav.themeToDarkAria");
  const terminalText = isHomeRoute
    ? t(`terminal.${activeSection}`, { defaultValue: t("terminal.hero") })
    : t("terminal.detail", { name: projectSlug });

  const activeTab = getNavTabId(activeSection);

  const closeMenu = () => setIsMenuOpen(false);

  const switchLanguage = (lang, event) => {
    event.preventDefault();

    if (lang !== currentLang) {
      if (isHomeRoute) {
        queueScrollTarget(activeSection);
      }

      navigate(getLocalizedPath(location.pathname, lang));
    }

    closeMenu();
  };

  const scrollToSection = (event, targetId) => {
    event.preventDefault();
    closeMenu();

    if (!isHomeRoute) {
      queueScrollTarget(targetId);
      navigate(getLocaleRootPath(currentLang));
      return;
    }

    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    scrollToSectionId(targetId);
  };

  // Scroll: one rAF per frame at most, and setState only when the
  // 24px threshold is crossed.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const next = window.scrollY > 24;

      if (next !== scrolledRef.current) {
        scrolledRef.current = next;
        setIsScrolled(next);
      }
    };

    const handleScroll = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) {
        window.cancelAnimationFrame(frame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHomeRoute || typeof IntersectionObserver === "undefined") {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    watchedSectionIds.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isHomeRoute, location.pathname]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= DRAWER_BREAKPOINT) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const tabLinks = (className) =>
    navItems.map(({ id, labelKey, navKey }) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className={`${className} ${isHomeRoute && activeTab === id ? "is-active" : ""}`}
          aria-current={isHomeRoute && activeTab === id ? "location" : undefined}
          onClick={(event) => scrollToSection(event, id)}
        >
          {t(navKey ?? labelKey)}
        </a>
      </li>
    ));

  const langSwitch = (
    <div className="nav-lang" role="group" aria-label="Language">
      <button
        type="button"
        className={`nav-lang-btn mono ${isKorean ? "is-active" : ""}`}
        onClick={(event) => switchLanguage("ko", event)}
        aria-label={t("nav.languageKoreanAria")}
        aria-pressed={isKorean}
      >
        KR
      </button>
      <button
        type="button"
        className={`nav-lang-btn mono ${!isKorean ? "is-active" : ""}`}
        onClick={(event) => switchLanguage("en", event)}
        aria-label={t("nav.languageEnglishAria")}
        aria-pressed={!isKorean}
      >
        EN
      </button>
    </div>
  );

  const pdfLink = (className) => (
    <a
      href={resume.href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      download={resume.downloadName}
      aria-label={t("hero.downloadResumeAria")}
    >
      {t("navExtra.pdf")}
    </a>
  );

  const terminal = (className) => (
    <p className={`nav-terminal mono ${className}`} aria-hidden="true">
      <span className="nav-terminal-dot" />
      <span className="nav-terminal-prompt">jang@portfolio ~ $</span>
      <span className="nav-terminal-text" key={terminalText}>
        {terminalText}
      </span>
      <span className="nav-terminal-cursor" />
    </p>
  );

  return (
    <>
      <header className={`site-nav ${isScrolled ? "is-scrolled" : ""}`}>
        <nav className="nav-bar" aria-label="Primary">
          <a
            href="#hero"
            className="nav-brand"
            onClick={(event) => scrollToSection(event, "hero")}
            aria-label={t("navExtra.homeAria")}
          >
            <span className="nav-brand-name">{t("hero.name")}</span>
            <span className="nav-brand-dot" aria-hidden="true" />
          </a>

          <ul className="nav-tabs">{tabLinks("nav-tab")}</ul>

          {terminal("nav-terminal-bar")}

          <div className="nav-tools">
            <div className="nav-tools-wide">{langSwitch}</div>
            <button
              type="button"
              className="nav-icon-btn"
              onClick={onToggleTheme}
              aria-label={themeAriaLabel}
              title={themeAriaLabel}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
            <div className="nav-tools-wide">{pdfLink("nav-pdf mono")}</div>
            <button
              type="button"
              className={`nav-icon-btn nav-menu-btn ${isMenuOpen ? "is-open" : ""}`}
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? t("nav.menuCloseAria") : t("nav.menuOpenAria")}
              aria-controls="nav-drawer"
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      <button
        type="button"
        className={`nav-scrim ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-label={t("nav.menuCloseAria")}
        tabIndex={-1}
      />

      <div
        id="nav-drawer"
        className={`nav-drawer ${isMenuOpen ? "is-open" : ""}`}
        inert={!isMenuOpen}
        aria-hidden={!isMenuOpen}
      >
        {terminal("nav-terminal-drawer")}
        <ul className="nav-drawer-links">{tabLinks("nav-drawer-link")}</ul>
        <div className="nav-drawer-tools">
          {langSwitch}
          {pdfLink("btn mono")}
        </div>
      </div>
    </>
  );
};

export default Navbar;
