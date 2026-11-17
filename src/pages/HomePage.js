import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import TechStack from "../components/sections/TechStack";
import AiCases from "../components/sections/AiCases";
import Competencies from "../components/sections/Competencies";
import Experience from "../components/sections/Experience";
import AppLayout from "../components/layout/AppLayout";
import { useHomeScrollRestore, useLocaleLanguage } from "../hooks/useRouteEffects";
import { applyPageMetadata } from "../utils/pageMetadata";
import { pageMetadata } from "../metadata";
import { homeSections } from "../config/sections";

// Contact is rendered by AppLayout, so it has no entry here.
const sectionComponents = {
  about: About,
  projects: Projects,
  stack: TechStack,
  "ai-cases": AiCases,
  competencies: Competencies,
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
