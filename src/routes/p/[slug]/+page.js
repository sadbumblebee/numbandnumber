// src/routes/p/[slug]/+page.js

// TK wrap this in a try/catch
export async function load({ params }) {
	const post = await import(`../${params.slug}.md`);
	const { title, date, author } = post.metadata;
	const Content = post.default;

	return {
		Content,
		title,
		date,
		author
	};
}
