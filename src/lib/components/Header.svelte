<!-- Header.svelte -->
<header>
	<div class="title-container">
		<div class="title">
			<a href="/">
			<h1 class="original">numb & number</h1>
			</a>
			<h1 class="shadow">numb & number</h1>
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

<style lang="scss">
	h1 {
		color: $black;
		font-family: $condensed;
		font-size: 3.75rem;
		margin: 0;
	}
	// header {
	// 	background-color: $primary;
	// }
	.title-container {
		padding-top: 50px;
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
	.original {
		z-index: 2;
		position: relative;
	}
	.shadow {
		z-index: 1;
		bottom: -25px;
		color: $background;
		position: absolute;
	}
	
	// Navigation elements
	nav {
		max-width: $column;
		margin: 0 auto;
	}
	nav > ul{
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
</style>