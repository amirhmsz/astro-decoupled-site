// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // آدرس دامنه‌ای که در نهایت قرار است سایت روی آن قرار بگیرد
site: 'https://scintillating-gelato-dc7f95.netlify.app',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});