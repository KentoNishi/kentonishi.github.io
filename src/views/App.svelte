<script lang="ts">
  import { isLoading } from 'svelte-i18n';
  import { exioApp } from 'exio';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import { location } from 'svelte-spa-router';
  import { tick } from 'svelte';
  const routes = {
    '/': wrap({
      asyncComponent: () => import('./Home.svelte'),
    }),
    '/publications': wrap({
      asyncComponent: () => import('./Publications.svelte'),
    }),
    // '*': NotFound,
  };
  let loaded = false;
  const toggle = async () => {
    loaded = false;
    await tick();
    loaded = true;
  };
  $: if ($location && !$isLoading) toggle();
</script>

{#if loaded}
  <div use:exioApp>
    <Router {routes} />
  </div>
{/if}

<style>
  :root {
    --gray-fill: #171717;
    --gray-accent: #4f4f4f;
    --blue-accent: #1b98ff;
    --grid-padding: 2rem;
  }
</style>
