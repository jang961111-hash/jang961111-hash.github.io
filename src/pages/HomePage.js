import React, { useEffect } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Competencies from "../components/sections/Competencies";
import Experience from "../components/sections/Experience";
import AppLayout from "../components/layout/AppLayout";
import { useHomeScrollRestore, useLocaleLanguage } from "../hooks/useRouteEffects";
import { applyPageMetadata } from "../utils/pageMetadata";
import { pageMetadata } from "../metadata";

const HomeContent = () => (
  <>
    <Hero />
    <About />
    <Projects />
    <Competencies />
    <Experience />
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
