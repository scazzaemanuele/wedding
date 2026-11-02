// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Public site URL, used for canonical links and social preview images (og:image).
// Override at build time with PUBLIC_SITE_URL if the domain changes.
const site = process.env.PUBLIC_SITE_URL ?? 'https://yejimanuwedding.date';

// https://astro.build/config
export default defineConfig({
  site,
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['guided-legally-bonefish.ngrok-free.app']
    }
  }
});