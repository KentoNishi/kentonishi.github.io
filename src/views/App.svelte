<script lang="ts">
  import { isLoading, _ } from 'svelte-i18n';
  import { exioApp } from 'exio';
  import Router from 'svelte-spa-router';
  import { wrap } from 'svelte-spa-router/wrap';
  import { location } from 'svelte-spa-router';
  import { tick } from 'svelte';
  import Navbar from '../components/Navbar.svelte';
  let routes: {
    [key: string]: any;
  };
  $: if (!$isLoading)
    routes = {
      '/': wrap({
        asyncComponent: () => import('./Home.svelte'),
      }),
      '/publications': wrap({
        asyncComponent: () => import('./Publications.svelte'),
        userData: {
          title: $_('entries.research.title'),
        },
      }),
      '/apps': wrap({
        asyncComponent: () => import('./Projects.svelte'),
        userData: {
          title: $_('entries.apps.title'),
        },
      }),
      // '/libs': wrap({
      //   asyncComponent: () => import('./Packages.svelte'),
      //   userData: {
      //     title: $_('entries.packages.title'),
      //   },
      // }),
      // '*': NotFound,
    };
  let loaded = false;
  const toggle = async () => {
    loaded = false;
    await tick();
    loaded = true;
  };
  $: if ($location && !$isLoading) toggle();

  const height = 30;
  let title = '';

  $: isHome = $location === '/';

  const routeLoaded = (e: CustomEvent) => {
    if (e.detail.userData) title = e.detail.userData.title;
  };
</script>

{#if loaded}
  <div use:exioApp>
    {#if !isHome}
      <Navbar {height} {title} />
    {/if}
    <div style="margin-top: {isHome ? 0 : height}px;">
      <Router on:routeLoaded={routeLoaded} {routes} />
    </div>
  </div>
{/if}

<style>
  :root {
    --gray-fill: #151515;
    --gray-fill-lighter: #2f2f2f;
    --gray-accent: #4f4f4f;
    --blue-accent: #1b98ff;
    --grid-padding: 2rem;
    color-scheme: dark;
  }
</style>
