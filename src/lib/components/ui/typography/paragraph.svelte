<script lang="ts">
	import AnimatedText from './text.svelte';

	export let scrollProgress: number = 0;
	export let startProgress: number = 0;
	export let endProgress: number = 1;
	export let className: string = '';
</script>

<p class={className}>
	<AnimatedText {scrollProgress} {startProgress} {endProgress}>
		<slot />
	</AnimatedText>
</p>
