import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ProjectDetailPage from "./ProjectDetailPage";
import { getLocalizedProject, getProjectBySlug } from "../content/projects";
import { useLocaleLanguage, useProjectScrollReset } from "../hooks/useRouteEffects";
import { buildProjectMetadata, applyPageMetadata } from "../utils/pageMetadata";
import { getLocaleRootPath } from "../utils/localeRouting";

const ProjectPage = ({ lang, theme, onToggleTheme, onPrint }) => {
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
    <AppLayout theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint}>
      <ProjectDetailPage project={project} lang={lang} />
    </AppLayout>
  );
};

export default ProjectPage;
