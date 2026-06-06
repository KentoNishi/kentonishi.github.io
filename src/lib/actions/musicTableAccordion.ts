const isOrdinaryClick = (event: MouseEvent) =>
	event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

export const musicTableAccordion = (table: HTMLTableElement) => {
	const rows = Array.from(table.querySelectorAll<HTMLTableRowElement>('.music-track-row'));

	table.classList.add('is-enhanced');

	const setIcon = (row: HTMLTableRowElement, icon: 'play_arrow' | 'pause') => {
		const iconNode = row.querySelector<HTMLElement>('.music-play-icon');
		if (iconNode) {
			iconNode.textContent = icon;
		}
	};

	const closeRow = (row: HTMLTableRowElement) => {
		const trigger = row.querySelector<HTMLAnchorElement>('.music-play-link');
		const playerRow = row.nextElementSibling as HTMLTableRowElement | null;
		const audio = playerRow?.querySelector<HTMLAudioElement>('audio');

		row.classList.remove('is-open');
		playerRow?.classList.remove('is-open');
		playerRow?.setAttribute('aria-hidden', 'true');
		trigger?.setAttribute('aria-expanded', 'false');
		audio?.pause();
		setIcon(row, 'play_arrow');
	};

	const cleanups: (() => void)[] = [];

	for (const row of rows) {
		const trigger = row.querySelector<HTMLAnchorElement>('.music-play-link');
		const playerRow = row.nextElementSibling as HTMLTableRowElement | null;
		const audio = playerRow?.querySelector<HTMLAudioElement>('audio');

		if (!trigger || !playerRow || !audio) {
			continue;
		}

		trigger.setAttribute('aria-expanded', 'false');
		playerRow.setAttribute('aria-hidden', 'true');

		const onClick = (event: MouseEvent) => {
			if (!isOrdinaryClick(event)) {
				return;
			}

			event.preventDefault();

			const willOpen = !playerRow.classList.contains('is-open');
			for (const otherRow of rows) {
				if (otherRow !== row) {
					closeRow(otherRow);
				}
			}

			row.classList.toggle('is-open', willOpen);
			playerRow.classList.toggle('is-open', willOpen);
			playerRow.setAttribute('aria-hidden', String(!willOpen));
			trigger.setAttribute('aria-expanded', String(willOpen));

			if (!willOpen) {
				audio.pause();
			} else {
				void audio.play().catch(() => {
					// Some browsers can still refuse playback; the expanded native control remains usable.
				});
			}
		};

		const onPlay = () => setIcon(row, 'pause');
		const onPause = () => setIcon(row, 'play_arrow');

		trigger.addEventListener('click', onClick);
		audio.addEventListener('play', onPlay);
		audio.addEventListener('pause', onPause);
		audio.addEventListener('ended', onPause);
		cleanups.push(() => {
			trigger.removeEventListener('click', onClick);
			audio.removeEventListener('play', onPlay);
			audio.removeEventListener('pause', onPause);
			audio.removeEventListener('ended', onPause);
		});
	}

	return {
		destroy() {
			for (const cleanup of cleanups) {
				cleanup();
			}
			table.classList.remove('is-enhanced');
			for (const row of rows) {
				closeRow(row);
			}
		}
	};
};
