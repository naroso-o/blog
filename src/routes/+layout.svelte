<script>
	import '../app.pcss';
	import Header from './Header.svelte';
	import NavigationButton from '../components/NavigationButton.svelte';
</script>

<div class="app">
	<Header></Header>

	<main>
		<slot />
	</main>

	<div class="fixed top-32 right-24 pl-4 pr-16 py-4 text-left rounded-lg bg-slate-50">
		<ul class="max-w-sm space-y-4">
			<NavigationButton label={'Home'} url={'/'} />
			<NavigationButton label={'Abouts'} url={'/about'} />
			<NavigationButton label={'Projects'} url={'/projects'} />
			<NavigationButton label={'Posts'} url={'/posts'} />
		</ul>
	</div>

	<footer>
		<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
	</footer>
</div>

<style lang="postcss">
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
