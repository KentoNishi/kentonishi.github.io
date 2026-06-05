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
			download={link.download ? '' : undefined}
			target={external(link.href) ? '_blank' : undefined}
			rel={external(link.href) ? 'noreferrer' : undefined}
		>
			<span class="action-button" class:compact>
				{#if link.iconSrc}
					<img class="action-icon action-icon-image" src={link.iconSrc} alt="" aria-hidden="true" />
				{:else if link.icon}
					<span class="material-symbols-outlined action-icon">{link.icon}</span>
				{/if}
				<span>{link.label}</span>
			</span>
		</a>
	{/each}
</div>
