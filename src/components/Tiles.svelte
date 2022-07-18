<script lang="ts">
  import { STAGGER } from '../ts/constants';

  import type { TileEntry } from '../ts/types';
  import Tile from './Tile.svelte';

  export let tiles: TileEntry[] = [];
</script>

<div class="wrap">
  <div class="grid">
    {#each tiles as tile, index}
      <Tile data={tile} delay={(index + 1) * STAGGER} />
    {/each}
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    justify-items: center;
    gap: 20px;
    width: min(calc(100%), 1000px);
    overflow: hidden;
    padding: 0rem 1rem 1rem 1rem;
  }
  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: visible;
  }
</style>
