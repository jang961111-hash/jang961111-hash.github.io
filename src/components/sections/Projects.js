import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  getLocalizedArchiveProjects,
  getLocalizedFeaturedProject,
  projectUiCopy,
} from "../../content/projects";
import SectionShell from "../layout/SectionShell";

const storyKeys = [
  { id: "problem", labelKey: "challenge" },
  { id: "insight", labelKey: "insight" },
  { id: "solution", labelKey: "solution" },
];

const featureLabels = {
  ko: {
    challenge: "다룬 문제",
    insight: "구조적 인사이트",
    solution: "경험 설계 + 시스템 구조",
    role: "담당 역할",
    highlights: "핵심 포인트",
    proof: "이 프로젝트가 증명하는 것",
  },
  en: {
    challenge: "Challenge",
    insight: "Structural insight",
    solution: "Experience + system design",
    role: "Role",
    highlights: "Highlights",
    proof: "What this project proves",
  },
};

const Projects = () => {
  const { i18n } = useTranslation();
  const lang = i18n.language === "en" ? "en" : "ko";
  const copy = projectUiCopy[lang];
  const labels = featureLabels[lang];
  const featuredProject = getLocalizedFeaturedProject(lang);
  const archiveProjects = getLocalizedArchiveProjects(lang);

  return (
    <SectionShell
      id="projects"
      index="02"
      title={copy.sectionTitle}
      subtitle={copy.sectionIntro}
    >
      <div className="project-wrapper structural-card">
        <div className="project-top">
          <div className="project-header">
            <span className="project-kicker">{copy.featuredKicker}</span>
            <h3 className="project-title">{featuredProject.title}</h3>
            <p className="project-summary">{featuredProject.summary}</p>
          </div>

          <div className="project-context-card">
            <span className="detail-label">{copy.featuredContext}</span>
            <p>{featuredProject.context}</p>
          </div>
        </div>

        <div className="project-content">
          <div className="project-metrics">
            {featuredProject.metrics.map((metric) => (
              <span key={metric} className="metric-badge">
                {metric}
              </span>
            ))}
          </div>

          <div className="project-story-grid">
            <div className="project-story-stack">
              {storyKeys.map(({ id, labelKey }) => (
                <article key={id} className="project-story-card">
                  <span className="detail-label">{labels[labelKey]}</span>
                  <p className="project-story-text">
                    {featuredProject.story?.[id]}
                  </p>
                </article>
              ))}
            </div>

            <div className="project-side-column">
              <div className="detail-item project-side-card">
                <span className="detail-label">{labels.role}</span>
                <p>{featuredProject.role}</p>
              </div>
              <div className="detail-item project-side-card">
                <span className="detail-label">{labels.highlights}</span>
                <ul className="project-proof-list">
                  {featuredProject.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-item project-side-card">
                <span className="detail-label">{labels.proof}</span>
                <ul className="project-proof-list">
                  {featuredProject.proof.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="project-actions">
            <Link to={featuredProject.path} className="cta-button secondary">
              {copy.readCaseStudy}
            </Link>
          </div>
        </div>
      </div>

      <div className="project-archive-header">
        <div>
          <p className="project-archive-kicker mono">{copy.archiveKicker}</p>
          <h3 className="project-archive-title">{copy.archiveTitle}</h3>
          <p className="project-archive-intro">{copy.archiveIntro}</p>
        </div>
      </div>

      <div className="project-archive-grid">
        {archiveProjects.map((project) => (
          <article
            key={project.slug}
            className="project-archive-card structural-card"
          >
            <div className="project-card-top">
              <span className={`project-status-badge ${project.status}`}>
                {project.statusLabel}
              </span>
              <span className="project-card-period">{project.period}</span>
            </div>

            <p className="project-card-category">{project.category}</p>
            <h4 className="project-card-title">{project.title}</h4>
            <p className="project-card-summary">{project.summary}</p>

            <div className="project-tag-list">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="project-card-footer">
              <div className="project-card-role">
                <span className="detail-label">{copy.role}</span>
                <p>{project.role}</p>
              </div>
              <Link to={project.path} className="project-inline-link">
                {copy.viewDetails}
              </Link>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
};

export default Projects;
