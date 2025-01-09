import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/gamingpe",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("src"), // Directly resolve to 'src' folder
    },
  },
});
