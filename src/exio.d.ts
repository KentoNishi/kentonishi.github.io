declare module 'exio/svelte' {
	import type { Action } from 'svelte/action';

	export type ExioNode<T = unknown> = {
		update?: (opts?: T) => void;
		destroy?: () => void;
	};

	export const exioButton: Action<HTMLButtonElement, Record<string, unknown> | undefined>;
	export const exioCard: Action<HTMLElement, Record<string, unknown> | undefined>;
	export const exioFadeInAnimation: Action<HTMLElement, Record<string, unknown> | undefined>;
	export const exioIcon: Action<HTMLElement, Record<string, unknown> | undefined>;
	export const exioZoomInAnimation: Action<HTMLElement, Record<string, unknown> | undefined>;
}
