<script lang="ts">
  import { exioCard } from 'exio/svelte';
  import type { ExioNode } from 'exio/svelte';
  import { onDestroy, onMount } from 'svelte';
  export let titleCard = false;
  export let staticCard = false;
  let el: HTMLDivElement;
  let card: ExioNode;
  onMount(() => {
    if (!staticCard) card = exioCard(el);
  });
  onDestroy(() => {
    if (card) card.destroy();
  });
</script>

<div class="parent">
  <div
    bind:this={el}
    class="card"
    style={titleCard ? 'align-items: center; margin-top: 1rem;' : ''}
  >
    {#if titleCard}
      <h1><slot name="title" /></h1>
    {:else}
      <h2><slot name="title" /></h2>
    {/if}
    <p style="width: 100%;"><slot name="content" /></p>
  </div>
</div>

<style>
  .card {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
    background-color: var(--gray-fill);
    display: flex;
  }
  .parent {
    width: 100%;
  }
  h2,
  h1,
  p {
    margin: 0;
  }
  h1 {
    text-align: center;
  }
</style>
