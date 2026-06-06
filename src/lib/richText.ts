export type RichTextToken =
	| {
			type: 'text';
			text: string;
	  }
	| {
			type: 'link';
			label: string;
			href: string;
	  }
	| {
			type: 'code';
			text: string;
	  };

export type RichTextBlock =
	| {
			type: 'paragraph';
			tokens: RichTextToken[];
	  }
	| {
			type: 'code';
			text: string;
			language?: string;
	  };

export type RichTextLinks = Record<string, string>;

const findClosingParen = (input: string, start: number) => {
	let escaped = false;

	for (let i = start; i < input.length; i += 1) {
		const char = input[i];

		if (escaped) {
			escaped = false;
			continue;
		}

		if (char === '\\') {
			escaped = true;
			continue;
		}

		if (char === ')') {
			return i;
		}
	}

	return -1;
};

export const parseRichText = (input: string, links: RichTextLinks = {}): RichTextToken[] => {
	const tokens: RichTextToken[] = [];
	let index = 0;

	const pushText = (text: string) => {
		if (!text) return;
		const previous = tokens.at(-1);
		if (previous?.type === 'text') {
			previous.text += text;
			return;
		}
		tokens.push({ type: 'text', text });
	};

	while (index < input.length) {
		const codeStart = input.indexOf('`', index);
		const linkStart = input.indexOf('[', index);
		const candidates = [codeStart, linkStart].filter((position) => position >= 0);
		const next = candidates.length ? Math.min(...candidates) : -1;

		if (next < 0) {
			pushText(input.slice(index));
			break;
		}

		pushText(input.slice(index, next));

		if (next === codeStart) {
			const codeEnd = input.indexOf('`', next + 1);
			if (codeEnd < 0) {
				pushText(input.slice(next));
				break;
			}

			tokens.push({ type: 'code', text: input.slice(next + 1, codeEnd) });
			index = codeEnd + 1;
			continue;
		}

		const labelEnd = input.indexOf(']', next + 1);
		if (labelEnd < 0) {
			pushText(input.slice(next));
			break;
		}

		const label = input.slice(next + 1, labelEnd);
		if (input[labelEnd + 1] === '(') {
			const hrefEnd = findClosingParen(input, labelEnd + 2);
			if (hrefEnd >= 0) {
				tokens.push({
					type: 'link',
					label,
					href: input.slice(labelEnd + 2, hrefEnd)
				});
				index = hrefEnd + 1;
				continue;
			}
		}

		const href = links[label];
		if (href) {
			tokens.push({ type: 'link', label, href });
		} else {
			pushText(label);
		}

		index = labelEnd + 1;
	}

	return tokens;
};

export const parseRichBlocks = (input: string, links: RichTextLinks = {}): RichTextBlock[] => {
	const blocks: RichTextBlock[] = [];
	const lines = input.split(/\r?\n/);
	let paragraph: string[] = [];
	let code: string[] | null = null;
	let language: string | undefined;

	const flushParagraph = () => {
		const text = paragraph.join('\n').trim();
		if (text) {
			blocks.push({ type: 'paragraph', tokens: parseRichText(text, links) });
		}
		paragraph = [];
	};

	for (const line of lines) {
		const fence = line.match(/^```([\w-]+)?\s*$/);

		if (fence) {
			if (code) {
				blocks.push({ type: 'code', text: code.join('\n'), language });
				code = null;
				language = undefined;
			} else {
				flushParagraph();
				code = [];
				language = fence[1];
			}
			continue;
		}

		if (code) {
			code.push(line);
			continue;
		}

		if (line.trim()) {
			paragraph.push(line);
		} else {
			flushParagraph();
		}
	}

	if (code) {
		blocks.push({ type: 'code', text: code.join('\n'), language });
	} else {
		flushParagraph();
	}

	return blocks;
};

export const isExternalLink = (href: string) => /^https?:\/\//.test(href);
