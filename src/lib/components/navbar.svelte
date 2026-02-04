<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { HouseIcon, UserIcon, FileTextIcon, LightbulbIcon } from '@lucide/svelte';
	import { page } from '$app/state';
	import { cn } from '$lib/utils';

	let mobileMenuOpen = $state(false);

	const navItems = [
		{
			label: 'Home',
			url: '/',
			icon: HouseIcon
		},
		{
			label: 'Bio',
			url: '/bio',
			icon: UserIcon
		},
		{
			label: 'Portfolio',
			url: '/portfolio',
			icon: FileTextIcon
		},
		{
			label: 'Workshop',
			url: '/workshop',
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

<nav class="fixed top-0 right-0 left-0 z-50 bg-white">
	<div
		class="mx-auto flex items-center justify-between border-b border-gray-500/20 py-4 max-sm:px-5 sm:max-w-4/5"
	>
		<!-- Logo -->
		<a href="/" class="z-50 hover:no-underline">
			<h1
				class="logo cursor-pointer text-2xl font-black transition-transform duration-300 hover:scale-105 sm:text-3xl"
			>
				Chisom.
			</h1>
		</a>

		<!-- Desktop Navigation -->
		<ul class="hidden items-center gap-8 md:flex">
			{#each navItems as navItem, i}
				{@const isActivePath = page.url.pathname === navItem.url}
				<li style="animation-delay: {i * 0.1}s" class="animate-fadeInDown group">
					<a href={navItem.url} class="relative flex items-center gap-1.5 hover:text-accent">
						<span class="">
							<navItem.icon
								class={cn(
									'transition-all duration-300',
									isActivePath ? 'w-5' : 'w-0 group-hover:w-5'
								)}
							/>
						</span>
						<p
							class={cn(
								'gambarino group font-medium tracking-wide transition-all duration-300 hover:scale-105',
								isActivePath ? 'text-accent' : 'text-gray-600 group-hover:text-accent'
							)}
						>
							{navItem.label}
						</p>
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile Menu Button -->
		<button
			onclick={toggleMenu}
			class="z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 focus:outline-none md:hidden"
			aria-label="Toggle menu"
		>
			<span
				class="h-0.5 w-6 bg-gray-800 transition-all duration-300 {mobileMenuOpen
					? 'translate-y-2 rotate-45'
					: ''}"
			></span>
			<span
				class="h-0.5 w-6 bg-gray-800 transition-all duration-300 {mobileMenuOpen
					? 'opacity-0'
					: ''}"
			></span>
			<span
				class="h-0.5 w-6 bg-gray-800 transition-all duration-300 {mobileMenuOpen
					? '-translate-y-2 -rotate-45'
					: ''}"
			></span>
		</button>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<button
			transition:fade={{ duration: 300 }}
			class="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
			onclick={closeMenu}
			title="backdrop"
		></button>

		<div
			transition:fly={{ x: 300, duration: 400, easing: cubicOut }}
			class="fixed top-0 right-0 bottom-0 w-64 bg-white shadow-2xl md:hidden"
		>
			<ul class="flex flex-col pt-24">
				{#each navItems as navItem, i}
					{@const isActivePath = page.url.pathname === navItem.url}

					<li
						in:fly={{ x: 50, duration: 300, delay: i * 50, easing: cubicOut }}
						class="group border-b border-gray-600/30 hover:bg-accent/5"
					>
						<a
							href={navItem.url}
							onclick={closeMenu}
							class={cn(
								'gambarino flex transform items-center gap-2 px-4 py-3 text-lg font-semibold transition-all duration-300',
								isActivePath ? 'text-accent' : 'text-gray-700 hover:text-accent'
							)}
						>
							<span>
								<navItem.icon
									class={cn(
										'transition-all duration-300',
										isActivePath ? 'w-6' : 'w-0 group-hover:w-6'
									)}
								/>
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
<div class="h-16 sm:h-17.5"></div>

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
