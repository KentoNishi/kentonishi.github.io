<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
  import { _ } from 'svelte-i18n';
  import ltl from '../img/ltl.png';
  import hc from '../img/hc.png';
  import '../css/page.css';
  import Badge from './Badge.svelte';
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">{$_('entries.apps.title')}</svelte:fragment>
      <!-- <svelte:fragment slot="content">
        <div class="buttons center">
          <a href="https://github.com/KentoNishi" target="_blank">
            <button use:exioButton class="popup">GitHub Profile</button>
          </a>
        </div>
      </svelte:fragment> -->
    </Card>
    <Card>
      <svelte:fragment slot="title">LiveTL</svelte:fragment>
      <svelte:fragment slot="content">
        <i>
          Get live translations for YouTube streams, crowdsourced from
          multilingual viewers!
        </i>
        <p class="badges">
          <Badge
            alt="Contributors"
            href="https://github.com/LiveTL/LiveTL/contributors"
            src="https://img.shields.io/github/contributors/LiveTL/LiveTL?color=blue&label=Contributors"
          />
          <Badge
            href="https://chrome.google.com/webstore/detail/livetl-translation-filter/moicohcfhhbmmngneghfjfjpdobmmnlg"
            src="https://img.shields.io/chrome-web-store/rating/moicohcfhhbmmngneghfjfjpdobmmnlg?style=flat&color=blue&label=Rating"
            alt="Rating"
          />
          <Badge
            href="https://github.com/LiveTL/LiveTL"
            src="https://img.shields.io/github/stars/LiveTL/LiveTL?style=flat&logo=github&label=GitHub Stars"
            alt="GitHub Stars"
          />
          <Badge
            href="https://www.gnu.org/licenses/agpl-3.0"
            src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
            alt="License: AGPL v3"
          />
          <Badge
            href="https://opencollective.com/livetl"
            src="https://img.shields.io/opencollective/all/livetl?label=Donators%20and%20Supporters&logo=dollar&style=flat&color=blue"
            alt="Donators and Supporters"
          />
          <Badge
            href="https://discord.gg/uJrV3tmthg"
            src="https://img.shields.io/discord/780938154437640232.svg?label=&amp;logo=discord&amp;logoColor=ffffff&amp;color=7389D8&amp;labelColor=6A7EC2"
            alt="Discord"
          />
        </p>
        <p class="center">
          <img
            src={ltl}
            class="demo"
            style="aspect-ratio: calc(321 / 199);"
            alt="LiveTL Demo"
          />
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
        <p class="badges">
          <Badge
            href="https://github.com/LiveTL/HyperChat/contributors"
            src="https://img.shields.io/github/contributors/LiveTL/HyperChat?color=blue&label=Contributors"
            alt="Contributors"
          />
          <Badge
            href="https://chrome.google.com/webstore/detail/hyperchat-by-livetl/naipgebhooiiccifflecbffmnjbabdbh"
            src="https://img.shields.io/chrome-web-store/rating/naipgebhooiiccifflecbffmnjbabdbh?style=flat&color=blue&label=Rating"
            alt="Rating"
          />
          <Badge
            href="https://github.com/LiveTL/HyperChat"
            src="https://img.shields.io/github/stars/LiveTL/HyperChat?style=flat&logo=github&label=GitHub Stars"
            alt="GitHub Stars"
          />
          <Badge
            href="https://www.gnu.org/licenses/agpl-3.0"
            src="https://img.shields.io/badge/License-AGPL%20v3-blue.svg"
            alt="License: AGPL v3"
          />
          <Badge
            href="'https://opencollective.com/livetl"
            src="https://img.shields.io/opencollective/all/livetl?label=Donators%20and%20Supporters&logo=dollar&style=flat&color=blue"
            alt="Donators and Supporters"
          />
          <Badge
            href="https://discord.gg/uJrV3tmthg"
            src="https://img.shields.io/discord/780938154437640232.svg?label=&amp;logo=discord&amp;logoColor=ffffff&amp;color=7389D8&amp;labelColor=6A7EC2"
            alt="Discord"
          />
        </p>
        <p class="center">
          <img
            src={hc}
            class="demo"
            style="aspect-ratio: calc(963 / 412);"
            alt="HyperChat Demo"
          />
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
  .demo {
    width: 100%;
    background-image: linear-gradient(
      to bottom,
      rgba(128, 128, 128, 0.25),
      rgba(128, 128, 128, 0.25)
    );
  }
  img {
    display: inline-block;
  }
</style>
