<script lang="ts">
  import { isLoading } from 'svelte-i18n';
  import Banner from '../components/Banner.svelte';
  import { exioApp } from 'exio';
</script>

<div use:exioApp>
  {#if !$isLoading}
    <Banner />
  {/if}
</div>
