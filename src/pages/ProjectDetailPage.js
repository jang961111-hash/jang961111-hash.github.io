import React from "react";
import { Link } from "react-router-dom";
import { projectUiCopy } from "../content/projects";
import { queueScrollTarget } from "../utils/scrollTarget";
import "./ProjectDetailPage.css";

const linkLabelMap = {
  github: "github",
  demo: "demo",
  docs: "docs",
};

const ProjectDetailPage = ({ project, lang }) => {
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;
  const linkEntries = Object.entries(project.links ?? {}).filter(
    ([, href]) => Boolean(href)
  );

  return (
    <section className="project-detail-section">
      <div className="project-detail-shell">
        <Link
          to={project.homePath}
          className="project-back-link"
          onClick={() => queueScrollTarget("projects")}
        >
          {copy.backToProjects}
        </Link>

        <div className="project-detail-hero structural-card">
          <div className="project-detail-header">
            <div className="project-detail-copy">
              <p className="project-detail-kicker mono">{project.category}</p>
              <div className="project-detail-meta-line">
                <span className={`project-status-badge ${project.status}`}>
                  {project.statusLabel}
                </span>
                <span className="project-detail-period">{project.period}</span>
              </div>
              <h1 className="project-detail-title">{project.title}</h1>
              <p className="project-detail-summary">{project.summary}</p>
            </div>

            <div className="project-detail-side">
              <div className="detail-item">
                <span className="detail-label">{copy.team}</span>
                <p>{project.team}</p>
              </div>
              <div className="detail-item">
                <span className="detail-label">{copy.role}</span>
                <p>{project.role}</p>
              </div>
            </div>
          </div>

          <div className="project-detail-grid">
            <div className="detail-item">
              <span className="detail-label">{copy.themes}</span>
              <div className="project-tag-list">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="detail-item">
              <span className="detail-label">{copy.links}</span>
              {linkEntries.length > 0 ? (
                <div className="project-detail-links">
                  {linkEntries.map(([key, href]) => (
                    <a
                      key={key}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-inline-link"
                    >
                      {copy[linkLabelMap[key]]}
                    </a>
                  ))}
                </div>
              ) : (
                <p>{copy.linksPending}</p>
              )}
            </div>
          </div>
        </div>

        <div className="project-detail-content-grid">
          <div className="project-detail-main">
            <article className="structural-card project-detail-card">
              <span className="detail-label">{copy.highlights}</span>
              <ul className="project-proof-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            {project.sections.map((section) => (
              <article
                key={section.id}
                className="structural-card project-detail-card"
              >
                <span className="detail-label">{section.title}</span>
                <p className="project-detail-body">{section.body}</p>
              </article>
            ))}
          </div>

          <aside className="project-detail-aside">
            <article className="structural-card project-detail-card">
              <span className="detail-label">{copy.artifacts}</span>
              {project.artifacts.length > 0 ? (
                <ul className="project-proof-list">
                  {project.artifacts.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="project-detail-body">{copy.artifactEmpty}</p>
              )}
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
