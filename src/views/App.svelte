<script lang="ts">
  import { isLoading, _ } from 'svelte-i18n';
  import { exioLoadingBarAnimation, exioGlobalStyler } from 'exio/svelte';
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
      '/packages': wrap({
        asyncComponent: () => import('./Packages.svelte'),
        userData: {
          title: $_('entries.apps.title'),
        },
      }),
      '/posts': wrap({
        asyncComponent: () => import('./Blog.svelte'),
        userData: {
          title: $_('entries.blog.title'),
        },
      }),
      '/music': wrap({
        asyncComponent: () => import('./Music.svelte'),
        userData: {
          title: $_('entries.music.title'),
        },
      }),
      '*': wrap({
        asyncComponent: () => import('./NotFound.svelte'),
        userData: {
          title: $_('entries.notfound.title'),
        },
      }),
    };

  let loaded = false;
  let showLoader = true;
  const toggle = async () => {
    loaded = false;
    await tick();
    loaded = true;
  };
  $: if ($location && !$isLoading) toggle();
  setTimeout(() => {
    showLoader = false;
    toggle();
  }, 1500);

  const height = 30;
  let title = '';

  $: isHome = $location === '/';

  const routeLoaded = (e: CustomEvent) => {
    if (e.detail.userData) title = e.detail.userData.title;
  };
</script>

{#if loaded}
  <div data-theme="dark" use:exioGlobalStyler>
    <div
      style={showLoader
        ? 'visibility: hidden; height: 0px; overflow: hidden;'
        : ''}
    >
      {#if !isHome}
        <Navbar {height} {title} />
      {/if}
      <div style="margin-top: {isHome ? 0 : height}px;">
        <Router on:routeLoading={routeLoaded} {routes} />
      </div>
    </div>
    {#if showLoader}
      <div
        style="
          position: fixed;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div
          style="
            height: 5px;
            width: min(80%, 250px);
            --exio-loader-fill-color: var(--blue-accent);
            background-color: rgb(18, 18, 18);
          "
          use:exioLoadingBarAnimation
        />
      </div>
    {/if}
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
