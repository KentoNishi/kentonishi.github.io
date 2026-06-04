<script lang="ts">
	import ActionLinks from './ActionLinks.svelte';
	import type { Profile } from '$lib/site';

	let { profile }: { profile: Profile } = $props();
</script>

<section class="hero">
	<img class="hero-wallpaper" src={profile.wallpaper.src} alt={profile.wallpaper.alt} />
	<div class="hero-shade"></div>
	<div class="hero-inner">
		<div class="profile-photo-frame">
			<img class="profile-photo" src={profile.image.src} alt={profile.image.alt} />
		</div>

		<div class="profile-copy">
			<h1>{profile.name}</h1>
			<p class="profile-meta">{profile.affiliation} / {profile.location}</p>

			{#each profile.bio as paragraph}
				<p>{paragraph}</p>
			{/each}

			<ActionLinks links={profile.links} />
		</div>
	</div>
</section>

<section class="resume-strip">
	<div>
		<strong>Research:</strong> transformers, diffusion models, computer vision, mechanistic interpretability
	</div>
	<div>
		<strong>Programming:</strong> Python, TypeScript, C++, Svelte, PyTorch, OpenGL, Docker
	</div>
</section>

<!--
<table class="site-table">
	<tbody>
		<tr class="profile-row">
			<td class="profile-copy">
				<h1>{profile.name}</h1>

				{#each profile.bio as paragraph}
					<p>{paragraph}</p>
				{/each}

				<ActionLinks links={profile.links} />
			</td>

			<td class="profile-photo-cell">
				<img class="profile-photo" src={profile.image.src} alt={profile.image.alt} />
			</td>
		</tr>
	</tbody>
</table>
-->
