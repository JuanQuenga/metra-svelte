<script lang="ts">
	export let cursive = false;
	export let hue = 296;
	export let light = 100;
	export let saturation = 100;
	export let delay = 3;
	$: flickerDelay = Math.random() * delay;
</script>

<div
	class:font-cursive={cursive}
	class:font-monoton={!cursive}
	class="neon"
	style="--hue: {hue}; --light: {light}; --delay: {flickerDelay}; --saturation: {saturation}%;"
>
	<slot />
</div>

<style>
	.neon {
		text-shadow: 0 0 5px hsl(var(--hue) 0, 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
			0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
			0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
			0 0 80px hsl(var(--hue), 100%, 29%);
		color: hsl(var(--hue), 100%, 90%);
		text-align: center;
		animation: text-flicker-in-glow calc(var(--delay) * 1s) linear both;
		-webkit-animation: text-flicker-in-glow calc(var(--delay) * 1s) linear both;
		/* animation: blink 12s infinite;
		-webkit-animation: blink 12s infinite; */
	}

	@-webkit-keyframes blink {
		20%,
		24%,
		55% {
			color: #111;
			text-shadow: none;
		}

		0%,
		19%,
		21%,
		23%,
		25%,
		54%,
		56%,
		100% {
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
	}

	@keyframes blink {
		20%,
		24%,
		55% {
			color: #111;
			text-shadow: none;
		}

		0%,
		19%,
		21%,
		23%,
		25%,
		54%,
		56%,
		100% {
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
	}

	@-webkit-keyframes text-flicker-in-glow {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0;
			text-shadow: none;
		}
		10.1% {
			opacity: 1;
			text-shadow: none;
		}
		10.2% {
			opacity: 0;
			text-shadow: none;
		}
		20% {
			opacity: 0;
			text-shadow: none;
		}
		20.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		20.6% {
			opacity: 0;
			text-shadow: none;
		}
		30% {
			opacity: 0;
			text-shadow: none;
		}
		30.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		30.5% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		30.6% {
			opacity: 0;
			text-shadow: none;
		}
		45% {
			opacity: 0;
			text-shadow: none;
		}
		45.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		50% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		55% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		55.1% {
			opacity: 0;
			text-shadow: none;
		}
		57% {
			opacity: 0;
			text-shadow: none;
		}
		57.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		60% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		60.1% {
			opacity: 0;
			text-shadow: none;
		}
		65% {
			opacity: 0;
			text-shadow: none;
		}
		65.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		75% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		75.1% {
			opacity: 0;
			text-shadow: none;
		}
		77% {
			opacity: 0;
			text-shadow: none;
		}
		77.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		85% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		85.1% {
			opacity: 0;
			text-shadow: none;
		}
		86% {
			opacity: 0;
			text-shadow: none;
		}
		86.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		100% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
	}
	@keyframes text-flicker-in-glow {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 0;
			text-shadow: none;
		}
		10.1% {
			opacity: 1;
			text-shadow: none;
		}
		10.2% {
			opacity: 0;
			text-shadow: none;
		}
		20% {
			opacity: 0;
			text-shadow: none;
		}
		20.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		20.6% {
			opacity: 0;
			text-shadow: none;
		}
		30% {
			opacity: 0;
			text-shadow: none;
		}
		30.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		30.5% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		30.6% {
			opacity: 0;
			text-shadow: none;
		}
		45% {
			opacity: 0;
			text-shadow: none;
		}
		45.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		50% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		55% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		55.1% {
			opacity: 0;
			text-shadow: none;
		}
		57% {
			opacity: 0;
			text-shadow: none;
		}
		57.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		60% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		60.1% {
			opacity: 0;
			text-shadow: none;
		}
		65% {
			opacity: 0;
			text-shadow: none;
		}
		65.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		75% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		75.1% {
			opacity: 0;
			text-shadow: none;
		}
		77% {
			opacity: 0;
			text-shadow: none;
		}
		77.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		85% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		85.1% {
			opacity: 0;
			text-shadow: none;
		}
		86% {
			opacity: 0;
			text-shadow: none;
		}
		86.1% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
		100% {
			opacity: 1;
			color: hsl(var(--hue), 100%, calc(var(--light) * 1%));
			text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
				0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
				0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
				0 0 80px hsl(var(--hue), 100%, 29%);
		}
	}
</style>
