<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { _ } from 'svelte-i18n';
  import '../css/page.css';
  import Visualizer from '../components/Visualizer.svelte';
  const songs = [
    {
      items: [
        {
          title: '2min ver.',
          src: '/music/hyperchat-ad.mp3',
        },
      ],
      title: 'HyperChat Trailer Theme',
      wip: false,
    },
  ];
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">
        {$_('entries.music.title')}
      </svelte:fragment>
    </Card>
    {#each songs as track}
      <Card>
        <svelte:fragment slot="title">{track.title}</svelte:fragment>
        <svelte:fragment slot="content">
          {#if track.wip}
            <i>Work-in-Progress Preview</i>
          {/if}

          <div class="item-wrapper">
            {#each track.items as item}
              <h3>{item.title}</h3>
              <Visualizer src={item.src} />
            {/each}
          </div>
        </svelte:fragment>
      </Card>
    {/each}
  </Cards>
</div>

<style>
  .item-wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: fit-content(500px) 1fr;
    grid-auto-rows: min-content;
    grid-gap: 2rem;
    grid-row-gap: 0.5rem;
    padding-top: 1rem;
  }
</style>
