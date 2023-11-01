<script setup>

defineProps({
    title: String,
    placeholder: String,
})

</script>

<template>
	<div class="flex flex-col">
		<label :for="title" class="text-xl text-white font-subTitle"
			>{{ title }}</label
		>
		<input
			type="date"
			:name="title"
			:id="title"
			class="text-white bg-transparent border-b-2 border-b-accPink"/>
	</div>
</template>
