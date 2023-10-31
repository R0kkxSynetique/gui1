<script setup>
defineProps({
	rcModelId: Number,
});
</script>

<template>
	<div class="relative max-w-full overflow-hidden h-36 rounded-xl">
		<img
			:src="`../../storage/app/RcModel/${rcModelId}.png`"
			class="object-cover w-full h-full" />
		<div
			class="absolute flex items-center justify-center w-32 text-white shadow-inner shadow-white/40 rounded-xl bottom-1 right-1 h-11 backdrop-blur-sm">
			<slot></slot>
		</div>
	</div>
</template>
