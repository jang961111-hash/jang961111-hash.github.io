import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SectionShell from "../layout/SectionShell";
import { stackGroups } from "../../content/stack";
import { stackIcons } from "../../content/stackIcons";
import { getProjectBySlug, getLocalizedProject } from "../../content/projects";
import { stripEmphasis } from "../../utils/emphasis";
import { revealRef } from "../../hooks/useReveal";
import useLang from "../../hooks/useLang";
import "./TechStack.css";

// Near-black marks (Next.js, MCP, SQLite) would vanish on the dark theme, so
// only mid-range brand colors are applied; the rest stay text color.
const isUsableAccent = (hex) => {
  const value = parseInt(hex.slice(1), 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;
  const luminance = (0.2126 * red + 0.7152 * green + 0.0722 * blue) / 255;

  return luminance > 0.25 && luminance < 0.95;
};

// Official mark when one exists, otherwise a bordered initial of the same size.
const StackMark = ({ name }) => {
  const icon = stackIcons[name];

  if (!icon) {
    return (
      <span className="stack-mark is-initial mono" aria-hidden="true">
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  if (icon.src) {
    return (
      <span className="stack-mark is-image" aria-hidden="true">
        <img src={icon.src} alt="" width="24" height="24" loading="lazy" decoding="async" />
      </span>
    );
  }

  return (
    <span
      className="stack-mark"
      style={isUsableAccent(icon.hex) ? { "--brand": icon.hex } : undefined}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
        <path d={icon.path} fill="currentColor" />
      </svg>
    </span>
  );
};

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
                  <span className="stack-head">
                    <StackMark name={item.name} />
                    <span className="stack-name mono">{item.name}</span>
                  </span>
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
