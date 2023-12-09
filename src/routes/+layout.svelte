<!-- +layout.svelte -->
<script>
    import Header from '$lib/components/Header.svelte';

    // Vars
    import '$lib/styles/style.scss';
</script>
<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Condensed:wght@700&family=IBM+Plex+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
</svelte:head>

<Header />

<main>
    <slot />
</main>

<footer>Footer</footer>

<style global lang="scss">
    @import 'sanitize.css';

    body {
        background-color: $background;
        font-family: $sans;
    }

    main {
        width: 100%;
        max-width: $column;
        margin: 0 auto;
    }
</style>