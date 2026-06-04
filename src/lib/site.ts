export type ActionLink = {
	label: string;
	href: string;
	icon?: string;
};

export type ImageAsset = {
	src: string;
	alt: string;
};

export type Profile = {
	name: string;
	location: string;
	affiliation: string;
	email: string;
	image: ImageAsset;
	wallpaper: ImageAsset;
	bio: string[];
	links: ActionLink[];
};

export type DetailItem = {
	title: string;
	subtitle?: string;
	meta?: string;
	description?: string;
	bullets?: string[];
	links?: ActionLink[];
	image?: ImageAsset;
	tags?: string[];
	highlight?: boolean;
};

export type DetailSection = {
	id: string;
	title: string;
	description?: string;
	items: DetailItem[];
};

export const profile: Profile = {
	name: 'Kento Nishi',
	location: 'San Jose, CA / Cambridge, MA',
	affiliation: 'Harvard University',
	email: 'kentonishi@college.harvard.edu',
	image: {
		src: '/assets/pfp.png',
		alt: 'Kento Nishi'
	},
	wallpaper: {
		src: '/assets/wallpaper.jpg',
		alt: ''
	},
	bio: [
		'I am a computer science AB/SM student at Harvard, working on machine learning research across transformers, diffusion models, computer vision, and model interpretability.',
		'I am affiliated with the Physics of AI Group at Harvard-NTT and the Harvard Visual Computing Group, and previously worked with the Four Eyes Lab at UC Santa Barbara.',
		'My work focuses on building controlled synthetic settings that make model behavior easier to understand, then carrying those insights back to practical systems.'
	],
	links: [
		{
			label: 'Email',
			href: 'mailto:kentonishi@college.harvard.edu',
			icon: 'mail'
		},
		{
			label: 'GitHub',
			href: 'https://github.com/KentoNishi',
			icon: 'code'
		},
		{
			label: 'Scholar',
			href: 'https://scholar.google.com/citations?user=iQoZSr4AAAAJ&hl=en',
			icon: 'school'
		},
		{
			label: 'LinkedIn',
			href: 'https://www.linkedin.com/in/kento-nishi-5696ab185/',
			icon: 'badge'
		},
		{
			label: 'Resume',
			href: '/resume.pdf',
			icon: 'description'
		}
	]
};

export const sections: DetailSection[] = [
	{
		id: 'research-themes',
		title: 'Research Themes',
		description:
			'Current research areas, summarized from my resume and recent publication record.',
		items: [
			{
				title: 'Diffusion Models, Sequential Tasks, Control & Alignment',
				subtitle: 'Harvard PAI Group / Comcast Applied AI Labs',
				description:
					'Developing a theory of train/test-time control parameter gaps in diffusion models, with applications to speech generation systems.',
				bullets: [
					'Began in MATS 2025 with support for research and GPUs.',
					'Extended into mechanistic interpretability work on production Text-to-Speech diffusion models.',
					'Advised by Hidenori Tanaka, Hanspeter Pfister, Karun Kumar, and Raphael Tang.'
				],
				tags: ['diffusion', 'control', 'alignment']
			},
			{
				title: 'Transformers, Representation Learning, Model Mechanisms',
				subtitle: 'Physics of AI Group @ Harvard-NTT',
				description:
					'Explaining pre-training and in-context mechanisms with interpretable, controllable synthetic graph tasks.',
				bullets: [
					'Published first-author ICML 2025 work on representation shattering.',
					'Co-authored ICLR, ICML, and NeurIPS workshop work on graph-navigation and in-context representations.',
					'Supported by PRISE 2024 and the CBS-NTT Fellowship.'
				],
				tags: ['transformers', 'mechanistic interpretability', 'representation learning']
			},
			{
				title: 'Computer Vision, Semi-Supervised Learning, Robustness',
				subtitle: 'Harvard VCG / UCSB Four Eyes Lab',
				description:
					'Designing compute-efficient methods for training vision models under partial or noisy supervision.',
				bullets: [
					'Published first-author CVPR 2024 work on partially labeled multi-task learning.',
					'Published first-author CVPR 2021 and AAAI 2021 work on noisy labels as a high-school researcher.',
					'Won Regeneron STS Top 300 and presented at Forum on Information Technology 2022.'
				],
				tags: ['computer vision', 'robustness', 'data augmentation']
			}
		]
	},
	{
		id: 'publications',
		title: 'Publications',
		description:
			'Peer-reviewed papers and workshop publications from the resume and old site.',
		items: [
			{
				title: 'Representation Shattering in Transformers: A Synthetic Study with Knowledge Editing',
				subtitle:
					'Kento Nishi, Rahul Ramesh, Maya Okawa, Mikail Khona, Hidenori Tanaka, Ekdeep Singh Lubana',
				meta: 'ICML 2025, first author',
				description:
					'I built synthetic knowledge-graph tasks, implemented training and probing, and led experiments revealing how overwriting knowledge can cause collateral damage to unrelated capabilities.',
				links: [
					{ label: 'ICML Poster', href: 'https://icml.cc/virtual/2025/poster/46119' },
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=BKOeyZal0x' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2410.17194' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/KE-ICML-2025' }
				],
				highlight: true
			},
			{
				title: 'ICLR: In-Context Learning of Representations',
				subtitle:
					'Core Francisco Park, Andrew Lee, Ekdeep Singh Lubana, Yongyi Yang, Maya Okawa, Kento Nishi, Martin Wattenberg, Hidenori Tanaka',
				meta: 'ICLR 2025, co-author',
				description:
					'I helped pin down experiment protocols and reusable code for training and visualization, helping show how LLMs dynamically restructure representations in-context.',
				links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2501.00070' }]
			},
			{
				title: 'Structured In-Context Task Representations',
				subtitle:
					'Core Francisco Park, Andrew Lee, Ekdeep Singh Lubana, Kento Nishi, Maya Okawa, Hidenori Tanaka',
				meta: 'NeurIPS 2024 NeurReps Workshop, co-author',
				description:
					'Workshop precursor to the ICLR 2025 work on in-context representation learning.',
				links: [{ label: 'OpenReview', href: 'https://openreview.net/forum?id=hlOu6w1a8T' }]
			},
			{
				title:
					'Towards an Understanding of Stepwise Inference in Transformers: A Synthetic Graph Navigation Model',
				subtitle:
					'Mikail Khona, Maya Okawa, Jan Hula, Rahul Ramesh, Kento Nishi, Robert P. Dick, Ekdeep Singh Lubana, Hidenori Tanaka',
				meta: 'ICML 2024, co-author',
				description:
					'I implemented parts of the graph-navigation data generator, toy transformer, and training scripts used to study chain-of-thought-like reasoning.',
				links: [
					{ label: 'PMLR', href: 'https://proceedings.mlr.press/v235/khona24a.html' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2402.07757' }
				]
			},
			{
				title: 'Stepwise Inference in Transformers: Exploring a Synthetic Graph Navigation Task',
				subtitle:
					'Mikail Khona, Maya Okawa, Rahul Ramesh, Kento Nishi, Robert P. Dick, Ekdeep Singh Lubana, Hidenori Tanaka',
				meta: 'NeurIPS 2023 R0-FoMo Workshop, co-author',
				description:
					'Workshop precursor to the ICML 2024 graph-navigation paper.',
				links: [
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=RSGmZ7HZaA' },
					{ label: 'PDF', href: 'https://openreview.net/pdf?id=RSGmZ7HZaA' }
				]
			},
			{
				title: 'Joint-Task Regularization for Partially Labeled Multi-Task Learning',
				subtitle: 'Kento Nishi, Junsik Kim, Wanhua Li, Hanspeter Pfister',
				meta: 'CVPR 2024, first author',
				description:
					'I proposed JTR, implemented the code, and led experiments, ablations, writing, and rebuttals for a linear-complexity regularizer for partially labeled data.',
				links: [
					{ label: 'CVPR', href: 'https://cvpr.thecvf.com/virtual/2024/poster/29723' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2404.01976' },
					{ label: 'Website', href: 'https://kentonishi.com/JTR-CVPR-2024/' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/JTR-CVPR-2024' }
				],
				highlight: true
			},
			{
				title: 'Augmentation Strategies for Learning with Noisy Labels',
				subtitle: 'Kento Nishi, Yi Ding, Alex Rich, Tobias Hoellerer',
				meta: 'CVPR 2021, first author',
				description:
					'I designed the decoupled augmentation strategy, wrote code, and led experiments for improving noisy-label learning with separate weak and strong augmentations.',
				links: [
					{
						label: 'CVF',
						href: 'https://openaccess.thecvf.com/content/CVPR2021/html/Nishi_Augmentation_Strategies_for_Learning_With_Noisy_Labels_CVPR_2021_paper.html'
					},
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2103.02130' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/Augmentation-for-LNL' }
				]
			},
			{
				title:
					'Improving Label Noise Robustness with Data Augmentation and Semi-Supervised Learning',
				subtitle: 'Kento Nishi, Yi Ding, Alex Rich, Tobias Hoellerer',
				meta: 'AAAI 2021 Student Abstract Track, first author',
				description:
					'Student abstract precursor to the CVPR 2021 noisy-label learning paper.',
				links: [
					{ label: 'AAAI', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/17924' },
					{ label: 'PDF', href: 'https://www.aaai.org/AAAI21Papers/SA-207.NishiK.pdf' }
				]
			}
		]
	},
	{
		id: 'software',
		title: 'Selected Software & Projects',
		description:
			'Open-source apps, libraries, and community projects carried over from the old site and resume.',
		items: [
			{
				title: 'LiveTL Apps',
				subtitle: 'YouTube and Twitch translation/chat tooling',
				description:
					'Founding developer of modular addons that improve live-stream chat and translation workflows across LiveTL, HyperChat, and YtcFilter.',
				bullets: ['100K+ total users.', '900+ repository stars.', '20+ code contributors.'],
				image: { src: '/assets/ltl.png', alt: 'LiveTL screenshot' },
				links: [
					{ label: 'LiveTL', href: 'https://livetl.app/en/home/' },
					{ label: 'LiveTL GitHub', href: 'https://github.com/LiveTL/LiveTL' },
					{ label: 'HyperChat', href: 'https://livetl.app/en/hyperchat/' },
					{ label: 'HyperChat GitHub', href: 'https://github.com/LiveTL/HyperChat' }
				],
				highlight: true
			},
			{
				title: 'HyperChat',
				subtitle: 'Smoother YouTube chat experience',
				description:
					'A performance-focused extension that enhances YouTube chat with a smoother, more feature-packed live experience.',
				image: { src: '/assets/hc.png', alt: 'HyperChat screenshot' },
				links: [
					{ label: 'Website', href: 'https://livetl.app/en/hyperchat/' },
					{ label: 'GitHub', href: 'https://github.com/LiveTL/HyperChat' }
				]
			},
			{
				title: 'torch-pitch-shift',
				subtitle: 'Python / PyTorch',
				description:
					'GPU-accelerated pitch-shifting for PyTorch audio pipelines, later upstreamed into PyTorch-adjacent tooling.',
				bullets: ['750K+ downloads/month.', '135+ GitHub stars.'],
				links: [
					{ label: 'PyPI', href: 'https://pypi.org/project/torch-pitch-shift/' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/torch-pitch-shift' }
				]
			},
			{
				title: 'torch-time-stretch',
				subtitle: 'Python / PyTorch',
				description:
					'CUDA-supported time-stretching utilities for PyTorch audio clips and transformation search.',
				links: [
					{ label: 'PyPI', href: 'https://pypi.org/project/torch-time-stretch/' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/torch-time-stretch' }
				]
			},
			{
				title: 'holoEN Christmas Advent Calendar',
				subtitle: 'Full-stack event platform',
				description:
					'Officially commissioned event platform for holoen-advent.com, serving a large yearly fan community.',
				bullets: ['250K+ total users.', 'Yearly hololive English community tradition.']
			},
			{
				title: 'iframe-translator',
				subtitle: 'TypeScript',
				description:
					'Browser translation utility using iframe-based integrations.',
				links: [
					{ label: 'npm', href: 'https://www.npmjs.com/package/iframe-translator' },
					{ label: 'GitHub', href: 'https://github.com/KentoNishi/iframe-translator' }
				]
			}
		]
	},
	{
		id: 'experience',
		title: 'Experience & Affiliations',
		description: 'A compact version of the resume timeline.',
		items: [
			{
				title: 'Harvard University',
				subtitle: 'Bachelor’s & Master’s in Computer Science',
				meta: 'Aug. 2022 - May 2026',
				description:
					'Concurrent four-year AB/SM Program, with Honors. GPA: 3.971.'
			},
			{
				title: 'Comcast Applied AI Labs, Speech AI Team',
				subtitle: 'Part-Time Contractor / Grad-Level Summer Research Intern',
				meta: 'Jun. 2025 - Present',
				description:
					'Worked on production-scale speech models serving Comcast Speech AI systems, continuing research on biases of diffusion models.'
			},
			{
				title: 'Harvard SEAS',
				subtitle: 'CS79 Teaching Assistant',
				meta: 'Aug. 2025 - Present',
				description:
					'Sole undergraduate course-staff member; studio planning lead and studio leader for Design of Useful and Usable Interactive Systems.'
			},
			{
				title: 'Physics of AI Group @ Harvard-NTT',
				subtitle: 'Research affiliation with Hidenori Tanaka and Ekdeep Singh Lubana',
				meta: 'Mar. 2023 - Present'
			},
			{
				title: 'Harvard Visual Computing Group',
				subtitle: 'Research affiliation with Hanspeter Pfister',
				meta: 'Aug. 2022 - Present'
			},
			{
				title: 'Four Eyes Lab @ UC Santa Barbara',
				subtitle: 'Research affiliation with Tobias Hoellerer',
				meta: 'Jun. 2020 - Aug. 2022'
			}
		]
	},
	{
		id: 'distinctions',
		title: 'Distinctions',
		items: [
			{
				title: 'Ezoe Memorial Recruit Foundation Scholarship',
				meta: 'Apr. 2023 - Present',
				description:
					'$95,000/year support through BA, MS, and PhD from one of Japan’s oldest and most selective scholarship programs.'
			},
			{
				title: 'Tier-1 Conference Reviewer',
				meta: '2025',
				description: 'ICLR 2026 invitation-only reviewer.'
			},
			{
				title: 'John Harvard Scholar',
				meta: '2023, 2025',
				description: 'Top 5% GPA in the Harvard College class of 2026.'
			},
			{
				title: 'Advanced Half-Marathoner',
				meta: '2025',
				description: '1h21m29s PR in Cambridge, November 2025; 6x finisher.'
			},
			{
				title: 'Regeneron STS Top 300 Scholar',
				meta: '2022',
				description: 'Recognized by the oldest high-school STEM research competition in the United States.'
			}
		]
	}
];
