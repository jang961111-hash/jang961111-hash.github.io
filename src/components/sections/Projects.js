import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getLocalizedCoreProjects,
  getLocalizedSupportingGroups,
  projectUiCopy,
} from "../../content/projects";
import SectionShell from "../layout/SectionShell";
import useLang from "../../hooks/useLang";
import { revealRef } from "../../hooks/useReveal";
import { renderEmphasis, stripEmphasis } from "../../utils/emphasis";
import {
  getProjectCardId,
  peekRememberedProject,
  readOpenGroups,
  writeOpenGroups,
} from "../../utils/scrollTarget";

const MAX_CHIPS = 4;
// Cards shown per group before the rest is folded behind a button.
const GROUP_PREVIEW = 6;

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
const CardText = ({ project, copy, index, level = "h3", showFacts = false }) => {
  const { main, sub } = splitTitle(project.title);
  const Heading = level;
  // Core cards state the owner's role and the outcome before the tech chips.
  const roleShort =
    project.cardRole ?? stripEmphasis(project.role ?? "").split(" | ")[0];
  const facts = showFacts
    ? [
        { label: copy.role, value: roleShort },
        { label: copy.result, value: stripEmphasis(project.cardResult ?? "") },
      ].filter((fact) => fact.value)
    : [];

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
      {facts.length > 0 ? (
        <dl className="card-facts">
          {facts.map((fact) => (
            <div className="card-fact" key={fact.label}>
              <dt className="mono">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}
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
  const supportingGroups = getLocalizedSupportingGroups(lang);
  // A group starts open if the reader opened it earlier in this session, or
  // if the card they are returning to sits in its folded part.
  const [openGroups, setOpenGroups] = useState(() => {
    const saved = new Set(readOpenGroups());
    const returningTo = peekRememberedProject();

    supportingGroups.forEach((group) => {
      const position = group.projects.findIndex(
        (project) => project.slug === returningTo
      );

      if (position >= GROUP_PREVIEW) {
        saved.add(group.id);
      }
    });

    return [...saved];
  });

  // Remember opened groups for this browser session.
  useEffect(() => {
    writeOpenGroups(openGroups);
  }, [openGroups]);

  const toggleGroup = (groupId, button) => {
    const closing = openGroups.includes(groupId);

    setOpenGroups((current) =>
      current.includes(groupId)
        ? current.filter((id) => id !== groupId)
        : [...current, groupId]
    );

    // Folding removes a screenful of cards; keep the button in view.
    if (closing && button) {
      window.requestAnimationFrame(() => {
        button.scrollIntoView({ block: "center" });
      });
    }
  };

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
                showFacts
              />
            </article>
          );
        })}
      </div>

      {supportingGroups.map((group, groupIndex) => {
        const offset =
          coreProjects.length +
          supportingGroups
            .slice(0, groupIndex)
            .reduce((sum, earlier) => sum + earlier.projects.length, 0);
        const folded = group.projects.length - GROUP_PREVIEW;
        const isOpen = openGroups.includes(group.id);
        const gridId = `work-grid-${group.id}`;
        const renderCard = (project, index) => {
          const image = project.cardImage ?? project.heroImage;
          const number = String(offset + index + 1).padStart(2, "0");

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
        };

        return (
          <React.Fragment key={group.id}>
            <div className="sub-head">
              <p className="kicker">{copy.groupLabels[group.id]}</p>
              <p className="kicker">{String(group.projects.length).padStart(2, "0")}</p>
            </div>

            <div className="work-grid">
              {group.projects.slice(0, GROUP_PREVIEW).map(renderCard)}
            </div>

            {/* The rest sits in its own grid so opening it never reshuffles
                the cards above. */}
            {folded > 0 ? (
              <div
                className={`work-grid work-grid-rest ${isOpen ? "" : "is-folded"}`.trim()}
                id={gridId}
              >
                {group.projects
                  .slice(GROUP_PREVIEW)
                  .map((project, index) => renderCard(project, index + GROUP_PREVIEW))}
              </div>
            ) : null}

            {folded > 0 ? (
              <div className="work-more">
                <button
                  type="button"
                  className="btn work-more-btn"
                  aria-expanded={isOpen}
                  aria-controls={gridId}
                  onClick={(event) => toggleGroup(group.id, event.currentTarget)}
                >
                  {isOpen
                    ? copy.foldRest
                    : copy.showRest.replace("{count}", String(folded))}
                </button>
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </SectionShell>
  );
};

export default Projects;
