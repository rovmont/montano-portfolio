// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
// GitHub Pages project site: https://rovmont.github.io/montano-portfolio/
export default defineConfig({
  site: "https://rovmont.github.io",
  base: "/montano-portfolio",
  vite: {
    // LightningCSS drops unprefixed backdrop-filter when -webkit- is present,
    // which breaks frosted glass in Chromium on the deployed build.
    build: {
      cssMinify: "esbuild",
    },
  },
});
