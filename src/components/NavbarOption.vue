<script setup>

import { RouterLink } from 'vue-router'

defineProps({
    color: String,
    title: String,
    selected: Boolean
})

</script>

<template>
	<RouterLink
        :to="'/' + title"
		class="flex items-center justify-center gap-3 text-white rounded-3xl"
        :class="selected ? color + ' p-4' : ''">
        <slot></slot>
		<div class="font-subTitle" v-if="selected">{{title}}</div>
	</RouterLink>
</template>
