import sanity from '@sanity/astro';
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';

import netlify from '@astrojs/netlify';

export default defineConfig({
  image: {
    domains: ['cdn.sanity.io'],
  },
  integrations: [
    sanity({
      projectId: 'f70v9lhe',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    react(),
  ],

  fonts: [
    {
      provider: fontProviders.local(),
      name: 'WesternChristmas',
      cssVariable: '--font-western-christmas',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/western_christmas-webfont.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'KnuckleheadSlabUltraBlack',
      cssVariable: '--font-knucklehead-slab-ultra-black',
      options: {
        variants: [
          {
            src: [
              './src/assets/fonts/knuckleheadslab-ultrablack-webfont.woff2',
            ],
            weight: '100 900',
            style: 'normal',
            // display: 'swap',
          },
        ],
      },
    },
  ],

  adapter: netlify(),

  // vite: {
  //   build: {
  //     chunkSizeWarningLimit: 7000,
  //     rollupOptions: {
  //       output: {
  //         manualChunks(id) {
  //           if (!id.includes('node_modules')) return;

  //           // Match leaf dependencies first to prevent circular chunks
  //           // (nested copies under @sanity/ must land here, not in vendor-sanity)
  //           if (
  //             id.includes('node_modules/react/') ||
  //             id.includes('node_modules/react-is/')
  //           ) {
  //             return 'vendor-react';
  //           }
  //           if (id.includes('node_modules/react-dom/')) {
  //             return 'vendor-react-dom';
  //           }

  //           // Sanity Studio + styled-components in one chunk
  //           // (tightly coupled; separating them causes circular imports)
  //           if (
  //             id.includes('node_modules/sanity/') ||
  //             id.includes('node_modules/@sanity/') ||
  //             id.includes('node_modules/styled-components/')
  //           ) {
  //             return 'vendor-sanity';
  //           }
  //         },
  //       },
  //     },
  //   },
  // },
});
