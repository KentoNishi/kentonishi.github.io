<script lang="ts">
	import ProjectRow from './ProjectRow.svelte';
	import type { ProjectSection } from '$lib/site';

	let { section }: { section: ProjectSection } = $props();
</script>

<table class="site-table">
	<tbody>
		<tr>
			<td class="section-heading">
				<h2>{section.title}</h2>
				{#if section.description}
					<p>{section.description}</p>
				{/if}
			</td>
		</tr>
	</tbody>
</table>

{#if section.projects.length}
	<table class="site-table">
		<tbody>
			{#each section.projects as project}
				<ProjectRow {project} />
			{/each}
		</tbody>
	</table>
{/if}

<div class="section-spacer"></div>
