<script lang="ts">
	export let delay = 6;
</script>

<div class="flicker" style="--delay: {delay};">
	<slot />
</div>

<style>
	.flicker {
		animation: flicker calc(var(--delay) * 1s) linear both;
	}
	@-webkit-keyframes flicker {
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
	@keyframes flicker {
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
