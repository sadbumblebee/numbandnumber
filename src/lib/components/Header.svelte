<!-- Header.svelte -->
<script>
	import { inView } from '../actions/inView';
	import { fade, fly } from 'svelte/transition';

	let scrollY = 0;
	let isVisible = true;

	const handleViewChange = (visible) => {
		isVisible = visible;
	}

	const handleScroll = () => {
		scrollY = window.scrollY;
	};

	$: topTextPosition = Math.min(scrollY * 0.5, 200) + 20; // limit movement
	$: opacity = Math.max(1 - scrollY / 80, 0);   // fade out
	$: shadowTextPosition = Math.min(scrollY * 0.1, 200); 

</script>

<svelte:window on:scroll={handleScroll} />

<header use:inView={handleViewChange}>
	<div class="title-container">
		<div class="title">
			<a href="/">
			<h1 id="top-text" 
				style="top: -{topTextPosition}px; opacity: {opacity}"
				>numb & number
			</h1>
			</a>
			<h1 id="shadow-text" 
				style="transform: translateY({shadowTextPosition}px)"
				>numb & number</h1>
		</div>
	</div>
	<div class="nav-container">

		<nav>
			<ul>
				<li>
					<a href="/a">About</a>
				</li>
				<li>
					<a href="/p">Posts</a>
				</li>
			</ul>
		</nav>
	</div>
</header>
<div 
	class="sticky-nav {!isVisible ? 'visible' : 'hidden'}">
	<h4 class="title">numb & number</h4>
</div>


<style lang="scss">
	h1 {
		color: $black;
		font-family: $condensed;
		// font-size: 3.75rem;
		font-size: 67.5px;
		transition: font-size 250ms ease;
		margin: 0;
	}

	.title-container {
		padding-top: 116px;
		height: 170px;
		background-color: $primary;
	}
	.title {
		max-width: $column;
        margin: 0 auto;
		position: relative;
		a {
			text-decoration: none;
		}
	}
	#top-text {
		z-index: 2;
		position: absolute;
	}
	#shadow-text {
		color: $background;
		&::after {
			content: "";
			height: 100%;
			display: inline-block;
		}
	}
	
	// Navigation elements
	nav {
		max-width: $column;
		margin: 0 auto;
	}
	nav > ul {
		display: flex;
		flex-direction: row;
		gap: 12px;
		li {
			font-family: $sans;
			font-size: .95rem;
			text-transform: uppercase;
		}
		li > a {
			color: $beige;
			text-decoration: none;
			transition: color 250ms ease-in;
			display: inline-block;
			padding: 8px 8px 8px 0px;
		}
		li > a:hover {
			color: $body-black;
		}
	}

	.sticky-nav {
		width: 100%;
		overflow: hidden;
		background-color: $primary;
		position: sticky;
		top: 0;
		z-index: 5;
		opacity: 0;
		visibility: none;
		transform: translateY(-20%);
		transition: all 100ms ease;
		&.visible {
			opacity: 1;
			transform: translateY(0%);
			visibility: visible;
		}
		.title {
			margin-top: 10px;
			padding-top: 2px;
			color: $black;
			font-family: $condensed;
		}
	}

	@media (max-width: $column) {
		.title {
			margin: 0px 10px;
		 }
	}

	@media (max-width:540px) {
		h1 {
			font-size: 40px;
		}
		#top-text {
			padding-top: 28px;
		}
		#shadow-text {
			padding-top: 21px;
		}
	}
</style>