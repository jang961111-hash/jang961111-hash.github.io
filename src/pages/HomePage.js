import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import TechStack from "../components/sections/TechStack";
import SupportingProjects from "../components/sections/SupportingProjects";
import Experience from "../components/sections/Experience";
import AppLayout from "../components/layout/AppLayout";
import { useHomeScrollRestore, useLocaleLanguage } from "../hooks/useRouteEffects";
import { applyPageMetadata } from "../utils/pageMetadata";
import { pageMetadata } from "../metadata";
import { homeSections } from "../config/sections";

// Contact is rendered by AppLayout, so it has no entry here.
// About, AiCases and Competencies stay in the codebase but are off the home page.
const sectionComponents = {
  projects: Projects,
  stack: TechStack,
  "more-projects": SupportingProjects,
  experience: Experience,
};

const HomeContent = () => (
  <>
    <Hero />
    {homeSections.map(({ id }) => {
      const SectionComponent = sectionComponents[id];

      return SectionComponent ? <SectionComponent key={id} /> : null;
    })}
  </>
);

const HomePage = ({ lang, theme, onToggleTheme, onPrint }) => {
  useLocaleLanguage(lang);
  useHomeScrollRestore();

  useEffect(() => {
    applyPageMetadata(pageMetadata[lang] ?? pageMetadata.ko);
  }, [lang]);

  return (
    <AppLayout theme={theme} onToggleTheme={onToggleTheme} onPrint={onPrint}>
      <HomeContent />
    </AppLayout>
  );
};

export default HomePage;
