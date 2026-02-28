// src/routes/p/[slug]/+page.js

// TK wrap this in a try/catch
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, author, hero_image, hero_layout, hero_alt } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
		author,
		hero_image: hero_image ?? null,
		hero_layout: hero_layout ?? null,
		hero_alt: hero_alt ?? ''
	};
}
