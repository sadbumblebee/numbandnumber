<script>
    import Newsletter from '$lib/components/Newsletter.svelte';
    import Webring from '$lib/components/Webring.svelte';
</script>

<svelte:head>
	<title>Numb & number — A data viz blog.</title>
	<meta property="og:title" content="Numb & number" />
</svelte:head>

<div class="homepage-layout">

<div class="stories-container">
        <div class="story">
            <div class="story-detail">
                <a href="/p/second-child-syndrome/"><h1>Second-child syndrome</h1></a>
                <p>The data we collected about our children and what we didn't ...</p>
                <small>By Daniel Wolfe</small>
            </div>
            <div class="story-promo"><a href="/p/second-child-syndrome/">
                <img src="/posts/second-child-syndrome/promo.jpg"
                alt="Photograph of the author as a young boy hitting a piñata as a promotional piece for the story."
                />
            </a></div>
        </div>
    <div class="story">
        <div class="story-detail">
            <a href="/p/dataviz-in-stories/"><h1>How to incorporate data visualizations into a story</h1></a>
            <p></p>
            <small>By Daniel Wolfe and Youyou Zhou</small>
        </div>
        <div class="story-promo"><a href="/p/dataviz-in-stories/">
            <img src="/posts/dataviz-in-stories/promo.jpg"
            alt="Promotional depiction of a line chart that is hand drawn."
            />
        </a></div>
    </div>
</div>

</div>
<article>
    <!-- <h3>Stay numb:</h3> -->
    <Newsletter/>
    <Webring/>
</article>

<style lang="scss">
    h1 {
        color: $black;
        transition: color 250ms ease;
        &:hover {
            color: $primary;
        }
    }
    p {
        color: $body-black;
    }
    .homepage-layout {
        margin: 0 auto;
        max-width: $super-column;
    }
    .stories-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
    .story {
        flex: 1;
        min-width: 0;
        display: flex;
        flex-direction: row;
        h1 {
            font-size: 1.45rem;
            margin: 0 auto;
        }
    }
    .story.detail, .story-promo {
        
        height: 100%;
    }

    small {
        color: $body-gray;
    }

    .story-detail {
        flex: 1 0 40%;
        min-width: 0;
    }

    .story-promo {
        flex: 1 1 60%;
        min-width: 0px;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            object-position: top;
        }
    }

    @media (max-width: $super-column) {
        .homepage-layout {
            padding: 0 10px;
        }
    }

    @media (max-width: $wide-column) {
        .stories-container {
            flex-direction: column;
            gap: 12px;
        }

        .story {
            flex: none;
        }

        .story-promo {
            img {
                height: unset;
                max-height: 220px;
                object-fit: contain;
        }
        } 
    }

    @media (max-width: $column) {
        .homepage-layout {
            padding: unset;
        }
        .story {
            align-items: start;
        }
        .story-promo {
            img {
                height: unset;
                max-height: 200px;
        }
        } 
    }

    @media (max-width: 540px) {
        .stories-container {
            gap: 60px;
        }
        .story {
            flex-direction: column;
        }
    }

</style>