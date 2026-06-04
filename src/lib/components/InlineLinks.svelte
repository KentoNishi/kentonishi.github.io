<script lang="ts">
	import type { InlineLink } from '$lib/site';

	let { links }: { links: InlineLink[] } = $props();
</script>

{#each links as link, index}
	<a href={link.href}>{link.label}</a>{#if index < links.length - 1}
		&nbsp;/&nbsp;
	{/if}
{/each}
