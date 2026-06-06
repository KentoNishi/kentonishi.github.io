<script lang="ts">
	import { parseRichBlocks, type RichTextLinks } from '$lib/richText';

	let {
		text,
		links = {},
		class: className = '',
		inline = false
	}: {
		text: string;
		links?: RichTextLinks;
		class?: string;
		inline?: boolean;
	} = $props();

	let blocks = $derived(parseRichBlocks(text, links));
</script>

{#each blocks as block}
	{#if block.type === 'paragraph'}
		{#if inline}
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
		{:else}
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
		{/if}
	{:else}
		<pre class="code-block"><code class={block.language ? `language-${block.language}` : undefined}
			>{block.text}</code
		></pre>
	{/if}
{/each}
