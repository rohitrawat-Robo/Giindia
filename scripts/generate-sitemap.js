// scripts/generate-sitemap.js
//
// Generates public/sitemap.xml from the static routes below + every event
// slug already present in src/utils/eventsManifest.json (the same file
// your events-manifest-plugin generates). Run this any time you add an
// event and want the sitemap to catch up, or wire it into your build:
//
//   "scripts": {
//     "sitemap": "node scripts/generate-sitemap.js",
//     "build": "npm run sitemap && vite build"
//   }
//
// Usage: node scripts/generate-sitemap.js

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SITE_URL = 'https://www.globalinfoventures.com'; // TODO: confirm production domain

// Static, hand-maintained routes with a rough priority/changefreq.
const STATIC_ROUTES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/about', priority: '0.8', changefreq: 'monthly' },
  { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/gril', priority: '0.7', changefreq: 'monthly' },
  { path: '/events', priority: '0.8', changefreq: 'weekly' },
  { path: '/etnow', priority: '0.6', changefreq: 'monthly' },
  { path: '/nvidia-elite-partner', priority: '0.8', changefreq: 'monthly' },
  { path: '/contact', priority: '0.6', changefreq: 'yearly' },
  // '/career' intentionally omitted: it's a client-side redirect to an
  // external domain, not a real indexable page.
];

// createEventSlug must match src/utils/event.js exactly, or slugs here
// will not line up with the routes in App.jsx.
function createEventSlug(name) {
  return name
    .toLowerCase()
    .replace(/[(),&]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function loadEventSlugs() {
  const manifestPath = path.join(ROOT, 'src', 'utils', 'eventsManifest.json');
  if (!fs.existsSync(manifestPath)) {
    console.warn(`[sitemap] No manifest found at ${manifestPath}, skipping event URLs.`);
    return [];
  }
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  return Object.keys(manifest).map((folder) => createEventSlug(folder));
}

function buildUrlEntry({ loc, priority, changefreq }) {
  return `  <url>
    <loc>${loc}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function main() {
  const staticEntries = STATIC_ROUTES.map((r) =>
    buildUrlEntry({ loc: `${SITE_URL}${r.path}`, priority: r.priority, changefreq: r.changefreq })
  );

  const eventSlugs = loadEventSlugs();
  const eventEntries = eventSlugs.map((slug) =>
    buildUrlEntry({ loc: `${SITE_URL}/events/${slug}`, priority: '0.6', changefreq: 'yearly' })
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...eventEntries].join('\n')}
</urlset>
`;

  const outDir = path.join(ROOT, 'public');
  fs.mkdirSync(outDir, { recursive: true });
  const outPath = path.join(outDir, 'sitemap.xml');
  fs.writeFileSync(outPath, xml, 'utf-8');

  console.log(`[sitemap] Wrote ${staticEntries.length} static + ${eventEntries.length} event URLs to ${outPath}`);
}

main();
