<!-- src/routes/p/[slug]/+page.svelte -->
<script>
	import { formatAuthors, formatDate } from '$lib/utils';
	import PostHero from '$lib/components/PostHero.svelte';
	export let data;
	const { title, date, author, hero_image, hero_layout, hero_alt, Content } = data;

	const hasHero = hero_image && hero_layout;
</script>

<svelte:head>
	<title>Numb & number – {title}</title>
	<meta property="og:title" content={title} />
</svelte:head>

<article>
	{#if hasHero}
		<PostHero {title} src={hero_image} alt={hero_alt} layout={hero_layout} />
	{:else}
		<h1>{title}</h1>
	{/if}
	<div class="byline">
	<small>By: {formatAuthors(author)}</small>
	<small>{formatDate(date)}</small>
	</div>
	
	<Content />
	<!-- <svelte:component this={data.content} /> -->
</article>

<!-- Style for top of post page -->
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