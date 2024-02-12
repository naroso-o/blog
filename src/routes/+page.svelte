<script lang="ts">
	import blog from '$lib/images/blog.jpeg';
	import guitar from '$lib/images/guitar.jpeg';
	import favorites from '$lib/images/favorites.jpeg';

	let carouselElement: HTMLDivElement;

	const carouselScroll = (toImage: number) => {
		carouselElement.scrollTo(carouselElement.clientWidth * (toImage - 1) + 1, 0);
	};
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="pt-64 pb-8">
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

<div class="divider py-16" />

<article class="prose">
	<h2>Projects</h2>
</article>

<secion id="projects" class="mt-6 px-8">
	<div class="carousel w-full" bind:this={carouselElement}>
		<div id="projects-item1" class="carousel-item relative w-full">
			<div class="card lg:card-side">
				<figure>
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
			</div>
			<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				<button class="btn btn-circle" on:click={() => carouselScroll(3)}>❮</button>
				<button class="btn btn-circle" on:click={() => carouselScroll(2)}>❯</button>
			</div>
		</div>
		<div id="projects-item2" class="carousel-item relative w-full">
			<div class="card lg:card-side">
				<figure>
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
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<button class="btn btn-circle" on:click={() => carouselScroll(1)}>❮</button>
					<button class="btn btn-circle" on:click={() => carouselScroll(3)}>❯</button>
				</div>
			</div>
		</div>
		<div id="projects-item3" class="carousel-item relative w-full">
			<div class="card lg:card-side">
				<figure>
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
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<button class="btn btn-circle" on:click={() => carouselScroll(2)}>❮</button>
					<button class="btn btn-circle" on:click={() => carouselScroll(1)}>❯</button>
				</div>
			</div>
		</div>
	</div>
</secion>

<div class="divider py-16" />

<article class="prose">
	<h2>Posts</h2>
</article>

<secion>
	<div class="card w-96 bg-base-100">
		<article class="card-body prose">
			<h3 class="card-title">Virtual DOM 동작 원리</h3>
			<p class="truncate ...">
				Virtual DOM (VDOM)은 UI의 이상적인 또는 “가상”적인 표현을 메모리에 저장하고 ReactDOM과 같은
				라이브러리에 의해 “실제” DOM과 동기화하는 프로그래밍 개념입니다. 이 과정을 재조정이라고
				합니다.
			</p>
		</article>
	</div>
	<div class="card">
		<article class="card-body prose">
			<h3 class="card-title">Svelt</h3>
			<p class="truncate ...">
				Svelte는 Rich Harris가 만들고 Svelte 핵심 팀 구성원이 유지 관리하는 무료 오픈 소스 프런트
				엔드 구성 요소 프레임워크이자 언어입니다. Svelte는 애플리케이션에서 가져오는 모놀리식
				JavaScript 라이브러리가 아닙니다.
			</p>
		</article>
	</div>
	<div class="card">
		<article class="card-body prose">
			<h3 class="card-title">SSR</h3>
			<p class="truncate ...">
				서버 측 렌더링(SSR)은 웹 개발에서 클라이언트 측(즉, 사용자의 웹 브라우저) 대신 서버에서 웹
				페이지를 렌더링하는 데 사용되는 기술입니다. 이 접근 방식에는 클라이언트 측 렌더링을 사용하여
				브라우저에서 동적으로 콘텐츠를 생성하는 대신 서버에서 HTML, CSS 및 JavaScript 코드를
				생성하고 이를 완전한 형태의 웹 페이지로 클라이언트에 보내는 작업이 포함됩니다.
			</p>
		</article>
	</div>
</secion>

<!-- <div class="divider py-16" /> -->

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
