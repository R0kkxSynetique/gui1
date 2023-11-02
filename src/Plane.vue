<script setup>

import { Icon } from '@iconify/vue';

defineProps({
	rcModel: {
		type: Object,
		required: true,
	},
});
</script>

<template>
	<div class="flex flex-col w-full min-h-full">
		<div class="min-w-full overflow-hidden h-36 rounded-xl">
			<img
				:src="`../../storage/app/RcModel/img/${rcModel.id}.png`"
				class="object-cover w-full h-full" />
		</div>
		<div class="flex-grow w-full p-5">
			<div
				class="p-2 rounded-xl w-full h-full bg-gradient-to-bl from-gradientfrom via-gradientmiddle via-70%% to-gradientto shadow-lg">
                <div class="flex justify-between">
                    <h1
                        class="text-3xl text-white border-b-2 font-title w-fit border-b-pink">
                        {{ rcModel.name }}
                    </h1>
                    <Icon icon="tabler:dots" class="w-8 h-8 mx-4 text-white" />
                </div>
				<div class="grid grid-cols-4 gap-3 py-5 text-base text-white">
					<span class="">Wingspan</span>
					<span class="">3.08 m</span>
					<span class="">Height</span>
					<span class="">800 cm</span>
					<span class="">Length</span>
					<span class="">2.58 m</span>
					<span class="">Prop.</span>
					<span class="">32x12</span>
					<span class="">Weigth</span>
					<span class="">16.8 Kg</span>
					<span class="">Type</span>
					<span class="">gas</span>
				</div>
				<hr class="w-3/4 mx-auto border-b-2 border-pink" />
				<p class="py-5 text-base text-center text-white">
					Morem ipsum dolor sit amet, consectetur adipiscing elit.
					Etiam eu turpis molestie, dictum est a, mattis tellus.
				</p>
				<hr class="w-3/4 mx-auto border-b-2 border-pink" />
				<div
					class="grid grid-cols-2 gap-8 px-2 py-4 text-base text-white justify-evenly">
					<div
						class="p-2 rounded-3xl h-full bg-gradient-to-bl from-gradientfrom via-gradientmiddle via-70% to-gradientto flex items-center justify-center flex-col shadow-2xl">
						<h2 class="text-lg">Fiala b2 120cc</h2>
						<hr class="w-2/4 mx-auto border-pink" />
						<div
							class="flex flex-col items-center justify-center gap-4 py-3 text-sm">
							<span>4 stroke</span>
							<span>95 SP 3.3%</span>
							<span>3.45 Kg</span>
						</div>
					</div>
					<div
						class="p-2 rounded-3xl h-full bg-gradient-to-bl from-gradientfrom via-gradientmiddle via-70% to-gradientto flex justify-center items-center flex-col shadow-2xl">
						<h2 class="text-lg">Gens Ace</h2>
						<hr class="w-2/4 mx-auto border-pink" />
						<div
							class="flex flex-col items-center justify-center gap-4 py-3 text-sm">
							<span>3200 mAh</span>
							<span>2s 30C</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
