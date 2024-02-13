<script>
	import '../app.pcss';
	import Header from './Header.svelte';
	import NavigationButton from '../components/NavigationButton.svelte';

	import iconGit from '$lib/icons/icon-git.svg';
	import iconIn from '$lib/icons/icon-in.svg';
	import iconBlog from '$lib/icons/icon-blog.svg';
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

	<footer class="footer footer-center p-10 bg-base-200 text-base-content rounded">
		<nav class="grid grid-flow-col gap-4">
			<a href="/" class="link link-hover">Home</a>
			<a href="/about" class="link link-hover">About me</a>
			<a href="/projects" class="link link-hover">Projects</a>
			<a href="/posts" class="link link-hover">Posts</a>
		</nav>
		<nav>
			<div class="grid grid-flow-col gap-4">
				<a href="https://github.com/naroso-o" target="_blank"><img src={iconGit} alt="iconGit" /></a
				>
				<a href="https://www.linkedin.com/in/sohyeonna/" target="_blank"
					><img src={iconIn} alt="iconIn" /></a
				>
				<a href="https://blog.naver.com/naroso25" target="_blank"
					><img src={iconBlog} alt="iconBlog" /></a
				>
			</div>
		</nav>
		<aside>
			<p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
		</aside>
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
