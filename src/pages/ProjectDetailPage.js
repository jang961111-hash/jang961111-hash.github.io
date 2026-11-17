import React from "react";
import { Link } from "react-router-dom";
import { projectUiCopy } from "../content/projects";
import { getImageSize } from "../content/projects/imageSizes";
import { queueScrollTarget } from "../utils/scrollTarget";
import { renderEmphasis, stripEmphasis } from "../utils/emphasis";
import { splitProjectTitle } from "../components/sections/Projects";
import DailyLogPipelineDiagram from "../components/diagrams/DailyLogPipelineDiagram";
import LoggyDecisionFlowDiagram from "../components/diagrams/LoggyDecisionFlowDiagram";
import "../components/layout/Section.css";
import "./ProjectDetailPage.css";

const diagramRegistry = {
  "dailylog-pipeline": DailyLogPipelineDiagram,
  "loggy-decision-flow": LoggyDecisionFlowDiagram,
};

const linkLabelMap = {
  github: "github",
  demo: "demo",
  docs: "docs",
  youtube: "video",
};

// Bracketed strings such as "[image pending]" are placeholders, not images.
const isRealImage = (src) => typeof src === "string" && src !== "" && !src.startsWith("[");

const SizedImage = ({ src, alt, className, priority = false }) => {
  const size = getImageSize(src);

  return (
    <img
      src={src}
      alt={stripEmphasis(alt ?? "")}
      className={className}
      width={size?.[0]}
      height={size?.[1]}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
    />
  );
};

const isPortrait = (src) => {
  const size = getImageSize(src);

  return Boolean(size && size[1] > size[0] * 1.2);
};

const getStackNames = (stack) =>
  (Array.isArray(stack) ? stack : [])
    .map((item) => (typeof item === "string" ? item : item?.name))
    .filter(Boolean);

const DetailBlock = ({ title, children, className = "" }) => (
  <section className={`detail-block ${className}`.trim()} data-reveal="">
    {title && <h2 className="detail-block-title">{title}</h2>}
    {children}
  </section>
);

const ProjectMedia = ({ media }) => (
  <DetailBlock title={media.title}>
    {media.videoSrc && (
      <div className="project-video-frame">
        <video controls preload="metadata">
          <source src={media.videoSrc} type="video/mp4" />
        </video>
      </div>
    )}
    <div className="project-media-actions">
      {media.videoSrc && (
        <a href={media.videoSrc} className="cta-button ghost">
          {media.videoLabel}
        </a>
      )}
      {media.presentationHref && (
        <a href={media.presentationHref} className="cta-button ghost" download>
          {media.presentationLabel}
        </a>
      )}
    </div>
  </DetailBlock>
);

const DECISION_PREFIX = /^Decision Deep Dive\s*\|\s*/;

const ProjectDetailPage = ({ project, lang }) => {
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;
  const { name, tagline } = splitProjectTitle(project.title);
  const linkEntries = Object.entries(project.links ?? {}).filter(([, href]) =>
    Boolean(href)
  );
  const metrics = (project.metrics ?? []).filter((m) => m && typeof m === "object");
  const stackNames = getStackNames(project.stack);
  const storyItems = project.story
    ? [
        { key: "problem", label: copy.problem, text: project.story.problem },
        { key: "approach", label: copy.approach, text: project.story.insight },
        { key: "result", label: copy.result, text: project.story.solution },
      ].filter((item) => item.text)
    : [];
  const screenshots = (project.screenshots ?? []).filter((shot) => isRealImage(shot.src));
  const portraitShots = screenshots.filter((shot) => isPortrait(shot.src));
  const landscapeShots = screenshots.filter((shot) => !isPortrait(shot.src));
  const backToHome = () => queueScrollTarget("projects");

  return (
    <article className="project-detail-section">
      <div className="project-detail-shell">
        <Link to={project.homePath} className="project-back-link" onClick={backToHome}>
          {copy.backToProjects}
        </Link>

        <header className="project-detail-header">
          {project.category && <p className="project-detail-kicker">{project.category}</p>}
          <h1 className="project-detail-title">{stripEmphasis(name)}</h1>
          {tagline && <p className="project-detail-tagline">{renderEmphasis(tagline)}</p>}
          {project.summary && (
            <p className="project-detail-summary">{renderEmphasis(project.summary)}</p>
          )}

          <dl className="project-detail-meta">
            {project.period && (
              <div>
                <dt>{copy.period}</dt>
                <dd className="mono">{project.period}</dd>
              </div>
            )}
            {project.team && (
              <div>
                <dt>{copy.team}</dt>
                <dd>{project.team}</dd>
              </div>
            )}
            {project.role && (
              <div>
                <dt>{copy.role}</dt>
                <dd>{renderEmphasis(project.role)}</dd>
              </div>
            )}
          </dl>

          {linkEntries.length > 0 && (
            <ul className="project-detail-links" aria-label={copy.links}>
              {linkEntries.map(([key, href]) => (
                <li key={key}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button ghost"
                  >
                    {copy[linkLabelMap[key]] ?? key}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </header>

        {metrics.length > 0 && (
          <dl className="project-metric-band" aria-label={copy.keyMetrics}>
            {metrics.slice(0, 3).map((metric) => (
              <div key={`${metric.value}-${metric.label}`} className="project-metric">
                <dt className="mono">{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}

        {isRealImage(project.heroImage) && (
          <figure className="project-detail-visual">
            <SizedImage src={project.heroImage} alt={name} priority />
          </figure>
        )}

        {storyItems.length > 0 && (
          <div className="project-story" data-reveal="">
            {storyItems.map((item) => (
              <section key={item.key} className="project-story-item">
                <h2 className="project-story-label">{item.label}</h2>
                <p className="project-detail-body">{renderEmphasis(item.text)}</p>
              </section>
            ))}
          </div>
        )}

        {stackNames.length > 0 && (
          <DetailBlock title={copy.techStack}>
            <ul className="chip-list">
              {stackNames.map((item) => (
                <li key={item} className="chip mono">
                  {item}
                </li>
              ))}
            </ul>
          </DetailBlock>
        )}

        {project.highlights.length > 0 && (
          <DetailBlock title={copy.highlights}>
            <ul className="project-proof-list">
              {project.highlights.map((item) => (
                <li key={stripEmphasis(item)}>{renderEmphasis(item)}</li>
              ))}
            </ul>
          </DetailBlock>
        )}

        {project.caseStudy && (
          <DetailBlock title={copy.decisionDeepDive} className="case-study">
            {project.caseStudy.title && (
              <h3 className="case-study-title">
                {renderEmphasis(String(project.caseStudy.title).replace(DECISION_PREFIX, ""))}
              </h3>
            )}
            {project.caseStudy.summary && (
              <p className="case-study-summary">{renderEmphasis(project.caseStudy.summary)}</p>
            )}
            {project.caseStudy.content && (
              <p className="project-detail-body">{renderEmphasis(project.caseStudy.content)}</p>
            )}
          </DetailBlock>
        )}

        {project.sections.map((section) => {
          const Diagram = section.diagram ? diagramRegistry[section.diagram] : null;

          return (
            <DetailBlock key={section.id} title={section.title}>
              {section.body && (
                <p className="project-detail-body">{renderEmphasis(section.body)}</p>
              )}
              {Diagram && (
                <div className="project-section-visual">
                  <Diagram lang={lang} />
                </div>
              )}
              {isRealImage(section.image) && (
                <figure className="project-section-visual">
                  <SizedImage src={section.image} alt={section.title} />
                </figure>
              )}
            </DetailBlock>
          );
        })}

        {screenshots.length > 0 && (
          <DetailBlock title={copy.screens}>
            {[
              { key: "landscape", shots: landscapeShots },
              { key: "portrait", shots: portraitShots },
            ]
              .filter((group) => group.shots.length > 0)
              .map((group) => (
                <div key={group.key} className={`project-gallery ${group.key}`}>
                  {group.shots.map((shot) => (
                    <figure key={shot.src} className="project-screenshot">
                      <SizedImage src={shot.src} alt={shot.alt} />
                      {shot.alt && <figcaption>{renderEmphasis(shot.alt)}</figcaption>}
                    </figure>
                  ))}
                </div>
              ))}
          </DetailBlock>
        )}

        {project.media && <ProjectMedia media={project.media} />}

        <footer className="project-detail-footer">
          <Link to={project.homePath} className="cta-button ghost" onClick={backToHome}>
            {copy.backToList}
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
