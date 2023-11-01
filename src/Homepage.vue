<script setup>
import Card from "./components/Card.vue";
import Navbar from "./components/Navbar.vue";
import Backgound from "./components/Backgound.vue";
</script>
<template>
	<Backgound />
    <div class="flex flex-col justify-between w-full max-h-screen min-h-screen">
        <div class="flex max-h-full overflow-y-scroll">
            <div class="flex flex-col w-full h-full px-6 py-6 gap-7">
                <Card rc-model-id="1">Fokker</Card>
                <Card rc-model-id="1">Fokker</Card>
                <Card rc-model-id="1">Fokker</Card>
                <Card rc-model-id="1">Fokker</Card>
                <Card rc-model-id="1">Fokker</Card>
                <Card rc-model-id="1">Fokker</Card>
            </div>
        </div>
        <Navbar/>
    </div>
</template>
