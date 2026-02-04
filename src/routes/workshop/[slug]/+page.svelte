<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';

	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import { tutors } from '$lib/data/tutors';
	const authorPath = page.url.pathname.split('/')[2];

	const authorInfo = tutors.find((t) => t.url === authorPath);
</script>

{#if authorInfo}
	<section class="mx-auto space-y-16 py-10 max-sm:px-5 sm:max-w-4/5 sm:py-20">
		<div class="space-y-6 sm:space-y-12">
			<div class="space-y-2 text-center">
				<h2 class="text-2xl font-bold">{authorInfo.name}</h2>
				<div class="">
					<h4 class="text-lg font-semibold text-accent/80">{authorInfo.title}</h4>
					<p class="font-medium text-gray-500">{authorInfo.genre}</p>
				</div>
			</div>
			<div class="mx-auto grid w-fit gap-6 lg:grid-cols-2 xl:grid-cols-3">
				<div class="mx-auto">
					<img class="grayscale sm:h-120" alt={authorInfo.name} src={authorInfo.img} />
				</div>
				<div class="h-full space-y-5 xl:col-span-2">
					<p class="whitespace-pre-wrap">{authorInfo.bio}</p>
					{#if authorInfo.books}
						<div class="space-y-3">
							<h3 class="text-lg font-semibold">Books by {authorInfo.name}</h3>
							<ul class="list-disc pl-5">
								{#each authorInfo.books as book}
									<li>
										<a href={book.url}>
											<p class="text-accent/70">{book.title}</p>
										</a>
									</li>
								{/each}
							</ul>
							<span class="text-sm text-gray-500"
								>N.B. The first three titles are also available as audiobooks, narrated by Angus
								Freathy. Obtainable from Amazon, Audible, and iTunes.</span
							>
						</div>
					{/if}
				</div>
			</div>
		</div>
		{#if authorInfo.masterclass}
			<div class="space-y-6 sm:space-y-10">
				<div class="border-y border-accent/20 py-5 text-center">
					<h2 class="text-xl font-bold tracking-wide sm:text-2xl">MASTERCLASS</h2>
				</div>
				<div class="space-y-4">
					<div>
						<h1 class="text-xl font-bold tracking-wide">Title: {authorInfo.masterclass.title}</h1>
						{#if authorInfo.masterclass.subTitle}
							<h3 class="font-semibold text-accent/80">{authorInfo.masterclass.subTitle}</h3>
						{/if}
					</div>
					<div class="space-y-3">
						<p class="whitespace-pre-wrap">{authorInfo.masterclass.description}</p>
						{#if authorInfo.masterclass.learningPoints}
							<ul class="list-disc space-y-2 pl-4">
								{#each authorInfo.masterclass.learningPoints as learningPoint}
									<li><p>{learningPoint}</p></li>
								{/each}
							</ul>
						{/if}
						{#if authorInfo.masterclass.closingWords}
							<p class="pt-3">{authorInfo.masterclass.closingWords}</p>
						{/if}
					</div>
					<Button size="lg">
						<p class="text-white">Register Now</p>
						<ArrowRightIcon />
					</Button>
				</div>
			</div>
		{/if}
	</section>
{:else}
	<section class="flex min-h-screen items-center justify-center text-center">
		<p>Oops, something happened. <br /> Please try again later</p>
	</section>
{/if}
