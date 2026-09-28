// Merge the home page and selected project detail pages into a single submission PDF.
// Usage: node scripts/generate_submission_pdf.js --out <file.pdf> [--lang ko|en] [--no-build] slug1 slug2 ...
// Requires `pdfunite` (poppler) on PATH for merging.
const http = require('http');
const fs = require('fs/promises');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const puppeteer = require('puppeteer');

const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build');

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

const parseArgs = (argv) => {
  const opts = { out: path.join(rootDir, 'submission.pdf'), lang: 'ko', build: true, slugs: [] };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === '--out') opts.out = path.resolve(argv[(i += 1)]);
    else if (arg === '--lang') opts.lang = argv[(i += 1)];
    else if (arg === '--no-build') opts.build = false;
    else opts.slugs.push(arg);
  }
  return opts;
};

const createStaticServer = async () => {
  const indexFile = await fs.readFile(path.join(buildDir, 'index.html'));
  const server = http.createServer(async (req, res) => {
    const requestPath = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname);
    let targetPath = path.join(buildDir, requestPath.replace(/^\/+/, ''));
    let body;
    try {
      const stats = await fs.stat(targetPath);
      if (stats.isDirectory()) targetPath = path.join(targetPath, 'index.html');
      body = await fs.readFile(targetPath);
    } catch (error) {
      targetPath = path.join(buildDir, 'index.html');
      body = indexFile;
    }
    res.writeHead(200, { 'Content-Type': mimeTypes[path.extname(targetPath).toLowerCase()] || 'application/octet-stream' });
    res.end(body);
  });
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  return { server, origin: `http://127.0.0.1:${server.address().port}` };
};

const primePage = (page) =>
  page.evaluate(async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const step = Math.max(Math.floor(window.innerHeight * 0.9), 400);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    for (let y = 0; y <= max; y += step) {
      window.scrollTo(0, y);
      await sleep(120);
    }
    window.scrollTo(0, 0);
    await sleep(150);
  });

async function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.build) execFileSync('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit' });

  const prefix = opts.lang === 'en' ? '/en' : '';
  const routes = [prefix || '/', ...opts.slugs.map((slug) => `${prefix}/projects/${slug}/`)];
  const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), 'submission-pdf-'));
  const { server, origin } = await createStaticServer();
  const browser = await puppeteer.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 2200, deviceScaleFactor: 1 });
    const parts = [];
    for (const [index, route] of routes.entries()) {
      const partPath = path.join(tmpDir, `${String(index).padStart(2, '0')}.pdf`);
      console.log(`Rendering ${route}`);
      await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0', timeout: 120000 });
      await page.evaluate(() => document.fonts?.ready ?? Promise.resolve());
      await primePage(page);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      await page.pdf({ path: partPath, format: 'A4', printBackground: true, preferCSSPageSize: true });
      parts.push(partPath);
    }
    execFileSync('pdfunite', [...parts, opts.out]);
    console.log(`Wrote ${opts.out}`);
  } finally {
    await browser.close();
    server.close();
    await fs.rm(tmpDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
