<script lang="ts">
  import pfp from '../img/pfp.png';
  import { exioButton } from 'exio';
  import github from '../img/github.svg';
  import linkedin from '../img/linkedin.svg';
  import gscholar from '../img/gscholar.svg';
  import { STAGGER } from '../ts/constants';
  const links: {
    title: string;
    url: string;
    icon: any;
    color?: boolean;
  }[] = [
    {
      title: 'GitHub',
      url: 'https://github.com/KentoNishi',
      icon: github,
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kento-nishi-5696ab185/',
      icon: linkedin,
    },
    {
      title: 'Scholar',
      url: 'https://scholar.google.com/citations?user=iQoZSr4AAAAJ&hl=en',
      icon: gscholar,
      color: true,
    },
  ];
</script>

<div class="banner">
  <div class="parent" style="width: calc(100% - 2 * var(--grid-padding));">
    <div class="profile entrance-animation" style="--tile-translate: 0%;">
      <img src={pfp} alt="Kento Nishi" class="pfp" />
      <div class="info">
        <div class="name">Kento Nishi</div>
        <div class="email">
          <a href="mailto:kento24gs@outlook.com">kento24gs@outlook.com</a>
        </div>
        <div class="affiliation">Lynbrook High School</div>
      </div>
    </div>
    <div class="links">
      {#each links as link, index}
        <a href={link.url} target="_blank">
          <div
            class="entrance-animation"
            style="
              animation-delay: {(index + 1) * STAGGER}s;
              --tile-translate: 0%;
            "
          >
            <button use:exioButton class="tile">
              <img
                src={link.icon}
                alt="GitHub"
                class="icon"
                class:black-icon={!link.color}
              />
              <div class="title">{link.title}</div>
            </button>
          </div>
        </a>
      {/each}
    </div>
  </div>
</div>

<style>
  .links {
    display: flex;
  }
  .banner {
    --banner-height: 150px;
    width: 100%;
    height: var(--banner-height);
    background-color: var(--gray-fill);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .profile {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .parent {
    display: flex;
    max-height: 100%;
    align-items: center;
    justify-content: space-evenly;
    max-width: 1000px;
  }
  .pfp {
    width: 100px;
    height: auto;
    border-radius: 50%;
  }
  .info * {
    color: rgb(224, 224, 224);
  }
  .name {
    font-size: 2rem;
    font-weight: bold;
  }
  a {
    color: var(--blue-accent) !important;
    text-decoration: none;
  }

  .black-icon {
    filter: invert(1) !important;
  }
  .icon {
    width: 3rem;
    height: auto;
    filter: grayscale(1) brightness(200%);
  }
  .tile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    width: 100px;
    height: 100px;
    cursor: pointer;
  }
  .banner * {
    overflow: visible;
  }
  .banner {
    overflow: hidden;
  }
  @media (max-width: 750px) {
    .icon {
      width: 1.25rem;
    }
    .tile {
      flex-direction: row;
      height: auto;
    }
    .parent {
      flex-direction: column;
    }
    .links {
      padding: 1rem;
    }
    .banner {
      padding-top: 1rem;
      height: auto;
    }
  }
</style>
