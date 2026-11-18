import { portfolioProjects } from "./data";
import { getLocalizedProject } from "./localize";

const coreProjectSlugs = ["dailylog", "argus", "skt-prompt-ansimcall"];

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

// Course assignments are listed apart from services and hackathon entries.
const courseworkSlugs = new Set([
  "incident-agent-ablation",
  "skala-churn-modeling",
  "skala-lora-eval-audit",
  "skala-p-match",
  "skala-db-sql-lab",
  "sales-crm",
]);

// Entries with no image go to the end of their group.
const trailingSlugs = new Set(["jeonju-is-coding-challenge"]);

export const getSupportingGroups = () => {
  const coreSlugSet = new Set(coreProjectSlugs);
  const supporting = getOrderedProjects().filter(
    (project) => !coreSlugSet.has(project.slug)
  );
  const byTrailing = (list) => [
    ...list.filter((project) => !trailingSlugs.has(project.slug)),
    ...list.filter((project) => trailingSlugs.has(project.slug)),
  ];

  return [
    {
      id: "service",
      projects: byTrailing(
        supporting.filter((project) => !courseworkSlugs.has(project.slug))
      ),
    },
    {
      id: "coursework",
      projects: byTrailing(
        supporting.filter((project) => courseworkSlugs.has(project.slug))
      ),
    },
  ];
};

// Same order as the cards on the home page (used by the detail-page pager).
export const getSupportingProjects = () =>
  getSupportingGroups().flatMap((group) => group.projects);

export const getLocalizedCoreProjects = (lang = "ko") =>
  getCoreProjects().map((project) => getLocalizedProject(project, lang));

export const getLocalizedSupportingGroups = (lang = "ko") =>
  getSupportingGroups().map((group) => ({
    ...group,
    projects: group.projects.map((project) => getLocalizedProject(project, lang)),
  }));

export const getLocalizedSupportingProjects = (lang = "ko") =>
  getSupportingProjects().map((project) => getLocalizedProject(project, lang));
