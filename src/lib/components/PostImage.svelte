<script>
	export let src;
	export let alt;
</script>

<enhanced:img {src} {alt} class="post-img" />

<style>
	.post-img {
		max-width: 100%;
		height: auto;
		display: block;
		margin-bottom: 10px;
	}
</style>
