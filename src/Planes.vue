<script setup>
import Card from "./components/Card.vue";
</script>
<template>
	<div class="flex flex-col w-full h-full px-6 py-6 gap-7">
		<Card :rc-model-id="1">Fokker D. VII</Card>
		<Card :rc-model-id="2">Etrich Taub</Card>
		<Card :rc-model-id="3">Extra 300</Card>
		<Card :rc-model-id="4">A6m Zero</Card>
		<Card :rc-model-id="5">Super Decathlon</Card>
		<Card :rc-model-id="6">Hawk hurricane</Card>
	</div>
</template>
