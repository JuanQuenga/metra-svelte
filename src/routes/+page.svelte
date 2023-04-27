<script>
	import NeonText from '../components/NeonText.svelte';
	import NeonBackground from '../components/NeonBackground.svelte';
	import FlickerIn from '../components/FlickerIn.svelte';
	import RainbowShadow from '../components/RainbowShadow.svelte';
	import RainbowButton from '../components/buttons/RainbowButton.svelte';
</script>

<!-- <NeonBackground>

</NeonBackground> -->
<div
	class="bg-cover bg-center bg-stone-400 bg-blend-color-burn bg-[url('https://images.unsplash.com/photo-1566055909643-a51b4271aa47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80')]"
>
	<div class="h-[900px] flex flex-col items-center justify-center">
		<div class="flex flex-row text-7xl md:text-9xl font-monoton space-x-2">
			<FlickerIn delay={3}><NeonText hue={0}>M</NeonText></FlickerIn>
			<FlickerIn delay={4}><NeonText hue={60}>E</NeonText></FlickerIn>
			<FlickerIn delay={3}><NeonText hue={120}>T</NeonText></FlickerIn>
			<FlickerIn delay={2}><NeonText hue={180}>R</NeonText></FlickerIn>
			<FlickerIn delay={5}><NeonText hue={240}>A</NeonText></FlickerIn>
			<FlickerIn delay={4}><NeonText hue={300}>!</NeonText></FlickerIn>
		</div>

		<div class="font-cursive text-3xl md:text-6xl md:mt-8 text-white white-shadow">
			<FlickerIn delay={2}>Unapologetically gay since 1979.</FlickerIn>
		</div>
		<FlickerIn delay={1}>
			<div
				class="mt-10 md:mt-20 flex flex-col md:flex-row items-center justify-center gap-x-6 space-y-5 md:space-y-0"
			>
				<RainbowButton href="/latest">View Latest Issue</RainbowButton>
				<!-- <a
				href="/latest"
				class="neon-button rainbow-shadow rounded-md border-2 bg-transparent px-3.5 py-2.5 text-md border-white font-semibold text-white shadow-black shadow-md hover:bg-stone-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>Latest Issue</a
			> -->
				<a
					href="/home"
					class="text-md font-semibold leading-6 text-white white-shadow hover:scale-105 transition-transform"
					>Continue to website <span aria-hidden="true">→</span></a
				>
			</div>
		</FlickerIn>
	</div>
</div>

<style>
	.radial-gradient {
		background: radial-gradient(rgba(0, 0, 0, 1), transparent);
	}
	.white-shadow {
		text-shadow: 0 0px 25px rgba(255, 255, 255, 1);
	}
	.rainbow-shadow {
		background-clip: border-box;
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
		-webkit-background-clip: border;
		-webkit-text-fill-color: transparent;

		/* -webkit-animation: rainbow 18s ease infinite;
		-z-animation: rainbow 18s ease infinite;
		-o-animation: rainbow 18s ease infinite;
		animation: rainbow 18s ease infinite; */
	}
</style>
