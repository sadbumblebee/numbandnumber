---
title: Sprinkler city
date: '2025-06-28'
author:
  - Daniel Wolfe
---

Test map

<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import { browser } from '$app/environment';
  import { Protocol } from 'pmtiles';
  import maplibregl from 'maplibre-gl';
  
  let mapContainer: HTMLDivElement;
  let map: maplibregl.Map;
  let hoveredFeature = null;
  let hoveredId = null;

  let protocol = new Protocol();
  maplibregl.addProtocol("pmtiles", protocol.tile);
  
  onMount(() => {
    if (browser && mapContainer) {
      map = new maplibregl.Map({
        container: mapContainer,
        style: '/posts/sprinkler-playgrounds-nyc/style.json', // Your style URL
        center: [-73.97637211990262, 40.67016176496755],
        zoom: 9.5,
        bearing: 28,
        interactive: false,
        maplibreLogo: false,
      });
      
      // Optional: Add navigation controls
      // map.addControl(new maplibregl.NavigationControl());
      
      // Optional: Add event listeners
      map.on('load', () => {
        console.log('Map loaded');
        
      });

    //   map.on('mouseenter', 'tracts-outline', handleMouseEnter);
      map.on('mouseleave', 'tracts-outline', handleMouseLeave);
      map.on('mousemove', 'tracts-outline', handleMouseMove);
      
      map.on('click', (e) => {
        console.log('Map clicked at:', e.lngLat);
      });
    }
  });
  
  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });

  function handleMouseMove(e) {
    map.getCanvas().style.cursor = 'pointer';
    
    // Update reactive variable
    hoveredFeature = e.features[0].properties;
    console.log(hoveredFeature)

    if (e.features.length > 0) {
        if (hoveredId) {
            map.setFeatureState(
                {source: 'sprinklers', sourceLayer: 'tracts', id: hoveredId},
                {hover: false}
            );
        }
        hoveredId = e.features[0].id;
        console.log(hoveredId)
        map.setFeatureState(
            {source: 'sprinklers', sourceLayer: 'tracts', id: hoveredId},
            {hover: true}
        );
    }
    
    // Show popup
    // showPopup(e);
  }

  function handleMouseLeave() {
    if (hoveredId) {
            map.setFeatureState(
                {source: 'sprinklers', sourceLayer: 'tracts',  id: hoveredId},
                {hover: false}
            );
        }
    hoveredId = null;
  }

</script>

<div class="map-wrap">
<div bind:this={mapContainer} class="map-container"></div>
<div class="tooltip">
    <h4>Tooltip:</h4>
    {#if hoveredFeature !== null}
        {#each Object.entries(hoveredFeature) as [key, value]}
        <small>{key}: {value}</small><br>
        {/each}
    {/if}
</div>
</div>

<style lang="scss">
@import 'maplibre-gl/dist/maplibre-gl.css';
  .map-wrap {
    position: relative;
  }
  .map-container {
    /* width: $wide-column;
    transform: translateX(-50%);
    margin: 0 50%; */
    height: 720px;
  }
  .tooltip {
    position: absolute;
    top: 0;
    pointer-events: none;
  }
</style>