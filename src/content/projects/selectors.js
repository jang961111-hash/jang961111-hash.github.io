import { portfolioProjects } from "./data";
import { getLocalizedProject } from "./localize";

const coreProjectSlugs = ["dailylog", "ssafy-startup-track", "loggy"];

export const getOrderedProjects = () =>
  [...portfolioProjects].sort((left, right) => {
    if (!left.sortDate && !right.sortDate) {
      return 0;
    }

    if (!left.sortDate) {
      return 1;
    }

    if (!right.sortDate) {
      return -1;
    }

    return right.sortDate.localeCompare(left.sortDate);
  });

export const getProjectBySlug = (slug) =>
  portfolioProjects.find((project) => project.slug === slug) ?? null;

export const getCoreProjects = () =>
  coreProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter(Boolean);

export const getSupportingProjects = () => {
  const coreSlugSet = new Set(coreProjectSlugs);

  return getOrderedProjects().filter((project) => !coreSlugSet.has(project.slug));
};

export const getLocalizedCoreProjects = (lang = "ko") =>
  getCoreProjects().map((project) => getLocalizedProject(project, lang));

export const getLocalizedSupportingProjects = (lang = "ko") =>
  getSupportingProjects().map((project) => getLocalizedProject(project, lang));
