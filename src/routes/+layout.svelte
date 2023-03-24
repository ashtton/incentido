<script lang="ts">
	import { onMount } from 'svelte';

	let ready: boolean = false;
	onMount(() => (ready = true));
</script>

<div class="dragbar" />

{#if ready}
	<slot />
{/if}

<style>
	.dragbar {
		-webkit-app-region: drag;
		position: absolute;
		z-index: 100;
		height: 40px;
		width: 100%;
	}

	:global(:root) {
		--dark-blue: #264653;
		--sea: #2A9D8F;
		--sand: #E9C46A;
		--tangerine: #F4A261;
		--orange: #E76F51;
	}

	:global(body) {
		font-family: Ubuntu, serif;
	}

	@font-face {
		font-family: Ubuntu;
		src: url("/fonts/Ubuntu-Regular.ttf");
	}

	@font-face {
		font-family: 'Ubuntu Bold';
		src: url("/fonts/Ubuntu-Bold.ttf");
	}

	:global(p) {
		margin: 0;
	}
</style>
