<script lagn="ts">
  import { exioButton, exioIcon, exioFadeInAnimation } from 'exio';

  export let height = 0;
  export let title = '';
</script>

<div class="navbar" style="height: {height}px;" use:exioFadeInAnimation>
  <a href="#/">
    <button use:exioButton use:exioIcon class="back">arrow_back</button>
  </a>
  <span class="title">{title}</span>
</div>

<style>
  .navbar {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    background-color: var(--gray-fill-lighter);
    z-index: 100;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    overflow: hidden;
  }
  .back {
    top: 0px;
    left: 0px;
    height: 100%;
    background-color: var(--blue-accent);
    cursor: pointer;
  }
  a {
    text-decoration: none;
    color: inherit;
    height: 100%;
  }
  .title {
    margin-left: 0.5rem;
    display: none;
  }
</style>
