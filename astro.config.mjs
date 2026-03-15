// @ts-check
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    sanity({
      projectId: 'f70v9lhe',
      dataset: 'production',
      useCdn: false,
      studioBasePath: '/admin',
    }),
    ,
    react(),
  ],
});
