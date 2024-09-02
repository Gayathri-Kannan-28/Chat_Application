// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:8000",  // Make sure the target is the backend URL
        changeOrigin: true,               // Needed to handle CORS properly
        rewrite: (path) => path.replace(/^\/api/, ""),  // Remove the /api prefix
        secure: false,                    // If using HTTP
      },
    },
  },
});
