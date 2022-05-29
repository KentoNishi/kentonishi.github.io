<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
  import { _ } from 'svelte-i18n';
  import '../css/page.css';
  const songs = [
    {
      src: '/music/hyperchat.mp3',
      title: 'HyperChat Trailer Theme',
      wip: true,
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
    {#each songs as item}
      <Card>
        <svelte:fragment slot="title">{item.title}</svelte:fragment>
        <svelte:fragment slot="content">
          {#if item.wip}
            <i>Work-in-Progress Preview</i>
          {/if}

          <audio controls>
            <source src={item.src} type="audio/mp3" />
          </audio>

          <div class="buttons">
            <a href={item.src} target="_blank">
              <button use:exioButton class="popup">Listen in New Tab</button>
            </a>
          </div>
        </svelte:fragment>
      </Card>
    {/each}
  </Cards>
</div>

<style>
  audio {
    width: calc(100% - 4rem);
    display: block;
    padding: 2rem;
  }
</style>
