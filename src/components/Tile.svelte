<script lang="ts">
  import { exioButton, exioFlyInAnimation, exioIcon } from 'exio';
  import type { TileEntry } from '../ts/types';
  export let data: TileEntry;
  export let delay = 0;
</script>

<a href="{data.realURL ? '' : '#'}{data.link}">
  <div class="parent" use:exioFlyInAnimation style="animation-delay: {delay}s;">
    <button use:exioButton class="tile">
      <div class="split">
        <div class="left">
          <span class="icon" use:exioIcon>{data.icon}</span>
        </div>
        <div class="right">
          <div class="title">{data.title}</div>
          <div class="description">{data.description}</div>
        </div>
      </div>
    </button>
  </div>
</a>

<style>
  .tile {
    background-color: transparent;
    cursor: pointer;
  }
  button {
    width: 300px;
    height: 100px;
  }
  .title {
    font-size: 1.2rem;
  }
  .split {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100%;
  }
  .icon {
    font-size: 3rem;
    color: var(--blue-accent);
  }
  .left {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 3rem;
  }
  .description {
    color: #b1b1b1;
    font-size: 0.85em;
  }
  .right {
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
  }

  .parent {
    justify-content: flex-start !important;
    overflow: visible;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
