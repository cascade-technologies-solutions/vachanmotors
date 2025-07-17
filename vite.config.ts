
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/vachanmotors/", // For GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias for "@/components/..."
    },
  },
  server: {
    port: 8080
  }
});
