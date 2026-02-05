<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/all';

	import { ArrowRightIcon } from 'lucide-svelte';
	import Button from '../ui/button/button.svelte';
	import { CONFIG } from '$lib/config';

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
			duration: 1,
			ease: 'power3.inOut',
			stagger: { amount: 0.5 }
		});
		gsap.from(paragraphSplit.lines, {
			yPercent: 110,
			opacity: 0,
			duration: 1.5,
			ease: 'power3.inOut',
			stagger: { amount: 0.5 }
		});
	});
</script>

<section
	class="bg-img relative min-h-[calc(100vh-62px)] w-full flex-col justify-center bg-no-repeat bg-cover max-sm:flex max-sm:bg-center sm:min-h-[80vh]"
>
	<div class="absolute inset-0 z-0 bg-black/80 sm:bg-black/60"></div>
	<div class="relative z-10 mx-auto h-full max-sm:px-5 sm:max-w-4/5">
		<div class="flex flex-col justify-center gap-6 py-32 md:py-40 lg:w-2/3 xl:w-1/2">
			<div>
				<p></p>
			</div>
			<div class="space-y-3">
				<h1
					class="title text-5xl leading-14 font-black text-white sm:text-6xl sm:leading-20 lg:text-7xl lg:leading-28 xl:text-8xl"
				>
					The Creative Writing Workshop
				</h1>
				<p class="paragraph leading-6 text-white">
					Inspired by the magic of the written word and grounded in the realities of the global market, this workshop series offers a roadmap for the modern writer. We move beyond the "silence" of the craft to answer the vital questions of sustainability, income, and professional growth. Led by world-class writers, this is your invitation to begin the next chapter of your career with confidence and community.
				</p>
			</div>
			<div>
				<a target="_blank" href={CONFIG.ticketsLink}>
					<Button size="lg">
						<p class="text-white">Register now</p>
						<ArrowRightIcon />
					</Button>
				</a>
			</div>
		</div>
	</div>
</section>
