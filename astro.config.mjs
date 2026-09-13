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
    // @ts-expect-error Astro and the workspace Vite dependency resolve different compatible Plugin types.
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),

  env: {
    schema: {
      PUBLIC_END_COUNTDOWN: envField.string({
        context: "client", access: "public", default: "2026-12-12T08:00:00+07:00"
      }),
    }
  },
});
