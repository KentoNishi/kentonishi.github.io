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
	let targetOpen = node.open;
	let previousTransition = '';

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
		node.style.height = '';
		node.style.overflow = '';
		node.style.transition = previousTransition;
	};

	const measureHeight = (open: boolean) => {
		const previousOpen = node.open;
		const previousTransition = node.style.transition;
		const previousHeight = node.style.height;
		const previousOverflow = node.style.overflow;

		node.style.transition = 'none';
		node.style.height = 'auto';
		node.style.overflow = 'hidden';
		node.open = open;

		const height = node.getBoundingClientRect().height;

		node.open = previousOpen;
		node.style.height = previousHeight;
		node.style.transition = previousTransition;
		node.style.overflow = previousOverflow;

		return height;
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
		const wasAnimating = timeout != null;
		clearAnimation();

		if (!wasAnimating) targetOpen = node.open;

		const willOpen = !targetOpen;
		targetOpen = willOpen;
		const startHeight = node.getBoundingClientRect().height;
		const endHeight = measureHeight(willOpen);

		previousTransition = node.style.transition;
		node.style.height = `${startHeight}px`;
		node.style.overflow = 'hidden';
		node.style.transition = `height ${duration}ms cubic-bezier(0.2, 0, 0, 1)`;
		node.open = true;
		node.offsetHeight;
		node.classList.add(willOpen ? 'is-opening' : 'is-closing');
		node.style.height = `${endHeight}px`;

		timeout = setTimeout(() => {
			if (!willOpen) node.open = false;
			clearAnimation();
		}, duration);
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
