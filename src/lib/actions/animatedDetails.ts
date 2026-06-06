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

	const clearAnimation = () => {
		if (timeout) clearTimeout(timeout);
		timeout = undefined;
		node.classList.remove('is-opening', 'is-closing');
		content.style.height = '';
		content.style.overflow = '';
	};

	const toggle = (event: MouseEvent) => {
		const target = event.target;
		if (target instanceof Element) {
			if (target.closest('a')) return;
			if (!target.closest('.profile-more-trigger')) {
				event.preventDefault();
				return;
			}
		}

		if (reduceMotion.matches) return;

		event.preventDefault();
		clearAnimation();
		content.style.overflow = 'hidden';

		if (node.open) {
			content.style.height = `${content.offsetHeight}px`;
			content.offsetHeight;
			node.classList.add('is-closing');
			content.style.height = '0px';

			timeout = setTimeout(() => {
				node.open = false;
				clearAnimation();
			}, duration);
		} else {
			node.open = true;
			content.style.height = '0px';
			content.offsetHeight;
			node.classList.add('is-opening');
			content.style.height = `${content.scrollHeight}px`;

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
