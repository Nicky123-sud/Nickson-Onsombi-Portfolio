import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";

// Deploys to https://nicky123-sud.github.io/Nickson-Onsombi-Portfolio/ by default.
// Override for a root-domain host (Netlify, Vercel, custom domain) with:
//   BASE_PATH=/ npm run build
export default defineConfig({
  base: process.env.BASE_PATH ?? "/Nickson-Onsombi-Portfolio/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
});
