<script lang="ts">
	import ActionLinks from './ActionLinks.svelte';
	import type { Profile } from '$lib/site';

	let { profile }: { profile: Profile } = $props();
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="profile-photo-frame">
			<img class="profile-photo" src={profile.image.src} alt={profile.image.alt} />
		</div>

		<div class="profile-copy">
			<h1>{profile.name}</h1>
			<p class="profile-meta">
				{#if profile.affiliation}
					<span>{profile.affiliation}</span><span class="profile-meta-separator">•</span>
				{/if}
				<span>{profile.location}</span>
			</p>

			{#each profile.bio as paragraph}
				<p class="profile-bio">{paragraph}</p>
			{/each}

			<ActionLinks links={profile.links} compact />
		</div>
	</div>
</section>
