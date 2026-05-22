import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import { getFallbackPath } from "./utils/localeRouting";
import useTheme from "./hooks/useTheme";

const localeRouteDefinitions = [
  { lang: "ko", homePath: "/", projectPath: "/projects/:slug" },
  { lang: "en", homePath: "/en", projectPath: "/en/projects/:slug" },
];

const FallbackRoute = () => {
  const location = useLocation();
  return <Navigate to={getFallbackPath(location.pathname)} replace />;
};

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="App">
      <Routes>
        {localeRouteDefinitions.flatMap(({ lang, homePath, projectPath }) => [
          <Route
            key={`${lang}-home`}
            path={homePath}
            element={
              <HomePage
                lang={lang}
                theme={theme}
                onToggleTheme={toggleTheme}
              />
            }
          />,
          <Route
            key={`${lang}-project`}
            path={projectPath}
            element={
              <ProjectPage
                lang={lang}
                theme={theme}
                onToggleTheme={toggleTheme}
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
