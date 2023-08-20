<script lang="ts">
  import { exioZoomInAnimation } from 'exio/svelte';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { _ } from 'svelte-i18n';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title"
        >{$_('entries.notfound.message')}</svelte:fragment
      >
    </Card>
  </Cards>
</div>
