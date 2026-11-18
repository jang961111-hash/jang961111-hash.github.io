import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import ProjectDetailPage from "./ProjectDetailPage";
import {
  getCoreProjects,
  getLocalizedProject,
  getProjectBySlug,
  getSupportingProjects,
} from "../content/projects";
import { rememberProject } from "../utils/scrollTarget";
import { stripEmphasis } from "../utils/emphasis";
import { useLocaleLanguage, useProjectScrollReset } from "../hooks/useRouteEffects";
import { buildProjectMetadata, applyPageMetadata } from "../utils/pageMetadata";
import { getLocaleRootPath } from "../utils/localeRouting";

const ProjectPage = ({ lang, theme, onToggleTheme, onPrint }) => {
  const { slug } = useParams();
  const rawProject = getProjectBySlug(slug);
  const project = rawProject ? getLocalizedProject(rawProject, lang) : null;

  useLocaleLanguage(lang);
  useProjectScrollReset();

  const hasProject = Boolean(rawProject);

  useEffect(() => {
    if (hasProject) {
      rememberProject(slug);
    }
  }, [slug, hasProject]);

  // Same order as the home cards (01 to 21), so "next" matches what was seen.
  const ordered = [...getCoreProjects(), ...getSupportingProjects()];
  const position = ordered.findIndex((item) => item.slug === slug);
  const toPagerItem = (index) => {
    const item = ordered[index];

    if (!item) {
      return null;
    }

    const localized = getLocalizedProject(item, lang);

    return {
      path: localized.path,
      title: stripEmphasis(localized.title).split(" | ")[0],
      number: String(index + 1).padStart(2, "0"),
    };
  };
  const pager =
    position === -1
      ? null
      : { prev: toPagerItem(position - 1), next: toPagerItem(position + 1) };

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
      <ProjectDetailPage key={slug} project={project} lang={lang} pager={pager} />
    </AppLayout>
  );
};

export default ProjectPage;
