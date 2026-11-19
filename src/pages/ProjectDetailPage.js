import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectUiCopy } from "../content/projects";
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
  <h2 className="label-box detail-label">
    <span className="label-dot" aria-hidden="true" />
    <span>{children}</span>
  </h2>
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

// Small comparison table; on narrow screens each row becomes a labelled card.
// Rows and columns are static, so indexes are stable keys. The explicit roles
// keep table semantics when the narrow layout switches cells to display:block.
/* eslint-disable react/no-array-index-key, jsx-a11y/no-redundant-roles */
const DataTable = ({ table }) => {
  if (!table?.columns?.length || !table?.rows?.length) {
    return null;
  }

  return (
    <div className="detail-table-wrap">
      <table className="detail-table" role="table">
        <thead role="rowgroup">
          <tr role="row">
            {table.columns.map((column, columnIndex) => (
              <th key={columnIndex} scope="col" role="columnheader">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="rowgroup">
          {table.rows.map((row, rowIndex) => (
            <tr key={rowIndex} role="row">
              {row.map((cell, index) =>
                index === 0 ? (
                  <th key={index} scope="row" role="rowheader">
                    {cell}
                  </th>
                ) : (
                  <td key={index} role="cell" data-label={table.columns[index]}>
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
/* eslint-enable react/no-array-index-key, jsx-a11y/no-redundant-roles */

const Block = ({ label, children, className = "" }) => (
  <section className={`detail-block ${className}`.trim()}>
    {label ? <Label>{label}</Label> : null}
    {children}
  </section>
);

const ProjectDetailPage = ({ project, lang, pager }) => {
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
  const brief = project.brief;
  const briefRows = brief
    ? [
        { label: copy.briefWhat, body: brief.what },
        { label: copy.briefPain, body: brief.pain },
        { label: copy.briefSolution, body: brief.solution },
        { label: copy.briefHow, body: brief.how },
        { label: copy.briefEffect, body: brief.effect },
      ].filter((row) => row.body)
    : [];
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
            <span
              className={`detail-title-main ${mainTitle.length > 8 ? "is-long" : ""}`.trim()}
            >
              {mainTitle}
            </span>
            {subTitle ? <span className="detail-title-sub">{subTitle}</span> : null}
          </h1>
        </header>

        <div className="frame detail-summary">
          <p>{renderLines(project.summary)}</p>
        </div>

        {project.notice ? (
          <p className="detail-notice">
            <span className="mono detail-notice-mark" aria-hidden="true">※</span>
            <span>{renderLines(project.notice)}</span>
          </p>
        ) : null}

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

        {briefRows.length > 0 && (
          <Block label={copy.brief} className="detail-brief-block">
            <dl className="detail-brief">
              {briefRows.map((row) => (
                <div className="detail-brief-row" key={row.label}>
                  <dt className="kicker">{row.label}</dt>
                  <dd>{renderLines(row.body)}</dd>
                </div>
              ))}
              {techList?.length > 0 && (
                <div className="detail-brief-row">
                  <dt className="kicker">{techLabel}</dt>
                  <dd>
                    <ul className="chip-list detail-chips">
                      {techList.map((tech) => (
                        <li key={tech} className="chip">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
          </Block>
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

        {briefRows.length === 0 && techList?.length > 0 && (
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
              <h3 className="detail-case-title">{project.caseStudy.title}</h3>
              {project.caseStudy.summary ? (
                <div className="detail-case-summary">
                  {renderLines(project.caseStudy.summary)}
                </div>
              ) : null}
              <DataTable table={project.caseStudy.table} />
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
                <DataTable table={section.table} />
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
                  <a
                    href={project.media.presentationHref}
                    className="btn"
                    {...(/^https?:/.test(project.media.presentationHref)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : { download: true })}
                  >
                    {project.media.presentationLabel}
                  </a>
                )}
              </div>
            </div>
          </Block>
        )}

        {pager && (pager.prev || pager.next) && (
          <nav className="detail-pager" aria-label={copy.pagerAria}>
            {pager.prev ? (
              <Link to={pager.prev.path} className="frame detail-pager-cell">
                <span className="kicker">
                  <span className="arrow" aria-hidden="true">←</span> {copy.prevProject}
                </span>
                <span className="detail-pager-title">
                  <span className="mono detail-pager-number" aria-hidden="true">{pager.prev.number}</span>
                  {pager.prev.title}
                </span>
              </Link>
            ) : (
              <span className="detail-pager-cell is-empty" aria-hidden="true" />
            )}
            {pager.next ? (
              <Link to={pager.next.path} className="frame detail-pager-cell is-next">
                <span className="kicker">
                  {copy.nextProject} <span className="arrow" aria-hidden="true">→</span>
                </span>
                <span className="detail-pager-title">
                  <span className="mono detail-pager-number" aria-hidden="true">{pager.next.number}</span>
                  {pager.next.title}
                </span>
              </Link>
            ) : (
              <span className="detail-pager-cell is-empty" aria-hidden="true" />
            )}
          </nav>
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
          >
            <span className="arrow" aria-hidden="true">←</span> {copy.backToList}
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default ProjectDetailPage;
