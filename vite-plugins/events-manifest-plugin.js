// vite-plugins/events-manifest-plugin.js
//
// Keeps src/utils/eventsManifest.json in sync with whatever image files
// actually exist inside public/events/<Event Folder>/, automatically:
//   - once when `vite build` starts
//   - once when the dev server starts
//   - every time a file/folder is added or removed under public/events
//     while `npm run dev` is running
//
// You never have to type filenames by hand or re-run anything manually
// during development.

import path from 'node:path';
import { generateEventsManifest } from '../scripts/generate-events-manifest.mjs';

export default function eventsManifestPlugin() {
  return {
    name: 'events-manifest-plugin',

    buildStart() {
      generateEventsManifest();
    },

    configureServer(server) {
      // Generate once immediately when `npm run dev` starts.
      generateEventsManifest();

      const eventsDir = path.resolve(server.config.root, 'public', 'events');

      const isRelevant = (file) => {
        if (!file) return false;
        return path.resolve(file).startsWith(eventsDir);
      };

      const regenerate = (file) => {
        if (!isRelevant(file)) return;
        generateEventsManifest();
        // Manifest content changed -> reload so the new data is picked up.
        server.ws.send({ type: 'full-reload' });
      };

      server.watcher.on('add', regenerate);
      server.watcher.on('unlink', regenerate);
      server.watcher.on('addDir', regenerate);
      server.watcher.on('unlinkDir', regenerate);
    },
  };
}
