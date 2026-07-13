import { getProjectPath, getLocaleRootPath } from "../../utils/localeRouting";
import { projectUiCopy } from "./uiCopy";

const localizeValue = (value, lang) => {
  if (Array.isArray(value)) {
    return value.map((item) => localizeValue(item, lang));
  }

  if (typeof value === "string" || typeof value === "number" || value == null) {
    return value;
  }

  if (value[lang] || value.ko || value.en) {
    return value[lang] ?? value.ko ?? value.en ?? "";
  }

  if (Object.prototype.hasOwnProperty.call(value, "value") || value.label) {
    return [value.value, localizeValue(value.label, lang)]
      .filter(Boolean)
      .join(" ");
  }

  return value;
};

export const getLocalizedProject = (project, lang = "ko") => {
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;

  return {
    ...project,
    path: getProjectPath(lang, project.slug),
    homePath: getLocaleRootPath(lang),
    category: localizeValue(project.category, lang),
    title: localizeValue(project.title, lang),
    summary: localizeValue(project.summary, lang),
    context: localizeValue(project.context, lang),
    team: localizeValue(project.team, lang),
    role: localizeValue(project.role, lang),
    period: localizeValue(project.period, lang),
    heroImage: localizeValue(project.heroImage, lang),
    tags: localizeValue(project.tags, lang) ?? [],
    highlights: localizeValue(project.highlights, lang) ?? [],
    artifacts: localizeValue(project.artifacts, lang) ?? [],
    interviewQuestions: localizeValue(project.interviewQuestions, lang) ?? [],
    metrics: (Array.isArray(project.metrics)
      ? project.metrics
      : localizeValue(project.metrics, lang) ?? []
    ).map((m) => {
      if (typeof m === "string") return m;
      if (m.label && typeof m.label === "object") {
        return {
          ...m,
          label: localizeValue(m.label, lang),
        };
      }
      return m;
    }),
    proof: localizeValue(project.proof, lang) ?? [],
    caseStudy: project.caseStudy
      ? {
          title: localizeValue(project.caseStudy.title, lang),
          summary: localizeValue(project.caseStudy.summary, lang),
          content: localizeValue(project.caseStudy.content, lang),
        }
      : null,
    story: project.story
      ? {
          problem: localizeValue(project.story.problem, lang),
          insight: localizeValue(project.story.insight, lang),
          solution: localizeValue(project.story.solution, lang),
        }
      : null,
    sections: (project.sections ?? []).map((section) => ({
      ...section,
      title: localizeValue(section.title, lang),
      body: localizeValue(section.body, lang),
      image: localizeValue(section.image, lang),
    })),
    media: project.media
      ? {
          ...project.media,
          title: localizeValue(project.media.title, lang),
          videoLabel: localizeValue(project.media.videoLabel, lang),
          presentationLabel: localizeValue(project.media.presentationLabel, lang),
        }
      : null,
    screenshots: (project.screenshots ?? []).map((shot) => ({
      ...shot,
      alt: localizeValue(shot.alt, lang),
    })),
    seo: project.seo
      ? {
          title: localizeValue(project.seo.title, lang),
          description: localizeValue(project.seo.description, lang),
          keywords: project.seo.keywords,
        }
      : null,
    links: project.links ?? {},
    statusLabel: copy.statusLabels[project.status] ?? project.status,
  };
};
