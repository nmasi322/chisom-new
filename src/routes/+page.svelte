<script>
	import Button from "$lib/components/ui/button/button.svelte";


</script>

<section class="flex flex-col justify-between h-[calc(100svh-80px)] pt-40">
    <section class="grid grid-cols-3 gap-10 max-w-4/5 mx-auto">
        <div class="col-span-2 space-y-6">
             <div class="space-y-3">
            <h1 class="text-4xl sm:text-5xl leading-[43.2px] sm:leading-[57.6px] font-bold">
              Hey there, <br /> I'm Chisom Winifred.
            </h1>
            <h2 class="text-lg font-medium text-accent/80">Published Creative Writer</h2>
          </div>
          <div> <p class="text-sm leading-6">
            I’m a creative writer and editor with a passion for storytelling
            across digital, print, and literary platforms. I currently serve as
            Managing Editor at The Lincoln Review, where I oversee fiction,
            nonfiction, and poetry, maintaining high editorial standards in an
            international literary journal. I am also Editor at Trendupp Africa
            Magazine, where I commission and shape content on pop culture,
            lifestyle, and the creator economy, amplifying the voices of digital
            creatives across the continent.
            <br />
            <br />
            As a published writer, my work includes a book review of Dipika
            Mukherjee’s Writer’s Postcards (Penguin Random House SEA, 2023) in
            The Lincoln Review, where I made history as the first postgraduate
            student published in the journal. My short story Igbachi Nkiti
            appeared in The Kalahari Review in 2025, and in the same year I won
            the Fosseway Writers Flash Fiction Competition with my story
            Children with No Angels, now published on their website.
            <br />
            <br />
            Alongside my editorial work, I co-founded C&C Digital House, a
            digital agency supporting African startups and creatives through
            content strategy, branding, and community-focused initiatives like{" "}
            <a
              class="underline font-semibold text-accent"
              href="https://www.candcdigitalhouse.com/creatives-lunch/"
              target="_blank"
            >
              Creatives Lunch
            </a>{" "}🔗
            .
          </p></div>
        </div>
    </section>
    <section>
        <div class="max-w-4/5 mx-auto">
             <div class="flex flex-col gap-2 mb-3">
              <h1 class="text-3xl font-bold">Work With Me</h1>
              <p class="text-sm leading-6">
                Have opportunities to discuss? I’m all ears. Just want to say hello?
                Click the button below.
              </p>
            </div>
            <a href="mailto:chisomwinnifred.cw@gmail.com">
                <Button>
                    <span> Let's Discuss 📩</span>
                </Button>

            </a>
        </div>
        <footer class="bg-accent/5 mt-6 py-4">
            <div class="max-w-4/5 mx-auto">
                <h1 class="text-3xl font-black">Chisom.</h1>
                <p class="text-sm">
                  Copyright &copy; {new Date().getFullYear()} Chisom Winifred.
                </p>
            </div>
        </footer>
    </section>
</section>