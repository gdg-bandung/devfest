// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://devfest.gdgbandung.com",

  redirects: {
    "/cfp": "/cfs",
  },

  build: {
    // The CSS is small, so inline it to avoid a render-blocking request.
    inlineStylesheets: "always",
  },

  adapter: cloudflare(),
});
