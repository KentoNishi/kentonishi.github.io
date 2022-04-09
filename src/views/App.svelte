<script lang="ts">
  import { isLoading } from 'svelte-i18n';
  import Banner from '../components/Banner.svelte';
  import { exioApp } from 'exio';
  import Tiles from '../components/Tiles.svelte';
</script>

<div use:exioApp>
  {#if !$isLoading}
    <Banner />
    <Tiles />
  {/if}
</div>

<style>
  :root {
    --gray-fill: #171717;
    --blue-accent: #1b98ff;
  }
</style>
