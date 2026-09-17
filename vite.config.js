import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/api": {
        target: "https://chrono-watch-care-production-7a92.up.railway.app/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
