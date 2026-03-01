<script>
	import Newsletter from '$lib/components/Newsletter.svelte';
	import Webring from '$lib/components/Webring.svelte';
	import { formatDate, formatAuthors } from '$lib/utils';

	export let data;

	// Posts are sorted newest-first from the API
	$: posts = data.posts;

	// Featured post: explicitly marked with featured: true, or fall back to most recent
	$: featuredPost = posts.find((p) => p.meta.featured) || posts[0];

	// Secondary posts: everything except the featured story
	$: secondaryPosts = posts.filter((p) => p !== featuredPost);

    function promoImage(path) {
        const slug = path.split('/').filter(Boolean).pop();
        return `/p/${slug}/promo.jpg`;
    }
</script>

<svelte:head>
	<title>Numb & number — A data viz blog.</title>
	<meta property="og:title" content="Numb & number" />
</svelte:head>

<div class="homepage-layout">
	{#if featuredPost}
		<div class="featured-story">
			<div class="featured-text">
				{#if featuredPost.meta.featured}
					<span class="label">Featured</span>
				{/if}
				<a href={featuredPost.path}>
					<h1>{featuredPost.meta.title}</h1>
				</a>
				{#if featuredPost.meta.description}
					<p class="excerpt">{featuredPost.meta.description}</p>
				{/if}
				<p class="byline">
					By {formatAuthors(featuredPost.meta.author)} &middot; {formatDate(featuredPost.meta.date)}
				</p>
			</div>
			<div class="featured-image">
				<a href={featuredPost.path}>
					<img
						src={promoImage(featuredPost.path)}
						alt="Promo image for {featuredPost.meta.title}"
					/>
				</a>
			</div>
		</div>
	{/if}

	{#if secondaryPosts.length > 0}
		<div class="divider"></div>
		<div class="secondary-stories">
			{#each secondaryPosts as post}
				<div class="secondary-story">
					<a href={post.path}>
						<img src={promoImage(post.path)} alt="Promo image for {post.meta.title}" />
					</a>
					<div class="secondary-text">
						<a href={post.path}><h2>{post.meta.title}</h2></a>
						{#if post.meta.description}
							<p>{post.meta.description}</p>
						{/if}
						<small>By {formatAuthors(post.meta.author)} &middot; {formatDate(post.meta.date)}</small
						>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<article>
	<Newsletter />
	<Webring />
</article>

<style lang="scss">
	a {
		text-decoration: none;
	}

	.homepage-layout {
		margin: 0 auto;
		max-width: $super-column;
		padding: 2rem 0;
	}

	/* ── Featured / hero story ── */
	.featured-story {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 2rem;
		align-items: start;
		padding-bottom: 2.5rem;
	}

	.featured-text {
		.label {
			display: inline-block;
			font-size: 0.7rem;
			font-weight: 700;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			color: $primary;
			border: 1.5px solid $primary;
			padding: 2px 8px;
			margin-bottom: 0.75rem;
		}

		h1 {
			font-size: 2.2rem;
			line-height: 1.15;
			margin: 0 0 0.85rem;
			color: $black;
			transition: color 250ms ease;
			&:hover {
				color: $primary;
			}
		}

		.excerpt {
			color: $body-black;
			font-size: 1.05rem;
			line-height: 1.55;
			margin-bottom: 0.85rem;
		}

		.byline {
			color: $body-gray;
			font-size: 0.85rem;
			margin: 0;
		}
	}

	.featured-image {
		img {
			width: 100%;
			aspect-ratio: 3 / 2;
			object-fit: cover;
			object-position: top;
			display: block;
		}
	}

	/* ── Divider ── */
	.divider {
		height: 1px;
		background-color: $primary-light;
		margin-bottom: 2rem;
	}

	/* ── Secondary stories grid ── */
	.secondary-stories {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 1.75rem;
	}

	.secondary-story {
		img {
			width: 100%;
			aspect-ratio: 4 / 3;
			object-fit: cover;
			object-position: top;
			display: block;
			margin-bottom: 0.75rem;
		}

		h2 {
			font-size: 1.1rem;
			line-height: 1.3;
			margin: 0 0 0.4rem;
			color: $black;
			transition: color 250ms ease;
			&:hover {
				color: $primary;
			}
		}

		p {
			color: $body-black;
			font-size: 0.9rem;
			line-height: 1.5;
			margin: 0 0 0.4rem;
		}

		small {
			color: $body-gray;
			font-size: 0.8rem;
		}
	}

	/* ── Responsive ── */
	@media (max-width: $super-column) {
		.homepage-layout {
			padding: 2rem 10px;
		}
	}

	@media (max-width: $wide-column) {
		.featured-story {
			grid-template-columns: 1fr;
		}

		.featured-image {
			order: -1;
		}
	}

	@media (max-width: $column) {
		.homepage-layout {
			padding: 1.5rem 10px;
		}

		.featured-text h1 {
			font-size: 1.75rem;
		}

		.secondary-stories {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 480px) {
		.secondary-stories {
			grid-template-columns: 1fr;
		}
	}
</style>
