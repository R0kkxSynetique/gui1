<script setup>
import { RouterLink } from "vue-router";

defineProps({
	rcModelId: Number,
});
</script>

<template>
	<RouterLink class="relative max-w-full overflow-hidden h-36 rounded-xl" :to= "'/planes/'+rcModelId">
		<img
			:src="`../../storage/app/RcModel/img/${rcModelId}.png`"
			class="object-cover w-full h-full" />
		<div
			class="absolute flex items-center justify-center w-32 text-white shadow-inner shadow-white/40 rounded-xl bottom-1 right-1 h-11 backdrop-blur-sm">
			<slot></slot>
		</div>
	</RouterLink>
</template>
