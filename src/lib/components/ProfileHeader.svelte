<script lang="ts">
	import { animatedDetails } from '$lib/actions/animatedDetails';
	import ActionLinks from './ActionLinks.svelte';
	import RichText from './RichText.svelte';
	import type { Profile } from '$lib/site';

	let { profile }: { profile: Profile } = $props();

	const introBio = $derived(profile.bio[0]);
	const moreBio = $derived(profile.bio.slice(1));

	const locationSegments = $derived(
		profile.location.split(' / ').map((segment) => {
			const hasFlag = segment.includes('🇯🇵');
			return {
				label: segment.replace('🇯🇵', '').trim(),
				hasFlag
			};
		})
	);
</script>

<section class="hero">
	<div class="hero-inner">
		<div class="profile-copy">
			<div class="profile-identity">
				<div class="profile-photo-frame">
					<img class="profile-photo" src={profile.image.src} alt={profile.image.alt} />
				</div>

				<div class="profile-title-block">
					<h1>
						<span class="latin-name">{profile.name}</span>
						{#if profile.nativeName}
							<span class="name-separator" aria-hidden="true"></span>
							<span
								class="native-name"
								aria-label={profile.nativeNameReading
									? `${profile.nativeNameReading} ${profile.nativeName}`
									: profile.nativeName}
							>
								{#if profile.nativeNameParts?.length}
									{#each profile.nativeNameParts as part, index}
										<span class="native-name-part">
											<span class="native-name-reading" aria-hidden="true">{part.reading}</span>
											<span class="native-name-char">{part.text}</span>
										</span>
										{#if index === 0}<span class="native-name-space" aria-hidden="true"></span>{/if}
									{/each}
								{:else}
									<span class="native-name-part">
										{#if profile.nativeNameReading}
											<span class="native-name-reading" aria-hidden="true">{profile.nativeNameReading}</span>
										{/if}
										<span class="native-name-char">{profile.nativeName}</span>
									</span>
								{/if}
							</span>
						{/if}
					</h1>
					<p class="profile-meta">
						{#if profile.affiliation}
							<span class="profile-affiliation"
								><span>{profile.affiliation}</span
								><span class="profile-meta-separator" aria-hidden="true"></span></span
							>
						{/if}
						<span class="profile-location">
							{#each locationSegments as segment, index}
								<span class="location-segment"
									>{segment.label}{#if segment.hasFlag}<span class="emoji">🇯🇵</span>{/if}</span
								>
								{#if index < locationSegments.length - 1}
									<span class="location-separator" aria-hidden="true">/</span>
								{/if}
							{/each}
						</span>
					</p>
				</div>
			</div>

			{#if introBio && moreBio.length}
				<div class="profile-bio profile-intro">
					<RichText text={introBio} links={profile.bioLinks} inline />
					<details
						class="profile-more"
						use:animatedDetails={{
							duration: 220
						}}
					>
						<summary>Tap to expand.</summary>
						<div class="profile-more-content">
							{#each moreBio as paragraph}
								<RichText text={paragraph} links={profile.bioLinks} class="profile-bio" />
							{/each}
						</div>
					</details>
				</div>
			{:else if introBio}
				<RichText text={introBio} links={profile.bioLinks} class="profile-bio" />
			{/if}

			<ActionLinks links={profile.links} compact />
		</div>
	</div>
</section>
