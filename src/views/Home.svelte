<script lang="ts">
  import { onDestroy, onMount, tick } from 'svelte';
  import { exioZoomInAnimation, exioLoadingBar } from 'exio';
  import type { ExioNode } from 'exio';

  import Banner from '../components/Banner.svelte';
  import Card from '../components/Card.svelte';
  import Cards from '../components/Cards.svelte';
  import Tiles from '../components/Tiles.svelte';
  const stats = [
    {
      src: 'https://github-readme-stats.vercel.app/api?username=KentoNishi&show_icons=true&theme=dark&hide_border=true',
      alt: 'GitHub README Stats',
      loaded: false,
    },
    {
      src: 'https://github-readme-streak-stats.herokuapp.com/?theme=dark&user=KentoNishi&hide_border=true',
      alt: 'GitHub README Streak Stats',
      loaded: false,
    },
  ];
  let aboutMe: ExioNode;
  let aboutMeWrapper: HTMLElement;
  let showTiles = true;
  // let tiles: ExioNode;
  // let tilesWrapper: HTMLElement;

  const checkLoaded = () => {
    if (stats.every(({ loaded }) => loaded)) {
      setTimeout(async () => {
        showTiles = false;
        await tick();
        showTiles = true;
        aboutMe = exioZoomInAnimation(aboutMeWrapper);
        // tiles = exioZoomInAnimation(tilesWrapper);
      }, 0);
    }
  };
  const loaded = (item: typeof stats[number]) => {
    return () => {
      item.loaded = true;
      checkLoaded();
    };
  };

  onDestroy(() => {
    aboutMe.destroy();
    // tiles.destroy();
  });

  let showLoader = false;
  onMount(() => {
    setTimeout(() => {
      if (!aboutMe) showLoader = true;
    }, 250);
  });
</script>

<Banner />
{#if showLoader}
  <div
    use:exioLoadingBar
    style="
      position: absolute;
      height: {aboutMe ? '0px' : '5px'};
      opacity: {aboutMe ? '0' : '1'};
      width: 100%;
      animation-duration: 1s;
      --exio-loading-bar-thumb-color: var(--blue-accent);
      transition-duration: 1s;
    "
  />
{/if}
<div bind:this={aboutMeWrapper} style={aboutMe ? '' : 'visibility: hidden;'}>
  <Cards>
    <Card>
      <svelte:fragment slot="title">About Me</svelte:fragment>
      <svelte:fragment slot="content">
        <div>
          18-year-old programmer at Lynbrook High School with strong interests
          in AI/Machine Learning. Open source developer and researcher at the
          Four Eyes Lab.
        </div>
        <div class="stats">
          {#each stats as s}
            <img src={s.src} alt={s.alt} on:load={loaded(s)} />
          {/each}
        </div>
      </svelte:fragment>
    </Card>
  </Cards>
</div>
{#if showTiles}
  <div
    style={aboutMe ? '' : 'visibility: hidden; height: 0px; overflow: hidden;'}
  >
    <Tiles
      tiles={[
        {
          title: 'Research',
          description: 'View my ongoing and published research.',
          icon: 'school',
          link: '/publications',
        },
        {
          title: 'Apps',
          description: 'View my open-source apps, websites, and extensions.',
          icon: 'mobile_friendly',
          link: '/apps',
        },
        {
          title: 'Packages',
          description: 'View my open-source packages and developer tools.',
          icon: 'code',
          link: '/packages',
        },
        {
          title: 'Music',
          description: 'Listen to my original compositions and productions.',
          icon: 'music_note',
          link: '/music',
        },
        {
          title: 'Resume',
          description: 'View my resume and contact information.',
          icon: 'description',
          link: '/resume',
        },
        {
          title: 'Blog Posts',
          description: 'View my blog posts, tutorials, and write-ups.',
          icon: 'edit_note',
          link: '/posts',
        },
      ]}
    />
  </div>
{/if}

<style>
  .stats {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  .stats > img {
    width: 100%;
  }
</style>
