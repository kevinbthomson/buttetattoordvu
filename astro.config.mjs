import sanity from "@sanity/astro";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

export default defineConfig({
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    sanity({
      projectId: "f70v9lhe",
      dataset: "production",
      useCdn: false,
      studioBasePath: "/admin",
    }),
    react(),
  ],

  adapter: netlify(),
});
