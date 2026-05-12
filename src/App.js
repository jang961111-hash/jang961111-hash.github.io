import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
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
import { pageMetadata } from "./metadata";
import { getLocalizedProject, getProjectBySlug } from "./content/projects";
import { getFallbackPath, getLocaleRootPath } from "./utils/localeRouting";
import {
  useHomeScrollRestore,
  useLocaleLanguage,
  useProjectScrollReset,
} from "./hooks/useRouteEffects";
import useTheme from "./hooks/useTheme";
import {
  applyPageMetadata,
  buildProjectMetadata,
} from "./utils/pageMetadata";

const localeRouteDefinitions = [
  { lang: "ko", homePath: "/", projectPath: "/projects/:slug" },
  { lang: "en", homePath: "/en", projectPath: "/en/projects/:slug" },
];

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
  const { theme, toggleTheme } = useTheme();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="App">
      <Routes>
        {localeRouteDefinitions.flatMap(({ lang, homePath, projectPath }) => [
          <Route
            key={`${lang}-home`}
            path={homePath}
            element={
              <HomeRoute
                lang={lang}
                theme={theme}
                onToggleTheme={toggleTheme}
                onPrint={handlePrint}
              />
            }
          />,
          <Route
            key={`${lang}-project`}
            path={projectPath}
            element={
              <ProjectRoute
                lang={lang}
                theme={theme}
                onToggleTheme={toggleTheme}
                onPrint={handlePrint}
              />
            }
          />,
        ])}
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
    </div>
  );
}

export default App;
