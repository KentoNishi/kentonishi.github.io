<script lang="ts">
  import { exioCard } from 'exio';
  import { onDestroy, onMount } from 'svelte';
  export let titleCard = false;
  let el: HTMLDivElement;
  let card: ReturnType<typeof exioCard>;
  onMount(() => {
    if (!titleCard) card = exioCard(el);
  });
  onDestroy(() => {
    if (card) card.destroy();
  });
</script>

<div class="parent">
  <div
    bind:this={el}
    class="card"
    style={titleCard
      ? 'align-items: center; background-color: transparent;'
      : ''}
  >
    {#if titleCard}
      <h1><slot name="title" /></h1>
    {:else}
      <h2><slot name="title" /></h2>
    {/if}
    <p><slot name="content" /></p>
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
</style>
