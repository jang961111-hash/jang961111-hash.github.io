const fs = require("fs");
const path = require("path");

const buildDir = path.join(__dirname, "..", "build");
const buildIndexPath = path.join(buildDir, "index.html");
const projectsSourcePath = path.join(
  __dirname,
  "..",
  "src",
  "content",
  "projects.js"
);

const ensureFileExists = (filePath) => {
  if (!fs.existsSync(filePath)) {
    throw new Error(`Required file not found: ${filePath}`);
  }
};

const readProjectSlugs = () => {
  const source = fs.readFileSync(projectsSourcePath, "utf8");
  const slugMatches = source.matchAll(/slug:\s*"([^"]+)"/g);

  return [...new Set(Array.from(slugMatches, ([, slug]) => slug))];
};

const copyIndexToRoute = (segments) => {
  const routeDir = path.join(buildDir, ...segments);
  const routeIndexPath = path.join(routeDir, "index.html");

  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(buildIndexPath, routeIndexPath);
};

const generateRouteAliases = () => {
  ensureFileExists(buildIndexPath);
  ensureFileExists(projectsSourcePath);

  const projectSlugs = readProjectSlugs();

  copyIndexToRoute(["en"]);

  projectSlugs.forEach((slug) => {
    copyIndexToRoute(["projects", slug]);
    copyIndexToRoute(["en", "projects", slug]);
  });

  console.log(
    `Generated static route aliases for ${projectSlugs.length} project detail routes.`
  );
};

generateRouteAliases();
