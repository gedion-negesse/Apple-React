import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Apple-React/",
  plugins: [react()],

  /*server: {
    port: 4041,
  },
  css: {
    devSourcemap: false,
  },*/
});
