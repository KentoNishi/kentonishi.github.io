<script lang="ts">
	import InlineLinks from './InlineLinks.svelte';
	import type { Profile } from '$lib/site';

	let { profile }: { profile: Profile } = $props();
</script>

<table class="site-table">
	<tbody>
		<tr class="profile-row">
			<td class="profile-copy" class:profile-copy-full={!profile.image}>
				<h1>{profile.name}</h1>

				{#each profile.bio as paragraph}
					<p>{paragraph}</p>
				{/each}

				{#if profile.links.length}
					<p class="profile-links">
						<InlineLinks links={profile.links} />
					</p>
				{/if}
			</td>

			{#if profile.image}
				<td class="profile-photo-cell">
					<img class="profile-photo" src={profile.image.src} alt={profile.image.alt} />
				</td>
			{/if}
		</tr>
	</tbody>
</table>
