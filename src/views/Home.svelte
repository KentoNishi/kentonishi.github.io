<script lang="ts">
  import { exioZoomInAnimation } from 'exio';

  import Banner from '../components/Banner.svelte';
  import Card from '../components/Card.svelte';
  import Cards from '../components/Cards.svelte';
  import Tiles from '../components/Tiles.svelte';
  const stats = [
    {
      src: 'https://github-readme-streak-stats.herokuapp.com/?theme=dark&user=KentoNishi&hide_border=true',
      alt: 'GitHub README Streak Stats',
    },
    {
      src: 'https://github-readme-stats.vercel.app/api?username=KentoNishi&show_icons=true&theme=dark&hide_border=true',
      alt: 'GitHub README Stats',
    },
  ];
  const loaded = (e) => {
    (e.target as HTMLImageElement).classList.add('loaded');
  };
</script>

<Banner />
<div use:exioZoomInAnimation>
  <Cards>
    <Card>
      <svelte:fragment slot="title">About Me</svelte:fragment>
      <svelte:fragment slot="content">
        <div>
          18-year-old programmer at Lynbrook High School with strong interests
          in AI/Machine Learning. Open source developer and researcher at the
          Four Eyes Lab.
        </div>
        <div class="stats">
          {#each stats as s}
            <img
              src={`${s.src}&seed=${Math.random()}`}
              alt={s.alt}
              on:load={loaded}
            />
          {/each}
        </div>
      </svelte:fragment>
    </Card>
  </Cards>
</div>
<div>
  <Tiles
    tiles={[
      {
        title: 'Research',
        description: 'View my ongoing and published research.',
        icon: 'school',
        link: '/publications',
      },
      {
        title: 'Apps',
        description: 'View my open-source apps, websites, and extensions.',
        icon: 'mobile_friendly',
        link: '/apps',
      },
      {
        title: 'Packages',
        description: 'View my open-source packages and developer tools.',
        icon: 'code',
        link: '/packages',
      },
      {
        title: 'Music',
        description: 'Listen to my original compositions and productions.',
        icon: 'music_note',
        link: '/music',
      },
      {
        title: 'Resume',
        description: 'View my resume and contact information.',
        icon: 'description',
        link: '/resume',
      },
      {
        title: 'Blog Posts',
        description: 'View my blog posts, tutorials, and write-ups.',
        icon: 'edit_note',
        link: '/posts',
      },
    ]}
  />
</div>

<style>
  .stats {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    align-items: flex-start;
    justify-items: center;
    position: relative;
  }
  .stats > img:not(.loaded) {
    width: 0px;
  }
  .stats > img {
    width: min(100%, 495px);
    aspect-ratio: calc(495 / 195);
    transition: 0.6s;
  }
</style>
