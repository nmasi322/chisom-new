<script lang="ts">
	import { page } from "$app/state";
	import Button from "$lib/components/ui/button/button.svelte";
	import { tutors } from "$lib/data/tutors";
	import { ArrowRightIcon } from "lucide-svelte";
    const authorPath = page.url.pathname.split("/")[2]

    const authorInfo = tutors.find((t) => t.url === authorPath)
</script>

{#if authorInfo}
    <section class="max-sm:px-5 sm:max-w-4/5 mx-auto py-10 sm:py-20 space-y-16">
        <div class="space-y-6 sm:space-y-12">
            <div class="text-center space-y-2">
                <h2 class="font-bold text-2xl">{authorInfo.name}</h2>
                <div class="">
                    <h4 class="text-accent/80 text-lg font-semibold">{authorInfo.title}</h4>
                    <p class="font-medium text-gray-500">{authorInfo.genre}</p>
                </div>
            </div>
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 w-fit mx-auto gap-6">
                <div class="mx-auto">
                    <img class="sm:h-120" alt={authorInfo.name} src={authorInfo.img} />
                </div>
                <div class="h-full xl:col-span-2">
                    <p class="whitespace-pre-wrap">{authorInfo.bio}</p>
                </div>
            </div>
        </div>
        {#if authorInfo.masterclass}
            <div class="space-y-6 sm:space-y-10">
                <div class="text-center py-5 border-y border-accent/20">
                    <h2 class="tracking-wide font-bold text-xl sm:text-2xl">MASTERCLASS</h2>
                </div>
                <div class="space-y-4">
                    <div>
                        <h1 class="font-bold text-xl tracking-wide">Title: {authorInfo.masterclass.title}</h1>
                        {#if authorInfo.masterclass.subTitle}
                            <h3 class="font-semibold text-accent/80">{authorInfo.masterclass.subTitle}</h3>
                        {/if}
                    </div>
                    <div class="space-y-3">
                        <p class="whitespace-pre-wrap">{authorInfo.masterclass.description}</p>
                        {#if authorInfo.masterclass.learningPoints}
                            <ul class="list-disc pl-4 space-y-2">
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
        {:else if  authorInfo.books}
            <div></div>
        {:else}
            <div></div>
        {/if}
       
    </section>
{:else}
    <section class="text-center min-h-screen flex items-center justify-center">
        <p>Oops, something happened. <br /> Please try again later</p>
    </section>
{/if}
