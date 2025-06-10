import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	// Simplified configuration without wildcards
	optimizeDeps: {
		exclude: ['ai2html-output']
	}
});
