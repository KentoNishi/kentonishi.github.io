export type InlineLink = {
	label: string;
	href: string;
};

export type Profile = {
	name: string;
	bio: string[];
	links: InlineLink[];
	image?: {
		src: string;
		alt: string;
	};
};

export type Project = {
	title: string;
	authors?: string;
	venue?: string;
	date?: string;
	categories?: string[];
	course?: string;
	image?: {
		src: string;
		alt: string;
	};
	links?: InlineLink[];
	description?: string;
};

export type ProjectSection = {
	title: string;
	description?: string;
	projects: Project[];
};

export const profile: Profile = {
	name: 'Kento Nishi',
	bio: [],
	links: []
};

export const projectSections: ProjectSection[] = [];
