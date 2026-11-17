// Hero 3D scene: a dark room with a perspective grid floor and the
// portfolio's own product screens floating as panels. Loaded on demand
// (dynamic import), so `three` lives in its own chunk.
import {
  BufferGeometry,
  CanvasTexture,
  Color,
  EdgesGeometry,
  Float32BufferAttribute,
  Fog,
  GridHelper,
  Group,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  SRGBColorSpace,
  Scene,
  TextureLoader,
  Vector3,
  WebGLRenderer,
} from "three";

const PALETTES = {
  dark: {
    background: 0x000000,
    gridMajor: 0x4a4a4a,
    gridMinor: 0x262626,
    frame: 0xe6e6e6,
    frameOpacity: 0.28,
    panelTint: 0x9c9c9c,
    panelEmpty: 0x121212,
    dust: 0xc4c4c4,
    glow: 0xffffff,
    glowOpacity: 0.07,
  },
  light: {
    background: 0xf1eee6,
    gridMajor: 0xb9b1a2,
    gridMinor: 0xd9d3c6,
    frame: 0x111111,
    frameOpacity: 0.32,
    panelTint: 0xffffff,
    panelEmpty: 0xe2ddd2,
    dust: 0x5f5b53,
    glow: 0x000000,
    glowOpacity: 0.05,
  },
};

// x, y, z, rotation around y, width (height follows the image ratio)
const PANEL_LAYOUT = [
  [3.4, 1.45, -1.0, -0.22, 3.4],
  [7.4, 2.35, -4.6, -0.36, 3.2],
  [1.0, 3.35, -7.2, 0.08, 3.2],
  [6.6, 0.15, 0.4, -0.32, 2.1],
  [10.8, 0.9, -9.2, -0.42, 3.6],
  [4.4, -0.35, -5.6, -0.1, 2.6],
  [-2.6, 2.7, -11.2, 0.26, 3.4],
];

const FLOOR_Y = -2.2;
const CELL = 1;

const makeGlowTexture = () => {
  const size = 256;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(
    size / 2,
    size / 2,
    0,
    size / 2,
    size / 2,
    size / 2
  );
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, size, size);

  return new CanvasTexture(canvas);
};

const makeGrid = (palette) => {
  const grid = new GridHelper(90, 90, palette.gridMajor, palette.gridMinor);
  grid.position.y = FLOOR_Y;
  grid.material.transparent = true;
  grid.material.opacity = 0.9;

  return grid;
};

export const createHeroScene = (container, { images, theme = "dark", onReady }) => {
  let palette = PALETTES[theme] ?? PALETTES.dark;

  const renderer = new WebGLRenderer({
    antialias: false,
    alpha: false,
    powerPreference: "high-performance",
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;

  const canvas = renderer.domElement;
  canvas.className = "hero-canvas";
  canvas.setAttribute("aria-hidden", "true");
  canvas.dataset.state = "idle";
  container.appendChild(canvas);

  const scene = new Scene();
  scene.background = new Color(palette.background);
  scene.fog = new Fog(palette.background, 10, 34);

  const camera = new PerspectiveCamera(38, 1, 0.1, 80);
  const cameraBase = new Vector3(0, 2.1, 10);
  const lookTarget = new Vector3(2.6, 0.9, -2);

  let grid = makeGrid(palette);
  scene.add(grid);

  const glowTexture = makeGlowTexture();
  const glowMaterial = new MeshBasicMaterial({
    map: glowTexture,
    color: palette.glow,
    transparent: true,
    opacity: palette.glowOpacity,
    depthWrite: false,
    fog: false,
  });
  const glow = new Mesh(new PlaneGeometry(26, 18), glowMaterial);
  glow.rotation.x = -Math.PI / 2;
  glow.position.set(3, FLOOR_Y + 0.01, -3);
  scene.add(glow);

  // Floating screens
  const loader = new TextureLoader();
  const plane = new PlaneGeometry(1, 1);
  const edges = new EdgesGeometry(plane);
  const frameMaterial = new LineBasicMaterial({
    color: palette.frame,
    transparent: true,
    opacity: palette.frameOpacity,
  });
  const panels = [];
  const textures = [];

  images.slice(0, PANEL_LAYOUT.length).forEach((image, index) => {
    const [x, y, z, ry, width] = PANEL_LAYOUT[index];
    const ratio = image.height / image.width;
    const height = width * ratio;
    const group = new Group();
    group.position.set(x, y, z);
    group.rotation.y = ry;

    const material = new MeshBasicMaterial({ color: palette.panelEmpty });
    const screen = new Mesh(plane, material);
    screen.scale.set(width, height, 1);
    group.add(screen);

    const frame = new LineSegments(edges, frameMaterial);
    frame.scale.set(width * 1.035, height * 1.05, 1);
    frame.position.z = -0.01;
    group.add(frame);


    loader.load(image.src, (texture) => {
      texture.colorSpace = SRGBColorSpace;
      texture.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy());
      textures.push(texture);
      material.map = texture;
      material.color.set(palette.panelTint);
      material.needsUpdate = true;
      requestRender();
    });

    scene.add(group);
    panels.push({
      group,
      material,
      base: { x, y, z, ry },
      phase: index * 1.37,
    });
  });

  // Dust
  const dustCount = 140;
  const dustPositions = new Float32Array(dustCount * 3);
  for (let i = 0; i < dustCount; i += 1) {
    dustPositions[i * 3] = (Math.random() - 0.3) * 22;
    dustPositions[i * 3 + 1] = FLOOR_Y + Math.random() * 7;
    dustPositions[i * 3 + 2] = -14 + Math.random() * 20;
  }
  const dustGeometry = new BufferGeometry();
  dustGeometry.setAttribute("position", new Float32BufferAttribute(dustPositions, 3));
  const dustMaterial = new PointsMaterial({
    color: palette.dust,
    size: 0.035,
    transparent: true,
    opacity: 0.55,
    depthWrite: false,
  });
  const dust = new Points(dustGeometry, dustMaterial);
  scene.add(dust);

  // Pointer: mouse moves the view a little; touch devices get a slow sway.
  const pointer = { x: 0, y: 0 };
  const eased = { x: 0, y: 0 };
  let usesMouse = false;

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") {
      return;
    }
    usesMouse = true;
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("pointermove", handlePointerMove, { passive: true });

  // Render loop runs only while the hero is on screen and the tab is visible.
  let frameId = 0;
  let onScreen = true;
  let firstFrame = true;
  const start = performance.now();

  const setState = (state) => {
    if (canvas.dataset.state !== state) {
      canvas.dataset.state = state;
    }
  };

  const shouldRun = () => onScreen && document.visibilityState !== "hidden";

  const draw = (time) => {
    const t = (time - start) / 1000;

    grid.position.z = (t * 0.32) % CELL;

    panels.forEach(({ group, base, phase }) => {
      group.position.y = base.y + Math.sin(t * 0.5 + phase) * 0.12;
      group.rotation.y = base.ry + Math.sin(t * 0.27 + phase) * 0.045;
      group.rotation.x = Math.sin(t * 0.35 + phase) * 0.018;
    });

    dust.position.y = Math.sin(t * 0.15) * 0.25;
    dust.rotation.y = t * 0.01;

    const target = usesMouse
      ? pointer
      : { x: Math.sin(t * 0.23) * 0.6, y: Math.sin(t * 0.17) * 0.35 };
    eased.x += (target.x - eased.x) * 0.045;
    eased.y += (target.y - eased.y) * 0.045;

    camera.position.set(
      cameraBase.x + eased.x * 0.9,
      cameraBase.y - eased.y * 0.45,
      cameraBase.z
    );
    camera.lookAt(lookTarget);

    renderer.render(scene, camera);

    if (firstFrame) {
      firstFrame = false;
      if (onReady) {
        onReady();
      }
    }
  };

  const loop = (time) => {
    frameId = 0;
    draw(time);

    if (shouldRun()) {
      frameId = window.requestAnimationFrame(loop);
    } else {
      setState("paused");
    }
  };

  const startLoop = () => {
    if (!frameId && shouldRun()) {
      setState("running");
      frameId = window.requestAnimationFrame(loop);
    }
  };

  const stopLoop = () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
    setState("paused");
  };

  // A single repaint when the loop is paused (texture arrival, resize, theme).
  function requestRender() {
    if (!frameId) {
      draw(performance.now());
    }
  }

  const resize = () => {
    const width = container.clientWidth;
    const height = container.clientHeight;

    if (!width || !height) {
      return;
    }

    const aspect = width / height;
    renderer.setSize(width, height, false);
    camera.aspect = aspect;
    // Narrow (portrait) stages pull back and recentre on the panels.
    cameraBase.set(aspect < 1.1 ? 1.6 : 0, 2.1, aspect < 1.1 ? 15 : 10);
    lookTarget.set(aspect < 1.1 ? 3.2 : 2.6, 0.9, -2);
    camera.updateProjectionMatrix();
    requestRender();
  };

  const resizeObserver =
    typeof ResizeObserver !== "undefined" ? new ResizeObserver(resize) : null;
  if (resizeObserver) {
    resizeObserver.observe(container);
  }
  resize();

  const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
      onScreen = entry.isIntersecting;
      if (onScreen) {
        startLoop();
      } else {
        stopLoop();
      }
    },
    { threshold: 0 }
  );
  intersectionObserver.observe(container);

  const handleVisibility = () => {
    if (document.visibilityState === "hidden") {
      stopLoop();
    } else {
      startLoop();
    }
  };
  document.addEventListener("visibilitychange", handleVisibility);

  startLoop();

  const setTheme = (nextTheme) => {
    palette = PALETTES[nextTheme] ?? PALETTES.dark;
    scene.background.set(palette.background);
    scene.fog.color.set(palette.background);

    scene.remove(grid);
    grid.geometry.dispose();
    grid.material.dispose();
    grid = makeGrid(palette);
    scene.add(grid);

    frameMaterial.color.set(palette.frame);
    frameMaterial.opacity = palette.frameOpacity;
    glowMaterial.color.set(palette.glow);
    glowMaterial.opacity = palette.glowOpacity;
    dustMaterial.color.set(palette.dust);
    panels.forEach(({ material }) => {
      material.color.set(material.map ? palette.panelTint : palette.panelEmpty);
    });
    requestRender();
  };

  const dispose = () => {
    stopLoop();
    intersectionObserver.disconnect();
    if (resizeObserver) {
      resizeObserver.disconnect();
    }
    window.removeEventListener("pointermove", handlePointerMove);
    document.removeEventListener("visibilitychange", handleVisibility);

    grid.geometry.dispose();
    grid.material.dispose();
    plane.dispose();
    edges.dispose();
    dustGeometry.dispose();
    dustMaterial.dispose();
    frameMaterial.dispose();
    glow.geometry.dispose();
    glowMaterial.dispose();
    glowTexture.dispose();
    panels.forEach(({ material }) => material.dispose());
    textures.forEach((texture) => texture.dispose());
    renderer.dispose();
    canvas.remove();
  };

  return { setTheme, dispose };
};
