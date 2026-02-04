<script lang="ts">
	import gsap from 'gsap';
	import { SplitText } from 'gsap/all';
	import { onMount } from 'svelte';

	import WorkWithMe from '$lib/components/work-with-me.svelte';
	import { portfolioItems } from '$lib/data/portfolio';

	onMount(() => {
		gsap.registerPlugin(SplitText);

		const split = SplitText.create('.title', {
			type: 'words, chars',
			mask: 'words',
			wordsClass: 'word',
			charsClass: 'char'
		});
		const paragraphSplit = SplitText.create('.paragraph', {
			type: 'lines, chars',
			mask: 'lines',
			linesClass: 'line',
			charsClass: 'char'
		});

		gsap.from(split.words, {
			yPercent: 110,
			opacity: 0,
			duration: 0.6,
			ease: 'power3.inOut',
			stagger: { amount: 0.5 }
		});
		gsap.from(paragraphSplit.lines, {
			yPercent: 110,
			opacity: 0,
			duration: 1,
			ease: 'power3.inOut',
			stagger: { amount: 0.5 }
		});
	});
</script>

<section class="mx-auto py-10 max-sm:px-5 sm:max-w-4/5">
	<div class="mb-8 flex flex-col gap-2">
		<h1 class="title text-2xl font-extrabold">My Portfolio</h1>
		<p class="paragraph text-sm text-gray-500">
			Featured below are a few articles, projects and campaigns I've written copy and created
			content for.
		</p>
	</div>
	<div class="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each portfolioItems as item, i}
			<a
				target="_blank"
				class="border border-slate-100 bg-white py-4 shadow-accent/5 duration-500 hover:-translate-y-2 hover:shadow-xl"
				href={item.url}
				rel="noreferrer"
			>
				<div class="flex flex-col gap-3 p-4">
					<item.icon class="text-3xl text-gray-700" />
					<h2 class="capitalize">{item.title}</h2>
					<p class="pb-2 text-sm duration-700 hover:underline">Link</p>
				</div>
			</a>
		{/each}
	</div>
</section>
<WorkWithMe />
