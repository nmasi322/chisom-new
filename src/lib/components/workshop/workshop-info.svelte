<script lang="ts">
	import { CONFIG } from '$lib/config';
	import Button from '../ui/button/button.svelte';

	const targetAudience = [
		'You are an emerging or early‑career writer who wants clarity on how to build a sustainable writing life.',
		'You have talent, ideas, and drafts, but feel unsure about what comes next or how to move forward strategically.',
		'You are tired of vague encouragement and want practical guidance on opportunities, money, and visibility.',
		'You want to understand how African writers navigate prizes, fellowships, publishing, and global readership.',
		'You value community and want to learn alongside other writers who are serious about their craft.'
	];
</script>

<section class="mx-auto space-y-5 py-20 max-sm:px-5 sm:max-w-4/5 sm:space-y-8">
	<div class="sm:space-y-2">
		<h1 class="text-2xl leading-[43.2px] font-bold sm:text-3xl">Who This Workshop Is For</h1>
		<h2 class="text-lg font-medium text-accent/80">This workshop is for you if:</h2>
	</div>
	<div class="space-y-6 border-b border-gray-300/40 pb-12">
		<ul class="list-decimal space-y-3 pl-8">
			{#each targetAudience as item}
				<li><p>{item}</p></li>
			{/each}
		</ul>
		<p class="text-black/80">
			I am rooting for you. I know how hard this path can be, and I believe deeply that no writer
			should have to walk it alone.
		</p>
	</div>
	<div class="space-y-4 pt-2">
		<div class="space-y-1">
			<h2 class="text-xl leading-relaxed font-semibold">Workshop Dates</h2>
			<p class="text-black/80">February 26th–28th 2026. <br /> 4:00 PM – 7:00 PM (WAT)</p>
		</div>
			<a target="_blank" href={CONFIG.ticketsLink}>
				<Button size="lg">Register Now</Button>
			</a>
	</div>
</section>
