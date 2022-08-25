import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/BaseMenu.js"),
      name: "BaseMenu",
      formats: ["iife", "es"],
      fileName: format => `base-menu.${format}.js`,
    },
    minify: "terser",
  },
});
