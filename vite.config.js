import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Le repo s'appelle "cap" -> GitHub Pages sert le site sous /cap/
export default defineConfig({
  plugins: [react()],
  base: "/cap/",
});
