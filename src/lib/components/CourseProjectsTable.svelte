<script lang="ts">
	import { localHref } from '$lib/paths';
	import type { DetailItem } from '$lib/site';

	let { items }: { items: DetailItem[] } = $props();

	const courseLabel = (subtitle: string | undefined) => {
		if (!subtitle) return '';
		const match = subtitle.match(/Harvard\s+(CS\d+|HISTSCI\d+)/);
		if (!match) return subtitle;
		return match[1].startsWith('CS')
			? match[1].replace(/^CS/, 'COMPSCI ')
			: match[1].replace(/^HISTSCI/, 'HISTSCI ');
	};

	const splitQuestionTitle = (title: string) => {
		const questionIndex = title.indexOf('?');
		return questionIndex === -1
			? [title, '']
			: [title.slice(0, questionIndex + 1), title.slice(questionIndex + 1)];
	};
</script>

<table class="course-projects-table">
	<colgroup>
		<col class="course-project-col-course" />
		<col class="course-project-col-links" />
		<col class="course-project-col-title" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">Course</th>
			<th class="course-project-link-heading" scope="col" aria-label="PDF"></th>
			<th scope="col">Title</th>
		</tr>
	</thead>
	<tbody>
		{#each items as item}
			<tr>
				<td class="course-project-course" title={item.subtitle}>{courseLabel(item.subtitle)}</td>
				<td class="course-project-links">
					{#if item.links?.length}
						<p class="paper-links detail-links">
							{#each item.links as link, index}
								<span class="paper-link-item">
									<a
										href={localHref(link.href)}
										download={link.download ? '' : undefined}
										target="_blank"
										rel="noreferrer">{link.label}</a
									>{#if index < item.links.length - 1}<span class="paper-link-separator">/</span>{/if}
								</span>
							{/each}
						</p>
					{/if}
				</td>
				<th class="course-project-title" scope="row">
					{#if item.titleAnswer}
						{@const [question, rest] = splitQuestionTitle(item.title)}
						{question}
						<span
							class="title-answer"
							class:yes={item.titleAnswer === 'yes'}
							class:no={item.titleAnswer === 'no'}
						>
							({item.titleAnswer === 'yes' ? 'Yes!' : 'No!'})
						</span>
						{rest}
					{:else}
						{item.title}
					{/if}
				</th>
			</tr>
		{/each}
	</tbody>
</table>
