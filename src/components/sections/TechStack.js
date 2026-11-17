import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { stackGroups } from "../../content/stack";
import { getLocalizedProject, getProjectBySlug } from "../../content/projects";
import SectionShell from "../layout/SectionShell";
import useLang from "../../hooks/useLang";
import { stripEmphasis } from "../../utils/emphasis";
import { splitProjectTitle } from "./Projects";

const pickLabel = (label, lang) =>
  typeof label === "string" ? label : label?.[lang] ?? label?.ko ?? "";

const TechStack = () => {
  const { t } = useTranslation();
  const lang = useLang();
  const groups = Array.isArray(stackGroups) ? stackGroups : [];

  if (groups.length === 0) {
    return null;
  }

  const resolveProject = (slug) => {
    const project = getProjectBySlug(slug);

    if (!project) {
      return null;
    }

    const localized = getLocalizedProject(project, lang);

    return {
      slug,
      path: localized.path,
      name: stripEmphasis(splitProjectTitle(localized.title).name),
    };
  };

  return (
    <SectionShell id="stack" title={t("stack.title")}>
      <div className="stack-groups">
        {groups.map((group, groupIndex) => (
          <section
            key={group.id}
            className="stack-group"
            data-reveal=""
            style={{ "--reveal-order": Math.min(groupIndex, 3) }}
            aria-labelledby={`stack-${group.id}`}
          >
            <h3 className="stack-group-title" id={`stack-${group.id}`}>
              {pickLabel(group.label, lang)}
            </h3>
            <ul className="stack-items">
              {(group.items ?? []).map((item) => {
                const projects = (item.projects ?? []).map(resolveProject).filter(Boolean);

                return (
                  <li key={item.name} className="stack-item">
                    <span className="stack-name mono">{item.name}</span>
                    {projects.length > 0 && (
                      <span className="stack-projects">
                        <span className="visually-hidden">{t("stack.usedIn")}: </span>
                        {projects.map((project, index) => (
                          <React.Fragment key={project.slug}>
                            {index > 0 && ", "}
                            <Link to={project.path}>{project.name}</Link>
                          </React.Fragment>
                        ))}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </SectionShell>
  );
};

export default TechStack;
