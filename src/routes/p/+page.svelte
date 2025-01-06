<!-- src/routes/p/+page.svelte -->
<script>
    import { formatDate } from '$lib/utils';
    export let data;
</script>

<h1>Posts page</h1>
<p>This could be where our posts live</p>

<ul>
    {#each data.posts as post}
    <li>
            <a href={post.path}>
                {post.meta.title}
            </a>
        <small>{formatDate(post.meta.date)}</small>
    </li>
    {/each}
</ul>

<style global lang="scss">
ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    a {
        text-decoration: none;
        color: $primary;
        transition: all 250ms ease-in;
    }
    a:hover {
        color: $black;
    }
    small {
        color: $body-black;
    }
}

</style>