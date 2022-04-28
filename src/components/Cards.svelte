<script lang="ts">
</script>

<div class="wrap" style="transform-origin: top center;">
  <div class="grid">
    <slot />
  </div>
</div>

<style>
  .grid {
    display: grid;
    justify-items: center;
    padding: 2rem;
    gap: 20px;
    width: min(calc(100% - 4rem), 1000px);
    overflow: visible;
  }
  .wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    overflow: visible;
  }
</style>
