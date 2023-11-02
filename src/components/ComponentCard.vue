<script setup>
defineProps({
	title: String,
});
</script>

<template>
	<div
		class="p-2 rounded-3xl h-full bg-gradient-to-bl from-gradientfrom via-gradientmiddle via-70% to-gradientto flex items-center justify-center flex-col shadow-2xl">
		<h2 class="text-lg">{{ title }}</h2>
		<hr class="w-2/4 mx-auto border-pink" />
		<div
			class="flex flex-col items-center justify-center gap-4 py-3 text-sm">
			<slot></slot>
		</div>
	</div>
</template>
