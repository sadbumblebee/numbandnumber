<script>
    import Divider from "$lib/components/Divider.svelte";

    export let data = [
        {
            name: "Tim Kempf",
            url: "https://kempf.dev/",
        },
        {
            name: "Mayowa Tomori",
            url: "https://mayowatomori.com/",
        },
        {
            name: "Janice Kai Chen",
            url: "https://janicekchen.com/"
        }
    ]
</script>

<Divider/>
<div>
    <p>Some amazing people in my webring:</p>
    {#each data as link }
        <span><a href={link.url} target="_blank">{link.name}</a></span>
    {/each}
</div>

<style lang="scss">
p {
    display: block;
    margin: 0rem auto .75rem;
}

span {
    font-weight: 400;
    font-size: .75rem;
    text-transform: uppercase;
    &::after {
        color: $primary-light;
        font-weight: 800;
        content: '·';
        padding: 0px .75rem;
    }
    &:last-child {
        padding-right: 0;
        &::after {
            content: '';
            visibility: hidden;
    }
    }
}

</style>