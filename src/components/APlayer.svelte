<script lang="ts">
  import 'aplayer/dist/APlayer.min.css';
  import APlayer from 'aplayer';
  import { onDestroy, onMount } from 'svelte';
  import { exioButton, exioIcon } from 'exio';

  export let songs: Array<{
    name: string;
    artist: string;
    cover: string;
    url: string;
  }> = [];

  let element: HTMLElement;
  let player: APlayer;

  onMount(() => {
    player = new APlayer({
      container: element,
      audio: songs,
      theme: 'var(--blue-accent)',
    });
  });

  onDestroy(() => {
    if (player) player.destroy();
  });
</script>

<div bind:this={element} class="player-wrapper" />

<div style="width: 100%; display: flex; justify-content: center;">
  <div class="buttons">
    <button
      use:exioButton
      style="color: white;"
      on:click={() => {
        const a = document.createElement('a');
        a.href = player.audio.src;
        a.download = player.audio.src.split('/').pop();
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }}
    >
      <span>Download Track</span>
      <span use:exioIcon style="font-size: 1.25em; vertical-align: bottom;"
        >download</span
      >
    </button>
    <button
      use:exioButton
      style="color: white;"
      on:click={() => {
        window.open(player.audio.src);
        player.pause();
      }}
      class="popup"
    >
      <span>Open Track in New Tab</span>
    </button>
  </div>
</div>

<style>
  :global(.player-wrapper) {
    background-color: transparent;
    color: white;
    box-shadow: none !important;
    margin: 0px 0px 0.5em 0px;
  }
  :global(.aplayer-list ol li.aplayer-list-light) {
    background: #333333 !important;
  }
  :global(.aplayer-list > ol > li) {
    border-top: 0px !important;
  }
  :global(.aplayer-info) {
    border-bottom: 0px !important;
  }
  :global(.aplayer-list ol li:hover) {
    background: #444444 !important;
  }
  :global(.aplayer-icon:hover path) {
    fill: #ffffff !important;
  }
</style>
