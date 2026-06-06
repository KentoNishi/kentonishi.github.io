<script lang="ts">
	import { parseRichBlocks, type RichTextLinks } from '$lib/richText';

	let {
		text,
		links = {},
		class: className = ''
	}: {
		text: string;
		links?: RichTextLinks;
		class?: string;
	} = $props();

	let blocks = $derived(parseRichBlocks(text, links));
</script>

{#each blocks as block}
	{#if block.type === 'paragraph'}
		<p class={className}>
			{#each block.tokens as token}
				{#if token.type === 'text'}
					{token.text}
				{:else if token.type === 'code'}
					<code class="inline-code">{token.text}</code>
				{:else}
					<a
						class="rich-link"
						href={token.href}
						target="_blank"
						rel="noreferrer"
					>
						{token.label}
					</a>
				{/if}
			{/each}
		</p>
	{:else}
		<pre class="code-block"><code class={block.language ? `language-${block.language}` : undefined}
			>{block.text}</code
		></pre>
	{/if}
{/each}
