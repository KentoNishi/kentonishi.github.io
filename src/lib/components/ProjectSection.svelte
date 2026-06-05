<script lang="ts">
	import ProjectRow from './ProjectRow.svelte';
	import type { DetailSection } from '$lib/site';

	let { section }: { section: DetailSection } = $props();
</script>

<section class="detail-section" id={section.id}>
	<div class="section-heading">
		<h2>{section.title}</h2>
		{#if section.description}
			<p>{section.description}</p>
		{/if}
	</div>

	<div class="detail-list">
		{#each section.items as item}
			<ProjectRow {item} sectionId={section.id} />
		{/each}
	</div>
</section>
