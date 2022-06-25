<script lang="ts">
  import { exioZoomInAnimation } from 'exio';
  import Cards from '../components/Cards.svelte';
  import Card from '../components/Card.svelte';
  import { exioButton } from 'exio';
  import { _ } from 'svelte-i18n';
  import '../css/page.css';
  import Badge from '../components/Badge.svelte';
  const packages = [
    {
      title: 'torch-pitch-shift',
      description:
        'Pitch-shift audio clips quickly with PyTorch (CUDA supported)! Additional utilities for searching efficient transformations are included.',
      language: 'Python (PyTorch)',
      links: [
        {
          href: 'https://pypi.org/project/torch-pitch-shift/',
          text: 'View on PyPI',
        },
        {
          href: 'https://github.com/KentoNishi/torch-pitch-shift',
          text: 'View on GitHub',
        },
      ],
      badges: [
        {
          href: 'https://pypi.org/project/torch-pitch-shift/',
          src: 'https://img.shields.io/pypi/dm/torch-pitch-shift?color=blue&label=Downloads',
          alt: 'downloads',
        },
        {
          href: 'https://pypi.org/project/torch-pitch-shift/',
          src: 'https://img.shields.io/pypi/l/torch-pitch-shift?color=blue&label=License',
          alt: 'license',
        },
      ],
    },
    {
      title: 'torch-time-stretch',
      description:
        'Time-stretch audio clips quickly with PyTorch (CUDA supported)! Additional utilities for searching efficient transformations are included.',
      language: 'Python (PyTorch)',
      links: [
        {
          href: 'https://pypi.org/project/torch-time-stretch/',
          text: 'View on PyPI',
        },
        {
          href: 'https://github.com/KentoNishi/torch-time-stretch',
          text: 'View on GitHub',
        },
      ],
      badges: [
        {
          href: 'https://pypi.org/project/torch-time-stretch/',
          src: 'https://img.shields.io/pypi/dm/torch-time-stretch?color=blue&label=Downloads',
          alt: 'downloads',
        },
        {
          href: 'https://pypi.org/project/torch-time-stretch/',
          src: 'https://img.shields.io/pypi/l/torch-time-stretch?color=blue&label=License',
          alt: 'license',
        },
      ],
    },
    {
      title: 'iframe-translator',
      description:
        'Translate text for free in the browser with iframe shenanigans',
      language: 'TypeScript',
      links: [
        {
          href: 'https://www.npmjs.com/package/iframe-translator',
          text: 'View on npm',
        },
        {
          href: 'https://github.com/KentoNishi/iframe-translator',
          text: 'View on GitHub',
        },
      ],
      badges: [
        {
          href: 'https://npmjs.com/package/iframe-translator',
          src: 'https://img.shields.io/npm/dm/iframe-translator?color=blue&label=Downloads',
          alt: 'downloads',
        },
        {
          href: 'https://www.npmjs.com/package/iframe-translator',
          src: 'https://img.shields.io/npm/l/iframe-translator?color=blue&label=License',
          alt: 'license',
        },
      ],
    },
    {
      title: 'torch-mutable-modules',
      description:
        'Use in-place and assignment operations on PyTorch module parameters with support for autograd.',
      language: 'Python (PyTorch)',
      links: [
        {
          href: 'https://pypi.org/project/torch-mutable-modules/',
          text: 'View on PyPI',
        },
        {
          href: 'https://github.com/KentoNishi/torch-mutable-modules',
          text: 'View on GitHub',
        },
      ],
      badges: [
        {
          href: 'https://pypi.org/project/torch-mutable-modules/',
          src: 'https://img.shields.io/pypi/dm/torch-mutable-modules?color=blue&label=Downloads',
          alt: 'downloads',
        },
        {
          href: 'https://pypi.org/project/torch-mutable-modules/',
          src: 'https://img.shields.io/pypi/l/torch-mutable-modules?color=blue&label=License',
          alt: 'license',
        },
      ],
    },
    {
      title: 'Python++',
      description:
        'A robust Java-style OOP system for Python, with support for statics, encapsulation, and inheritance.',
      language: 'Python',
      links: [
        {
          href: 'https://pypi.org/project/pythonpp/',
          text: 'View on PyPI',
        },
        {
          href: 'https://github.com/KentoNishi/pythonpp',
          text: 'View on GitHub',
        },
      ],
      badges: [
        {
          href: 'https://pypi.org/project/pythonpp/',
          src: 'https://img.shields.io/pypi/dm/pythonpp?color=blue&label=Downloads',
          alt: 'downloads',
        },
        {
          href: 'https://pypi.org/project/pythonpp/',
          src: 'https://img.shields.io/pypi/l/pythonpp?color=blue&label=License',
          alt: 'license',
        },
      ],
    },
  ];
</script>

<div use:exioZoomInAnimation style="transform-origin: top center;">
  <Cards>
    <Card titleCard>
      <svelte:fragment slot="title">
        {$_('entries.packages.title')}
      </svelte:fragment>
      <svelte:fragment slot="content">
        <div class="buttons center" style="margin-top: 0.75rem;">
          <a href="https://pypi.org/user/KentoNishi/" target="_blank">
            <button use:exioButton class="popup">PyPI</button>
          </a>
          <a href="https://www.npmjs.com/~kentonishi" target="_blank">
            <button use:exioButton class="popup">npm</button>
          </a>
        </div>
      </svelte:fragment>
    </Card>
    {#each packages as p}
      <Card>
        <svelte:fragment slot="title">
          <code>{p.title}</code>
        </svelte:fragment>
        <svelte:fragment slot="content">
          <i>{p.language}</i>
          <p>
            {p.description}
          </p>
          <p class="badges">
            {#each p.badges as b}
              <span>
                <Badge {...b} />
              </span>
            {/each}
          </p>
          <div class="buttons">
            {#each p.links as l}
              <a href={l.href} target="_blank">
                <button use:exioButton class="popup">{l.text}</button>
              </a>
            {/each}
          </div>
        </svelte:fragment>
      </Card>
    {/each}
  </Cards>
</div>
