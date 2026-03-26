/*
 * File: vite.config.ts
 * Project: boilerplate
 * Author: Pedro Farias
 * Created: 2026-03-25
 * 
 * Last Modified: Wed Mar 25 2026
 * Modified By: Pedro Farias
 * 
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
