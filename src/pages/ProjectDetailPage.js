import React from "react";
import { Link } from "react-router-dom";
import { projectUiCopy } from "../content/projects";
import { queueScrollTarget } from "../utils/scrollTarget";
import DailyLogPipelineDiagram from "../components/diagrams/DailyLogPipelineDiagram";
import LoggyDecisionFlowDiagram from "../components/diagrams/LoggyDecisionFlowDiagram";
import "./ProjectDetailPage.css";

const diagramRegistry = {
  "dailylog-pipeline": DailyLogPipelineDiagram,
  "loggy-decision-flow": LoggyDecisionFlowDiagram,
};

const linkLabelMap = {
  github: "github",
  demo: "demo",
  docs: "docs",
};

const VisualPlaceholder = ({ label, icon = "🖼️" }) => (
  <div className="placeholder-box">
    <span className="placeholder-icon">{icon}</span>
    <p className="placeholder-text">{label}</p>
  </div>
);

const ProjectMedia = ({ media }) => (
  <article className="structural-card project-detail-card project-media-card">
    <span className="detail-label">{media.title}</span>
    {media.videoSrc && (
      <div className="project-video-frame">
        <video controls preload="metadata">
          <source src={media.videoSrc} type="video/mp4" />
        </video>
      </div>
    )}
    <div className="project-media-actions">
      {media.videoSrc && (
        <a href={media.videoSrc} className="project-inline-link">
          {media.videoLabel}
        </a>
      )}
      {media.presentationHref && (
        <a
          href={media.presentationHref}
          className="project-inline-link"
          download
        >
          {media.presentationLabel}
        </a>
      )}
    </div>
  </article>
);

const SubmissionSection = ({ label, children }) => (
  <article className="submission-detail-item">
    <span className="detail-label">{label}</span>
    {children}
  </article>
);

const SubmissionFormat = ({ project, copy }) => {
  if (!project.interviewQuestions?.length) {
    return null;
  }

  return (
    <article className="structural-card project-detail-card submission-detail-card">
      <span className="detail-label">{copy.submissionFormat}</span>
      <div className="submission-detail-grid">
        <SubmissionSection label={copy.overview}>
          <p>{project.summary}</p>
        </SubmissionSection>
        <SubmissionSection label={copy.techStack}>
          <div className="project-tag-list">
            {project.tags.map((tag) => (
              <span key={tag} className="project-tag">
                {tag}
              </span>
            ))}
          </div>
        </SubmissionSection>
        <SubmissionSection label={copy.myRole}>
          <p>{project.role}</p>
        </SubmissionSection>
        <SubmissionSection label={copy.problemDefinition}>
          <p>{project.story?.problem ?? project.context}</p>
        </SubmissionSection>
        <SubmissionSection label={copy.solutionProcess}>
          <p>{project.story?.solution ?? project.caseStudy?.summary}</p>
        </SubmissionSection>
        <SubmissionSection label={copy.coreContribution}>
          <ul className="project-proof-list">
            {project.highlights.slice(0, 3).map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </SubmissionSection>
        <SubmissionSection label={copy.resultLearning}>
          <p>{project.proof[0] ?? project.caseStudy?.summary}</p>
        </SubmissionSection>
        <SubmissionSection label={copy.interviewHooks}>
          <ul className="project-proof-list">
            {project.interviewQuestions.map((question) => (
              <li key={question}>{question}</li>
            ))}
          </ul>
        </SubmissionSection>
      </div>
    </article>
  );
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

          {project.heroImage && (
            <div className="project-detail-visual">
              {project.heroImage.startsWith("[") ? (
                <VisualPlaceholder label={project.heroImage} icon="🚀" />
              ) : (
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="section-image"
                />
              )}
            </div>
          )}
        </div>

        <SubmissionFormat project={project} copy={copy} />

        <div className="project-detail-content-grid">
          <div className="project-detail-main">
            {project.story && (
              <article className="structural-card project-detail-card story-card">
                <div className="project-story-grid detail-story-grid">
                  <div className="detail-story-item">
                    <span className="detail-label">{copy.challenge}</span>
                    <p className="project-detail-body">{project.story.problem}</p>
                  </div>
                  <div className="detail-story-item">
                    <span className="detail-label">{copy.insight}</span>
                    <p className="project-detail-body">{project.story.insight}</p>
                  </div>
                  <div className="detail-story-item">
                    <span className="detail-label">{copy.solution}</span>
                    <p className="project-detail-body">{project.story.solution}</p>
                  </div>
                </div>
              </article>
            )}

            {project.caseStudy && (
              <article className="structural-card project-detail-card case-study-card">
                <div className="case-study-header">
                  <span className="case-study-badge mono">
                    Decision Deep Dive
                  </span>
                  <h2 className="case-study-title">{project.caseStudy.title}</h2>
                  <p className="case-study-summary">
                    {project.caseStudy.summary}
                  </p>
                </div>
                <div className="case-study-content project-detail-body">
                  {project.caseStudy.content}
                </div>
              </article>
            )}

            {project.media && <ProjectMedia media={project.media} />}

            {project.screenshots?.length > 0 && (
              <article className="structural-card project-detail-card">
                <span className="detail-label">{copy.screens}</span>
                <div className="project-screenshot-grid">
                  {project.screenshots.map((shot) => (
                    <figure key={shot.src} className="project-screenshot">
                      <img src={shot.src} alt={shot.alt} loading="lazy" />
                      {shot.alt && <figcaption>{shot.alt}</figcaption>}
                    </figure>
                  ))}
                </div>
              </article>
            )}

            <article className="structural-card project-detail-card">
              <span className="detail-label">{copy.highlights}</span>
              <ul className="project-proof-list">
                {project.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            {project.sections.map((section) => {
              const Diagram = section.diagram
                ? diagramRegistry[section.diagram]
                : null;

              return (
              <article
                key={section.id}
                className="structural-card project-detail-card"
              >
                <span className="detail-label">{section.title}</span>
                <div className="project-detail-body">{section.body}</div>
                {Diagram && (
                  <div className="project-section-visual">
                    <Diagram lang={lang} />
                  </div>
                )}
                {section.image && (
                  <div className="project-section-visual">
                    {section.image.startsWith("[") ? (
                      <VisualPlaceholder label={section.image} />
                    ) : (
                      <img
                        src={section.image}
                        alt={section.title}
                        className="section-image"
                      />
                    )}
                  </div>
                )}
              </article>
              );
            })}
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
