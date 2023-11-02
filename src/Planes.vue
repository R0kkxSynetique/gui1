<script setup>
import Card from "./components/Card.vue";

defineProps({
    rcModels: {
        type: Array,
        required: true,
    },
});

</script>
<template>
	<div class="flex flex-col w-full h-full px-6 py-6 gap-7">
		<Card v-for="rcModel in rcModels" :rc-model-id="rcModel.id">{{ rcModel.name }}</Card>
	</div>
</template>
