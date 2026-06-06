export type ActionLink = {
	label: string;
	href: string;
	icon?: string;
	iconSrc?: string;
	download?: boolean;
};

export type ImageAsset = {
	src: string;
	alt: string;
	background?: string;
	fit?: 'contain' | 'cover';
};

export type BadgeAsset = ImageAsset & {
	href: string;
};

export type Profile = {
	name: string;
	nativeName?: string;
	nativeNameReading?: string;
	nativeNameParts?: {
		text: string;
		reading: string;
	}[];
	location: string;
	affiliation: string;
	email: string;
	image: ImageAsset;
	bio: string[];
	bioLinks?: Record<string, string>;
	links: ActionLink[];
};

export type DetailItem = {
	title: string;
	titleTag?: string;
	titleAnswer?: 'yes' | 'no';
	subtitle?: string;
	meta?: string;
	description?: string;
	bullets?: string[];
	links?: ActionLink[];
	image?: ImageAsset;
	badges?: BadgeAsset[];
	audio?: {
		src: string;
		type?: string;
	};
	highlightPaper?: boolean;
	highlightMetaParts?: string[];
	inlineDescription?: boolean;
};

export type DetailSection = {
	id: string;
	title: string;
	description?: string;
	items: DetailItem[];
};

export const profile: Profile = {
	name: 'Kento Nishi',
	nativeName: '西 健斗',
	nativeNameReading: 'にし けんと',
	nativeNameParts: [
		{ text: '西', reading: 'にし' },
		{ text: '健', reading: 'けん' },
		{ text: '斗', reading: 'と' }
	],
	location: 'San Jose, CA / Cambridge, MA / Japan 🇯🇵',
	affiliation: 'MIT EECS / CSAIL',
	email: 'kento24gs@outlook.com',
	image: {
		src: '/assets/pfp.png',
		alt: 'Kento Nishi'
	},
	bio: [
		'Hi! My name is Kento, and I\'m a PhD student at MIT EECS/CSAIL advised by [Phillip Isola]. I graduated from Harvard College/SEAS in 2026, with Honors AB/SM degrees in Computer Science. In the past, I had the pleasure of being advised by [Hidenori Tanaka], [Ekdeep Singh Lubana], [Hanspeter Pfister], and [Tobias Höllerer]. I am a recipient of the [Ezoe Memorial Recruit Foundation Scholarship].',
		'My research interests are in understanding the surprising quirks of deep learning. Why does training give birth to well-organized representations for certain concepts and tasks, but not others? What mechanistic motifs emerge across different models, and why? What properties of the underlying learning algorithm and data distribution lead to these phenomena, and how can we leverage this understanding to build safer and more capable systems? I want to answer these fundamental questions by using science to unpack the physics of artificial intelligence. I\'m also a strong proponent of open source and transparent research.',
		'Outside of academics, I\'m an avid long-distance runner. I also love Formula 1 \& go-kart racing, transit \& urban planning, anime \& vtubers, and electronic music production. Feel free to reach out to me via email or casually over Discord @kento24!'
	],
	bioLinks: {
		'Phillip Isola': 'https://web.mit.edu/phillipi/',
		'Hidenori Tanaka': 'https://cbs.fas.harvard.edu/directory/hidenori-tanaka/',
		'Ekdeep Singh Lubana': 'https://ekdeepslubana.github.io/',
		'Hanspeter Pfister': 'https://seas.harvard.edu/person/hanspeter-pfister',
		'Tobias Höllerer': 'https://engineering.ucsb.edu/people/tobias-h-llerer',
		'Ezoe Memorial Recruit Foundation Scholarship': 'https://www.recruit-foundation.org/en/'
	},
	links: [
		{
			label: 'Email',
			href: 'mailto:kento24gs@outlook.com',
			icon: 'mail'
		},
		{
			label: 'Resume',
			href: '/resume.pdf',
			icon: 'description'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/KentoNishi',
			iconSrc: '/assets/github.svg'
		},
		{
			label: 'Scholar',
			href: 'https://scholar.google.com/citations?user=iQoZSr4AAAAJ&hl=en',
			iconSrc: '/assets/gscholar.svg'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/kento-nishi-5696ab185/',
			iconSrc: '/assets/linkedin.svg'
		},
		{
			label: 'Garmin',
			href: 'https://connect.garmin.com/modern/profile/cee87f52-9272-4626-822b-dfc4cdd38407',
			iconSrc: '/assets/garmin-connect.svg'
		}
	]
};

const rawSections: DetailSection[] = [
	{
		id: 'publications',
		title: 'Papers',
		items: [
			{
				title: 'Mechanisms of Misgeneralization in Physical Sequence Modeling',
				subtitle:
					'Kento Nishi, Raphael Tang, Karun Kumar, Core Francisco Park, Hidenori Tanaka',
				meta: 'Preprint 2026, as first author.',
				highlightPaper: true,
				bullets: [
					'We show that generative sequence models can produce individually plausible physical trajectories while shifting aggregate quantities such as distance or energy, and use a data deviation kernel to predict and reduce this drift.'
				],
				links: [
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2605.20299' },
					// { label: 'PDF', href: 'https://arxiv.org/pdf/2605.20299' },
					{ label: 'Website', href: 'https://kentonishi.com/physical-misgeneralization/' },
					{
						label: 'Thread',
						href: 'https://x.com/kento_nishi/status/2057484912026943773'
					}
				]
			},
			{
				title: 'Evolutionary Curriculum Learning for Biological Sequence Modeling',
				subtitle: 'Richard Yuxuan Zhu, Kento Nishi',
				meta: 'ICML 2026 SPIGM Workshop, as co-author.',
				bullets: [
					'We train biological sequence models with a curriculum that gradually expands from nearby evolutionary neighbors to more distant homologs, improving protein variant-effect prediction and RNA sequence generation.'
				],
				links: [{ label: 'OpenReview', href: 'https://openreview.net/forum?id=8lPvrul1rs' }]
			},
			{
				title:
					'When does Observational Data Teach Latent Dynamics? Understanding Control Misalignment with Synthetic Tasks',
				subtitle:
					'Kento Nishi, Raphael Tang, Karun Kumar, Core Francisco Park, Hidenori Tanaka',
				meta: 'Sci4DL 2026 Workshop, as first author.',
				bullets: [
					'We show that generated samples can fit the observed data distribution while violating the distribution of hidden controls such as speed, energy, or speaking rate.'
				],
				links: [
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=6KoqLz01hc' },
					// { label: 'PDF', href: 'https://openreview.net/pdf?id=6KoqLz01hc' }
				]
			},
			{
				title: 'Representation Shattering in Transformers: A Synthetic Study with Knowledge Editing',
				subtitle:
					'Kento Nishi, Rahul Ramesh, Maya Okawa, Mikail Khona, Hidenori Tanaka, Ekdeep Singh Lubana',
				meta: 'ICML 2025, as first author.',
				highlightPaper: true,
				bullets: [
					'We show that knowledge editing can distort entity representations beyond the targeted fact, fracturing the geometry that supports related factual recall and reasoning.'
				],
				links: [
					{ label: 'Poster', href: 'https://icml.cc/virtual/2025/poster/46119' },
					// { label: 'PMLR', href: 'https://proceedings.mlr.press/v267/nishi25a.html' },
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=BKOeyZal0x' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2410.17194' },
					// {
					// 	label: 'PDF',
					// 	href: 'https://raw.githubusercontent.com/mlresearch/v267/main/assets/nishi25a/nishi25a.pdf'
					// },
					{ label: 'Code', href: 'https://github.com/KentoNishi/KE-ICML-2025' },
					{
						label: 'Thread',
						href: 'https://x.com/kento_nishi/status/1932072335726539063'
					}
				]
			},
			{
				title: 'In-Context Learning of Representations',
				subtitle:
					'Core Francisco Park, Andrew Lee, Ekdeep Singh Lubana, Yongyi Yang, Maya Okawa, Kento Nishi, Martin Wattenberg, Hidenori Tanaka',
				meta: 'ICLR 2025, as co-author.',
				bullets: [
					'We show that a concept representation can mediate in-context learning; when a graph is specified by enough examples, model representations shift toward that graph rather than only pretrained semantic associations.'
				],
				links: [
					{ label: 'Poster', href: 'https://iclr.cc/virtual/2025/poster/28292' },
					// {
					// 	label: 'Proceedings',
					// 	href: 'https://proceedings.iclr.cc/paper_files/paper/2025/hash/83fe5a77502e3d4cfab5960aed0ee6c3-Abstract-Conference.html'
					// },
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=pXlmOmlHJZ' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2501.00070' }
					// {
					// 	label: 'PDF',
					// 	href: 'https://proceedings.iclr.cc/paper_files/paper/2025/file/83fe5a77502e3d4cfab5960aed0ee6c3-Paper-Conference.pdf'
					// }
				]
			},
			{
				title: 'Structured In-Context Task Representations',
				subtitle:
					'Core Francisco Park, Andrew Lee, Ekdeep Singh Lubana, Kento Nishi, Maya Okawa, Hidenori Tanaka',
				meta: 'NeurIPS 2024 NeurReps Workshop, as co-author.',
				bullets: [
					'We find internal task representations during in-context learning on synthetic sequences from geometric graphs, including cases where model behavior follows context-specified structure over semantic priors.'
				],
				links: [
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=hlOu6w1a8T' },
					// { label: 'PDF', href: 'https://openreview.net/pdf?id=hlOu6w1a8T' }
				]
			},
			{
				title:
					'Towards an Understanding of Stepwise Inference in Transformers: A Synthetic Graph Navigation Model',
				subtitle:
					'Mikail Khona, Maya Okawa, Jan Hula, Rahul Ramesh, Kento Nishi, Robert Dick, Ekdeep Singh Lubana, Hidenori Tanaka',
				meta: 'ICML 2024, as co-author.',
				bullets: [
					'We use a synthetic graph-navigation task to measure stepwise inference, covering the reasoning gap, sampling-temperature tradeoff, simplicity bias, compositional generalization, and in-context primacy.'
				],
				links: [
					{ label: 'Poster', href: 'https://icml.cc/virtual/2024/poster/34846' },
					// { label: 'PMLR', href: 'https://proceedings.mlr.press/v235/khona24a.html' },
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=8VEGkphQaK' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2402.07757' }
					// {
					// 	label: 'PDF',
					// 	href: 'https://raw.githubusercontent.com/mlresearch/v235/main/assets/khona24a/khona24a.pdf'
					// }
				]
			},
			{
				title: 'Stepwise Inference in Transformers: Exploring a Synthetic Graph Navigation Task',
				subtitle:
					'Mikail Khona, Maya Okawa, Rahul Ramesh, Kento Nishi, Robert P. Dick, Ekdeep Singh Lubana, Hidenori Tanaka',
				meta: 'NeurIPS 2023 R0-FoMo Workshop, as co-author.',
				bullets: [
					'In directed acyclic graph navigation, we find better route generation when step-by-step paths expose hierarchical subpaths seen during pretraining; generated routes are further biased by in-context examples.'
				],
				links: [
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=RSGmZ7HZaA' },
					// { label: 'PDF', href: 'https://openreview.net/pdf?id=RSGmZ7HZaA' }
				]
			},
			{
				title: 'Joint-Task Regularization for Partially Labeled Multi-Task Learning',
				subtitle: 'Kento Nishi, Junsik Kim, Wanhua Li, Hanspeter Pfister',
				meta: 'CVPR 2024, as first author.',
				highlightPaper: true,
				bullets: [
					'We regularize dense prediction outputs in a shared task space, improving partially labeled multi-task learning while scaling linearly with task count.'
				],
				links: [
					{ label: 'Poster', href: 'https://cvpr.thecvf.com/virtual/2024/poster/29723' },
					{
						label: 'OpenAccess',
						href: 'https://openaccess.thecvf.com/content/CVPR2024/html/Nishi_Joint-Task_Regularization_for_Partially_Labeled_Multi-Task_Learning_CVPR_2024_paper.html'
					},
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2404.01976' },
					// {
					// 	label: 'PDF',
					// 	href: 'https://openaccess.thecvf.com/content/CVPR2024/papers/Nishi_Joint-Task_Regularization_for_Partially_Labeled_Multi-Task_Learning_CVPR_2024_paper.pdf'
					// },
					{ label: 'Website', href: 'https://kentonishi.com/JTR-CVPR-2024/' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/JTR-CVPR-2024' }
				]
			},
			{
				title: 'Augmentation Strategies for Learning with Noisy Labels',
				subtitle: 'Kento Nishi, Yi Ding, Alex Rich, Tobias Höllerer',
				meta: 'CVPR 2021, as first author.',
				highlightPaper: true,
				bullets: [
					'We separate augmentation strategies for loss modeling and model learning, improving robustness to noisy labels, including a large gain on CIFAR-10 with 90% symmetric noise.'
				],
				links: [
					{
						label: 'CVPR',
						href: 'https://openaccess.thecvf.com//content/CVPR2021/html/Nishi_Augmentation_Strategies_for_Learning_With_Noisy_Labels_CVPR_2021_paper.html'
					},
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2103.02130' },
					// {
					// 	label: 'PDF',
					// 	href: 'https://openaccess.thecvf.com/content/CVPR2021/papers/Nishi_Augmentation_Strategies_for_Learning_With_Noisy_Labels_CVPR_2021_paper.pdf'
					// },
					{ label: 'Website', href: 'https://kentonishi.com/Augmentation-for-LNL/' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/Augmentation-for-LNL' },
					// {
					// 	label: 'Papers with Code',
					// 	href: 'https://paperswithcode.com/paper/augmentation-strategies-for-learning-with'
					// },
					{
						label: 'Video',
						href: 'https://kentonishi.com/Augmentation-for-LNL/CVPR_Video.mp4'
					}
				]
			},
			{
				title:
					'Improving Label Noise Robustness with Data Augmentation and Semi-Supervised Learning',
				subtitle: 'Kento Nishi, Yi Ding, Alex Rich, Tobias Höllerer',
				meta: 'AAAI 2021 Student Abstract Track, as first author.',
				bullets: [
					'We combine data augmentation with semi-supervised learning to improve noisy-label robustness on CIFAR-10 and CIFAR-100 variants.'
				],
				links: [
					{ label: 'AAAI', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/17924' },
					{ label: 'DOI', href: 'https://doi.org/10.1609/aaai.v35i18.17924' }
					// { label: 'PDF', href: 'https://ojs.aaai.org/index.php/AAAI/article/download/17924/17729' }
				]
			}
		]
	},
	{
		id: 'software',
		title: 'Software',
		items: [
			{
				title: 'LiveTL',
				description:
					'Get live translations for YouTube streams, crowdsourced from multilingual viewers.',
				image: { src: '/assets/ltl.png', alt: 'LiveTL screenshot', background: '#000000' },
				badges: [
					{
						href: 'https://svelte.dev/',
						src: 'https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=ffffff',
						alt: 'Svelte'
					},
					{
						href: 'https://livetl.app/en/home/',
						src: 'https://img.shields.io/badge/Users-100k%2B%20total-blue?style=flat',
						alt: '100k+ total users'
					},
					{
						href: 'https://github.com/LiveTL/LiveTL/contributors',
						src: 'https://img.shields.io/badge/Contributors-20%2B%20total-blue?style=flat',
						alt: 'Contributors'
					},
					{
						href: 'https://chrome.google.com/webstore/detail/livetl-translation-filter/moicohcfhhbmmngneghfjfjpdobmmnlg',
						src: 'https://img.shields.io/chrome-web-store/rating/moicohcfhhbmmngneghfjfjpdobmmnlg?style=flat&color=blue&label=Rating',
						alt: 'Rating'
					},
					{
						href: 'https://www.gnu.org/licenses/agpl-3.0',
						src: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
						alt: 'License: AGPL v3'
					},
					{
						href: 'https://opencollective.com/livetl',
						src: 'https://img.shields.io/opencollective/all/livetl?label=Donators%20and%20Supporters&logo=dollar&style=flat&color=blue',
						alt: 'Donators and Supporters'
					},
					{
						href: 'https://discord.gg/uJrV3tmthg',
						src: 'https://img.shields.io/discord/780938154437640232.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2',
						alt: 'Discord'
					}
				],
				links: [
					{ label: 'GitHub', href: 'https://github.com/LiveTL/LiveTL' },
					{ label: 'Website', href: 'https://livetl.app/en/home/' }
				]
			},
			{
				title: 'HyperChat',
				titleTag: 'by LiveTL',
				description:
					'HyperChat enhances your YouTube chat with a smoother, more feature-packed experience!',
				image: { src: '/assets/hc.png', alt: 'HyperChat screenshot', background: '#181818' },
				badges: [
					{
						href: 'https://svelte.dev/',
						src: 'https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=ffffff',
						alt: 'Svelte'
					},
					{
						href: 'https://livetl.app/en/hyperchat/',
						src: 'https://img.shields.io/badge/Users-100k%2B%20total-blue?style=flat',
						alt: '100k+ total users'
					},
					{
						href: 'https://github.com/LiveTL/HyperChat/contributors',
						src: 'https://img.shields.io/badge/Contributors-20%2B%20total-blue?style=flat',
						alt: 'Contributors'
					},
					{
						href: 'https://chrome.google.com/webstore/detail/hyperchat-by-livetl/naipgebhooiiccifflecbffmnjbabdbh',
						src: 'https://img.shields.io/chrome-web-store/rating/naipgebhooiiccifflecbffmnjbabdbh?style=flat&color=blue&label=Rating',
						alt: 'Rating'
					},
					{
						href: 'https://www.gnu.org/licenses/agpl-3.0',
						src: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
						alt: 'License: AGPL v3'
					},
					{
						href: 'https://opencollective.com/livetl',
						src: 'https://img.shields.io/opencollective/all/livetl?label=Donators%20and%20Supporters&logo=dollar&style=flat&color=blue',
						alt: 'Donators and Supporters'
					},
					{
						href: 'https://discord.gg/uJrV3tmthg',
						src: 'https://img.shields.io/discord/780938154437640232.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2',
						alt: 'Discord'
					}
				],
				links: [
					{ label: 'GitHub', href: 'https://github.com/LiveTL/HyperChat' },
					{ label: 'Website', href: 'https://livetl.app/en/hyperchat/' }
				]
			},
			{
				title: 'YtcFilter',
				titleTag: 'by LiveTL',
				description:
					'Capture YouTube chat messages based on filter rules alongside the standard chat, with persistent logs and import/export.',
				image: {
					src: '/assets/ytcfilter.png',
					alt: 'YtcFilter settings screenshot',
					background: '#ffffff'
				},
				badges: [
					{
						href: 'https://svelte.dev/',
						src: 'https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=ffffff',
						alt: 'Svelte'
					},
					{
						href: 'https://chromewebstore.google.com/detail/ytcfilter-youtube-chat-fi/mnldnbhgfocmkehnlkeanlhfmopepnko',
						src: 'https://img.shields.io/chrome-web-store/users/mnldnbhgfocmkehnlkeanlhfmopepnko?style=flat&color=blue&label=Users',
						alt: 'Users'
					},
					{
						href: 'https://github.com/LiveTL/ytcfilter/contributors',
						src: 'https://img.shields.io/badge/Contributors-20%2B%20total-blue?style=flat',
						alt: 'Contributors'
					},
					{
						href: 'https://chromewebstore.google.com/detail/ytcfilter-youtube-chat-fi/mnldnbhgfocmkehnlkeanlhfmopepnko',
						src: 'https://img.shields.io/chrome-web-store/rating/mnldnbhgfocmkehnlkeanlhfmopepnko?style=flat&color=blue&label=Rating',
						alt: 'Rating'
					},
					{
						href: 'https://www.gnu.org/licenses/agpl-3.0',
						src: 'https://img.shields.io/badge/License-AGPL%20v3-blue.svg',
						alt: 'License: AGPL v3'
					},
					{
						href: 'https://discord.gg/uJrV3tmthg',
						src: 'https://img.shields.io/discord/780938154437640232.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2',
						alt: 'Discord'
					}
				],
				links: [
					{ label: 'GitHub', href: 'https://github.com/LiveTL/ytcfilter' },
					{
						label: 'Chrome Web Store',
						href: 'https://chromewebstore.google.com/detail/ytcfilter-youtube-chat-fi/mnldnbhgfocmkehnlkeanlhfmopepnko'
					}
				]
			},
			{
				title: 'holoEN Christmas Advent Calendar',
				image: {
					src: '/assets/holoen-advent.jpg',
					alt: 'holoEN Christmas Advent Calendar artwork',
					background: '#aca7c3',
					fit: 'cover'
				},
				description:
					'Officially commissioned by Cover Corp. and used as a yearly hololive English community event platform.',
				badges: [
					{
						href: 'https://svelte.dev/',
						src: 'https://img.shields.io/badge/Svelte-FF3E00?style=flat&logo=svelte&logoColor=ffffff',
						alt: 'Svelte'
					},
					{
						href: 'https://holoen-advent.com/',
						src: 'https://img.shields.io/badge/Users-250k%2B-blue?style=flat',
						alt: '250k+ users'
					},
					{
						href: 'https://hololivepro.com/en/',
						src: 'https://img.shields.io/badge/Commissioned%20by-Cover%20Corp-blue?style=flat',
						alt: 'commissioned by Cover Corp'
					}
				],
				links: [
					{ label: 'Website', href: 'https://holoen-advent.com/' },
					{ label: 'Cover Corp.', href: 'https://hololivepro.com/en/' }
				]
			}
		]
	},
	{
		id: 'packages',
		title: 'Technical Projects',
		items: [
			{
				title: 'slsh: ssh without keyboard lag',
				description:
					'A drop-in SSH wrapper with local latency compensation for interactive terminal sessions.',
				badges: [
					{
						href: 'https://github.com/KentoNishi/slsh-rs',
						src: 'https://img.shields.io/badge/Rust-000000?style=flat&logo=rust&logoColor=ffffff',
						alt: 'Rust'
					},
					{
						href: 'https://github.com/KentoNishi/slsh-rs',
						src: 'https://img.shields.io/badge/Platforms-Linux%20%7C%20macOS%20%7C%20Windows-blue?style=flat',
						alt: 'platforms: Linux, macOS, Windows'
					}
				],
				links: [
					{ label: 'Project', href: 'https://slsh-rs.github.io' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/slsh-rs' },
					{ label: 'Release', href: 'https://github.com/KentoNishi/slsh-rs/releases/latest' }
				]
			},
			{
				title: 'Torch Pitch Shift',
				description:
					'The first Python library for GPU pitch shifting at the time; later added to PyTorch upstream.',
				badges: [
					{
						href: 'https://github.com/KentoNishi/torch-pitch-shift',
						src: 'https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=ffdd54',
						alt: 'Python'
					},
					{
						href: 'https://pytorch.org/',
						src: 'https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=ffffff',
						alt: 'PyTorch'
					},
					{
						href: 'https://pypi.org/project/torch-pitch-shift/',
						src: 'https://img.shields.io/pypi/dm/torch-pitch-shift?color=blue&label=Downloads',
						alt: 'downloads'
					}
				],
				links: [
					{ label: 'PyPI', href: 'https://pypi.org/project/torch-pitch-shift/' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/torch-pitch-shift' }
				]
			},
			{
				title: 'iframe Translator',
				description: 'Translate text in the browser by triggering in-browser translations programmatically.',
				badges: [
					{
						href: 'https://github.com/KentoNishi/iframe-translator',
						src: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=ffffff',
						alt: 'TypeScript'
					},
					{
						href: 'https://www.npmjs.com/package/iframe-translator',
						src: 'https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=ffffff',
						alt: 'npm'
					},
					{
						href: 'https://www.npmjs.com/package/iframe-translator',
						src: 'https://img.shields.io/npm/dm/iframe-translator?color=blue&label=Downloads',
						alt: 'downloads'
					},
					{
						href: 'https://www.npmjs.com/package/iframe-translator',
						src: 'https://img.shields.io/npm/l/iframe-translator?color=blue&label=License',
						alt: 'license'
					}
				],
				links: [
					{ label: 'npm', href: 'https://www.npmjs.com/package/iframe-translator' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/iframe-translator' }
				]
			},
			{
				title: 'exio UI Library',
				description:
					'Framework-agnostic interactive components that can be mounted via content scripts.',
				badges: [
					{
						href: 'https://github.com/KentoNishi/exio',
						src: 'https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=ffffff',
						alt: 'TypeScript'
					},
					{
						href: 'https://www.npmjs.com/package/exio',
						src: 'https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=ffffff',
						alt: 'npm'
					},
					{
						href: 'https://www.npmjs.com/package/exio',
						src: 'https://img.shields.io/npm/dm/exio?color=blue&label=Downloads',
						alt: 'downloads'
					},
					{
						href: 'https://www.npmjs.com/package/exio',
						src: 'https://img.shields.io/npm/l/exio?color=blue&label=License',
						alt: 'license'
					}
				],
				links: [
					{ label: 'Website', href: 'https://kentonishi.github.io/exio/' },
					{ label: 'Docs', href: 'https://kentonishi.github.io/exio/#/docs' },
					{ label: 'npm', href: 'https://www.npmjs.com/package/exio' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/exio' }
				]
			}
		]
	},
	{
		id: 'writing',
		title: 'Writing',
		items: [
			{
				title: "Do AI Conferences' Ethics Reviews Steer Research Practices?",
				titleAnswer: 'no',
				subtitle:
					'Harvard CS2760 (Design, Technology, and Social Impact) Project Report',
				links: [{ label: 'PDF', href: '/papers/cs2760_ai_research_ethics.pdf' }]
			},
			{
				title:
					"Does CS1050's Chatham House Policy Protect Against LLM-Powered Stylometric Linkage De‑Identification?",
				titleAnswer: 'yes',
				subtitle: 'Harvard CS1050 (Privacy and Technology) Project Report',
				links: [
					{ label: 'PDF', href: '/stylometry.pdf' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/CS1050-Stylometry' }
				]
			},
			{
				title:
					'Can Temporal Distance Maps Communicate Variability? A User Study with Maps of Transit Travel Times',
				titleAnswer: 'yes',
				subtitle: 'Harvard CS271 (Data Visualization) Project Report',
				links: [
					{
						label: 'PDF',
						href: '/cs271-variance/Can_Temporal_Distance_Maps_Communicate_Variability__A_User_Study_with_Maps_of_Transit_Travel_Times.pdf'
					},
					{ label: 'Code', href: 'https://github.com/KentoNishi/cs271-variance' }
				]
			},
			{
				title: 'Implementing Portals in Unity',
				subtitle: 'Harvard CS175 (Computer Graphics) Project Report',
				links: [
					{ label: 'PDF', href: '/cs175-final-project/CS%20175%20writeup.pdf' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/cs175-final-project' }
				]
			},
			{
				title:
					'Browser Extension Standards: How Google Monopolized and Exploited the Web Browser Industry',
				subtitle: 'Harvard Science @ Work Fall 2022 Term Paper',
				links: [{ label: 'PDF', href: '/extensions.pdf' }]
			}
		]
	}
];

const sectionOrder = [
	'publications',
	'software',
	'packages',
	'writing'
];

export const sections: DetailSection[] = sectionOrder
	.map((id) => rawSections.find((section) => section.id === id))
	.filter((section): section is DetailSection => Boolean(section));
