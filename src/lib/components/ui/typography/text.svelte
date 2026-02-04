<script lang="ts">
	import { onMount } from 'svelte';

	export let scrollProgress: number = 0;
	export let startProgress: number = 0;
	export let endProgress: number = 1;
	export let className: string = '';

	let slotElement: HTMLElement;
	let totalLetters: number = 0;
	let processedElements: any[] = [];

	interface SpanInfo {
		style: string;
		class: string;
		children: any[];
	}

	// Process the slot content and preserve element structure
	function processContent(node: HTMLElement) {
		let letterCount = 0;

		function traverse(el: Node): any[] {
			const results: any[] = [];

			if (el.nodeType === Node.TEXT_NODE) {
				const text = el.textContent || '';
				const lineBreaks = text.split('\n');

				lineBreaks.forEach((line, lineIdx) => {
					if (lineIdx > 0) {
						results.push({ type: 'linebreak' });
					}

					if (line) {
						const segments = line.match(/(\s+|\S+)/g) || [];
						segments.forEach((segment) => {
							if (/\s+/.test(segment)) {
								results.push({ type: 'space', content: segment });
							} else {
								const letters = segment.split('');
								results.push({
									type: 'word',
									letters: letters,
									startIndex: letterCount
								});
								letterCount += letters.length;
							}
						});
					}
				});
			} else if (el.nodeType === Node.ELEMENT_NODE) {
				const element = el as HTMLElement;

				if (element.tagName === 'BR') {
					results.push({ type: 'linebreak' });
				} else if (element.tagName === 'SPAN') {
					// Process span with its styles and children
					const style = element.getAttribute('style') || '';
					const classList = element.className || '';
					const children: any[] = [];

					element.childNodes.forEach((child) => {
						children.push(...traverse(child));
					});

					results.push({
						type: 'span',
						style: style,
						class: classList,
						children: children
					});
				} else if (element.tagName === 'A') {
					// Process anchor tags with their attributes
					const href = element.getAttribute('href') || '';
					const target = element.getAttribute('target') || '';
					const style = element.getAttribute('style') || '';
					const classList = element.className || '';
					const children: any[] = [];

					element.childNodes.forEach((child) => {
						children.push(...traverse(child));
					});

					results.push({
						type: 'anchor',
						href: href,
						target: target,
						style: style,
						class: classList,
						children: children
					});
				} else {
					// For other elements, just process children
					element.childNodes.forEach((child) => {
						results.push(...traverse(child));
					});
				}
			}

			return results;
		}

		const elements =
			node.childNodes.length > 0
				? Array.from(node.childNodes).flatMap((child) => traverse(child))
				: [];

		processedElements = elements;
		totalLetters = letterCount;
	}

	onMount(() => {
		if (slotElement) {
			processContent(slotElement);
		}
	});

	function getLetterColor(
		globalIndex: number,
		scrollProgress: number,
		customColor?: string
	): string {
		const transitionRange = 0.1;
		const letterProgress = globalIndex / totalLetters;
		const letterCenter = startProgress + letterProgress * (endProgress - startProgress);
		const letterStart = letterCenter - transitionRange / 2;

		if (scrollProgress < letterStart) {
			return '#0000001a';
		} else {
			return customColor || '#0000008a';
		}
	}

	function extractColorFromStyle(style: string): string | undefined {
		if (!style) return undefined;
		const colorMatch = style.match(/color:\s*([^;]+)/);
		return colorMatch ? colorMatch[1].trim() : undefined;
	}
</script>

<span class={`${className} block`} bind:this={slotElement} style="display: none;">
	<slot />
</span>

{#if processedElements.length > 0}
	<span class={`${className} block`}>
		{#each processedElements as element, idx (idx)}
			{#if element.type === 'linebreak'}
				<br />
			{:else if element.type === 'space'}
				<span>{element.content}</span>
			{:else if element.type === 'span'}
				<span style={element.style} class={element.class}>
					{#each element.children as child, childIdx (childIdx)}
						{#if child.type === 'linebreak'}
							<br />
						{:else if child.type === 'space'}
							<span>{child.content}</span>
						{:else if child.type === 'word'}
							{@const customColor = extractColorFromStyle(element.style)}
							<span style="display: inline-block;">
								{#each child.letters as letter, letterIndex}
									{@const globalIndex = child.startIndex + letterIndex}
									{@const letterColor = getLetterColor(globalIndex, scrollProgress, customColor)}
									<span style="color: {letterColor}; transition: color 0.3s;">
										{letter}
									</span>
								{/each}
							</span>
						{/if}
					{/each}
				</span>
			{:else if element.type === 'anchor'}
				<a href={element.href} target={element.target} style={element.style} class={element.class}>
					{#each element.children as child, childIdx (childIdx)}
						{#if child.type === 'linebreak'}
							<br />
						{:else if child.type === 'space'}
							<span>{child.content}</span>
						{:else if child.type === 'word'}
							{@const customColor = extractColorFromStyle(element.style)}
							<span style="display: inline-block;">
								{#each child.letters as letter, letterIndex}
									{@const globalIndex = child.startIndex + letterIndex}
									{@const letterColor = getLetterColor(globalIndex, scrollProgress, customColor)}
									<span style="color: {letterColor}; transition: color 0.3s;">
										{letter}
									</span>
								{/each}
							</span>
						{/if}
					{/each}
				</a>
			{:else if element.type === 'word'}
				<span style="display: inline-block;">
					{#each element.letters as letter, letterIndex}
						{@const globalIndex = element.startIndex + letterIndex}
						{@const letterColor = getLetterColor(globalIndex, scrollProgress)}
						<span style="color: {letterColor}; transition: color 0.3s;">
							{letter}
						</span>
					{/each}
				</span>
			{/if}
		{/each}
	</span>
{/if}
