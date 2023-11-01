<script setup>
import { Icon } from "@iconify/vue";
import NavbarOption from "./NavbarOption.vue";
import { ref } from "vue";

const selected = ref("home");
</script>

<template>
	<div class="flex items-center justify-center h-40 min-w-full px-5 py-4">
		<div
			class="flex items-center justify-center w-full min-h-full px-3 py-4 bg-navbg rounded-3xl">
			<div class="flex w-full gap-5 justify-evenly">
				<NavbarOption
					title="home"
					@click="selected = 'home'"
					:selected="selected == 'home'"
					color="bg-homeColor"
					><Icon
						icon="solar:home-2-linear"
						class="w-12 h-12 text-white"
				/></NavbarOption>
				<NavbarOption
					title="planes"
					@click="selected = 'planes'"
					:selected="selected == 'planes'"
					color="bg-planesColor"
					><Icon icon="ph:airplane" class="w-12 h-12 text-white"
				/></NavbarOption>
				<NavbarOption
					title="map"
					@click="selected = 'map'"
					:selected="selected == 'map'"
					color="bg-mapColor"
					><Icon
						icon="solar:radar-2-outline"
						class="w-12 h-12 text-white"
				/></NavbarOption>
				<NavbarOption
					title="settings"
					@click="selected = 'settings'"
					:selected="selected == 'settings'"
					color="bg-settingColor"
					><Icon
						icon="solar:settings-outline"
						class="w-12 h-12 text-white"
				/></NavbarOption>
			</div>
		</div>
	</div>
</template>
