import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import { redact } from "@tanstack/redact/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), redact(), babel({ presets: [reactCompilerPreset()] })],
});
