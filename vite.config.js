import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import eventsManifestPlugin from "./vite-plugins/events-manifest-plugin.js";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/dist/" : "/",

  plugins: [
    react(),
    tailwindcss(),
    eventsManifestPlugin(),
  ],
}));