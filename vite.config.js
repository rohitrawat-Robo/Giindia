import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import eventsManifestPlugin from "./vite-plugins/events-manifest-plugin.js";

export default defineConfig({
  base: "/dist/",
  plugins: [
    react(),
    tailwindcss(),
    eventsManifestPlugin(),
  ],
});