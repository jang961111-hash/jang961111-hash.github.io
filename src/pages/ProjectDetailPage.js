import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectUiCopy } from "../content/projects";
import { queueScrollTarget } from "../utils/scrollTarget";
import { revealRef } from "../hooks/useReveal";
import { renderLines, stripEmphasis } from "../utils/emphasis";
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

// Image paths written as "[...]" are placeholders for assets not made yet.
const isRealImage = (src) => typeof src === "string" && src && !src.startsWith("[");

const Label = ({ children }) => (
  <p className="label-box detail-label">
    <span className="label-dot" aria-hidden="true" />
    <span>{children}</span>
  </p>
);

// Images sit in a frame that reserves a 16:10 box before loading, then takes
// the image's own ratio (clamped between 3:4 and 21:9) once it is known.
const clampRatio = (ratio) => Math.min(21 / 9, Math.max(3 / 4, ratio));

const ImageFrame = ({ src, alt, eager = false, caption }) => {
  const [ratio, setRatio] = useState(16 / 10);

  return (
    <figure className="detail-figure">
      <div className="detail-figure-frame" style={{ aspectRatio: ratio }}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          fetchPriority={eager ? "high" : undefined}
          decoding="async"
          onLoad={(event) => {
            const { naturalWidth, naturalHeight } = event.currentTarget;
            if (naturalWidth && naturalHeight) {
              setRatio(clampRatio(naturalWidth / naturalHeight));
            }
          }}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
};

const Block = ({ label, children, className = "" }) => (
  <section className={`detail-block ${className}`.trim()}>
    {label ? <Label>{label}</Label> : null}
    {children}
  </section>
);

const ProjectDetailPage = ({ project, lang }) => {
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;
  const [mainTitle, ...titleRest] = stripEmphasis(project.title).split(" | ");
  const subTitle = titleRest.join(" | ");
  const keyMetrics = (project.metrics ?? [])
    .filter((metric) => metric && typeof metric === "object" && metric.value)
    .slice(0, 3);
  const linkEntries = Object.entries(project.links ?? {}).filter(
    ([, href]) => Boolean(href)
  );
  const techList = project.stack?.length ? project.stack : project.tags;
  const techLabel = project.stack?.length ? copy.techStack : copy.themes;
  const facts = [
    { label: copy.period, value: project.period },
    { label: copy.team, value: project.team },
    { label: copy.role, value: project.role },
  ].filter((fact) => fact.value);
  const story = project.story;
  const storyItems = story
    ? [
        { label: copy.problem, body: story.problem },
        { label: copy.approach, body: story.insight },
        { label: copy.result, body: story.solution },
      ].filter((item) => item.body)
    : [];

  return (
    <article className="detail">
      <div className="wrap">
        <div className="detail-top">
          <Link
            to={project.homePath}
            className="detail-back"
            onClick={() => queueScrollTarget("projects")}
          >
            <span className="arrow" aria-hidden="true">←</span> {copy.backToProjects}
          </Link>
          <div className="detail-tags">
            <p className="label-box mono detail-category">
              <span className="label-dot" aria-hidden="true" />
              <span>{project.category}</span>
            </p>
            {project.statusLabel ? (
              <span className="chip">{project.statusLabel}</span>
            ) : null}
          </div>
        </div>

        <header className="frame detail-head">
          <h1 className="detail-title">
            <span className="detail-title-main">{mainTitle}</span>
            {subTitle ? <span className="detail-title-sub">{subTitle}</span> : null}
          </h1>
        </header>

        <div className="frame detail-summary">
          <p>{renderLines(project.summary)}</p>
        </div>

        {facts.length > 0 && (
          <dl className="detail-facts">
            {facts.map((fact) => (
              <div className="detail-fact" key={fact.label}>
                <dt className="kicker">{fact.label}</dt>
                <dd>{renderLines(fact.value)}</dd>
              </div>
            ))}
          </dl>
        )}

        {keyMetrics.length > 0 && (
          <Block label={copy.keyMetrics}>
            <dl className="detail-metrics">
              {keyMetrics.map((metric) => (
                <div className="detail-metric" key={metric.label} data-reveal ref={revealRef}>
                  <dt className="mono">{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </Block>
        )}

        {isRealImage(project.heroImage) && (
          <div className="detail-hero-image">
            <ImageFrame src={project.heroImage} alt={mainTitle} eager />
          </div>
        )}

        {storyItems.length > 0 && (
          <div className="detail-story">
            {storyItems.map((item, index) => (
              <section className="frame detail-story-cell" key={item.label} data-reveal ref={revealRef}>
                <p className="detail-story-head">
                  <span className="mono">{`0${index + 1}`}</span>
                  <span>{item.label}</span>
                </p>
                <div className="detail-body">{renderLines(item.body)}</div>
              </section>
            ))}
          </div>
        )}

        {techList?.length > 0 && (
          <Block label={techLabel}>
            <ul className="chip-list detail-chips">
              {techList.map((tech) => (
                <li key={tech} className="chip">
                  {tech}
                </li>
              ))}
            </ul>
          </Block>
        )}

        {project.highlights?.length > 0 && (
          <Block label={copy.highlights}>
            <ol className="detail-highlights">
              {project.highlights.map((item, index) => (
                <li key={stripEmphasis(item)} data-reveal ref={revealRef}>
                  <span className="mono detail-highlight-index">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="detail-body">{renderLines(item)}</div>
                </li>
              ))}
            </ol>
          </Block>
        )}

        {project.caseStudy && (
          <Block label={copy.decisionDeepDive}>
            <div className="frame detail-case" data-reveal ref={revealRef}>
              <h2 className="detail-case-title">{project.caseStudy.title}</h2>
              {project.caseStudy.summary ? (
                <div className="detail-case-summary">
                  {renderLines(project.caseStudy.summary)}
                </div>
              ) : null}
              <div className="detail-body">{renderLines(project.caseStudy.content)}</div>
            </div>
          </Block>
        )}

        {project.sections?.map((section) => {
          const Diagram = section.diagram ? diagramRegistry[section.diagram] : null;

          return (
            <Block key={section.id} label={section.title}>
              <div className="frame detail-section" data-reveal ref={revealRef}>
                <div className="detail-body">{renderLines(section.body)}</div>
                {Diagram && (
                  <div className="detail-diagram">
                    <Diagram lang={lang} />
                  </div>
                )}
                {isRealImage(section.image) && (
                  <ImageFrame src={section.image} alt={stripEmphasis(section.title)} />
                )}
              </div>
            </Block>
          );
        })}

        {project.screenshots?.length > 0 && (
          <Block label={copy.screens}>
            <div className="detail-gallery">
              {project.screenshots.map((shot) => (
                <div key={shot.src} data-reveal ref={revealRef}>
                  <ImageFrame src={shot.src} alt={shot.alt ?? ""} caption={shot.alt} />
                </div>
              ))}
            </div>
          </Block>
        )}

        {project.media && (project.media.videoSrc || project.media.presentationHref) && (
          <Block label={project.media.title}>
            <div className="frame detail-media">
              {project.media.videoSrc && (
                <div className="detail-video">
                  <video controls preload="metadata">
                    <source src={project.media.videoSrc} type="video/mp4" />
                  </video>
                </div>
              )}
              <div className="detail-actions">
                {project.media.videoSrc && (
                  <a href={project.media.videoSrc} className="btn">
                    {project.media.videoLabel}
                  </a>
                )}
                {project.media.presentationHref && (
                  <a href={project.media.presentationHref} className="btn" download>
                    {project.media.presentationLabel}
                  </a>
                )}
              </div>
            </div>
          </Block>
        )}

        <footer className="detail-foot">
          {linkEntries.length > 0 && (
            <div className="detail-actions">
              {linkEntries.map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  {copy[linkLabelMap[key]] ?? key}{" "}
                  <span className="arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          )}
          <Link
            to={project.homePath}
            className="btn btn-primary"
            onClick={() => queueScrollTarget("projects")}
          >
            <span className="arrow" aria-hidden="true">←</span> {copy.backToList}
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
