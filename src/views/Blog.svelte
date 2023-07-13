<script lang="ts">
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import '../css/page.css';
  import { exioButton, exioZoomInAnimation } from 'exio/svelte';
  import { _ } from 'svelte-i18n';
  // import { attributes as placeholderAttrs } from '../posts/placeholder.md';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">{$_('entries.blog.title')}</svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Browser Extension Standards: How Google Monopolized and Exploited the
        Web Browser Industry
      </svelte:fragment>
      <svelte:fragment slot="content">
        <p>Harvard Science @ Work Fall 2022 Term Paper</p>
        <div class="buttons">
          <a href="/extensions.pdf" target="_blank">
            <button use:exioButton class="popup">
              {$_('entries.blog.pdf')}
            </button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <!-- <Card>
      <div slot="title">{@html placeholderAttrs.title}</div>
      <div slot="content">{@html placeholderAttrs.description}</div>
    </Card> -->
  </Cards>
</div>
