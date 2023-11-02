<script setup>
    import { RouterView } from "vue-router";
    import Backgound from "./components/Backgound.vue";
    import Navbar from "./components/Navbar.vue";
</script>

<template>
    <Backgound />
    <div class="flex flex-col justify-between w-full max-h-screen min-h-screen">
        <RouterView />
        <Navbar/>
    </div>
</template>
