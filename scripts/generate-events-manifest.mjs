// scripts/generate-events-manifest.mjs
//
// Scans `public/events/<Event Folder>/` and writes a JSON manifest of
// which image files exist in each folder, to `src/utils/eventsManifest.json`.
//
// This exists because Vite cannot glob files inside `public/` from
// application code at build time (import.meta.glob only works on files
// under `src/`). This script (run automatically by the Vite plugin in
// vite-plugins/events-manifest-plugin.js) bridges that gap.

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(__dirname, '..');
const EVENTS_DIR = path.join(PROJECT_ROOT, 'public', 'events');
const OUTPUT_FILE = path.join(PROJECT_ROOT, 'src', 'utils', 'eventsManifest.json');

const SUPPORTED_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif']);

export function generateEventsManifest() {
  const manifest = {};

  if (!fs.existsSync(EVENTS_DIR)) {
    fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
    return manifest;
  }

  const entries = fs.readdirSync(EVENTS_DIR, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;

    const folderName = entry.name; // exact folder name, unchanged
    const folderPath = path.join(EVENTS_DIR, folderName);

    const files = fs
      .readdirSync(folderPath, { withFileTypes: true })
      .filter((f) => f.isFile())
      .map((f) => f.name)
      .filter((name) => SUPPORTED_EXTENSIONS.has(path.extname(name).toLowerCase()))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    manifest[folderName] = files;
  }

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
  return manifest;
}

// Allow running directly: node scripts/generate-events-manifest.mjs
if (import.meta.url === `file://${process.argv[1]}`) {
  const manifest = generateEventsManifest();
  const count = Object.keys(manifest).length;
  console.log(`events manifest generated: ${count} event folder(s) -> src/utils/eventsManifest.json`);
}
