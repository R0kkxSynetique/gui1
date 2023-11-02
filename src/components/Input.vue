<script setup>

defineProps({
    title: String,
    placeholder: String,
    row: Boolean,
    label: Boolean,
    value: String
})

</script>

<template>
	<div class="flex" :class="row ? 'flex-row' : 'flex-col'">
		<label v-if="label" :for="title" class="text-xl text-white font-subTitle"
			>{{ title }}</label
		>
		<input
			type="text"
			:name="title"
			:id="title"
			class="text-white bg-transparent border-b-2 border-b-accPink"
			:placeholder="placeholder"
            :value="value" />
	</div>
</template>
