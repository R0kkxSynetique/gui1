<script setup>
import { RouterLink } from "vue-router";
import Input from "./components/Input.vue";
import { Icon } from "@iconify/vue";

defineProps({
	rcModel: {
		type: Object,
		required: true,
	},
});

</script>

<template>
	<div class="flex flex-col flex-grow w-full min-h-full">
		<div class="min-w-full overflow-hidden h-36 rounded-xl">
			<img
				:src="`../../storage/app/RcModel/img/${rcModel.id}.png`"
				class="object-cover w-full h-full" />
		</div>
		<div
			class="p-2 px-3 flex flex-col rounded-xl m-5 min-h-full bg-gradient-to-bl from-gradientfrom via-gradientmiddle via-70%% to-gradientto shadow-lg flex-grow">
			<div class="flex justify-between">
				<h1
					class="text-3xl text-white border-b-2 font-title w-fit border-b-pink">
					{{ rcModel.name }}
				</h1>
			</div>
			<div
				class="flex flex-col flex-grow max-h-full min-h-full overflow-y-scroll">
				<div class="grid grid-cols-4 gap-3 py-5 text-base text-white">
					<span class="">Wingspan</span>
					<Input :label="false" placeholder="3.00" :value="rcModel.wingspan"/>
					<span class="">Height</span>
					<Input :label="false" placeholder="800" :value="rcModel.height"/>
					<span class="">Length</span>
					<Input :label="false" placeholder="2.50" :value="rcModel.length"/>
					<span class="">Prop.</span>
					<Input :label="false" placeholder="32x10" :value="rcModel.propeller"/>
					<span class="">weight</span>
					<Input :label="false" placeholder="16.8" :value="rcModel.weight"/>
					<span class="">Type</span>
					<Input :label="false" placeholder="gas" :value="rcModel.engines[0].type"/>
				</div>
				<hr class="w-3/4 mx-auto border-b-2 border-pink" />
				<textarea class="py-5 text-base text-center text-white bg-transparent" placeholder="Description"/>
				<hr class="w-3/4 mx-auto border-b-2 border-pink" />
                <h2 class="pt-2 text-2xl text-white font-subTitle">Engines</h2>
				<div
					class="flex gap-8 px-2 py-4 text-white">
					<div v-for="engine in rcModel.engines" class="flex items-center justify-center gap-3 px-3 py-2 bg-accPink rounded-3xl">
                        <p>{{ engine.name }}</p>
                        <Icon icon="maki:cross" class="w-5 h-5 text-white"/>
                    </div>
                    <div class="flex items-center justify-center gap-8 px-2 py-2 text-base text-white rounded-3xl bg-accPink">
                        <Icon icon="lucide:plus" class="w-5 h-5 text-white"/>
                    </div>
				</div>
                <h2 class="pt-2 text-2xl text-white font-subTitle">Batteries</h2>
				<div
					class="flex gap-8 px-2 py-4 text-white">
					<div v-for="battery in rcModel.batteries" class="flex items-center justify-center gap-3 px-3 py-2 bg-accPink rounded-3xl">
                        <p>{{ battery.name + " " + battery.capacity + "mAh "+ battery.cRate + "C" }}</p>
                        <Icon icon="maki:cross" class="w-5 h-5 text-white"/>
                    </div>
                    <div class="flex items-center justify-center gap-8 px-2 py-2 text-base text-white rounded-3xl bg-accPink">
                        <Icon icon="lucide:plus" class="w-5 h-5 text-white"/>
                    </div>
				</div>
			</div>
			<div>
				<div
					class="flex items-center justify-center px-4 py-3 [&>*]:rounded-2xl gap-4 [&>*]:py-4">
					<RouterLink
						class="flex items-center justify-center w-full text-white bg-error"
						to="/planes/1">
						Discard
					</RouterLink>
					<RouterLink
						class="flex items-center justify-center w-full text-white bg-valid"
						to="/home">
						Save
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>
