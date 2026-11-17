import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { getSectionIndex } from "../../config/sections";
import { stackGroups } from "../../content/stack";
import { getProjectBySlug, getLocalizedProject } from "../../content/projects";
import { stripEmphasis } from "../../utils/emphasis";
import useLang from "../../hooks/useLang";
import "./Competencies.css";
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
    <SectionShell
      id="stack"
      index={getSectionIndex("stack")}
      title={t("stack.title")}
    >
      <p className="competencies-subtitle">{t("stack.caption")}</p>

      <div className="competencies-grid">
        {stackGroups.map((group, groupIndex) => (
          <div className="competency-card structural-card" key={group.id}>
            <div className="competency-card-header">
              <span className="competency-icon mono">{`0${groupIndex + 1}`}</span>
              <h3 className="competency-title mono">
                {group.label[lang] ?? group.label.ko}
              </h3>
            </div>
            <ul className="stack-list">
              {group.items.map((item) => (
                <li key={item.name} className="stack-row">
                  <span className="stack-name mono">{item.name}</span>
                  <span className="stack-projects">
                    {item.projects
                      .map(toProjectLink)
                      .filter(Boolean)
                      .map((project, index) => (
                        <React.Fragment key={project.slug}>
                          {index > 0 ? ", " : ""}
                          <Link to={project.path}>{project.name}</Link>
                        </React.Fragment>
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
