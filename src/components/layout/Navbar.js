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
import { navSections } from "../../config/sections";
import "./Navbar.css";

const navItems = navSections;
const navSectionIds = navItems.map(({ id }) => id);

const DESKTOP_BREAKPOINT = 1120;

const Navbar = ({ theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const progressBarRef = useRef(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = getLocaleFromPathname(location.pathname);
  const isKorean = currentLang === "ko";
  const isHomeRoute = isLocaleRootPath(location.pathname);
  const resume = getResumeAsset(currentLang);
  const nextThemeLabel =
    theme === "dark" ? t("nav.themeLight") : t("nav.themeDark");
  const nextThemeAriaLabel =
    theme === "dark"
      ? t("nav.themeToLightAria")
      : t("nav.themeToDarkAria");

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevOpen) => !prevOpen);
  };

  const switchLanguage = (lang, event) => {
    event.preventDefault();

    if (lang !== currentLang) {
      if (isHomeRoute) {
        queueScrollTarget(activeSection);
      }

      navigate(getLocalizedPath(location.pathname, lang));
    }

    closeMobileMenu();
  };

  const scrollToSection = (event, targetId) => {
    event.preventDefault();
    closeMobileMenu();

    if (!isHomeRoute) {
      queueScrollTarget(targetId);
      navigate(getLocaleRootPath(currentLang));
      return;
    }

    scrollToSectionId(targetId);
  };

  useEffect(() => {
    // One rAF per frame: the progress bar is written straight to the DOM and
    // React state changes only when the scrolled threshold is crossed.
    let frameId = 0;
    let wasScrolled = null;

    const update = () => {
      frameId = 0;
      const scrollY = window.scrollY;
      const nextScrolled = scrollY > 24;

      if (nextScrolled !== wasScrolled) {
        wasScrolled = nextScrolled;
        setIsScrolled(nextScrolled);
      }

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const ratio = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;

      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    const handleScroll = () => {
      if (!frameId) {
        frameId = window.requestAnimationFrame(update);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, []);

  useEffect(() => {
    if (!isHomeRoute && location.pathname.includes("/projects/")) {
      setActiveSection("projects");
      return undefined;
    }

    const sections = ["hero", ...navSectionIds];
    const observers = [];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);

      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.35, rootMargin: "-88px 0px -35% 0px" }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [isHomeRoute, location.pathname]);

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= DESKTOP_BREAKPOINT && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeMobileMenu();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const renderUtilityCluster = (isDrawer = false) => (
    <div className={`nav-utilities ${isDrawer ? "drawer" : "desktop"}`}>
      <div className="lang-switcher" role="group" aria-label="Language switcher">
        <button
          type="button"
          className={`lang-option ${isKorean ? "active" : ""}`}
          onClick={(event) => switchLanguage("ko", event)}
          aria-label={t("nav.languageKoreanAria")}
        >
          KR
        </button>
        <span className="lang-divider">|</span>
        <button
          type="button"
          className={`lang-option ${!isKorean ? "active" : ""}`}
          onClick={(event) => switchLanguage("en", event)}
          aria-label={t("nav.languageEnglishAria")}
        >
          EN
        </button>
      </div>

      <div className="nav-action-group">
        <button
          type="button"
          className="nav-action-btn"
          onClick={() => {
            onToggleTheme();
            closeMobileMenu();
          }}
          aria-label={nextThemeAriaLabel}
          title={nextThemeAriaLabel}
        >
          {nextThemeLabel}
        </button>
        <a
          href={resume.href}
          className="nav-action-btn nav-action-btn-resume"
          target="_blank"
          rel="noopener noreferrer"
          download={resume.downloadName}
          aria-label={t("hero.downloadResumeAria")}
        >
          {t("hero.downloadResume")}
        </a>
      </div>
    </div>
  );

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <a
            href="#hero"
            className="nav-brand"
            onClick={(event) => scrollToSection(event, "hero")}
          >
            <span className="brand-name">{t("hero.name")}</span>
            <span className="brand-role">{t("hero.title")}</span>
          </a>

          <div className="nav-desktop-shell">
            <ul className="nav-links">
              {navItems.map(({ id, labelKey }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? "active" : ""}
                    onClick={(event) => scrollToSection(event, id)}
                  >
                    {t(labelKey)}
                  </a>
                </li>
              ))}
            </ul>

            {renderUtilityCluster()}
          </div>

          <button
            type="button"
            className={`mobile-menu-btn ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label={
              isMobileMenuOpen
                ? t("nav.menuCloseAria")
                : t("nav.menuOpenAria")
            }
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className="scroll-progress-container">
          <div ref={progressBarRef} className="scroll-progress-bar"></div>
        </div>
      </nav>

      <button
        type="button"
        className={`nav-backdrop ${isMobileMenuOpen ? "open" : ""}`}
        onClick={closeMobileMenu}
        aria-label={t("nav.menuCloseAria")}
        tabIndex={isMobileMenuOpen ? 0 : -1}
      />

      <aside
        id="mobile-navigation"
        className={`nav-drawer ${isMobileMenuOpen ? "open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="nav-drawer-inner">
          <div className="nav-drawer-head">
            <div>
              <p className="nav-drawer-kicker mono">{t("hero.portfolioLabel")}</p>
              <p className="nav-drawer-name">{t("hero.name")}</p>
            </div>
            <button
              type="button"
              className="nav-drawer-close"
              onClick={closeMobileMenu}
              aria-label={t("nav.menuCloseAria")}
            >
              <span></span>
              <span></span>
            </button>
          </div>

          <ul className="nav-drawer-links">
            {navItems.map(({ id, labelKey }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={(event) => scrollToSection(event, id)}
                >
                  {t(labelKey)}
                </a>
              </li>
            ))}
          </ul>

          {renderUtilityCluster(true)}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
