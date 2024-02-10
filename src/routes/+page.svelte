<script>
	import blog from '$lib/images/blog.jpeg';
	import guitar from '$lib/images/guitar.jpeg';
	import favorites from '$lib/images/favorites.jpeg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<article class="prose">
		<h1>Hello, I'm NA SO HYEON</h1>
		<p>the Game-Loving Web Developer</p>
	</article>
	<!-- <div>
		<a href="https://www.linkedin.com/in/sohyeonna/">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
		  </a>
		<a href="https://github.com/naroso-o">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
		  </a>
		<a href="https://blog.naver.com/naroso25">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
		  </a>
	</div> -->
</section>

<div class="divider" />

<article class="prose">
	<h2>Projects</h2>
</article>

<secion
	id="projects"
	class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
>
	<div
		id="projects-item1"
		class="card w-96 bg-base-100 shadow-xl duration-500 hover:scale-105 hover:shadow-xl"
	>
		<a href="/projects/1">
			<figure class="rounded-xl">
				<img src={blog} alt="blog" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Blog
					<!-- <div class="badge badge-secondary">NEW</div> -->
				</h2>
				<p>Personal Technology Blog</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">SveltKit</div>
					<div class="badge badge-outline">WEB</div>
				</div>
			</div>
		</a>
	</div>
	<div id="projects-item2" class="card w-96 bg-base-300 shadow-xl">
		<!-- <div
		id="projects-item2"
		class="card w-96 bg-base-300 shadow-xl duration-500 hover:scale-105 hover:shadow-xl"
	> -->
		<div>
			<!-- <a href="/projects/2"> -->
			<figure class="rounded-xl">
				<img src={guitar} alt="guitar" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">Why are your fingers so clean?</h2>
				<p>Guitar Practice Routine App</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">To Do</div>
					<div class="badge badge-outline">APP</div>
				</div>
			</div>
			<!-- </a> -->
		</div>
	</div>
	<div id="projects-item3" class="card w-96 bg-base-300 shadow-xl">
		<!-- <div
		id="projects-item3"
		class="card w-96 bg-base-300 shadow-xl duration-500 hover:scale-105 hover:shadow-xl"
	> -->
		<div>
			<!-- <a href="/projects/3"> -->
			<figure class="rounded-xl">
				<img src={favorites} alt="favorites" />
			</figure>
			<div class="card-body">
				<h2 class="card-title">
					Your Remains
					<!-- <div class="badge badge-secondary">NEW</div> -->
				</h2>
				<p>Your own list sharing app</p>
				<div class="card-actions justify-end">
					<div class="badge badge-outline">To Do</div>
					<div class="badge badge-outline">APP</div>
				</div>
			</div>
			<!-- </a> -->
		</div>
	</div>
</secion>

<div class="divider" />

<secion>
	<article class="prose">
		<h2>Posts</h2>
	</article>
	<div>
		<article class="prose">
			<h3>Title 1</h3>
			<p>
				description description description description description description description
				description description description description description description description
			</p>
		</article>
		<article class="prose">
			<h3>Title 2</h3>
			<p>
				description description description description description description description
				description description description description description description description
			</p>
		</article>
		<article class="prose">
			<h3>Title 3</h3>
			<p>
				description description description description description description description
				description description description description description description description
			</p>
		</article>
	</div>
</secion>

<div class="divider" />

<!-- <secion>
	<article class="prose">
		<h2>Profile</h2>
		<h3>Career</h3>
		<ul>
			<li>Unomic</li>
			<li>tilda</li>
		</ul>
		<h3>Skills</h3>
		<ul>
			<li>Next.js (go to projcts)</li>
			<li>Nest.js (go to projcts)</li>
			<li>SveltKit (go to projcts)</li>
		</ul>
	</article>
</secion> -->

<!-- <style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style> -->
