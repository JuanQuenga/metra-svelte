<script lang="ts">
	import NeonText from '../NeonText.svelte';
	import RainbowShadow from '../RainbowShadow.svelte';
	import WhiteTextShadow from '../shadows/WhiteTextShadow.svelte';

	const navLinks = [
		{ name: 'About', href: '/' },
		{ name: 'Issues', href: '/' },
		{ name: 'Out Flashin', href: '/' },
		{ name: 'Dragectory', href: '/' },
		{ name: 'Modeling', href: '/' }
	];
</script>

<nav class="absolute w-full z-30">
	<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
		<!-- <a href="#" class="flex items-center">
			<span class="self-center text-4xl whitespace-nowrap dark:text-white font-monoton">METRA!</span
			>
		</a> -->
		<RainbowShadow>
			<a
				href="/"
				class="flex flex-row text-2xl md:text-5xl font-monoton text-white hover:scale-105 transition-transform"
			>
				METRA!
			</a>
		</RainbowShadow>
		<button
			data-collapse-toggle="navbar-dropdown"
			type="button"
			class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			aria-controls="navbar-dropdown"
			aria-expanded="false"
		>
			<span class="sr-only">Open main menu</span>
			<svg
				class="w-6 h-6"
				aria-hidden="true"
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
		<div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
			<ul
				class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0"
			>
				{#each navLinks as link}
					<li>
						<a
							href={link.href}
							class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>{link.name}</a
						>
					</li>
				{/each}

				<li>
					<a
						href="/contact"
						class="bg-pink-600 hover:bg-pink-800 text-white font-bold py-2 px-4 rounded"
					>
						Contact Us
					</a>
				</li>
			</ul>
		</div>
	</div>
</nav>
