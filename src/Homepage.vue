<script setup>
import Card from "./components/Card.vue";
import Navbar from "./components/Navbar.vue";
import Backgound from "./components/Backgound.vue";
</script>
<template>
	<Backgound />
    <div class="flex flex-col justify-between w-full max-h-screen min-h-screen">
        <div class="flex flex-col flex-grow h-full px-6 py-6 overflow-y-scroll bg-red-600 gap-7">
            <Card rc-model-id="1">Fokker</Card>
            <Card rc-model-id="1">Fokker</Card>
            <Card rc-model-id="1">Fokker</Card>
            <Card rc-model-id="1">Fokker</Card>
        </div>
        <Navbar/>
    </div>
</template>
