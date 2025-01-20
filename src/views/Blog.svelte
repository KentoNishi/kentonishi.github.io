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
        Can Temporal Distance Maps Communicate Variability?
        A User Study with Maps of Transit Travel Times
      </svelte:fragment>
      <svelte:fragment slot="content">
        <p>Harvard CompSci 271 Spring 2024 Term Paper</p>
        <div class="buttons">
          <a href="/cs271-variance/Can_Temporal_Distance_Maps_Communicate_Variability__A_User_Study_with_Maps_of_Transit_Travel_Times.pdf" target="_blank">
            <button use:exioButton class="popup">
              {$_('entries.blog.pdf')}
            </button>
          </a>
          <a href="https://github.com/KentoNishi/cs271-variance" target="_blank">
            <button use:exioButton class="popup">
              {$_('entries.blog.code')}
            </button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">
        Implementing Portals in Unity
      </svelte:fragment>
      <svelte:fragment slot="content">
        <p>Harvard CompSci 175 Spring 2023 Term Project</p>
        <div class="buttons">
          <a href="/cs175-final-project/CS%20175%20writeup.pdf" target="_blank">
            <button use:exioButton class="popup">
              {$_('entries.blog.pdf')}
            </button>
          </a>
          <a href="https://github.com/KentoNishi/cs175-final-project" target="_blank">
            <button use:exioButton class="popup">
              {$_('entries.blog.code')}
            </button>
          </a>
        </div>
      </svelte:fragment>
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
