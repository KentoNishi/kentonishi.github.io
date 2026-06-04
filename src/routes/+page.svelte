<script lang="ts">
	import { exioZoomInAnimation } from '$lib/exio';
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import { profile, sections } from '$lib/site';
</script>

<svelte:head>
	<title>{profile.name}</title>
	<meta name="author" content={profile.name} />
	<meta
		name="description"
		content="Personal website for Kento Nishi."
	/>
</svelte:head>

<main class="site-shell" use:exioZoomInAnimation>
	<ProfileHeader {profile} />

	{#each sections as section}
		<ProjectSection {section} />
	{/each}

	<footer class="site-footer">
		<p>Design adapted from Leonid Keselman and Jon Barron. Built with SvelteKit, static rendering, and Exio.</p>
	</footer>
</main>
