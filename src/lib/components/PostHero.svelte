<!-- PostHero.svelte -->
<!-- Supports three hero image layouts for post headers:
     full-bleed: full-width image with headline below
     half-left:  image on the left, headline on the right
     half-right: image on the right, headline on the left
-->
<script>
	export let title;
	export let image;
	export let alt = '';
	export let layout = 'full-bleed';
</script>

{#if layout === 'full-bleed'}
	<div class="hero hero--full-bleed">
		<img src={image} alt={alt} />
		<h1>{title}</h1>
	</div>
{:else if layout === 'half-left'}
	<div class="hero hero--half hero--half-left">
		<div class="hero__image">
			<img src={image} alt={alt} />
		</div>
		<div class="hero__text">
			<h1>{title}</h1>
		</div>
	</div>
{:else if layout === 'half-right'}
	<div class="hero hero--half hero--half-right">
		<div class="hero__text">
			<h1>{title}</h1>
		</div>
		<div class="hero__image">
			<img src={image} alt={alt} />
		</div>
	</div>
{/if}

<style lang="scss">
	/* ── Full-bleed ────────────────────────────────────────────── */
	.hero--full-bleed {
		width: 100vw;
		position: relative;
		left: 50%;
		right: 50%;
		margin-left: -50vw;
		margin-right: -50vw;

		img {
			display: block;
			width: 100%;
			max-height: 70vh;
			object-fit: cover;
		}

		h1 {
			max-width: $column;
			margin: 1rem auto 0;
			padding: 0 1rem;
			color: $black;
		}
	}

	/* ── Half-page shared ──────────────────────────────────────── */
	.hero--half {
		display: flex;
		align-items: center;
		gap: 2rem;
		width: 100%;

		.hero__image {
			flex: 1 1 50%;
			img {
				display: block;
				width: 100%;
				height: 100%;
				max-height: 60vh;
				object-fit: cover;
			}
		}

		.hero__text {
			flex: 1 1 50%;
			h1 {
				color: $black;
				margin: 0;
			}
		}
	}

	/* ── Responsive: stack on small screens ───────────────────── */
	@media (max-width: $column) {
		.hero--half {
			flex-direction: column;
			gap: 1rem;

			.hero__image {
				flex: 1 1 auto;
				width: 100%;
			}
			.hero__text {
				flex: 1 1 auto;
				width: 100%;
			}
		}

		/* On small screens, full-bleed title sits closer to the image */
		.hero--full-bleed h1 {
			margin-top: 0.5rem;
		}
	}
</style>
