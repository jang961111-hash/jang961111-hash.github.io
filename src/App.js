import React, { useEffect, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ProductStrategy from "./components/ProductStrategy";
import TechnicalDepth from "./components/TechnicalDepth";
import AIStrategy from "./components/AIStrategy";
import ProblemSolving from "./components/ProblemSolving";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import { BASE_URL, pageMetadata } from "./metadata";
import { getLocalizedProject, getProjectBySlug } from "./content/projects";
import {
  getFallbackPath,
  getLocaleRootPath,
  getProjectPath,
} from "./utils/localeRouting";
import {
  consumeQueuedScrollTarget,
  scrollToSectionId,
} from "./utils/scrollTarget";

const THEME_STORAGE_KEY = "portfolio-theme";

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

const applyPageMetadata = (metadata) => {
  const currentUrl =
    metadata.path === "/" ? `${BASE_URL}/` : `${BASE_URL}${metadata.path}`;

  document.documentElement.lang = metadata.htmlLang;
  document.title = metadata.title;

  updateMetaTag('meta[name="description"]', metadata.description);
  updateMetaTag('meta[property="og:title"]', metadata.title);
  updateMetaTag('meta[property="og:description"]', metadata.description);
  updateMetaTag('meta[property="og:locale"]', metadata.locale);
  updateMetaTag('meta[property="og:url"]', currentUrl);
  updateMetaTag('meta[name="twitter:title"]', metadata.title);
  updateMetaTag('meta[name="twitter:description"]', metadata.description);

  updateLinkTag('link[rel="canonical"]', { rel: "canonical" }, currentUrl);
  updateLinkTag(
    'link[rel="alternate"][hreflang="ko"]',
    { rel: "alternate", hreflang: "ko" },
    `${BASE_URL}/`
  );
  updateLinkTag(
    'link[rel="alternate"][hreflang="en"]',
    { rel: "alternate", hreflang: "en" },
    `${BASE_URL}/en`
  );
  updateLinkTag(
    'link[rel="alternate"][hreflang="x-default"]',
    { rel: "alternate", hreflang: "x-default" },
    `${BASE_URL}/`
  );
};

const useLocaleLanguage = (lang) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);
};

const useHomeScrollRestore = () => {
  const location = useLocation();

  useEffect(() => {
    const queuedTarget = consumeQueuedScrollTarget();
    const hashTarget = window.location.hash
      ? window.location.hash.replace(/^#/, "")
      : "";
    const targetId = queuedTarget || hashTarget;

    const timer = window.setTimeout(() => {
      if (targetId) {
        scrollToSectionId(targetId);
        return;
      }

      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    }, 120);

    return () => window.clearTimeout(timer);
  }, [location.pathname]);
};

const useProjectScrollReset = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname]);
};

const buildProjectMetadata = (lang, project) => {
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

const Layout = ({ theme, onToggleTheme, onPrint, children }) => (
  <div className="layout">
    <Navbar theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint} />
    <main>{children}</main>
    <Contact />
    <ScrollToTop />
  </div>
);

const HomeContent = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <ProductStrategy />
    <TechnicalDepth />
    <AIStrategy />
    <ProblemSolving />
    <Experience />
  </>
);

const HomeRoute = ({ lang, theme, onToggleTheme, onPrint }) => {
  useLocaleLanguage(lang);
  useHomeScrollRestore();

  useEffect(() => {
    applyPageMetadata(pageMetadata[lang] ?? pageMetadata.ko);
  }, [lang]);

  return (
    <Layout theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint}>
      <HomeContent />
    </Layout>
  );
};

const ProjectRoute = ({ lang, theme, onToggleTheme, onPrint }) => {
  const { slug } = useParams();
  const rawProject = getProjectBySlug(slug);
  const project = rawProject ? getLocalizedProject(rawProject, lang) : null;

  useLocaleLanguage(lang);
  useProjectScrollReset();

  useEffect(() => {
    if (!project) {
      return;
    }

    applyPageMetadata(buildProjectMetadata(lang, project));
  }, [lang, project]);

  if (!project) {
    return <Navigate to={getLocaleRootPath(lang)} replace />;
  }

  return (
    <Layout theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint}>
      <ProjectDetailPage project={project} lang={lang} />
    </Layout>
  );
};

const FallbackRoute = () => {
  const location = useLocation();

  return <Navigate to={getFallbackPath(location.pathname)} replace />;
};

function App() {
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

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <HomeRoute
              lang="ko"
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onPrint={handlePrint}
            />
          }
        />
        <Route
          path="/en"
          element={
            <HomeRoute
              lang="en"
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onPrint={handlePrint}
            />
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <ProjectRoute
              lang="ko"
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onPrint={handlePrint}
            />
          }
        />
        <Route
          path="/en/projects/:slug"
          element={
            <ProjectRoute
              lang="en"
              theme={theme}
              onToggleTheme={handleToggleTheme}
              onPrint={handlePrint}
            />
          }
        />
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
    </div>
  );
}

export default App;
