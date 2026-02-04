<script lang="ts">
	import chisom from '$lib/assets/chisom-portrait.webp';
	import megan from '$lib/assets/megan.jpg';
	import roseline from '$lib/assets/roseline.jpg';
	import summer from '$lib/assets/summer.jpg';
	import john from '$lib/assets/john.jpg';

	const tutors = [
		{
			img: chisom,
			name: 'Chisom Winifred',
			url: 'chisom-winifred'
		},
		{
			img: megan,
			name: 'Megan Cassells',
			url: 'megan-cassells'
		},
		{
			img: roseline,
			name: 'Roseline Mgbodichinma',
			url: 'roseline-mgbodichinma'
		},
		{
			img: summer,
			name: 'Summer Okibe',
			url: 'summer-okibe'
		},
		{
			img: john,
			name: 'Simon John Wood',
			url: 'simon-john-wood'
		}
	];
</script>

<section class="mx-auto space-y-8 max-sm:px-5 sm:max-w-4/5">
	<div>
		<h1 class="text-3xl leading-[43.2px] font-bold">Tutors</h1>
		<h2 class="text-lg font-medium text-accent/80">Learn from industry-leading mentors</h2>
	</div>
	<div class="flex flex-wrap justify-center gap-6 gap-y-10 sm:gap-y-16">
		{#each tutors as tutor, i}
			<a
				href={`/workshop/${tutor.url}`}
				class="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.3%-20px)]"
			>
				<div class="group h-auto space-y-3">
					<div class="mx-auto overflow-hidden">
						<img
							class="mx-auto h-120 w-full object-cover object-center grayscale transition-all duration-300 group-hover:scale-110"
							src={tutor.img}
							alt={tutor.name}
						/>
					</div>

					<h4 class="text-center text-xl font-semibold tracking-wide group-hover:text-accent">
						{tutor.name}
					</h4>
				</div>
			</a>
		{/each}
	</div>
</section>
