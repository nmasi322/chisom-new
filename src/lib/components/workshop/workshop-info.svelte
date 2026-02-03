<script lang="ts">
	import Button from "../ui/button/button.svelte";

    const targetAudience = [
        "You are an emerging or early‑career writer who wants clarity on how to build a sustainable writing life.",
        "You have talent, ideas, and drafts, but feel unsure about what comes next or how to move forward strategically.",
        "You are tired of vague encouragement and want practical guidance on opportunities, money, and visibility.",
        "You want to understand how African writers navigate prizes, fellowships, publishing, and global readership.",
        "You value community and want to learn alongside other writers who are serious about their craft.",
    ]
</script>

<section class="max-sm:px-5 sm:max-w-4/5 mx-auto py-20 space-y-5 sm:space-y-8">
    <div class="sm:space-y-2">
        <h1 class="text-2xl sm:text-3xl leading-[43.2px] font-bold">Who This Workshop Is For</h1>
        <h2 class="text-lg font-medium text-accent/80">This workshop is for you if:</h2>
    </div>
    <div class="space-y-6 pb-12 border-b border-gray-300/40">
        <ul class="pl-8 space-y-3 list-decimal">
            {#each targetAudience as item}
                <li><p>{item}</p></li>
            {/each}
        </ul>
        <p class="text-black/80">I am rooting for you. I know how hard this path can be, and I believe deeply that no writer should have to walk it alone.</p>
    </div>
    <div class="pt-2 space-y-4">
        <div class="space-y-1">
            <h2 class="text-xl font-semibold leading-relaxed">Workshop Dates</h2>
            <p class="text-black/80">February 26th–28th 2026. <br /> 4:00 PM – 7:00 PM (WAT)</p>
        </div>
        <Button size="lg">Register Now</Button>
    </div>
</section>