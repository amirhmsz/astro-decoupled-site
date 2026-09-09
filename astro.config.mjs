// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // آدرس دامنه‌ای که در نهایت قرار است سایت روی آن قرار بگیرد
  site: 'https://example.com', 

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});