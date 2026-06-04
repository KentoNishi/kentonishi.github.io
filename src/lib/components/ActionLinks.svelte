<script lang="ts">
	import type { ActionLink } from '$lib/site';

	let { links, compact = false }: { links: ActionLink[]; compact?: boolean } = $props();

	const external = (href: string) => /^https?:\/\//.test(href);
</script>

<div class:compact class="action-links">
	{#each links as link}
		<a
			class="action-link"
			href={link.href}
			target={external(link.href) ? '_blank' : undefined}
			rel={external(link.href) ? 'noreferrer' : undefined}
		>
			<button class="action-button" class:compact type="button">
				{#if link.icon}
					<span class="material-symbols-outlined action-icon">{link.icon}</span>
				{/if}
				<span>{link.label}</span>
				{#if external(link.href)}
					<span class="material-symbols-outlined action-icon small">open_in_new</span>
				{/if}
			</button>
		</a>
	{/each}
</div>
