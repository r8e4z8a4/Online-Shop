import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import Path from "path";
export default defineConfig(({ command }) => ({
  base: command === "serve" ? "/" : process.env.GITHUB_PAGES === "true" ? "/Online-Shop/" : "/",
  plugins: [
    react(),
    babel({
      presets: [reactCompilerPreset()],
    }),
    tailwindcss(),
  ],
  resolve:{
    alias:{"@": Path.resolve(import.meta.dirname,"./src")}
  }
}));
