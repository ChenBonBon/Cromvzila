import { defineConfig } from "@solidjs/start/config";
import devtools from "solid-devtools/vite";

export default defineConfig({
  server: {
    preset: "netlify",
  },
  vite: {
    plugins: [
      devtools({
        autoname: true, // e.g. enable autoname
      }),
    ],
  },
});
