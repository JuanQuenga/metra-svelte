<script lang="ts">
	export let href = '/';
</script>

<div class="relative group hover:scale-105 transition-transform">
	<div
		class="absolute z-10 wrapper w-full h-11 -top-2 opacity-50 group-hover:opacity-100 rounded-md transition-all"
	/>
	<a
		class="relative rounded-md border-white border-2 bg-transparent px-3.5 py-2.5 text-lg font-sans font-semibold text-white z-20 text-shadow-black transition-all"
		{href}
	>
		<slot />
	</a>
</div>

<style>
	.text-shadow-white {
		text-shadow: 0 3px 10px rgba(255, 255, 255, 1);
	}
	.text-shadow-black {
		text-shadow: 0 3px 10px rgba(0, 0, 0, 1);
	}
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
		background-size: 800% 800%;

		-webkit-animation: rainbow 18s ease infinite;
		-z-animation: rainbow 18s ease infinite;
		-o-animation: rainbow 18s ease infinite;
		animation: rainbow 18s ease infinite;
	}

	@-webkit-keyframes rainbow {
		0% {
			background-position: 0% 82%;
		}
		50% {
			background-position: 100% 19%;
		}
		100% {
			background-position: 0% 82%;
		}
	}
	@-moz-keyframes rainbow {
		0% {
			background-position: 0% 82%;
		}
		50% {
			background-position: 100% 19%;
		}
		100% {
			background-position: 0% 82%;
		}
	}
	@-o-keyframes rainbow {
		0% {
			background-position: 0% 82%;
		}
		50% {
			background-position: 100% 19%;
		}
		100% {
			background-position: 0% 82%;
		}
	}
	@keyframes rainbow {
		0% {
			background-position: 0% 82%;
		}
		50% {
			background-position: 100% 19%;
		}
		100% {
			background-position: 0% 82%;
		}
	}
</style>
