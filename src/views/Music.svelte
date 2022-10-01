<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { _ } from 'svelte-i18n';
  import '../css/page.css';
  import APlayer from '../components/APlayer.svelte';
  const songs = [
    {
      items: [
        {
          title: '2min ver.',
          src: '/music/hyperchat-ad.mp3',
          date: 'July 2022',
        },
      ],
      title: 'HyperChat Trailer Theme',
      wip: false,
    },
    {
      items: [
        {
          title: 'Full track',
          src: '/music/new-beginning.mp3',
          date: 'September 2022',
        },
      ],
      title: 'New Beginning',
      wip: false,
    },
    {
      items: [
        {
          title: 'Full track',
          src: '/music/voyage.mp3',
          date: 'September 2022',
        },
      ],
      title: 'Voyage',
      wip: false,
    },
  ]
    .map((item) => {
      return {
        name: `${item.title}${item.wip ? ' (work in progress)' : ''}`,
        artist: 'Kento Nishi',
        cover: '',
        url: item.items[0].src,
      };
    })
    .reverse();
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">
        {$_('entries.music.title')}
      </svelte:fragment>
      <div slot="content" style="color: black;">
        <APlayer {songs} />
      </div>
    </Card>
  </Cards>
</div>

<style>
</style>
