<script>
	import { InstagramIcon, LinkedinIcon } from '@lucide/svelte';
	import gsap from 'gsap';
	import { SplitText } from 'gsap/all';
	import { onMount } from 'svelte';

	import Button from '$lib/components/ui/button/button.svelte';
	import WorkWithMe from '$lib/components/work-with-me.svelte';

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
	class="flex min-h-[calc(100svh-80px)] flex-col justify-between pt-16 max-sm:gap-10 md:pt-20 lg:pt-40"
>
	<section class="mx-auto grid gap-10 max-sm:px-5 sm:max-w-4/5 xl:grid-cols-3">
		<div class="space-y-6 md:col-span-2">
			<div class="space-y-3">
				<h1 class="title text-4xl leading-[43.2px] font-bold sm:text-5xl sm:leading-[57.6px]">
					Hey there, <br /> I'm Chisom Winifred.
				</h1>
				<h2 class="title text-lg font-medium text-accent/80">Published Creative Writer</h2>
			</div>
			<div>
				<p class="paragraph text-sm leading-6">
					I’m a creative writer and editor with a passion for storytelling across digital, print,
					and literary platforms. I currently serve as Managing Editor at The Lincoln Review, where
					I oversee fiction, nonfiction, and poetry, maintaining high editorial standards in an
					international literary journal. I am also Editor at Trendupp Africa Magazine, where I
					commission and shape content on pop culture, lifestyle, and the creator economy,
					amplifying the voices of digital creatives across the continent.
					<br />
					<br />
					As a published writer, my work includes a book review of Dipika Mukherjee’s Writer’s Postcards
					(Penguin Random House SEA, 2023) in The Lincoln Review, where I made history as the first postgraduate
					student published in the journal. My short story Igbachi Nkiti appeared in The Kalahari Review
					in 2025, and in the same year I won the Fosseway Writers Flash Fiction Competition with my story
					Children with No Angels, now published on their website.
					<br />
					<br />
					Alongside my editorial work, I co-founded C&C Digital House, a digital agency supporting African
					startups and creatives through content strategy, branding, and community-focused initiatives
					like{' '}
					<a
						class="font-semibold text-accent underline"
						href="https://www.candcdigitalhouse.com/creatives-lunch/"
						target="_blank"
					>
						Creatives Lunch
					</a>{' '}🔗 .
				</p>
				<div class="mt-3 flex items-center gap-2">
					<p class="text-sm">Checkout my</p>
					<a href="https://instagram.com/chisomwinifred" target="_blank">
						<Button size="icon" class="rounded-full">
							<InstagramIcon />
						</Button>
					</a>
					<a href="https://www.linkedin.com/in/chisom-winifred-6a2baa164" target="_blank">
						<Button size="icon" class="rounded-full">
							<LinkedinIcon />
						</Button>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section>
		<WorkWithMe />
	</section>
</section>
