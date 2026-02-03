
 <script lang="ts">
    import { fly, fade } from 'svelte/transition';
    import { cubicOut } from 'svelte/easing';
      import { HouseIcon, UserIcon, FileTextIcon, LightbulbIcon } from '@lucide/svelte';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

    let mobileMenuOpen = $state(false);
    
    const navItems = [
        {
            label: "Home",
            url: "/",
            icon: HouseIcon
        },
        {
            label: "Bio",
            url: "/bio",
            icon: UserIcon
        },
        {
            label: "Portfolio",
            url: "/portfolio",
            icon: FileTextIcon
        },
        {
            label: "Workshop",
            url: "/workshop",
            icon: LightbulbIcon
        }
    ];
    
    function toggleMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }
    
    function closeMenu() {
        mobileMenuOpen = false;
    }
</script>

<nav class="fixed top-0 left-0 right-0 bg-white z-50 ">
    <div class="flex items-center justify-between py-4 max-sm:px-5 sm:max-w-4/5 mx-auto border-b border-gray-500/20">
        <!-- Logo -->
        <a href="/" class="z-50 hover:no-underline">
            <h1 class="text-2xl sm:text-3xl logo font-black hover:scale-105 transition-transform duration-300 cursor-pointer">
                Chisom.
            </h1>
        </a>

        <!-- Desktop Navigation -->
        <ul class="hidden md:flex items-center gap-8">
            {#each navItems as navItem, i}
            {@const isActivePath = page.url.pathname === navItem.url}
                <li 
                    style="animation-delay: {i * 0.1}s"
                    class="animate-fadeInDown group"
                >
                    <a href={navItem.url} class="flex items-center hover:text-accent gap-1.5 relative">
                         <span class="">
                                <navItem.icon class={cn("transition-all duration-300", isActivePath ? "w-5":"group-hover:w-5 w-0")} />
                            </span>
                        <p class={cn("font-medium gambarino tracking-wide transition-all duration-300 hover:scale-105 group", isActivePath ? "text-accent" :"group-hover:text-accent text-gray-600")}>
                            {navItem.label}
                        </p>
                    </a>
                </li>
            {/each}
        </ul>

        <!-- Mobile Menu Button -->
        <button 
            onclick={toggleMenu}
            class="md:hidden z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
        >
            <span 
                class="w-6 h-0.5 bg-gray-800 transition-all duration-300 {mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}"
            ></span>
            <span 
                class="w-6 h-0.5 bg-gray-800 transition-all duration-300 {mobileMenuOpen ? 'opacity-0' : ''}"
            ></span>
            <span 
                class="w-6 h-0.5 bg-gray-800 transition-all duration-300 {mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}"
            ></span>
        </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
        <button 
            transition:fade={{ duration: 300 }}
            class="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
            onclick={closeMenu}
            title="backdrop"
        ></button>
        
        <div 
            transition:fly={{ x: 300, duration: 400, easing: cubicOut }}
            class="md:hidden fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl"
        >
            <ul class="flex flex-col pt-24">
                {#each navItems as navItem, i}
            {@const isActivePath = page.url.pathname === navItem.url}

                    <li
                        in:fly={{ x: 50, duration: 300, delay: i * 50, easing: cubicOut }}
                        class="border-b border-gray-600/30 hover:bg-accent/5 group"
                    >
                        <a 
                            href={navItem.url}
                            onclick={closeMenu}
                            class={cn("flex items-center gap-2 py-3 px-4 gambarino text-lg font-semibold transition-all duration-300 transform", isActivePath?"text-accent":"hover:text-accent text-gray-700")}
                        >
                            <span>
                                <navItem.icon class={cn("transition-all duration-300", isActivePath ? "w-6":"group-hover:w-6 w-0")} />
                            </span>
                           <span>{navItem.label}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    {/if}
</nav>

<!-- Spacer to prevent content from going under fixed nav -->
<div class="h-16 sm:h-20"></div>

<style>
    @keyframes fadeInDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-fadeInDown {
        animation: fadeInDown 0.6s ease-out forwards;
        opacity: 0;
    }
    
    /* Prevent body scroll when mobile menu is open */
    :global(body:has(.mobile-menu-open)) {
        overflow: hidden;
    }
</style>