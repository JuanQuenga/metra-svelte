<script lang="ts">
	export let hue = 296;
	export let light = 100;
	export let saturation = 100;
</script>

<div class="neon" style="--hue: {hue}; --light: {light}; --saturation: {saturation}%;">
	<slot />
</div>

<style>
	.neon {
		/* color: hsl(var(--hue), 100%, 90%); */
		color: #fff;
		text-align: center;
		opacity: 1;
		/* color: hsl(var(--hue), 100%, calc(var(--light) * 1%)); */
		text-shadow: 0 0 5px hsl(var(--hue), 100%, 69%), 0 0 15px hsl(var(--hue), 100%, 69%),
			0 0 25px hsl(var(--hue), 100%, 69%), 0 0 20px hsl(var(--hue), 100%, 69%),
			0 0 30px hsl(var(--hue), 100%, 29%), 0 0 80px hsl(var(--hue), 100%, 29%),
			0 0 80px hsl(var(--hue), 100%, 29%);
	}
</style>
