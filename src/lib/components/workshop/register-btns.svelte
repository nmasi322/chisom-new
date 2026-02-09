<script lang="ts">
	import { CONFIG } from "$lib/config";
	import { ArrowRightIcon } from "lucide-svelte";
	import { Button } from "../ui/button";

</script>

<div class="flex max-[470px]:flex-col gap-2 max-lg:justify-center">
    <a target="_blank" href={CONFIG.ticketsLink.NG}>
        <Button variant="secondary" size="lg" class="max-sm:w-full">
            <p class="text-white font-medium">Register Now (Africa)</p>
            <ArrowRightIcon />
        </Button>
    </a>
    <a target="_blank" href={CONFIG.ticketsLink.UK}>
        <Button size="lg" class="max-sm:w-full">
            <p class="text-white font-medium">Register Now (Diaspora)</p>
            <ArrowRightIcon />
        </Button>
    </a>
</div>