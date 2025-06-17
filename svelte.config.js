import adapter from '@sveltejs/adapter-static';
import autoprefixer from 'autoprefixer';
import { mdsvex } from 'mdsvex';
import { sveltePreprocess } from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			precompress: false,
			strict: true,
		}),
		prerender: {
			entries: ['*'], // Ensure all routes are prerendered
		}
	},
	trailingSlash: 'always',
	extensions: ['.svelte', '.md'],
	preprocess: [
		sveltePreprocess({
			scss: {
				// For later
				prependData: `
					@use 'src/lib/styles/_variables.scss' as *;
					@use 'src/lib/styles/style.scss' as *;
				`
			},
			postcss: {
				plugins: [autoprefixer]
			}
		}),
		mdsvex({
			extensions: ['.md']
		})
	]
};

export default config;
