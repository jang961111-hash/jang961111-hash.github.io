import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { stackGroups } from "../../content/stack";
import { getProjectBySlug, getLocalizedProject } from "../../content/projects";
import { stripEmphasis } from "../../utils/emphasis";
import { revealRef } from "../../hooks/useReveal";
import useLang from "../../hooks/useLang";
import "./TechStack.css";

const TechStack = () => {
  const { t } = useTranslation();
  const lang = useLang();

  const toProjectLink = (slug) => {
    const project = getProjectBySlug(slug);

    if (!project) {
      return null;
    }

    const localized = getLocalizedProject(project, lang);
    const name = stripEmphasis(localized.title).split(" | ")[0];

    return { slug, path: localized.path, name };
  };

  return (
    <SectionShell id="stack" className="stack" caption={t("stack.caption")}>
      <div className="stack-groups">
        {stackGroups.map((group, groupIndex) => (
          <div className="stack-group" key={group.id} data-reveal ref={revealRef}>
            <div className="stack-group-head">
              <span className="mono stack-group-index">{`0${groupIndex + 1}`}</span>
              <h3 className="stack-group-title">{group.label[lang] ?? group.label.ko}</h3>
              <span className="mono stack-group-count">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="stack-cells">
              {group.items.map((item) => (
                <li key={item.name} className="stack-cell">
                  <span className="stack-name mono">{item.name}</span>
                  <span className="stack-used">
                    {item.projects
                      .map(toProjectLink)
                      .filter(Boolean)
                      .map((project) => (
                        <Link key={project.slug} to={project.path} className="stack-link">
                          {project.name}
                        </Link>
                      ))}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
};

export default TechStack;
