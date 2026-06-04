<script lang="ts">
	import InlineLinks from './InlineLinks.svelte';
	import type { Project } from '$lib/site';

	let { project }: { project: Project } = $props();

	const formattedDate = $derived.by(() => {
		if (!project.date) return undefined;

		const date = new Date(project.date);
		if (Number.isNaN(date.valueOf())) return project.date;

		return project.venue ? date.getUTCFullYear().toString() : project.date;
	});

	const categoryLabel = $derived(
		[...(project.categories ?? []), project.course].filter(Boolean).join(' ')
	);
</script>

<tr class="project-row">
	<td class="project-image-cell">
		{#if project.image}
			<img class="project-image" src={project.image.src} alt={project.image.alt} />
		{/if}
	</td>

	<td class="project-copy">
		<h3>{project.title}</h3>

		{#if project.authors}
			<br />
			<span>{project.authors}</span>
		{/if}

		{#if project.venue || formattedDate || categoryLabel}
			<div class="project-meta">
				{#if project.venue}
					<em>{project.venue}</em>{#if formattedDate}, {formattedDate}{/if}
				{:else if categoryLabel}
					<em>{categoryLabel}</em>{#if formattedDate}<br />{formattedDate}{/if}
				{:else if formattedDate}
					{formattedDate}
				{/if}
			</div>
		{/if}

		{#if project.links?.length}
			<div class="project-links">
				<InlineLinks links={project.links} />
			</div>
		{/if}

		{#if project.description}
			<p class="project-description">{project.description}</p>
		{/if}
	</td>
</tr>
