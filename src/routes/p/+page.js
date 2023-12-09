// src/p/+page.js
export const load = async ({ fetch }) => {
	const response = await fetch(`/api/p`);
	const posts = await response.json();

	return {
		posts
	};
};
