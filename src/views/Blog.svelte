<script lang="ts">
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioZoomInAnimation } from 'exio';
  import { _ } from 'svelte-i18n';
  import { attributes as placeholderAttrs } from '../posts/placeholder.md';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">{$_('entries.blog.title')}</svelte:fragment>
    </Card>
    <Card>
      <div slot="title">{@html placeholderAttrs.title}</div>
      <div slot="content">{@html placeholderAttrs.description}</div>
    </Card>
  </Cards>
</div>
