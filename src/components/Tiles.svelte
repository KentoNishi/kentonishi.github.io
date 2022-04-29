<script lang="ts">
  import { STAGGER } from '../ts/constants';

  import type { TileEntry } from '../ts/types';
  import Tile from './Tile.svelte';

  export let tiles: TileEntry[] = [];
</script>

<div class="wrap">
  <div class="grid">
    {#each tiles as tile, index}
      <Tile data={tile} delay={index * STAGGER} />
    {/each}
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-items: center;
    padding: 0rem 2rem 2rem 2rem;
    gap: 20px;
    width: min(calc(100% - 4rem), 1000px);
    overflow: hidden;
  }
  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: visible;
  }
</style>
