<script lang="ts">
	import type { ActionLink } from '$lib/site';

	let { links, compact = false }: { links: ActionLink[]; compact?: boolean } = $props();
</script>

<div class:compact class="action-links">
	{#each links as link}
		<a
			class="action-link"
			href={link.href}
			download={link.download ? '' : undefined}
			target="_blank"
			rel="noreferrer"
		>
			<span class="action-button" class:compact>
				{#if link.iconSrc}
					<span
						class="action-icon action-icon-image"
						style={`--action-icon-src: url('${link.iconSrc}')`}
						aria-hidden="true"
					></span>
				{:else if link.icon}
					<span class="material-symbols-outlined action-icon">{link.icon}</span>
				{/if}
				<span>{link.label}</span>
			</span>
		</a>
	{/each}
</div>
