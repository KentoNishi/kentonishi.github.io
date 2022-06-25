<script lang="ts">
  export let src: string;
  export let href: string;
  export let alt: string;
  const loaded = (event: Event) => {
    const target = event.target as HTMLImageElement;
    target.style.transform = 'translateY(0%)';
    target.style.opacity = '1';
  };
</script>

<a {href} tabindex="-1"><img on:load={loaded} {src} {alt} /></a>

<style>
  img {
    transform: translateY(50%);
    opacity: 0;
    transition: 0.4s;
    display: inline-block;
  }
</style>
