<script lang="ts">
  import Banner from '../components/Banner.svelte';
  import Tiles from '../components/Tiles.svelte';
</script>

<Banner />
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
