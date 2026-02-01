import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite"; // 1. Import it

// https://vite.dev/config/
export default defineConfig({
  plugins: [[react()], tailwindcss()],
  server: {
    port: 5173,
    open: true,
  }, // 2. Add it to the plugins array
});
