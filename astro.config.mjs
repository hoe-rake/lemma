import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import solidJs from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import { SITE_URL } from "./src/consts.ts";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    mdx(),
    sitemap(),
    solidJs({
      include: "**.tsx",
    }),
    tailwind(),
  ],
});
