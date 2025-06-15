import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';
import sveltePreprocess from 'svelte-preprocess'; // Import svelte-preprocess

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte({
      // Add the preprocess option here
      preprocess: sveltePreprocess({
        scss: {
          // You can add options here if needed, e.g., includePaths
          // For example, if you had global styles you wanted implicitly available:
          // prependData: `@import "src/styles/_variables.scss";`
          // However, explicit imports in components are generally better.
        },
      }),
    }),
    mdx()
  ],
  site: 'https://example.com', // Configure this later
  output: 'static',
});
