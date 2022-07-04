<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import { _ } from 'svelte-i18n';

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
</script>

<div>
  <Banner />
  <div use:exioZoomInAnimation>
    <Cards>
      <Card>
        <svelte:fragment slot="title">About Me</svelte:fragment>
        <svelte:fragment slot="content">
          <div>
            {$_('info.bio')}
          </div>
          <div class="stats">
            {#each stats as s}
              <img src={`${s.src}&seed=${''}`} alt={s.alt} />
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
          title: $_('entries.research.title'),
          description: 'View my ongoing and published research.',
          icon: 'school',
          link: '/publications',
        },
        {
          title: $_('entries.apps.title'),
          description: 'View my open-source apps, websites, and extensions.',
          icon: 'mobile_friendly',
          link: '/apps',
        },
        {
          title: $_('entries.packages.title'),
          description: 'View my open-source packages and developer tools.',
          icon: 'code',
          link: '/packages',
        },
        {
          title: $_('entries.music.title'),
          description: 'Listen to my original compositions and productions.',
          icon: 'music_note',
          link: '/music',
        },
        {
          title: $_('entries.resume.title'),
          description: 'View my resume and contact information.',
          icon: 'description',
          link: '/resume.pdf',
          realURL: true,
        },
        {
          title: $_('entries.blog.title'),
          description: 'View my blog posts, tutorials, and write-ups.',
          icon: 'edit_note',
          link: '/posts',
        },
      ]}
    />
  </div>
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
  .stats > img {
    width: min(100%, 495px);
    aspect-ratio: calc(495 / 195);
  }
</style>
