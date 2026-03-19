import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getLocaleFromPathname,
  getLocaleRootPath,
  getLocalizedPath,
} from "../utils/localeRouting";
import { queueScrollTarget, scrollToSectionId } from "../utils/scrollTarget";
import "./Navbar.css";

const navSectionIds = [
  "about",
  "projects",
  "strategy",
  "depth",
  "ai",
  "framework",
  "experience",
  "contact",
];

const DESKTOP_BREAKPOINT = 1280;

const Navbar = ({ theme, onToggleTheme, onPrint }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const currentLang = getLocaleFromPathname(location.pathname);
  const isKorean = currentLang === "ko";
  const isHomeRoute = location.pathname === "/" || location.pathname === "/en";
  const nextThemeLabel =
    theme === "dark" ? t("nav.themeLight") : t("nav.themeDark");
  const nextThemeAriaLabel =
    theme === "dark"
      ? t("nav.themeToLightAria")
      : t("nav.themeToDarkAria");
  const navItems = [
    { id: "about", label: t("nav.identity") },
    { id: "projects", label: t("nav.projects") },
    { id: "strategy", label: t("nav.strategy") },
    { id: "depth", label: t("nav.depth") },
    { id: "ai", label: t("nav.ai") },
    { id: "framework", label: t("nav.framework") },
    { id: "experience", label: t("nav.experience") },
    { id: "contact", label: t("nav.contact") },
  ];

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
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
        <button
          type="button"
          className="nav-action-btn nav-action-btn-accent"
          onClick={() => {
            onPrint();
            closeMobileMenu();
          }}
          aria-label={t("nav.printAria")}
          title={t("nav.printAria")}
        >
          {t("nav.print")}
        </button>
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
              {navItems.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={activeSection === id ? "active" : ""}
                    onClick={(event) => scrollToSection(event, id)}
                  >
                    {label}
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
          <div
            className="scroll-progress-bar"
            style={{ width: `${scrollProgress}%` }}
          ></div>
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
            {navItems.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={(event) => scrollToSection(event, id)}
                >
                  {label}
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
