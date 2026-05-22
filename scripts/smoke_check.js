const fs = require("fs");
const http = require("http");
const os = require("os");
const path = require("path");
const puppeteer = require("puppeteer");

const buildDir = path.join(__dirname, "..", "build");
const host = "127.0.0.1";
const port = Number(process.env.SMOKE_PORT || 4173);

const routes = [
  {
    path: "/",
    expectedPathname: "/",
    expectedTitle: "장병헌 | AI/SW 기반 문제정의형 서비스 기획자 / PM",
    expectedStatus: 200,
  },
  {
    path: "/en/",
    expectedPathname: "/en/",
    expectedTitle: "Jang Byeong Heon | AI/SW Problem-Framing Service Planner / PM",
    expectedStatus: 200,
  },
  {
    path: "/projects/loggy/",
    expectedPathname: "/projects/loggy/",
    expectedTitle: "Loggy | 의사결정 기록 및 협업 플랫폼 | Portfolio",
    expectedStatus: 200,
  },
  {
    path: "/en/projects/loggy/",
    expectedPathname: "/en/projects/loggy/",
    expectedTitle: "Loggy | Decision Recording & Collaboration Platform | Jang Byeong Heon",
    expectedStatus: 200,
  },
  {
    path: "/en/does-not-exist",
    expectedPathname: "/en/",
    expectedTitle: "Jang Byeong Heon | AI/SW Problem-Framing Service Planner / PM",
    expectedStatus: 200,
    allowConsoleErrors: true,
  },
];

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const getContentType = (filePath) =>
  mimeTypes[path.extname(filePath).toLowerCase()] ||
  "application/octet-stream";

const buildFilePath = (requestPath) => {
  const decodedPath = decodeURIComponent(requestPath);
  const normalizedPath = decodedPath.replace(/^\/+/, "");
  const directFilePath = path.join(buildDir, normalizedPath);

  if (
    normalizedPath &&
    fs.existsSync(directFilePath) &&
    fs.statSync(directFilePath).isFile()
  ) {
    return directFilePath;
  }

  const routeIndexPath = path.join(buildDir, normalizedPath, "index.html");

  if (fs.existsSync(routeIndexPath)) {
    return routeIndexPath;
  }

  if (decodedPath === "/" && fs.existsSync(path.join(buildDir, "index.html"))) {
    return path.join(buildDir, "index.html");
  }

  return null;
};

const createStaticServer = () =>
  http.createServer((request, response) => {
    const requestUrl = new URL(request.url, `http://${host}:${port}`);
    const filePath = buildFilePath(requestUrl.pathname);

    if (filePath) {
      response.writeHead(200, { "Content-Type": getContentType(filePath) });
      fs.createReadStream(filePath).pipe(response);
      return;
    }

    const fallback404 = path.join(buildDir, "404.html");

    if (fs.existsSync(fallback404)) {
      response.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      fs.createReadStream(fallback404).pipe(response);
      return;
    }

    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not Found");
  });

const startServer = (server) =>
  new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, host, () => resolve());
  });

const stopServer = (server) =>
  new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });

const createUserDataDir = () =>
  fs.mkdtempSync(path.join(os.tmpdir(), "portfolio-smoke-chrome-"));

const removeUserDataDir = (userDataDir) => {
  try {
    fs.rmSync(userDataDir, { recursive: true, force: true });
  } catch {
    // Windows can briefly hold Chromium profile locks after browser.close().
  }
};

const launchBrowser = async () => {
  let lastError;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const userDataDir = createUserDataDir();

    try {
      const browser = await puppeteer.launch({
        headless: true,
        userDataDir,
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      });

      return { browser, userDataDir };
    } catch (error) {
      lastError = error;
      removeUserDataDir(userDataDir);
    }
  }

  throw lastError;
};

const verifyRoute = async (browser, route) => {
  const page = await browser.newPage();
  const consoleErrors = [];
  const pageErrors = [];

  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      !message.text().startsWith("Failed to load resource:")
    ) {
      consoleErrors.push(message.text());
    }
  });

  page.on("pageerror", (error) => {
    pageErrors.push(error.message);
  });

  const response = await page.goto(`http://${host}:${port}${route.path}`, {
    waitUntil: "networkidle2",
  });

  if (!response) {
    throw new Error(`No response received for ${route.path}`);
  }

  if (response.status() !== route.expectedStatus) {
    throw new Error(
      `Expected HTTP ${route.expectedStatus} for ${route.path}, got ${response.status()}`
    );
  }

  await page.waitForFunction(
    (expectedTitle) => document.title === expectedTitle,
    {},
    route.expectedTitle
  );
  await page.waitForFunction(
    (expectedPathname) => window.location.pathname === expectedPathname,
    {},
    route.expectedPathname
  );

  if (pageErrors.length > 0) {
    throw new Error(
      `Page errors on ${route.path}: ${pageErrors.join(" | ")}`
    );
  }

  if (!route.allowConsoleErrors && consoleErrors.length > 0) {
    throw new Error(
      `Console errors on ${route.path}: ${consoleErrors.join(" | ")}`
    );
  }

  await page.close();
};

const run = async () => {
  if (!fs.existsSync(buildDir)) {
    throw new Error("Build directory is missing. Run `npm run build` first.");
  }

  const server = createStaticServer();
  let browser;
  let userDataDir;

  try {
    await startServer(server);
    const launched = await launchBrowser();
    browser = launched.browser;
    userDataDir = launched.userDataDir;

    for (const route of routes) {
      await verifyRoute(browser, route);
      console.log(`Verified ${route.path}`);
    }
  } finally {
    if (browser) {
      await browser.close();
    }

    await stopServer(server);
    if (userDataDir) {
      removeUserDataDir(userDataDir);
    }
  }
};

run().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
