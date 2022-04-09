<script lang="ts">
  import type { TileEntry } from '../ts/types';
  import Tile from './Tile.svelte';

  const tiles: TileEntry[] = [
    {
      title: 'Publications',
      description: 'View my published research.',
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
      description: 'View my blog posts and write-ups.',
      icon: 'edit_note',
      link: '/posts',
    },
  ];
</script>

<div class="wrap">
  <div class="grid">
    {#each tiles as tile}
      <Tile data={tile} />
    {/each}
  </div>
</div>

<style>
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    padding: 2rem;
    justify-items: center;
    max-width: 1000px;
  }
  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
  }
</style>
