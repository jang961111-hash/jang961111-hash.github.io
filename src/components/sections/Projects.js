import React from "react";
import { Link } from "react-router-dom";
import {
  getLocalizedCoreProjects,
  getLocalizedSupportingProjects,
  projectUiCopy,
} from "../../content/projects";
import SectionShell from "../layout/SectionShell";
import useLang from "../../hooks/useLang";

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
  const lang = useLang();
  const copy = projectUiCopy[lang];
  const labels = featureLabels[lang];
  const coreProjects = getLocalizedCoreProjects(lang);
  const supportingProjects = getLocalizedSupportingProjects(lang);

  return (
    <SectionShell
      id="projects"
      index="02"
      title={copy.sectionTitle}
      subtitle={copy.sectionIntro}
    >
      <div className="project-archive-header project-core-header">
        <div>
          <p className="project-archive-kicker mono">{copy.coreKicker}</p>
          <h3 className="project-archive-title">{copy.coreTitle}</h3>
          <p className="project-archive-intro">{copy.coreIntro}</p>
        </div>
      </div>

      <div className="project-core-grid">
        {coreProjects.map((project) => (
          <article
            key={project.slug}
            className="project-core-card structural-card"
          >
            <div className="project-card-top">
              <span className={`project-status-badge ${project.status}`}>
                {project.statusLabel}
              </span>
              <span className="project-card-period">{project.period}</span>
            </div>

            <p className="project-card-category">{project.category}</p>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-summary">{project.summary}</p>

            <div className="project-core-block">
              <span className="detail-label">{copy.problemDefinition}</span>
              <p>{project.story?.problem ?? project.context}</p>
            </div>

            <div className="project-core-block">
              <span className="detail-label">{labels.role}</span>
              <p>{project.role}</p>
            </div>

            <div className="project-core-block">
              <span className="detail-label">{copy.coreContribution}</span>
              <ul className="project-proof-list">
                {project.highlights.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="project-core-block">
              <span className="detail-label">{copy.techStack}</span>
              <div className="project-tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-core-block">
              <span className="detail-label">{copy.resultLearning}</span>
              <p>{project.proof[0] ?? project.caseStudy?.summary}</p>
            </div>

            <Link to={project.path} className="project-inline-link">
              {copy.viewDetails}
            </Link>
          </article>
        ))}
      </div>

      <div className="project-archive-header">
        <div>
          <p className="project-archive-kicker mono">
            {copy.supportingKicker}
          </p>
          <h3 className="project-archive-title">{copy.supportingTitle}</h3>
          <p className="project-archive-intro">{copy.supportingIntro}</p>
        </div>
      </div>

      <div className="project-archive-grid">
        {supportingProjects.map((project) => (
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
