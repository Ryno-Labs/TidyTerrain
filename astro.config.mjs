import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://tidyterrain.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
