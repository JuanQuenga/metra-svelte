<div class="neon-bg bg-stone-500">
	<slot />
</div>

<style>
	.neon-bg {
		/* background-image: repeating-linear-gradient(
			to bottom,
			transparent 7px,
			rgba(255, 255, 255, 0.2) 9px,
			rgba(255, 255, 255, 0.2) 13px,
			transparent 13px 
		);*/
		background: linear-gradient(
				45deg,
				transparent 34%,
				#3e3e3e 35%,
				#3e3e3e 40%,
				transparent 41%,
				transparent 59%,
				#3e3e3e 60%,
				#3e3e3e 65%,
				transparent 66%
			),
			linear-gradient(
				135deg,
				transparent 34%,
				#3e3e3e 35%,
				#3e3e3e 40%,
				transparent 41%,
				transparent 59%,
				#3e3e3e 60%,
				#3e3e3e 65%,
				transparent 66%
			);
		background-size: 6em 6em;
		background-color: rgb(50, 50, 50);
		opacity: 1;
	}
</style>
