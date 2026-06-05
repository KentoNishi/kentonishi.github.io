<script lang="ts">
	import type { DetailItem } from '$lib/site';

	let { item, sectionId }: { item: DetailItem; sectionId?: string } = $props();

	const isPaper = $derived(sectionId === 'publications');
	const isFirstAuthorPaper = $derived(isPaper && item.meta?.toLowerCase().includes('first author'));
	const metaParts = (meta: string) => meta.split(/(Present|2025)/g).filter(Boolean);
	const shouldHighlightMeta = (part: string) => item.highlightMetaParts?.includes(part);
	const authors = (subtitle: string) => subtitle.split(/,\s*/).filter(Boolean);
	const splitQuestionTitle = (title: string) => {
		const questionIndex = title.indexOf('?');
		return questionIndex === -1
			? [title, '']
			: [title.slice(0, questionIndex + 1), title.slice(questionIndex + 1)];
	};
</script>

<article
	class="detail-row"
	class:has-image={item.image}
	class:paper={isPaper}
	class:first-author-paper={isFirstAuthorPaper}
>
	{#if item.image}
		<div
			class="detail-image-cell"
			style={`--image-bg: ${item.image.background ?? '#f6f8f9'}`}
		>
			<img class="detail-image" src={item.image.src} alt={item.image.alt} />
		</div>
	{/if}

	<div class="detail-copy">
		{#if isPaper}
			<div class="paper-heading">
				<h3>{item.title}</h3>

				{#if item.subtitle}
					<p class="paper-authors" aria-label={item.subtitle}>
						{#each authors(item.subtitle) as author}
							<span class:self-author={author === 'Kento Nishi'}>{author}</span>
						{/each}
					</p>
				{/if}

				{#if item.meta}
					<p class="paper-venue">{item.meta}</p>
				{/if}
			</div>
		{:else}
			<div class="detail-topline">
				<div class="detail-title-group" class:inline-subtitle={item.subtitle?.startsWith('—')}>
					<h3>
						{#if item.titleAnswer}
							{@const [question, rest] = splitQuestionTitle(item.title)}
							{question}
							<span class="title-answer" class:yes={item.titleAnswer === 'yes'} class:no={item.titleAnswer === 'no'}>
								({item.titleAnswer === 'yes' ? 'Yes!' : 'No!'})
							</span>
							{rest}
						{:else}
							{item.title}
						{/if}
						{#if item.titleTag}
							<span class="title-tag">{item.titleTag}</span>
						{/if}
					</h3>

					{#if item.subtitle}
						<p class="detail-subtitle">{item.subtitle}</p>
					{/if}

					{#if item.inlineDescription && item.description}
						<p class="detail-inline-description">: {item.description}</p>
					{/if}
				</div>

				{#if item.meta}
					<p class="detail-meta">
						{#each metaParts(item.meta) as part}
							{#if shouldHighlightMeta(part)}
								<span class="meta-highlight">{part}</span>
							{:else}
								<span>{part}</span>
							{/if}
						{/each}
					</p>
				{/if}
			</div>
		{/if}

		{#if item.description && !item.inlineDescription}
			<p class="detail-description">{item.description}</p>
		{/if}

		{#if isPaper && item.links?.length}
			<p class="paper-links">
				{#each item.links as link, index}
					<span class="paper-link-item">
						<a
							href={link.href}
							download={link.download ? '' : undefined}
							target={/^https?:\/\//.test(link.href) ? '_blank' : undefined}
							rel={/^https?:\/\//.test(link.href) ? 'noreferrer' : undefined}>{link.label}</a
						>{#if index < item.links.length - 1}<span class="paper-link-separator">/</span>{/if}
					</span>
				{/each}
			</p>
		{/if}

		{#if isPaper && item.bullets?.length}
			<div class="paper-summary">
				{#each item.bullets as bullet}
					<p>{@html bullet}</p>
				{/each}
			</div>
		{:else if item.bullets?.length}
			<ul>
				{#each item.bullets as bullet}
					<li>{@html bullet}</li>
				{/each}
			</ul>
		{/if}

		{#if item.badges?.length}
			<div class="badge-row">
				{#each item.badges as badge}
					<a class="badge-link" href={badge.href} target="_blank" rel="noreferrer">
						<img src={badge.src} alt={badge.alt} />
					</a>
				{/each}
			</div>
		{/if}

		{#if !isPaper && item.links?.length}
			<p class="paper-links detail-links">
				{#each item.links as link, index}
					<span class="paper-link-item">
						<a
							href={link.href}
							download={link.download ? '' : undefined}
							target={/^https?:\/\//.test(link.href) ? '_blank' : undefined}
							rel={/^https?:\/\//.test(link.href) ? 'noreferrer' : undefined}>{link.label}</a
						>{#if index < item.links.length - 1}<span class="paper-link-separator">/</span>{/if}
					</span>
				{/each}
			</p>
		{/if}

		{#if item.audio}
			<!-- svelte-ignore a11y_media_has_caption -->
			<audio class="audio-player" controls preload="none" aria-label={`${item.title} audio`}>
				<source src={item.audio.src} type={item.audio.type} />
			</audio>
		{/if}

	</div>
</article>
