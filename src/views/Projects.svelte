<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
  import { _ } from 'svelte-i18n';
  import ltl from '../img/ltl.png';
  import hc from '../img/hc.png';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">{$_('entries.apps.title')}</svelte:fragment>
      <svelte:fragment slot="content">
        <div class="buttons center">
          <a href="https://github.com/KentoNishi" target="_blank">
            <button use:exioButton class="popup">GitHub Profile</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">LiveTL</svelte:fragment>
      <svelte:fragment slot="content">
        <i>
          Get live translations for YouTube streams, crowdsourced from
          multilingual viewers!
        </i>
        <p>
          <a href="https://github.com/LiveTL/LiveTL/contributors"
            ><img
              src="https://img.shields.io/github/contributors/LiveTL/LiveTL?color=blue&label=Contributors"
              alt="Contributors"
            /></a
          >
          <a
            href="https://chrome.google.com/webstore/detail/livetl-translation-filter/moicohcfhhbmmngneghfjfjpdobmmnlg"
            ><img
              src="https://img.shields.io/chrome-web-store/rating/moicohcfhhbmmngneghfjfjpdobmmnlg?style=flat&color=blue&label=Rating"
              alt="Rating"
            /></a
          >
          <a href="https://github.com/LiveTL/LiveTL"
            ><img
              src="https://img.shields.io/github/stars/LiveTL/LiveTL?style=flat&logo=github&label=GitHub Stars"
              alt="GitHub Stars"
            /></a
          >
          <a href="https://www.gnu.org/licenses/agpl-3.0"
            ><img
              src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
              alt="License: AGPL v3"
            /></a
          >
          <a href="'https://opencollective.com/livetl"
            ><img
              src="https://img.shields.io/opencollective/all/livetl?label=Donators%20and%20Supporters&logo=dollar&style=flat&color=blue"
              alt="Donators and Supporters"
            /></a
          >
          <a href="https://discord.gg/uJrV3tmthg"
            ><img
              src="https://img.shields.io/discord/780938154437640232.svg?label=&amp;logo=discord&amp;logoColor=ffffff&amp;color=7389D8&amp;labelColor=6A7EC2"
              alt="Discord"
            /></a
          >
        </p>
        <p class="center">
          <img src={ltl} class="demo" alt="LiveTL Demo" />
        </p>
        <div class="buttons">
          <a href="https://github.com/LiveTL/LiveTL" target="_blank">
            <button use:exioButton class="popup">GitHub Repo</button>
          </a>
          <a href="https://livetl.app/en/home/" target="_blank">
            <button use:exioButton class="popup">Website</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    <Card>
      <svelte:fragment slot="title">HyperChat</svelte:fragment>
      <svelte:fragment slot="content">
        <i>
          HyperChat enhances your YouTube chat with a smoother, more
          feature-packed experience!
        </i>
        <p>
          <a href="https://github.com/LiveTL/HyperChat/contributors"
            ><img
              src="https://img.shields.io/github/contributors/LiveTL/HyperChat?color=blue&label=Contributors"
              alt="Contributors"
            /></a
          >
          <a
            href="https://chrome.google.com/webstore/detail/hyperchat-by-livetl/naipgebhooiiccifflecbffmnjbabdbh"
            ><img
              src="https://img.shields.io/chrome-web-store/rating/naipgebhooiiccifflecbffmnjbabdbh?style=flat&color=blue&label=Rating"
              alt="Rating"
            /></a
          >
          <a href="https://github.com/LiveTL/HyperChat"
            ><img
              src="https://img.shields.io/github/stars/LiveTL/HyperChat?style=flat&logo=github&label=GitHub Stars"
              alt="GitHub Stars"
            /></a
          >
          <a href="https://www.gnu.org/licenses/agpl-3.0"
            ><img
              src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
              alt="License: AGPL v3"
            /></a
          >
          <a href="'https://opencollective.com/livetl"
            ><img
              src="https://img.shields.io/opencollective/all/livetl?label=Donators%20and%20Supporters&logo=dollar&style=flat&color=blue"
              alt="Donators and Supporters"
            /></a
          >
          <a href="https://discord.gg/uJrV3tmthg"
            ><img
              src="https://img.shields.io/discord/780938154437640232.svg?label=&amp;logo=discord&amp;logoColor=ffffff&amp;color=7389D8&amp;labelColor=6A7EC2"
              alt="Discord"
            /></a
          >
        </p>
        <p class="center">
          <img src={hc} class="demo" alt="HyperChat Demo" />
        </p>
        <div class="buttons">
          <a href="https://github.com/LiveTL/HyperChat" target="_blank">
            <button use:exioButton class="popup">GitHub Repo</button>
          </a>
          <a href="https://livetl.app/en/hyperchat/" target="_blank">
            <button use:exioButton class="popup">Website</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
  </Cards>
</div>

<style>
  a {
    color: var(--blue-accent);
    font-weight: bold;
  }
  .buttons a {
    text-decoration: none;
    color: inherit;
  }
  button {
    background-color: var(--gray-accent);
    cursor: pointer;
  }
  .buttons {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }
  .center {
    margin-top: 0.5rem;
    display: flex;
    justify-content: center;
  }
  .popup::after {
    font-family: 'Exio Icons';
    content: 'open_in_new';
    margin-left: 0.5rem;
  }
  .demo {
    width: 100%;
  }
</style>
