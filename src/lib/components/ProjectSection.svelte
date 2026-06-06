<script lang="ts">
	import { paperFilterAnimation } from '$lib/actions/paperFilterAnimation';
	import CourseProjectsTable from './CourseProjectsTable.svelte';
	import MusicTable from './MusicTable.svelte';
	import ProjectRow from './ProjectRow.svelte';
	import type { DetailSection } from '$lib/site';

	let { section }: { section: DetailSection } = $props();

	const isPapers = $derived(section.id === 'publications');
	const isMusic = $derived(section.id === 'music');
	const isCourseProjects = $derived(section.id === 'course-projects');
	const selectedItems = $derived(section.items.filter((item) => item.highlightPaper));
	const lastSelectedTitle = $derived(selectedItems[selectedItems.length - 1]?.title);
</script>

<section
	class="detail-section"
	class:papers-section={isPapers}
	class:music-section={isMusic}
	class:course-projects-section={isCourseProjects}
	id={section.id}
	use:paperFilterAnimation
>
	{#if isPapers}
		<input
			class="paper-filter-input paper-filter-selected"
			type="radio"
			name="paper-filter"
			id="paper-filter-selected"
			checked
		/>
		<input
			class="paper-filter-input paper-filter-all"
			type="radio"
			name="paper-filter"
			id="paper-filter-all"
		/>
	{/if}

	<div class="section-heading">
		<h2>
			<span>{section.title}</span>
			{#if isPapers}
				<span class="paper-filter" aria-label="Paper display filter">
					<span>(show:&nbsp;</span><label
						class="paper-filter-option selected-option"
						for="paper-filter-selected">selected</label
					><span>&nbsp;|&nbsp;</span><label class="paper-filter-option all-option" for="paper-filter-all"
						>all</label
					><span>)</span>
				</span>
			{/if}
		</h2>
		{#if section.description}
			<p>{section.description}</p>
		{/if}
	</div>

	{#if isMusic}
		<MusicTable items={section.items} />
	{:else if isCourseProjects}
		<CourseProjectsTable items={section.items} />
	{:else}
		<div class="detail-list">
			{#each section.items as item}
				<div
					class="detail-row-frame"
					class:selected-paper={item.highlightPaper === true}
					class:last-selected-paper={isPapers && item.title === lastSelectedTitle}
				>
					<div class="detail-row-frame-inner">
						<ProjectRow {item} sectionId={section.id} />
					</div>
				</div>
			{/each}
		</div>
	{/if}
</section>
