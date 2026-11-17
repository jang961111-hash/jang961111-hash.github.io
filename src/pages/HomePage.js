import { Competitions, LabNotes, Principles, Training } from "../components/sections/Records";
import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import Manifesto from "../components/sections/Manifesto";
import Projects from "../components/sections/Projects";
import TechStack from "../components/sections/TechStack";
import Experience from "../components/sections/Experience";
import AppLayout from "../components/layout/AppLayout";
import { useHomeScrollRestore, useLocaleLanguage } from "../hooks/useRouteEffects";
import { applyPageMetadata } from "../utils/pageMetadata";
import { pageMetadata } from "../metadata";
import { homeSections } from "../config/sections";

// Contact is rendered by AppLayout, so it has no entry here.
const sectionComponents = {
  manifesto: Manifesto,
  projects: Projects,
  principles: Principles,
  labs: LabNotes,
  stack: TechStack,
  awards: Competitions,
  training: Training,
  experience: Experience,
};

const HomeContent = ({ theme }) => (
  <>
    <Hero theme={theme} />
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
      <HomeContent theme={theme} />
    </AppLayout>
  );
};

export default HomePage;
