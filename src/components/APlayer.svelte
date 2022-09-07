<script lang="ts">
  import 'aplayer/dist/APlayer.min.css';
  import APlayer from 'aplayer';
  import { onDestroy, onMount } from 'svelte';
  import { exioButton, exioIcon, ExioNode } from 'exio';
  import { _ } from 'svelte-i18n';

  export let songs: Array<{
    name: string;
    artist: string;
    cover: string;
    url: string;
  }> = [];

  let element: HTMLElement;
  let player: APlayer;
  let nodes: ExioNode[] = [];
  let anchor: HTMLAnchorElement | null = null;

  onMount(() => {
    player = new APlayer({
      container: element,
      audio: songs,
      theme: 'var(--blue-accent)',
    });
    player.on('loadstart', (item) => {
      nodes.forEach((node) => node.destroy());
      if (anchor) anchor.remove();
      const wrapper = document.querySelector(
        '.aplayer-music'
      ) as HTMLDivElement;
      wrapper.style.overflow = 'visible';
      const button = document.createElement('button');
      nodes.push(exioButton(button));
      const icon = document.createElement('span');
      icon.innerText = 'download';
      icon.style.verticalAlign = 'middle';
      icon.style.fontSize = '1.3rem';
      const text = document.createElement('span');
      text.innerText = $_('entries.music.download');
      text.style.setProperty(
        'font-family',
        'Segoe UI, Frutiger, Frutiger Linotype, Dejavu Sans, Helvetica Neue, Arial, sans-serif',
        'important'
      );
      nodes.push(exioIcon(icon));
      button.appendChild(icon);
      button.appendChild(text);
      anchor = document.createElement('a');
      anchor.href = item.path[0].currentSrc;
      anchor.style.color = 'white';
      anchor.style.textDecoration = 'none';
      anchor.style.float = 'right';
      anchor.style.height = '1em';
      anchor.style.display = 'flex';
      anchor.style.alignItems = 'center';
      anchor.style.justifyContent = 'center';
      anchor.style.gap = '0.5em';
      anchor.appendChild(button);
      anchor.download = true;
      wrapper?.appendChild(anchor);
    });
  });

  onDestroy(() => {
    nodes.forEach((node) => node.destroy());
    if (player) player.destroy();
    if (anchor) anchor.remove();
  });
</script>

<div bind:this={element} class="player-wrapper" />

<style>
  :global(.player-wrapper) {
    background-color: transparent;
    color: white;
    box-shadow: none !important;
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
