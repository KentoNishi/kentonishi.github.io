<script lang="ts">
	import { exioCard } from '$lib/exio';
	import ActionLinks from './ActionLinks.svelte';
	import type { DetailItem } from '$lib/site';

	let { item }: { item: DetailItem } = $props();
</script>

<article
	class="detail-row"
	class:highlight={item.highlight}
	class:has-image={item.image}
	use:exioCard={{
		backgroundColor: 'var(--paper)',
		hoverBorderColor: 'var(--teal)',
		borderWidth: '1px'
	}}
>
	{#if item.image}
		<div class="detail-image-cell">
			<img class="detail-image" src={item.image.src} alt={item.image.alt} />
		</div>
	{/if}

	<div class="detail-copy">
		<div class="detail-title-line">
			<h3>{item.title}</h3>
			{#if item.meta}
				<span class="detail-meta">{item.meta}</span>
			{/if}
		</div>

		{#if item.subtitle}
			<p class="detail-subtitle">{item.subtitle}</p>
		{/if}

		{#if item.description}
			<p class="detail-description">{item.description}</p>
		{/if}

		{#if item.bullets?.length}
			<ul>
				{#each item.bullets as bullet}
					<li>{bullet}</li>
				{/each}
			</ul>
		{/if}

		{#if item.tags?.length}
			<div class="tags">
				{#each item.tags as tag}
					<span>{tag}</span>
				{/each}
			</div>
		{/if}

		{#if item.links?.length}
			<ActionLinks links={item.links} compact />
		{/if}
	</div>
</article>
