import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  site: 'https://example.com', // Configure this later
  output: 'static', // Assuming static output based on sveltejs/adapter-static
});
