import React, { useEffect, useRef, useState } from "react";

// Product screens from this portfolio's own projects (public/projects).
export const heroImages = [
  { src: "/projects/ansim-ieum/card-screens.webp", width: 1600, height: 1000 },
  { src: "/projects/argus/agent-run-polling.webp", width: 1456, height: 828 },
  { src: "/projects/dailylog/card-app-screens.webp", width: 1600, height: 1000 },
  { src: "/projects/skt-prompt/card-award.webp", width: 1600, height: 1000 },
  { src: "/projects/jangbogo/agent-run.webp", width: 1600, height: 1000 },
  { src: "/projects/argus/approval-panel.webp", width: 1456, height: 828 },
  { src: "/projects/ansim-ieum/about-desktop.webp", width: 1280, height: 800 },
];

// The 3D scene is only loaded when the device can carry it comfortably.
const canRun3D = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }

  if (window.innerWidth < 720) {
    return false;
  }

  if ((navigator.hardwareConcurrency || 0) <= 4) {
    return false;
  }

  try {
    const probe = document.createElement("canvas");
    const context = probe.getContext("webgl2") || probe.getContext("webgl");

    if (!context) {
      return false;
    }

    const loseContext = context.getExtension("WEBGL_lose_context");
    if (loseContext) {
      loseContext.loseContext();
    }
  } catch {
    return false;
  }

  return true;
};

// Still composition for phones, reduced motion, weak devices, or when the
// 3D chunk cannot load: the same screens arranged with CSS perspective.
const HeroFallback = () => (
  <div className="hero-fallback" aria-hidden="true">
    <div className="hero-floor" />
    <div className="hero-panels">
      {heroImages.map((image, index) => (
        <figure key={image.src} className={`hero-panel hero-panel-${index + 1}`}>
          <img
            src={image.src}
            alt=""
            width={image.width}
            height={image.height}
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
          />
        </figure>
      ))}
    </div>
  </div>
);

const HeroStage = ({ theme }) => {
  const [mode, setMode] = useState("pending");
  const [isReady, setIsReady] = useState(false);
  const containerRef = useRef(null);
  const engineRef = useRef(null);
  const themeRef = useRef(theme);

  themeRef.current = theme;

  useEffect(() => {
    if (!canRun3D()) {
      setMode("fallback");
      return undefined;
    }

    setMode("3d");
    let cancelled = false;

    import(/* webpackChunkName: "hero-3d" */ "./heroScene")
      .then(({ createHeroScene }) => {
        if (cancelled || !containerRef.current) {
          return;
        }

        engineRef.current = createHeroScene(containerRef.current, {
          images: heroImages,
          theme: themeRef.current,
          onReady: () => {
            if (!cancelled) {
              setIsReady(true);
            }
          },
        });
      })
      .catch(() => {
        if (!cancelled) {
          setMode("fallback");
        }
      });

    return () => {
      cancelled = true;
      if (engineRef.current) {
        engineRef.current.dispose();
        engineRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (engineRef.current) {
      engineRef.current.setTheme(theme);
    }
  }, [theme]);

  return (
    <div className={`hero-stage is-${mode} ${isReady ? "is-ready" : ""}`} aria-hidden="true">
      {mode === "fallback" ? (
        <HeroFallback />
      ) : (
        <>
          <div className="hero-floor" />
          <div className="hero-canvas-host" ref={containerRef} />
        </>
      )}
    </div>
  );
};

export default HeroStage;
