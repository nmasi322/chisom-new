<script lang="ts">
    import chisom from '$lib/assets/chisom.jpeg';
	import WorkWithMe from '$lib/components/work-with-me.svelte';

</script>

<section class="grid lg:grid-cols-2 gap-10 max-sm:px-5 sm:max-w-4/5 mx-auto pt-10 mb-20">
    <div class='flex flex-col justify-center'>
        <img src={chisom} alt="chisom profile">
    </div>
    <div class="space-y-6 flex flex-col justify-center">
        <div class="space-y-3">
            <h1 class="text-4xl sm:text-5xl leading-[43.2px] sm:leading-[57.6px] font-bold">
                Bio
            </h1>
            <h2 class="text-lg font-medium text-accent/80">Creative Writer, Digital Marketer, Editor, and Content Creator</h2>
        </div>
        <div> 
            <p class="text-sm leading-6">
            I am Chisom Winifred Asogwa, a digital marketer, content
            creator, copywriter, and editor with a strong editorial
            background. I currently serve as Managing Editor at{" "}
            <strong>The Lincoln Review,</strong> where I edit fiction,
            creative nonfiction, and poetry, ensuring high editorial
            standards across a range of literary genres. I’m also the Editor
            at <strong>Trendupp Africa Magazine,</strong> the first magazine
            focusing exclusively on influencers and content creators in
            Africa, where I oversee content that explores the dynamic
            digital landscape on the continent. <br />
            <br />
            As a creative writer, I have published two short stories:{" "}
            <strong>
                {" "}
                <a
                href="https://kalaharireview.com/ịgbachi-ṅkịtị-6a057dfb11a5"
                >
                Igbachi Nkiti
                </a>{" "}
            </strong>{" "}
            in The Kalahari Review and{" "}
            <strong>
                {" "}
                <a
                href="https://fossewaywriters.com/2025/09/07/flash-fiction-competition-2025-results/"
                >
                Children with No Angels
                </a>{" "}
            </strong>
            , which won the 2025 Fosseway Writers Flash Fiction Competition
            and is published on their website. In addition, I published a
            book review of Writer’s Postcards (Penguin Random House SEA,
            2023) by Dipika Mukherjee in The Lincoln Review — becoming the
            first Master’s student to be featured in the journal since its
            inception.
            <br />
            <br />I hold an MA in Creative Writing from the University of
            Lincoln, where my passion for storytelling and editorial work
            has only deepened. I am committed to creating engaging,
            impactful narratives across fiction, nonfiction, and digital
            platforms, and I strive to deliver stories that inspire,
            connect, and captivate audiences.
            </p>
            
        </div>
    </div>
</section>
<WorkWithMe />
