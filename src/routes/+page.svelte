<script>
	import NeonText from '../components/NeonText.svelte';
	import NeonBackground from '../components/NeonBackground.svelte';
</script>

<NeonBackground>
	<div class="h-screen flex flex-col items-center justify-center">
		<div class="flex flex-row text-7xl md:text-9xl">
			<NeonText hue={0}>M</NeonText>
			<NeonText hue={60}>E</NeonText>
			<NeonText hue={120}>T</NeonText>
			<NeonText hue={180}>R</NeonText>
			<NeonText hue={240}>A</NeonText>
			<NeonText hue={300}>!</NeonText>
		</div>

		<!-- <div class="relative px-4 font-monoton text-7xl md:text-9xl px-10">
			<div
				class="wrapper bg-clip-text text-transparent absolute top-[20px] blur-md md:blur-md z-10"
			>
				METRA!
			</div>
			<div
				class="wrapper bg-clip-text text-transparent absolute top-[20px] blur-sm md:blur-md z-10"
			>
				METRA!
			</div>
			<div
				class="wrapper bg-clip-text text-transparent absolute top-[20px] blur-sm md:blur-xl z-10"
			>
				METRA!
			</div>
			<div
				class="wrapper bg-clip-text text-transparent absolute top-[20px] blur-sm md:blur-xl z-10"
			>
				METRA!
			</div>

			<div class="text-white mt-5 relative z-20">METRA!</div>
		</div> -->

		<div class="relative py- px-4">
			<div
				class="text-3xl md:text-6xl font-cursive wrapper bg-clip-text text-transparent absolute top-[20px] blur-sm md:blur-md z-10"
			>
				Unapologetically gay since 1979.
			</div>

			<div class="text-3xl md:text-6xl font-cursive text-white mt-5 relative z-20">
				Unapologetically gay since 1979.
			</div>
		</div>

		<div class="mt-5 md:mt-20 flex items-center justify-center gap-x-6">
			<a
				href="/latest"
				class="neon-button rounded-md border-2 px-3.5 py-2.5 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Latest Issue</a
			>
			<a href="/home" class="text-md font-semibold leading-6 text-white"
				>Continue to website <span aria-hidden="true">→</span></a
			>
		</div>
	</div>
</NeonBackground>

<style>
	.wrapper {
		background: linear-gradient(
			124deg,
			#ff2400,
			#e81d1d,
			#e8b71d,
			#e3e81d,
			#1de840,
			#1ddde8,
			#2b1de8,
			#dd00f3,
			#dd00f3
		);
		background-size: 100% 100%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.white-shadow {
		text-shadow: 0 0 5px hsl(0, 0%, 100%), 0 0 15px hsl(100, 0%, 100%), 0 0 25px hsl(0, 0%, 69%),
			0 0 20px hsl(0, 0%, 69%), 0 0 30px hsl(0, 0%, 69%), 0 0 80px hsl(0, 0%, 29%),
			0 0 80px hsl(0, 0%, 29%);
	}
</style>
