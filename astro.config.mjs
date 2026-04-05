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

  vite: {
    build: {
      chunkSizeWarningLimit: 7000,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (!id.includes('node_modules')) return;

            // Match leaf dependencies first to prevent circular chunks
            // (nested copies under @sanity/ must land here, not in vendor-sanity)
            if (id.includes('node_modules/react/') || id.includes('node_modules/react-is/')) {
              return 'vendor-react';
            }
            if (id.includes('node_modules/react-dom/')) {
              return 'vendor-react-dom';
            }

            // Sanity Studio + styled-components in one chunk
            // (tightly coupled; separating them causes circular imports)
            if (
              id.includes('node_modules/sanity/') ||
              id.includes('node_modules/@sanity/') ||
              id.includes('node_modules/styled-components/')
            ) {
              return 'vendor-sanity';
            }
          },
        },
      },
    },
  },
});
