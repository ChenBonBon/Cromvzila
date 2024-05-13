import { defineConfig } from "@solidjs/start/config";
import devtools from "solid-devtools/vite";
import netlify from "solid-start-netlify";
import solid from "solid-start/vite";

export default defineConfig({
  vite: {
    plugins: [
      devtools({
        autoname: true, // e.g. enable autoname
      }),
      solid({
        adapter: netlify({ edge: true }),
      }),
    ],
  },
});
