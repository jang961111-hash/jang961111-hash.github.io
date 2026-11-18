import React from "react";
import { Link } from "react-router-dom";
import {
  getLocalizedCoreProjects,
  getLocalizedSupportingProjects,
  projectUiCopy,
} from "../../content/projects";
import SectionShell from "../layout/SectionShell";
import useLang from "../../hooks/useLang";
import { revealRef } from "../../hooks/useReveal";
import { renderEmphasis, stripEmphasis } from "../../utils/emphasis";
import { getProjectCardId } from "../../utils/scrollTarget";

const MAX_CHIPS = 4;

export const splitTitle = (title) => {
  const [main, ...rest] = stripEmphasis(title ?? "").split(" | ");

  return { main, sub: rest.join(" | ") };
};

const StackChips = ({ stack }) => {
  if (!stack?.length) {
    return null;
  }

  const shown = stack.slice(0, MAX_CHIPS);
  const extra = stack.length - shown.length;

  return (
    <ul className="chip-list card-chips">
      {shown.map((tech) => (
        <li key={tech} className="chip">
          {tech}
        </li>
      ))}
      {extra > 0 ? <li className="chip chip-more">{`+${extra}`}</li> : null}
    </ul>
  );
};

// Whole card is clickable: the title link stretches over the card.
const CardText = ({ project, copy, index, level = "h3" }) => {
  const { main, sub } = splitTitle(project.title);
  const Heading = level;

  return (
    <div className="card-text">
      <p className="card-meta mono">
        <span>{project.category}</span>
        <span className="card-index">{index}</span>
      </p>
      <Heading className="card-title">
        <Link to={project.path} className="card-link">
          <span className="card-title-main">{main}</span>
          {sub ? <span className="card-title-sub">{sub}</span> : null}
        </Link>
      </Heading>
      <p className="card-summary">{renderEmphasis(project.summary)}</p>
      <StackChips stack={project.stack} />
      <span className="card-cta" aria-hidden="true">
        {copy.viewProject} <span className="arrow">→</span>
      </span>
    </div>
  );
};

// The tile fixes its own aspect ratio (CSS), so the image never shifts layout.
const CardImage = ({ src, eager = false }) => (
  <div className="card-tile">
    <img
      src={src}
      alt=""
      loading={eager ? "eager" : "lazy"}
      decoding="async"
    />
  </div>
);

const Projects = () => {
  const lang = useLang();
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;
  const coreProjects = getLocalizedCoreProjects(lang);
  const supportingProjects = getLocalizedSupportingProjects(lang);

  return (
    <SectionShell
      id="projects"
      className="projects"
      statement={renderEmphasis(copy.sectionIntro)}
    >
      <div className="sub-head">
        <p className="kicker">{copy.coreLabel}</p>
        <p className="kicker">{String(coreProjects.length).padStart(2, "0")}</p>
      </div>

      <div className="core-list">
        {coreProjects.map((project, index) => {
          const image = project.cardImage ?? project.heroImage;

          return (
            <article
              key={project.slug}
              id={getProjectCardId(project.slug)}
              className={`core-card ${image ? "" : "is-text-only"}`}
              data-reveal
              ref={revealRef}
            >
              {image ? <CardImage src={image} /> : null}
              <CardText
                project={project}
                copy={copy}
                index={`0${index + 1}`}
              />
            </article>
          );
        })}
      </div>

      <div className="sub-head">
        <p className="kicker">{copy.moreLabel}</p>
        <p className="kicker">{String(supportingProjects.length).padStart(2, "0")}</p>
      </div>

      <div className="work-grid">
        {supportingProjects.map((project, index) => {
          const image = project.cardImage ?? project.heroImage;
          const number = String(index + coreProjects.length + 1).padStart(2, "0");

          return (
            <article
              key={project.slug}
              id={getProjectCardId(project.slug)}
              className={`work-card ${image ? "has-image" : "is-text-only"}`}
              data-reveal
              ref={revealRef}
            >
              {image ? (
                <CardImage src={image} />
              ) : (
                <div className="card-hatch hatch" aria-hidden="true">
                  <span className="mono">{number}</span>
                </div>
              )}
              <CardText project={project} copy={copy} index={number} />
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
};

export default Projects;
