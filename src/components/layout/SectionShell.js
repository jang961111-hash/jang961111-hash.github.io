import React from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./Section.css";

const SectionShell = ({
  id,
  index,
  title,
  subtitle,
  subtitleClassName = "",
  children,
}) => {
  const { elementRef, isVisible } = useScrollReveal();
  const subtitleClasses = ["section-subtitle", subtitleClassName]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={id} className="section">
      <div
        ref={elementRef}
        className={`section-container reveal-base ${isVisible ? "reveal-visible" : ""}`}
      >
        <h2 className="section-title">
          <span className="text-highlight">{index}.</span> {title}
        </h2>
        {subtitle ? <p className={subtitleClasses}>{subtitle}</p> : null}
        {children}
      </div>
    </section>
  );
};

export default SectionShell;
