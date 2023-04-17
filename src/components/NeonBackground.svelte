<div class="neon-bg bg-stone-900">
	<slot />
</div>

<style>
	.neon-bg {
		background-image: repeating-linear-gradient(
			to bottom,
			transparent 7px,
			rgba(0, 0, 0, 0.4) 9px,
			rgba(0, 0, 0, 0.4) 13px,
			transparent 13px
		);
	}
</style>
