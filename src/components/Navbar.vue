<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
	<div
		class="flex items-center justify-center h-40 min-w-full px-5 py-4">
		<div
			class="flex items-center justify-center w-full h-full px-3 py-4 bg-navbg rounded-3xl">
			<div class="flex w-full justify-evenly gap-7">
				<Icon icon="solar:home-2-linear" class="w-12 h-12 text-white" />
				<Icon icon="ph:airplane" class="w-12 h-12 text-white" />
				<Icon
					icon="solar:radar-2-outline"
					class="w-12 h-12 text-white" />
				<Icon
					icon="solar:settings-outline"
					class="w-12 h-12 text-white" />
			</div>
		</div>
	</div>
</template>
