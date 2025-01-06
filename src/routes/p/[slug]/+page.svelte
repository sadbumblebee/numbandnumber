<!-- src/routes/p/[slug]/+page.svelte -->
<script>
	import { formatAuthors, formatDate } from '$lib/utils';
	export let data;
	const { title, date, author, Content } = data;
</script>

<svelte:head>
	<title>Numb & number – {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	<h1>{title}</h1>
	<div class="byline">
	<small>By: {formatAuthors(author)}</small>
	<small>{formatDate(date)}</small>
	</div>
	
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
	.byline {
		display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
		color: $body-black;
	}
</style>