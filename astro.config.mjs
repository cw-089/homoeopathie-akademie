// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://homoeopathie-akademie.com',
  vite: {
    plugins: [tailwindcss()]
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});