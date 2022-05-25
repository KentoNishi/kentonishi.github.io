<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
  import { _ } from 'svelte-i18n';
  import '../css/page.css';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">
        {$_('entries.music.title')}
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">HyperChat Trailer Theme</svelte:fragment>
      <svelte:fragment slot="content">
        <i>Work-in-Progress Preview</i>

        <audio controls>
          <source src="/music/hyperchat.wav" type="audio/wav" />
        </audio>

        <div class="buttons">
          <a href="/music/hyperchat.wav" target="_blank">
            <button use:exioButton class="popup">Listen in New Tab</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
  </Cards>
</div>

<style>
  audio {
    width: calc(100% - 4rem);
    display: block;
    padding: 2rem;
  }
</style>
