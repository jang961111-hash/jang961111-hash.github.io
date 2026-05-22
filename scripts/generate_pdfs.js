const http = require('http');
const { existsSync } = require('fs');
const fs = require('fs/promises');
const path = require('path');
const { spawn } = require('child_process');
const puppeteer = require('puppeteer');

const rootDir = path.join(__dirname, '..');
const buildDir = path.join(rootDir, 'build');
const docsDir = path.join(rootDir, 'src', 'assets', 'docs');
const edgeExecutablePath = [
  process.env.PROGRAMFILES && path.join(process.env.PROGRAMFILES, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env['PROGRAMFILES(X86)'] &&
    path.join(process.env['PROGRAMFILES(X86)'], 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
  process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, 'Microsoft', 'Edge', 'Application', 'msedge.exe'),
].find((candidate) => candidate && existsSync(candidate));

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

const pdfTargets = [
  { route: '/', output: 'portfolio_ko.pdf' },
  { route: '/en', output: 'portfolio_en.pdf' },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const primePageForPdf = async (page) => {
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    window.scrollTo({ top: 0, behavior: 'auto' });
    await sleep(150);

    const step = Math.max(Math.floor(window.innerHeight * 0.9), 400);
    const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;

    for (let position = 0; position <= maxScrollTop; position += step) {
      window.scrollTo({ top: position, behavior: 'auto' });
      await sleep(120);
    }

    window.scrollTo({ top: 0, behavior: 'auto' });
    await sleep(150);
  });
};

const runCommand = (command, args, options = {}) =>
  new Promise((resolve, reject) => {
    const child =
      process.platform === 'win32'
        ? spawn('cmd.exe', ['/d', '/s', '/c', [command, ...args].join(' ')], {
            cwd: rootDir,
            stdio: 'inherit',
            ...options,
          })
        : spawn(command, args, {
            cwd: rootDir,
            stdio: 'inherit',
            ...options,
          });

    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Command failed: ${command} ${args.join(' ')} (exit ${code})`));
    });
  });

const createStaticServer = async () => {
  const indexFile = await fs.readFile(path.join(buildDir, 'index.html'));

  const server = http.createServer(async (req, res) => {
    try {
      const url = new URL(req.url, 'http://127.0.0.1');
      const requestPath = decodeURIComponent(url.pathname);
      const normalizedPath = requestPath === '/' ? '/index.html' : requestPath;
      const filePath = path.join(buildDir, normalizedPath.replace(/^\/+/, ''));

      let body;
      let targetPath = filePath;

      try {
        const stats = await fs.stat(filePath);
        targetPath = stats.isDirectory() ? path.join(filePath, 'index.html') : filePath;
        body = await fs.readFile(targetPath);
      } catch (error) {
        body = indexFile;
        targetPath = path.join(buildDir, 'index.html');
      }

      const ext = path.extname(targetPath).toLowerCase();
      res.writeHead(200, {
        'Content-Type': mimeTypes[ext] || 'application/octet-stream',
        'Cache-Control': 'no-store',
      });
      res.end(body);
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`Failed to serve file: ${error.message}`);
    }
  });

  await new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => resolve());
    server.on('error', reject);
  });

  const address = server.address();
  return {
    close: () =>
      new Promise((resolve, reject) => {
        server.close((error) => {
          if (error) {
            reject(error);
            return;
          }

          resolve();
        });
      }),
    origin: `http://127.0.0.1:${address.port}`,
  };
};

async function main() {
  let browser;
  let server;

  try {
    console.log('Building production bundle...');
    await runCommand('npm', ['run', 'build']);

    await fs.mkdir(docsDir, { recursive: true });

    console.log('Starting local preview server...');
    server = await createStaticServer();

    console.log('Launching browser...');
    browser = await puppeteer.launch({
      headless: true,
      ...(edgeExecutablePath ? { executablePath: edgeExecutablePath } : {}),
      args: ['--proxy-server=direct://', '--proxy-bypass-list=*'],
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 2200, deviceScaleFactor: 1 });

    for (const target of pdfTargets) {
      const url = `${server.origin}${target.route}`;
      const outputPath = path.join(docsDir, target.output);

      console.log(`Rendering ${target.output} from ${url}...`);
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
      await page.evaluate(() => document.fonts?.ready ?? Promise.resolve());
      await primePageForPdf(page);
      await delay(1500);
      await page.pdf({
        path: outputPath,
        format: 'A4',
        printBackground: true,
        preferCSSPageSize: true,
      });
    }

    console.log('Successfully generated both portfolio PDFs.');
  } catch (error) {
    console.error('Error generating PDFs:', error);
    process.exitCode = 1;
  } finally {
    if (browser) {
      await browser.close();
    }

    if (server) {
      await server.close();
    }
  }
}

main();
