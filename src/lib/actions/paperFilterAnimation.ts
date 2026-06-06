import type { Action } from 'svelte/action';

type PaperFilterMode = 'selected' | 'all';

const duration = 260;

export const paperFilterAnimation: Action<HTMLElement> = (node) => {
	const selectedInput = node.querySelector<HTMLInputElement>('#paper-filter-selected');
	const allInput = node.querySelector<HTMLInputElement>('#paper-filter-all');
	const selectedLabel = node.querySelector<HTMLLabelElement>('label[for="paper-filter-selected"]');
	const allLabel = node.querySelector<HTMLLabelElement>('label[for="paper-filter-all"]');
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
	const animatedRows = () =>
		[...node.querySelectorAll<HTMLElement>('.detail-row-frame:not(.selected-paper)')];
	let cleanupTimer: ReturnType<typeof setTimeout> | undefined;

	if (!selectedInput || !allInput || !selectedLabel || !allLabel) {
		return {};
	}

	const clearRows = () => {
		if (cleanupTimer) clearTimeout(cleanupTimer);
		cleanupTimer = undefined;
		for (const row of animatedRows()) {
			row.style.gridTemplateRows = '';
			row.style.opacity = '';
			row.style.pointerEvents = '';
		}
	};

	const setChecked = (mode: PaperFilterMode) => {
		selectedInput.checked = mode === 'selected';
		allInput.checked = mode === 'all';
	};

	const animateTo = (mode: PaperFilterMode) => {
		const currentMode: PaperFilterMode = allInput.checked ? 'all' : 'selected';
		if (currentMode === mode) return;

		clearRows();
		if (reduceMotion.matches) {
			setChecked(mode);
			return;
		}

		const rows = animatedRows();

		if (mode === 'all') {
			for (const row of rows) {
				row.style.gridTemplateRows = '0fr';
				row.style.opacity = '0';
				row.style.pointerEvents = 'none';
			}
			setChecked('all');
			node.offsetHeight;

			requestAnimationFrame(() => {
				for (const row of rows) {
					row.style.gridTemplateRows = '1fr';
					row.style.opacity = '1';
					row.style.pointerEvents = '';
				}
			});
		} else {
			for (const row of rows) {
				row.style.gridTemplateRows = '1fr';
				row.style.opacity = '1';
				row.style.pointerEvents = '';
			}
			setChecked('selected');
			node.offsetHeight;

			requestAnimationFrame(() => {
				for (const row of rows) {
					row.style.gridTemplateRows = '0fr';
					row.style.opacity = '0';
					row.style.pointerEvents = 'none';
				}
			});
		}

		cleanupTimer = setTimeout(clearRows, duration);
	};

	const onSelectedClick = (event: MouseEvent) => {
		event.preventDefault();
		animateTo('selected');
	};

	const onAllClick = (event: MouseEvent) => {
		event.preventDefault();
		animateTo('all');
	};

	selectedLabel.addEventListener('click', onSelectedClick);
	allLabel.addEventListener('click', onAllClick);

	return {
		destroy() {
			clearRows();
			selectedLabel.removeEventListener('click', onSelectedClick);
			allLabel.removeEventListener('click', onAllClick);
		}
	};
};
