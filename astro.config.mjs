// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
  site: "https://devfest.gdgbandung.com",
  integrations: [solidJs()],
  vite: {
    plugins: [tailwindcss()],
  },
});