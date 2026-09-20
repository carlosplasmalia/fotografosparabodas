// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fotografosparabodas.es',
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sitemap({
      filter: (page) => !/(aviso-legal|cookies|privacidad|blog\/mejores-fotografos-de-bodas-espana)/.test(page),
      serialize(item) {
        if (item.url === 'https://fotografosparabodas.es/' || item.url === 'https://fotografosparabodas.es/en/') {
          return { ...item, changefreq: 'weekly', priority: 1.0 };
        }
        if (/\/en\/(malaga|mallorca|barcelona|granada|sevilla|tenerife)\//.test(item.url)) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        if (/\/(malaga|zaragoza|murcia|bilbao|cordoba|alicante|valladolid|granada|san-sebastian)\//.test(item.url)) {
          return { ...item, changefreq: 'monthly', priority: 0.9 };
        }
        if (/\/fotografo\//.test(item.url)) {
          return { ...item, changefreq: 'monthly', priority: 0.85 };
        }
        if (/\/(estilo|en\/style)\//.test(item.url)) {
          return { ...item, changefreq: 'monthly', priority: 0.75 };
        }
        if (/\/(blog|en\/blog)\//.test(item.url)) {
          return { ...item, changefreq: 'monthly', priority: 0.7 };
        }
        return { ...item, changefreq: 'monthly', priority: 0.6 };
      },
    }),
  ],
});
