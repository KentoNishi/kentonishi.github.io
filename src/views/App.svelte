<script lang="ts">
  import { isLoading } from 'svelte-i18n';
  import { exioApp } from 'exio';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  const routes = {
    '/': wrap({
      asyncComponent: () => import('./Home.svelte'),
    }),
    // '*': NotFound,
  };
</script>

{#if !$isLoading}
  <div use:exioApp>
    <Router {routes} />
  </div>
{/if}

<style>
  :root {
    --gray-fill: #171717;
    --blue-accent: #1b98ff;
    --grid-padding: 2rem;
  }
  :global(a) {
    text-decoration: none;
    color: inherit;
  }
</style>
