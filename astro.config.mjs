import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ────────────────────────────────────────────────────────────────
// If you ever move this site to a custom domain (e.g. dustin.dev),
// change `site` to that URL and delete the `base` line entirely.
// ────────────────────────────────────────────────────────────────
export default defineConfig({
  site: 'https://medicd21.github.io',
  base: '/Dustin-Portfolio',
  integrations: [sitemap()],
});
