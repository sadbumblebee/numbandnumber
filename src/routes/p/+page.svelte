<!-- src/routes/p/+page.svelte -->
<script>
    export let data;
</script>

<h1>Posts page</h1>
<p>This could be where our posts live</p>

<ul>
    {#each data.posts as post}
    <li>
        <h2>
            <a href={post.path}>
                {post.meta.title}
            </a>
        </h2>
        <p>Published {post.meta.date}</p>
    </li>
    {/each}
</ul>