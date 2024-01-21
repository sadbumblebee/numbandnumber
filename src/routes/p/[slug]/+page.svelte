<!-- src/routes/p/[slug]/+page.svelte -->
<script>
	import { formatAuthors } from '$lib/utils';
	export let data;
	const { title, date, author, Content } = data;
</script>

<svelte:head>
	<title>Numb & number – {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<h1>{title}</h1>
	<p>Published: {date}</p>
	<p>By: {formatAuthors(author)}</p>
	<Content />
	<!-- <svelte:component this={data.content} /> -->
</article>

<style lang="scss">
	h1 {
		color: $black;
	}
	p {
		color: $body-black;
	}
</style>