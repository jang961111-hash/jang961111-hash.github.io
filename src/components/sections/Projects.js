import React from "react";
import { Link } from "react-router-dom";
import { getLocalizedCoreProjects, projectUiCopy } from "../../content/projects";
import SectionShell from "../layout/SectionShell";
import useLang from "../../hooks/useLang";
import { renderEmphasis, stripEmphasis } from "../../utils/emphasis";

// "Name | tagline" titles are shown as a name with a smaller tagline.
export const splitProjectTitle = (title = "") => {
  const [name, ...rest] = String(title).split(" | ");

  return { name, tagline: rest.join(" | ") };
};

const getStackNames = (stack) =>
  (Array.isArray(stack) ? stack : [])
    .map((item) => (typeof item === "string" ? item : item?.name))
    .filter(Boolean);

const getCardImage = (project) => {
  const image = project.cardImage ?? project.heroImage;

  return typeof image === "string" && image && !image.startsWith("[") ? image : null;
};

const FeaturedCard = ({ project, order }) => {
  const { name, tagline } = splitProjectTitle(project.title);
  const image = getCardImage(project);
  const metrics = (project.metrics ?? []).slice(0, 3).filter((m) => m && typeof m === "object");
  const stackNames = getStackNames(project.stack).slice(0, 5);

  return (
    <li className="featured-item" data-reveal="" style={{ "--reveal-order": order }}>
      <Link to={project.path} className="featured-card">
        {image && (
          <div className="featured-media">
            <img
              src={image}
              alt={stripEmphasis(name)}
              width="1600"
              height="1000"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        <div className="featured-body">
          <p className="featured-period mono">{project.period}</p>
          <h3 className="featured-title">{stripEmphasis(name)}</h3>
          {tagline && <p className="featured-tagline">{renderEmphasis(tagline)}</p>}

          {metrics.length > 0 && (
            <dl className="featured-metrics">
              {metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`} className="featured-metric">
                  <dt className="mono">{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          )}

          {stackNames.length > 0 && (
            <ul className="chip-list">
              {stackNames.map((item) => (
                <li key={item} className="chip mono">
                  {item}
                </li>
              ))}
            </ul>
          )}

          <p className="featured-role">{renderEmphasis(project.role)}</p>
        </div>
      </Link>
    </li>
  );
};

const Projects = () => {
  const lang = useLang();
  const copy = projectUiCopy[lang] ?? projectUiCopy.ko;
  const coreProjects = getLocalizedCoreProjects(lang);

  return (
    <SectionShell id="projects" title={copy.featuredTitle}>
      <ul className="featured-grid">
        {coreProjects.map((project, index) => (
          <FeaturedCard key={project.slug} project={project} order={index} />
        ))}
      </ul>
    </SectionShell>
  );
};

export default Projects;
