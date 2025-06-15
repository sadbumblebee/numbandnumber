<script>
  import { onMount } from "svelte";

  let { slug, name, description, assetsPathOverride = undefined } = $props();
  let Visual = $state(null); // Using $state for reactivity

  onMount(async () => {
    try {
      // Attempt direct dynamic import first
      const module = await import(`../content/posts/${slug}/${name}.svelte`);
      Visual = module.default;
    } catch (e) {
      console.error(`Failed to load Visual component ../content/posts/${slug}/${name}.svelte directly:`, e);
      // Fallback to import.meta.glob if direct import fails (e.g., due to Vite limitations)
      // This is a more robust way for dynamic paths in Vite/Astro
      console.log("Attempting fallback with import.meta.glob");
      try {
        const modules = import.meta.glob('../content/posts/*/*.svelte');
        const path = `../content/posts/${slug}/${name}.svelte`;
        if (modules[path]) {
          const globModule = await modules[path]();
          Visual = globModule.default;
        } else {
          console.error(`Visual component not found via import.meta.glob: ${path}`);
          // console.error("Available modules:", Object.keys(modules));
        }
      } catch (globE) {
        console.error(`Failed to load Visual component via import.meta.glob for ${slug}/${name}:`, globE);
      }
    }

    // only want one resizer on the page
    if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1)
      return;
    document.documentElement.className += " g-resizer-v3-init";
    // require IE9+
    if (!("querySelector" in document)) return;
    function resizer() {
      var elements = Array.prototype.slice.call(
          document.querySelectorAll(".g-artboard[data-min-width]")
        ),
        widthById = {};
      elements.forEach(function (el) {
        var parent = el.parentNode,
          width = widthById[parent.id] || parent.getBoundingClientRect().width,
          minwidth = el.getAttribute("data-min-width"),
          maxwidth = el.getAttribute("data-max-width");
        widthById[parent.id] = width;

        if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
          el.style.display = "block";
        } else {
          el.style.display = "none";
        }
      });
    }

    // feel free to replace throttle with _.throttle, if available
    window.addEventListener("resize", throttle(resizer, 200));
    setTimeout(resizer, 250)

    function throttle(func, wait) {
      // from underscore.js
      var _now =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        context,
        args,
        result,
        timeout = null,
        previous = 0;
      var later = function () {
        previous = _now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      };
      return function () {
        var now = _now(),
          remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
          if (timeout) {
            clearTimeout(timeout);
            timeout = null;
          }
          previous = now;
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        } else if (!timeout) {
          timeout = setTimeout(later, remaining);
        }
        return result;
      };
    }
  });

  // Determine the assetsPath to pass to the child component
  const finalAssetsPath = $derived(assetsPathOverride !== undefined ? assetsPathOverride : './ai2html-output');

</script>

{#if Visual}
  <div class="ai2html-container">
    <div class="sr-only">
      {description}
    </div>
    <div aria-hidden="true">
      <svelte:component this={Visual} assetsPath={finalAssetsPath} />
    </div>
  </div>
{:else}
  <p>Loading Ai2html Visual: {slug}/{name}...</p>
  <!-- Provide some feedback or a placeholder if Visual is not yet loaded -->
{/if}

<style>
  .ai2html-container {
    padding-bottom: 1em;
  }

  .sr-only {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
</style>
