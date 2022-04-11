<script lang="ts">
  import { STAGGER } from '../ts/constants';

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
      description: 'View my blog posts, tutorials, and write-ups.',
      icon: 'edit_note',
      link: '/posts',
    },
  ];
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
    padding: 2rem;
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
