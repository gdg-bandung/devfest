// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import solidJs from '@astrojs/solid-js';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://devfest.gdgbandung.com",
  integrations: [solidJs()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),

  env: {
    schema: {
      PUBLIC_END_COUNTDOWN: envField.string({
        context: "client", access: "public", default: "2025-11-29T07:30:00+07:00"
      }),
    }
  },
});