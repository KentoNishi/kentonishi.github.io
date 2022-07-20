<script lang="ts">
  import wallpaper from '../img/wallpaper.jpg';
</script>

<div class="wallpaper-wrapper">
  <img src={wallpaper} alt="Wallpaper" class="wallpaper" />
</div>

<style>
  .wallpaper-wrapper {
    position: absolute;
    animation: zoom 0.6s;
    animation-fill-mode: forwards;
    width: 100%;
    pointer-events: none;
    touch-action: none;
  }
  .wallpaper {
    width: 100%;
    height: var(--banner-height);
    object-fit: fill;
    filter: blur(10px);
  }
  @keyframes zoom {
    from {
      transform: scale(1.1);
      filter: brightness(0%);
    }
    to {
      transform: scale(1.2);
      filter: brightness(75%);
    }
  }
</style>
