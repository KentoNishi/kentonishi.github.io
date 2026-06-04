<script lang="ts">
	import ProfileHeader from '$lib/components/ProfileHeader.svelte';
	import ProjectSection from '$lib/components/ProjectSection.svelte';
	import { profile, projectSections } from '$lib/site';
</script>

<svelte:head>
	<title>{profile.name}</title>
	<meta name="author" content={profile.name} />
	<meta
		name="description"
		content="Personal website for Kento Nishi."
	/>
</svelte:head>

<main class="site-shell">
	<ProfileHeader {profile} />

	{#each projectSections as section}
		<ProjectSection {section} />
	{/each}

	<footer class="site-footer">
		<p>
			Design adapted from <a href="https://leonidk.com">Leonid Keselman</a> and
			<a href="https://jonbarron.info">Jon Barron</a>.
		</p>
	</footer>
</main>
