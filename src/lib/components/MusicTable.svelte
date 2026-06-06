<script lang="ts">
	import { musicTableAccordion } from '$lib/actions/musicTableAccordion';
	import type { DetailItem } from '$lib/site';

	let { items }: { items: DetailItem[] } = $props();

	type MusicStatus = NonNullable<NonNullable<DetailItem['audio']>['status']>;

	const musicItems = $derived(items.filter((item) => item.audio));
	const statusLabel = (status: MusicStatus | undefined) => {
		if (status === 'demo') return 'Demo';
		if (status === 'draft') return 'Draft';
		return 'Done';
	};
</script>

<table class="music-table" use:musicTableAccordion>
	<colgroup>
		<col class="music-col-date" />
		<col class="music-col-status" />
		<col class="music-col-duration" />
		<col class="music-col-title" />
	</colgroup>
	<thead>
		<tr>
			<th scope="col">Date</th>
			<th scope="col">Status</th>
			<th class="music-play-heading" scope="col" aria-label="Play"></th>
			<th scope="col">Title</th>
		</tr>
	</thead>
	<tbody>
		{#each musicItems as item, index}
			{@const audio = item.audio}
			{#if audio}
				{@const playerId = `music-player-${index}`}
				<tr class="music-track-row">
					<td class="music-date">{audio.date}</td>
					<td class={audio.status === 'complete' ? 'music-status is-complete' : 'music-status'}
						>{statusLabel(audio.status)}</td
					>
					<td class="music-duration">
						<a
							class="music-play-link"
							href={audio.src}
							target="_blank"
							rel="noreferrer"
							aria-label={`Play ${item.title} (${audio.duration})`}
							aria-expanded="false"
							aria-controls={playerId}
						>
							<span class="material-symbols-outlined music-play-icon" aria-hidden="true"
								>play_arrow</span
							>
							<span>{audio.duration}</span>
						</a>
					</td>
					<th class="music-track-cell" scope="row">
						{item.title}
					</th>
				</tr>
				<tr class="music-player-row" id={playerId} aria-hidden="true">
					<td class="music-player-cell" colspan="4">
						<div class="music-player-panel">
							<div class="music-player-panel-inner">
								<!-- svelte-ignore a11y_media_has_caption -->
								<audio class="audio-player" controls preload="none" aria-label={`${item.title} audio`}>
									<source src={audio.src} type={audio.type} />
								</audio>
							</div>
						</div>
					</td>
				</tr>
			{/if}
		{/each}
	</tbody>
</table>
