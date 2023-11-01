<script setup>
    import { RouterView } from "vue-router";
    import Backgound from "./components/Backgound.vue";
    import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Backgound />
    <div class="flex flex-col w-full max-h-screen min-h-screen">
        <div class="flex flex-grow max-h-full min-h-full overflow-y-scroll">
            <RouterView />
        </div>
        <Navbar/>
    </div>
</template>
