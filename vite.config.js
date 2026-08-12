import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import eventsManifestPlugin from './vite-plugins/events-manifest-plugin.js';

export default defineConfig(({ command }) => ({
  base: command === "build" ? "/demo1/" : "/",
  plugins: [
    react(),
    tailwindcss(),
    eventsManifestPlugin(),
  ],
}));


