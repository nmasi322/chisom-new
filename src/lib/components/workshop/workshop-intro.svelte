<script lang="ts">
	import Paragraph from '../ui/typography/paragraph.svelte';
	import { onMount } from 'svelte';

	let scrollProgress = 0;
	let containerElement: HTMLElement;

	onMount(() => {
		const handleScroll = () => {
			if (!containerElement) return;

			const rect = containerElement.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Start animation when top of element reaches 50% of viewport
			const triggerPoint = windowHeight * 0.5;

			// When rect.top = triggerPoint, progress should be 0
			// When rect.top = 0 (or negative), progress should be 1
			const progress = (triggerPoint - rect.top) / triggerPoint;

			scrollProgress = Math.max(0, Math.min(1, progress));
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Initial calculation

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<section class="mx-auto max-sm:px-5 sm:max-w-4/5" bind:this={containerElement}>
	<Paragraph
		{scrollProgress}
		startProgress={0}
		endProgress={1}
		className="text-lg leading-relaxed mt-8"
	>
	I blame Enid Blyton for the magic she spun in my childhood, opening doors I could step through and inhabit beyond myself. I have admired such prowess ever since, and as I grew and read widely, I knew I wanted to be a magician too, creating worlds of my own. Presently, I am a fiction and poetry writer with an MA in Creative Writing from the University of Lincoln, with a sustained record of publication and literary engagement.
    <br />
    <br />
    My short story <a style="font-style: italic; color: #ea580c;" target="_blank" href="https://kalaharireview.com/ịgbachi-ṅkịtị-6a057dfb11a5">Igbachi Nkiti</a>, published in <span style="font-style: italic; color: #000;">The Kalahari Review</span>, was one of four short stories produced as part of my dissertation exploring feminism and domestic violence in Africa, interrogating the flimsy ways it is often handled across government, family, and religious structures. <br/> My poem <a target="_blank" style="font-style: italic; color: #ea580c;" href="https://brittlepaper.com/2026/01/have-you-seen-the-news-chisom-winifred-poetry/">“Have You Seen the News?”</a> in <span style="font-style: italic; color: #000;">Brittle Paper</span> reflects on governance in Africa, while my essay in the <span style="font-style: italic; color: #000;">Brittle Paper Seasonal Migration Anthology</span> explores the journeys of immigrants globally, both on the continent and in diaspora. My short story <a target="_blank" style="font-style: italic; color: #ea580c;" href="https://fossewaywriters.com/2025/09/07/flash-fiction-competition-2025-results/">“Children With No Angels”</a> that won the 2025 Fosseway Writers Flash Fiction Competition shows my engagement with narrative experimentation, and two forthcoming stories in the <span style="font-style: italic; color: #000;">Favourites</span> anthology by St James Writers, expected February 2026, continue this exploration. Across these works, I have interrogated identity, culture, and the tension between tradition and modernity, developing my distinctive voice that bridges personal, social, and spiritual landscapes.
    <br />
    <br />
    Alongside my creative practice, I have worked as a copy and content writer for over five years. During this time, I’ve authored articles and thought-leadership pieces for multinational brands including MTV Base, Fidelity Bank, Access Bank, MTN, Amstel Malta, Trendupp Awards, and others. I have also served as Beauty Editor at  <span style="font-style: italic; color: #000;">Glam Africa Magazine,</span> a quarterly print publication with a global readership of over 1.5 million people, largely of African and Caribbean descent.
    <br />
    <br />
    All of this is to say: I understand both sides of the writing life, the creative and the commercial. I know the joy of making art, and I know the confusion, silence, and loneliness that often come with trying to build a career from it. I am creating a space for emerging and developing writers who want clarity, direction, and practical tools. A space where questions about money, visibility, prizes, and sustainability are truthfully answered. <br />
    <br />
    The workshops and masterclasses will be led by some of the best writers across Africa, the United Kingdom, and Canada. Together, we will share practical steps to help you begin or strengthen your writing career, explore viable income streams, and work toward global readership without losing your voice.
    <br />
    <br />
  All sessions will be held online, so whether you’re in Lagos, Dakar, Cape Town, London, or Ontario, you can attend, learn, and grow alongside a community of writers who are serious about their craft and their futures.
	</Paragraph>
</section>
