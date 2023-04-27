<script lang="ts">
	export const strength = 1;
</script>

<div class="relative px-4 mx-4">
	<div class="rainbow-shadow bg-clip-text text-transparent absolute blur-sm md:blur-md z-0">
		<slot />
	</div>
	<div class="rainbow-shadow bg-clip-text text-transparent absolute blur-sm md:blur-md z-0">
		<slot />
	</div>
	<div class="rainbow-shadow bg-clip-text text-transparent absolute blur-sm md:blur-md z-0">
		<slot />
	</div>

	<div class="relative z-30">
		<slot />
	</div>
</div>

<style>
	.rainbow-shadow {
		background-clip: content-box;
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

		/* -webkit-animation: rainbow 18s ease infinite;
		-z-animation: rainbow 18s ease infinite;
		-o-animation: rainbow 18s ease infinite;
		animation: rainbow 18s ease infinite; */
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
