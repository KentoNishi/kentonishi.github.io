<script lang="ts">
  import { exioCard } from 'exio';
</script>

<div class="parent">
  <div use:exioCard class="card">
    <h1><slot name="title" /></h1>
    <p><slot name="content" /></p>
  </div>
</div>

<style>
  .card {
    background-color: transparent;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
  .parent {
    width: 100%;
  }
  h1,
  p {
    margin: 0;
  }
</style>
