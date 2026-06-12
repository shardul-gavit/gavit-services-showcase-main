/**
 * Post-build static prerender for all sitemap routes.
 * Run: vite build && node scripts/prerender.mjs
 * Skip on CI without Chrome: SKIP_PRERENDER=1 npm run build
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PORT = Number(process.env.PRERENDER_PORT || 4173);
const BASE = `http://127.0.0.1:${PORT}`;

function getRoutesFromSitemap() {
  const sitemapPath = path.join(ROOT, "public", "sitemap.xml");
  const xml = fs.readFileSync(sitemapPath, "utf8");
  const routes = [...xml.matchAll(/<loc>https:\/\/www\.gaviteservice\.com([^<]*)<\/loc>/g)].map(
    (match) => match[1] || "/",
  );
  return [...new Set(routes)];
}

function routeToOutputFile(route) {
  if (route === "/") return path.join(DIST, "index.html");
  const segments = route.replace(/^\//, "").replace(/\/$/, "");
  return path.join(DIST, segments, "index.html");
}

function waitForServer(maxMs = 30000) {
  const start = Date.now();
  return new Promise((resolve, reject) => {
    const tryOnce = () => {
      const req = http.get(`${BASE}/`, (res) => {
        res.resume();
        resolve();
      });
      req.on("error", () => {
        if (Date.now() - start > maxMs) {
          reject(new Error(`Preview server not ready at ${BASE} after ${maxMs}ms`));
          return;
        }
        setTimeout(tryOnce, 500);
      });
    };
    tryOnce();
  });
}

function startPreview() {
  return new Promise((resolve, reject) => {
    const proc = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
      cwd: ROOT,
      shell: true,
      stdio: ["ignore", "pipe", "pipe"],
      env: { ...process.env, NODE_ENV: "production" },
    });

    proc.on("error", reject);

    const onReady = (chunk) => {
      const text = chunk.toString();
      if (text.includes("Local:") || text.includes(`127.0.0.1:${PORT}`) || text.includes(`localhost:${PORT}`)) {
        proc.stdout?.off("data", onReady);
        proc.stderr?.off("data", onReady);
        resolve(proc);
      }
    };

    proc.stdout?.on("data", onReady);
    proc.stderr?.on("data", onReady);

    setTimeout(() => resolve(proc), 10000);
  });
}

async function prerenderRoute(page, route) {
  const url = `${BASE}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

  await page.waitForFunction(
    () => {
      const root = document.getElementById("root");
      const hasContent = Boolean(root && root.innerText && root.innerText.trim().length > 80);
      const hasHeading = Boolean(document.querySelector("main h1, #root h1"));
      return hasContent && hasHeading;
    },
    { timeout: 90000 },
  );

  await page.evaluate(() => {
    document.dispatchEvent(new Event("prerender-ready"));
  });

  await new Promise((r) => setTimeout(r, 400));

  const html = await page.content();
  const outFile = routeToOutputFile(route);
  fs.mkdirSync(path.dirname(outFile), { recursive: true });
  fs.writeFileSync(outFile, html, "utf8");
}

async function main() {
  if (process.env.SKIP_PRERENDER === "1") {
    console.log("[prerender] Skipped (SKIP_PRERENDER=1)");
    return;
  }

  if (!fs.existsSync(DIST)) {
    console.error("[prerender] dist/ not found. Run vite build first.");
    process.exit(1);
  }

  const routes = getRoutesFromSitemap();
  console.log(`[prerender] ${routes.length} routes from sitemap.xml`);

  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch {
    console.warn("[prerender] puppeteer not installed — skipping prerender. Run: npm i -D puppeteer");
    return;
  }

  const preview = await startPreview();
  await waitForServer();

  const browser = await puppeteer.default.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  let failures = 0;
  for (const route of routes) {
    try {
      await prerenderRoute(page, route);
      console.log(`[prerender] ✓ ${route}`);
    } catch (err) {
      failures += 1;
      console.error(`[prerender] ✗ ${route}:`, err instanceof Error ? err.message : err);
    }
  }

  await browser.close();
  preview.kill("SIGTERM");

  if (failures > 0) {
    console.error(`[prerender] ${failures} route(s) failed`);
    process.exit(1);
  }

  console.log("[prerender] Done");
}

main().catch((err) => {
  console.error("[prerender] Fatal:", err);
  process.exit(1);
});
