<script lang="ts">
	import ActionLinks from './ActionLinks.svelte';
	import type { DetailItem } from '$lib/site';

	let { item }: { item: DetailItem } = $props();
</script>

<article
	class="detail-row"
	class:highlight={item.highlight}
	class:has-image={item.image}
>
	{#if item.image}
		<div class="detail-image-cell">
			<img class="detail-image" src={item.image.src} alt={item.image.alt} />
		</div>
	{/if}

	<div class="detail-copy">
		<h3>{item.title}</h3>

		{#if item.subtitle}
			<p class="detail-subtitle">{item.subtitle}</p>
		{/if}

		{#if item.meta}
			<p class="detail-meta">{item.meta}</p>
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
