import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://0xsac.com',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});