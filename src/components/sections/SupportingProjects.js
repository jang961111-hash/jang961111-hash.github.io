import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  getLocalizedSupportingProjects,
  projectUiCopy,
} from "../../content/projects";
import SectionShell from "../layout/SectionShell";
import useLang from "../../hooks/useLang";
import { renderEmphasis, stripEmphasis } from "../../utils/emphasis";
import { splitProjectTitle } from "./Projects";

const VISIBLE_COUNT = 6;

const SupportingProjects = () => {
  const lang = useLang();
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;
  const projects = getLocalizedSupportingProjects(lang);
  const [isExpanded, setIsExpanded] = useState(false);
  const hiddenCount = Math.max(projects.length - VISIBLE_COUNT, 0);

  if (projects.length === 0) {
    return null;
  }

  return (
    <SectionShell id="more-projects" title={copy.supportingListTitle}>
      <ul className="supporting-list" id="supporting-list" data-reveal="">
        {projects.map((project, index) => {
          const { name, tagline } = splitProjectTitle(project.title);
          const isHidden = !isExpanded && index >= VISIBLE_COUNT;

          return (
            <li key={project.slug} className="supporting-row" hidden={isHidden}>
              <Link to={project.path} className="supporting-link">
                <span className="supporting-name">{stripEmphasis(name)}</span>
                <span className="supporting-period mono">{project.period}</span>
                <span className="supporting-summary">
                  {renderEmphasis(tagline || project.summary)}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>

      {hiddenCount > 0 && (
        <button
          type="button"
          className="supporting-toggle"
          aria-expanded={isExpanded}
          aria-controls="supporting-list"
          onClick={() => setIsExpanded((value) => !value)}
        >
          {isExpanded ? copy.showLess : `${copy.showMore} (${hiddenCount})`}
        </button>
      )}
    </SectionShell>
  );
};

export default SupportingProjects;
