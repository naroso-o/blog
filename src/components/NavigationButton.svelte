<script lang="ts">
	import { page } from '$app/stores';

	export let label: string = '';
	export let url: string = '';

	const currentPageClass = 'cursor-default text-martinique-800';
	const otherPageClass = 'group transition duration-300';
	const underlineClass =
		'block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-martinique-900';
</script>

<li>
	{#if $page.url.pathname === url}
		<span class={currentPageClass}>{label}</span>
	{:else}
		<a href={url} class={otherPageClass}>{label}<span class={underlineClass} /></a>
	{/if}
</li>
