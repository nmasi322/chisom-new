<script lang="ts">
	import WorkWithMe from "$lib/components/work-with-me.svelte";
	import { portfolioItems } from "$lib/data";

</script>

<section class="py-10 max-sm:px-5 sm:max-w-4/5 mx-auto">
     <div class="flex flex-col gap-2 mb-8">
          <h1 class="font-extrabold text-2xl">My Portfolio</h1>
          <p class="text-sm text-gray-500">
            Featured below are a few articles, projects and campaigns I've
            written copy and created content for.
          </p>
        </div>
        <div
          class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        >
        {#each portfolioItems as item, i}
            <a
              target="_blank"
              class="bg-white border border-slate-100 py-4 hover:-translate-y-2 duration-500 hover:shadow-xl shadow-accent/5"
              href={item.url}
              rel="noreferrer"
            >
              <div class="flex flex-col gap-3 p-4">
                <item.icon class="text-3xl text-gray-700" />
                <h2 class="capitalize">{item.title}</h2>
                <p
                  class="hover:underline pb-2 duration-700 text-sm"
                >
                  Link
              </p>
              </div>
            </a>
        {/each}
        </div>
</section>
<WorkWithMe />
