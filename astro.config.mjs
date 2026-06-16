import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://www.natur-stellplatz-gampel.ch',
  output: 'static',
  integrations: [
    tailwind(),
    react(),
  ],
});
