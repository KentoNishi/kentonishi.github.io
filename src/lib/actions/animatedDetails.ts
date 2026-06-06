import type { Action } from 'svelte/action';

type AnimatedDetailsOptions = {
	duration?: number;
};

export const animatedDetails: Action<HTMLDetailsElement, AnimatedDetailsOptions | undefined> = (
	node,
	options = {}
) => {
	let duration = options.duration ?? 160;
	let timeout: ReturnType<typeof setTimeout> | undefined;

	const summary = node.querySelector(':scope > summary');
	const content = node.querySelector<HTMLElement>(':scope > :not(summary)');
	const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

	if (!(summary instanceof HTMLElement) || !content) {
		return {};
	}

	const fullHeight = () => summary.offsetHeight + content.offsetHeight;
	const clearAnimation = () => {
		if (timeout) clearTimeout(timeout);
		timeout = undefined;
		node.classList.remove('is-opening', 'is-closing');
		node.style.maxHeight = '';
	};

	const toggle = (event: MouseEvent) => {
		if (reduceMotion.matches) return;

		event.preventDefault();
		clearAnimation();
		node.style.overflow = 'hidden';

		if (node.open) {
			node.style.maxHeight = `${fullHeight()}px`;
			node.offsetHeight;
			node.classList.add('is-closing');
			node.style.maxHeight = `${summary.offsetHeight}px`;

			timeout = setTimeout(() => {
				node.open = false;
				clearAnimation();
			}, duration);
		} else {
			node.open = true;
			node.style.maxHeight = `${summary.offsetHeight}px`;
			node.offsetHeight;
			node.classList.add('is-opening');
			node.style.maxHeight = `${fullHeight()}px`;

			timeout = setTimeout(clearAnimation, duration);
		}
	};

	summary.addEventListener('click', toggle);

	return {
		update(nextOptions = {}) {
			duration = nextOptions.duration ?? 160;
		},
		destroy() {
			if (timeout) clearTimeout(timeout);
			summary.removeEventListener('click', toggle);
		}
	};
};
