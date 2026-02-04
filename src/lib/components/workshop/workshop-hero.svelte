<script lang="ts">
	import { ArrowRightIcon } from "lucide-svelte";
	import Button from "../ui/button/button.svelte";
	import { onMount } from "svelte";
    import gsap from "gsap";
    import { SplitText } from "gsap/all";


    gsap.registerPlugin(SplitText);

    onMount(() => {
        const split = SplitText.create('.title', {
            type: "words, chars",
            mask: "words",
            wordsClass: "word",
            charsClass: "char",
        })
        const paragraphSplit = SplitText.create('.paragraph', {
            type: "lines, chars",
            mask: "lines",
            linesClass: "line",
            charsClass: "char",
        })

        gsap.from(split.words, {
            yPercent: 110,
            opacity: 0,
            duration: 1, 
            ease: 'power3.inOut',
            stagger: {amount:0.5},
        })
        gsap.from(paragraphSplit.lines, {
            yPercent: 110,
            opacity: 0,
            duration: 1.5, 
            ease: 'power3.inOut',
            stagger: {amount:0.5},
        })
    })

</script>

<section class="bg-cover bg-img max-sm:bg-left min-h-[calc(100vh-62px)] max-sm:flex flex-col justify-center sm:min-h-[80vh] w-full relative">
    <div class="absolute bg-black/60 inset-0 z-0"></div>
    <div class="max-sm:px-5 sm:max-w-4/5 mx-auto h-full z-10 relative">
        <div class="flex flex-col lg:w-2/3 xl:w-1/2 justify-center gap-6 py-32 md:py-40">
            <div>
                <p></p>
            </div>
            <div class="space-y-3">
                <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-16 sm:leading-20 lg:leading-28 text-white title">The Creative Writing Workshop</h1>
                <p class="text-white leading-6 paragraph">Inspired by the magic of the written word and grounded in the realities of the global market, this workshop series offers a roadmap for the modern writer. We move beyond the "silence" of the craft to answer the vital questions of sustainability, income, and professional growth. Led by world-class writers, this is your invitation to begin the next chapter of your career with confidence and community.</p>
            </div>
            <div>
                <Button size="lg">
                    <p class="text-white">Register now</p>
                    <ArrowRightIcon />
                </Button>
            </div>
        </div>
    </div>
</section>