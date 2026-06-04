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
	audio?: {
		src: string;
		type?: string;
	};
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
		'Harvard University — Bachelor’s & Master’s in Computer Science',
		'Concurrent four-year AB/SM Program, w/ Honors. GPA: 3.971. Graduating May 2026.'
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
		items: [
			{
				title: 'Diffusion Models, Sequential Tasks, Control & Alignment',
				bullets: [
					'Developing a theory of train/test-time control parameter gaps in diffusion models (paper soon).',
					'Began in MATS 2025 (ML Alignment & Theory Scholars Program); $12K grant & $10K for GPUs.',
					'Extended into mech-interp work at Comcast, debugging production Text-to-Speech diffusion models.',
					'Advised by H. Tanaka (PAI Group), H. Pfister (Harvard VCG), K. Kumar & R. Tang (Comcast).'
				]
			},
			{
				title: 'Transformers, Representation Learning, Model Mechanisms',
				bullets: [
					'Explaining pre-training & in-context mechanisms w/ interpretable, controllable synthetic graph tasks.',
					'Published first-author ICML 2025 paper; co-authored 2x ICLR and 2x NeurIPS papers.',
					'Funded by PRISE 2024 (Harvard Prog. for Research in Science and Eng.); $3K + housing & meals.',
					'Funded by CBS-NTT Fellowship (Physics of Intelligence Program); $5K summer 2023 stipend.',
					'Advised by H. Tanaka & E. S. Lubana (PAI Group).'
				]
			},
			{
				title: 'Computer Vision, Semi-Supervised Learning, Robustness',
				bullets: [
					'Designing compute-efficient ways to train accurate vision models under partial/noisy supervision.',
					'Published first-author CVPR 2024 paper as a sophomore undergrad.',
					'At age 16, published first-author CVPR 2021 paper & first-author AAAI 2021 short paper.',
					'Won Regeneron STS Top 300 Award & gave invited talk at Forum on Information Technology in 2022.',
					'Advised by H. Pfister (Harvard VCG) since 2022; prev. T. Höllerer (UCSB Four Eyes Lab).'
				]
			}
		]
	},
	{
		id: 'publications',
		title: 'Publications',
		items: [
			{
				title: 'Representation Shattering in Transformers: A Synthetic Study with Knowledge Editing',
				subtitle:
					'Kento Nishi, Rahul Ramesh, Maya Okawa, Mikail Khona, Hidenori Tanaka, Ekdeep Singh Lubana',
				meta: 'ICML 2025, as first author. ∼5 citations as of Nov. 2025.',
				bullets: [
					'I built synthetic knowledge-graph tasks, implemented training and probing, and led the experiments.',
					'I revealed why overwriting knowledge in LLMs causes collateral damage to unrelated capabilities.'
				],
				links: [
					{ label: 'ICML Poster / OpenReview', href: 'https://icml.cc/virtual/2025/poster/46119' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2410.17194' },
					{ label: 'PDF', href: 'https://arxiv.org/pdf/2410.17194.pdf' },
					{
						label: 'Twitter/X Thread',
						href: 'https://x.com/kento_nishi/status/1932072335726539063'
					}
				]
			},
			{
				title: 'In-Context Learning of Representations',
				subtitle:
					'Core Francisco Park, Andrew Lee, Ekdeep Singh Lubana, Yongyi Yang, Maya Okawa, Kento Nishi, Martin Wattenberg, Hidenori Tanaka',
				meta: 'ICLR 2025, as co-author. ∼30 citations as of Nov. 2025.',
				bullets: [
					'I pinned down core experiment protocols and developed reusable code to training and visualization.',
					'My task designs helped explain how LLMs dynamically restructure entity representations in-context.'
				],
				links: [{ label: 'arXiv', href: 'https://arxiv.org/abs/2501.00070' }]
			},
			{
				title: 'Structured In-Context Task Representations',
				subtitle:
					'Core Francisco Park, Andrew Lee, Ekdeep Singh Lubana, Kento Nishi, Maya Okawa, Hidenori Tanaka',
				meta: 'NeurIPS 2024 NeurReps Workshop, as co-author.',
				bullets: ['Precursor to ICLR 2025 “In-Context Learning of Representations.”'],
				links: [{ label: 'OpenReview', href: 'https://openreview.net/forum?id=hlOu6w1a8T' }]
			},
			{
				title:
					'Towards an Understanding of Stepwise Inference in Transformers: A Synthetic Graph Navigation Model',
				subtitle:
					'Mikail Khona, Maya Okawa, Jan Hula, Rahul Ramesh, Kento Nishi, Robert Dick, Ekdeep Singh Lubana, Hidenori Tanaka',
				meta: 'ICML 2024, as co-author. ∼10 citations as of Nov. 2025.',
				bullets: [
					'I implemented parts of the graph-navigation data generator, toy transformer, and training scripts.',
					'My code allowed us to identify how autoregressive transformers learn chain-of-thought reasoning.'
				],
				links: [
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2402.07757' },
					{ label: 'PDF', href: 'https://arxiv.org/pdf/2402.07757.pdf' }
				]
			},
			{
				title: 'Stepwise Inference in Transformers: Exploring a Synthetic Graph Navigation Task',
				subtitle:
					'Mikail Khona, Maya Okawa, Rahul Ramesh, Kento Nishi, Robert P. Dick, Ekdeep Singh Lubana, Hidenori Tanaka',
				meta: 'NeurIPS 2023 R0-FoMo Workshop, as co-author.',
				bullets: [
					'Precursor to ICML 2024 “Towards an Understanding of Stepwise Inference in Transformers.”'
				],
				links: [
					{ label: 'OpenReview', href: 'https://openreview.net/forum?id=RSGmZ7HZaA' },
					{ label: 'PDF', href: 'https://openreview.net/pdf?id=RSGmZ7HZaA' }
				]
			},
			{
				title: 'Joint-Task Regularization for Partially Labeled Multi-Task Learning',
				subtitle: 'Kento Nishi, Junsik Kim, Wanhua Li, Hanspeter Pfister',
				meta: 'CVPR 2024, as first author. ∼5 citations as of Nov. 2025.',
				bullets: [
					'I proposed JTR, implemented the code, and led experiments, ablations, writing, and rebuttals.',
					'JTR is a simple, linear-complexity regularizer to train shared backbones with partially labeled data.'
				],
				links: [
					{ label: 'CVPR Poster / Video', href: 'https://cvpr.thecvf.com/virtual/2024/poster/29723' },
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2404.01976' },
					{ label: 'PDF', href: 'https://arxiv.org/pdf/2404.01976.pdf' },
					{ label: 'Website', href: 'https://kentonishi.com/JTR-CVPR-2024/' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/JTR-CVPR-2024' }
				]
			},
			{
				title: 'Augmentation Strategies for Learning with Noisy Labels',
				subtitle: 'Kento Nishi, Yi Ding, Alex Rich, Tobias Höllerer',
				meta: 'CVPR 2021, as first author. ∼175 citations as of Nov. 2025.',
				bullets: [
					'I designed the decoupled augmentation strategy, wrote the code, and led the experiments.',
					'“Augmented Descent” improves learning by separating weak and strong augmentations in training.'
				],
				links: [
					{
						label: 'Abstract',
						href: 'https://openaccess.thecvf.com//content/CVPR2021/html/Nishi_Augmentation_Strategies_for_Learning_With_Noisy_Labels_CVPR_2021_paper.html'
					},
					{ label: 'arXiv', href: 'https://arxiv.org/abs/2103.02130' },
					{ label: 'PDF', href: 'https://arxiv.org/pdf/2103.02130.pdf' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/Augmentation-for-LNL' },
					{
						label: 'Papers with Code',
						href: 'https://paperswithcode.com/paper/augmentation-strategies-for-learning-with'
					},
					{
						label: 'CVPR Video',
						href: 'https://kentonishi.com/Augmentation-for-LNL/CVPR_Video.mp4'
					}
				]
			},
			{
				title:
					'Improving Label Noise Robustness with Data Augmentation and Semi-Supervised Learning',
				subtitle: 'Kento Nishi, Yi Ding, Alex Rich, Tobias Höllerer',
				meta: 'AAAI 2021 Student Abstract Track, as first author. ∼5 citations as of Nov. 2025.',
				bullets: ['Precursor to CVPR 2021 “Augmentation Strategies for Learning with Noisy Labels.”'],
				links: [
					{ label: 'Abstract', href: 'https://ojs.aaai.org/index.php/AAAI/article/view/17924' },
					{ label: 'PDF', href: 'https://www.aaai.org/AAAI21Papers/SA-207.NishiK.pdf' }
				]
			}
		]
	},
	{
		id: 'software',
		title: 'Apps',
		items: [
			{
				title: 'LiveTL',
				description:
					'Get live translations for YouTube streams, crowdsourced from multilingual viewers.',
				bullets: [
					'Founding dev of three modular addons that improve YouTube & Twitch (LiveTL, HyperChat, YtcFilter).',
					'100K+ total users; 900+ repo stars; 20+ code contributors. Free, open-source, and cross-platform.'
				],
				image: { src: '/assets/ltl.png', alt: 'LiveTL screenshot' },
				links: [
					{ label: 'GitHub Repo', href: 'https://github.com/LiveTL/LiveTL' },
					{ label: 'Website', href: 'https://livetl.app/en/home/' }
				]
			},
			{
				title: 'HyperChat',
				description:
					'HyperChat enhances your YouTube chat with a smoother, more feature-packed experience!',
				image: { src: '/assets/hc.png', alt: 'HyperChat screenshot' },
				links: [
					{ label: 'GitHub Repo', href: 'https://github.com/LiveTL/HyperChat' },
					{ label: 'Website', href: 'https://livetl.app/en/hyperchat/' }
				]
			},
			{
				title: 'YtcFilter',
				subtitle: 'LiveTL Apps'
			},
			{
				title: 'holoEN Christmas Advent Calendar',
				bullets: [
					'Full-stack dev of the event platform (holoen-advent.com); officially commissioned by Cover Corp.',
					'250K+ total users; a beloved yearly tradition in the hololive English community.'
				]
			}
		]
	},
	{
		id: 'packages',
		title: 'Libraries & Packages',
		items: [
			{
				title: 'Package Profiles',
				links: [
					{ label: 'PyPI', href: 'https://pypi.org/user/KentoNishi/' },
					{ label: 'npm', href: 'https://www.npmjs.com/~kentonishi' }
				]
			},
			{
				title: 'torch-pitch-shift',
				subtitle: 'Python / PyTorch',
				description:
					'Pitch-shift audio clips quickly with PyTorch (CUDA supported)! Additional utilities for searching efficient transformations are included.',
				bullets: [
					'The first Python library for pitch-shifting on GPU at the time; later added to PyTorch upstream.',
					'750K+ downloads/month; 135+ GitHub stars; used by torch-audiomentations (1.1K+ stars).'
				],
				links: [
					{ label: 'View on PyPI', href: 'https://pypi.org/project/torch-pitch-shift/' },
					{ label: 'View on GitHub', href: 'https://github.com/KentoNishi/torch-pitch-shift' }
				]
			},
			{
				title: 'torch-time-stretch',
				subtitle: 'Python / PyTorch',
				description:
					'Time-stretch audio clips quickly with PyTorch (CUDA supported)! Additional utilities for searching efficient transformations are included.',
				links: [
					{ label: 'View on PyPI', href: 'https://pypi.org/project/torch-time-stretch/' },
					{ label: 'View on GitHub', href: 'https://github.com/KentoNishi/torch-time-stretch' }
				]
			},
			{
				title: 'iframe-translator',
				subtitle: 'TypeScript',
				description:
					'Translate text for free in the browser with iframe shenanigans.',
				links: [
					{ label: 'View on npm', href: 'https://www.npmjs.com/package/iframe-translator' },
					{ label: 'View on GitHub', href: 'https://github.com/KentoNishi/iframe-translator' }
				]
			},
			{
				title: 'torch-mutable-modules',
				subtitle: 'Python / PyTorch',
				description:
					'Use in-place and assignment operations on PyTorch module parameters with support for autograd.',
				links: [
					{ label: 'View on PyPI', href: 'https://pypi.org/project/torch-mutable-modules/' },
					{ label: 'View on GitHub', href: 'https://github.com/KentoNishi/torch-mutable-modules' }
				]
			},
			{
				title: 'Python++',
				subtitle: 'Python',
				description:
					'A robust Java-style OOP system for Python, with support for statics, encapsulation, and inheritance.',
				links: [
					{ label: 'View on PyPI', href: 'https://pypi.org/project/pythonpp/' },
					{ label: 'View on GitHub', href: 'https://github.com/KentoNishi/pythonpp' }
				]
			}
		]
	},
	{
		id: 'music',
		title: 'Music',
		items: [
			{
				title: 'Bliss',
				subtitle: 'Kento Nishi',
				meta: 'March 2026',
				description: 'Work in progress.',
				audio: { src: '/music/bliss.mp3', type: 'audio/mpeg' },
				links: [{ label: 'Open', href: '/music/bliss.mp3' }]
			},
			{
				title: 'Celesta',
				subtitle: 'Kento Nishi',
				meta: 'August 2023',
				description: 'Work in progress.',
				audio: { src: '/music/full-131.wav', type: 'audio/wav' },
				links: [{ label: 'Open', href: '/music/full-131.wav' }]
			},
			{
				title: 'Forfeit',
				subtitle: 'Kento Nishi',
				meta: 'January 2023',
				description: 'Full track.',
				audio: { src: '/music/forfeit.mp3', type: 'audio/mpeg' },
				links: [{ label: 'Open', href: '/music/forfeit.mp3' }]
			},
			{
				title: 'Voyage',
				subtitle: 'Kento Nishi',
				meta: 'September 2022',
				description: 'Full track.',
				audio: { src: '/music/voyage.mp3', type: 'audio/mpeg' },
				links: [{ label: 'Open', href: '/music/voyage.mp3' }]
			},
			{
				title: 'New Beginning',
				subtitle: 'Kento Nishi',
				meta: 'September 2022',
				description: 'Full track.',
				audio: { src: '/music/new-beginning.mp3', type: 'audio/mpeg' },
				links: [{ label: 'Open', href: '/music/new-beginning.mp3' }]
			},
			{
				title: 'HyperChat Trailer Theme',
				subtitle: 'Kento Nishi',
				meta: 'July 2022',
				description: '2 minute version.',
				audio: { src: '/music/hyperchat-ad.mp3', type: 'audio/mpeg' },
				links: [{ label: 'Open', href: '/music/hyperchat-ad.mp3' }]
			},
			{
				title: 'Dubstep Demo',
				subtitle: 'Kento Nishi',
				meta: 'March 2020',
				description: 'Demo.',
				audio: { src: '/music/dubstep-demo.mp3', type: 'audio/mpeg' },
				links: [{ label: 'Open', href: '/music/dubstep-demo.mp3' }]
			},
			{
				title: 'October Draft',
				subtitle: 'Kento Nishi',
				meta: 'October 2023',
				description: 'Work in Progress.',
				audio: { src: '/music/october-wip.wav', type: 'audio/wav' },
				links: [{ label: 'Open', href: '/music/october-wip.wav' }]
			},
			{
				title: 'Instrumental Draft',
				subtitle: 'Kento Nishi',
				meta: 'March 2024',
				description: 'Work in Progress.',
				audio: { src: '/music/instrumental-layers.wav', type: 'audio/wav' },
				links: [{ label: 'Open', href: '/music/instrumental-layers.wav' }]
			}
		]
	},
	{
		id: 'writing',
		title: 'Blog Posts',
		items: [
			{
				title:
					"Does CS1050's Chatham House Policy Protect Against LLM-Powered Stylometric Linkage De-Identification?",
				subtitle: 'Harvard CS1050 Project Report',
				links: [
					{ label: 'PDF', href: '/stylometry.pdf' },
					{ label: 'Code', href: 'https://github.com/KentoNishi/CS1050-Stylometry' }
				]
			},
			{
				title:
					'Can Temporal Distance Maps Communicate Variability? A User Study with Maps of Transit Travel Times',
				subtitle: 'Harvard CompSci 271 Spring 2024 Term Paper',
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
				subtitle: 'Harvard CompSci 175 Spring 2023 Term Project',
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
	},
	{
		id: 'experience',
		title: 'Employment',
		items: [
			{
				title: 'Comcast Applied AI Labs, Speech AI Team',
				subtitle: 'Part-Time Contractor (post-internship extension, remote)',
				meta: 'Sep. 2025 - Present',
				bullets: [
					'Continuing research to characterize biases of diffusion models powering Comcast’s Speech AI systems.',
					'Aiming for a tier-1 conference paper submission and a proprietary patent filing.'
				]
			},
			{
				title: 'Comcast Applied AI Labs, Speech AI Team',
				subtitle: 'Grad-Level Summer Research Intern (Washington DC, in-person)',
				meta: 'Jun. - Aug. 2025',
				bullets: [
					'Worked on production-scale speech models, serving over 50 million daily users on Xfinity & Sky TV.',
					'Engaged with engineers/managers/testers/lawyers to confront access/privacy/feasibility tradeoffs.'
				]
			},
			{
				title: 'Harvard SEAS',
				subtitle: 'CS79 TA, Design of Useful and Usable Interactive Systems by K. Gajos',
				meta: 'Aug. 2025 - Present',
				bullets: [
					'Sole undergraduate member of course staff; studio planning lead; studio leader.',
					'Teach tools like Figma; facilitate critical thinking about design goals, assumptions, and consequences.'
				]
			}
		]
	},
	{
		id: 'affiliations',
		title: 'Affiliations',
		items: [
			{
				title: 'Physics of AI (PAI) Group @ Harvard-NTT',
				subtitle: 'w/ H. Tanaka & E. S. Lubana',
				meta: 'Mar. 2023 - Present'
			},
			{
				title: 'Visual Computing Group (VCG) @ Harvard',
				subtitle: 'w/ H. Pfister',
				meta: 'Aug. 2022 - Present'
			},
			{
				title: 'Four Eyes Lab @ UC Santa Barbara',
				subtitle: 'w/ T. Höllerer',
				meta: 'Jun. 2020 - Aug. 2022'
			}
		]
	},
	{
		id: 'grants',
		title: 'Grants',
		items: [
			{
				title: 'Ezoe Memorial Recruit Foundation Scholarship',
				meta: 'Apr. 2023 - Present',
				bullets: [
					'$95,000/year, covering tuition and living expenses. Support through BA, MS, and PhD.',
					'Oldest & most selective scholarship program in Japan (approx. 6 recipients/year).'
				]
			}
		]
	},
	{
		id: 'other-activities',
		title: 'Other Activities',
		items: [
			{
				title: 'Harvard AI Safety Team (AISST), Research Compute Lead',
				meta: '2023 - Present',
				bullets: [
					'Mission: to reduce catastrophic risks from AI through research, education, and capacity-building.',
					'Managing student researchers’ shared GPU resources via AWS.'
				]
			},
			{
				title: '2022 Forum on Information Technology (FIT)',
				bullets: [
					'Premier annual Japanese conference, convening research scientists and industry professionals.',
					'Invited speaker in the “Top Conference” track. Presented and answered questions entirely in Japanese.'
				]
			},
			{
				title: 'San Francisco Japanese School',
				meta: '2011 - 2019',
				bullets: [
					'Attended full-day Saturday school for 9 years. Sponsored by the Japanese government.',
					'Maintaining bilingual, professional-grade proficiency in Japanese speaking, reading, and writing.'
				]
			}
		]
	},
	{
		id: 'distinctions',
		title: 'Distinctions',
		items: [
			{
				title: 'Tier-1 Conference Reviewer',
				meta: '2025',
				description: 'ICLR 2026 (invitation-only).'
			},
			{
				title: 'John Harvard Scholar',
				meta: '2023, 2025',
				description: 'Top 5% GPA in the Harvard College class of 2026.'
			},
			{
				title: 'Advanced Half-Marathoner',
				meta: '2025',
				description: '1h21m29s PR (Cambridge, Nov. 2025, 162nd/9,358). 6x finisher.'
			},
			{
				title: 'Regeneron STS Top 300 Scholar',
				meta: '2022',
				description: 'The oldest, most prestigious high school STEM award.'
			}
		]
	}
];
