import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // Relative base so the build works both at a domain root (e.g. techswamy.com)
  // and under a GitHub Pages project subpath (/founder-agentops-workshop/).
  base: "./",
  plugins: [react(), tailwindcss()],
});
