<script setup>
import { Icon } from "@iconify/vue";
import ComponentCard from "./components/ComponentCard.vue";
import {
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";
import { RouterLink } from "vue-router";
import { ref } from "vue";

defineProps({
	rcModel: {
		type: Object,
		required: true,
	},
});

function destroy() {
	console.log("destroy");
}

const openDelete = ref(false);
</script>

<template>
	<div class="flex flex-col flex-grow w-full min-h-full">
		<div class="min-w-full overflow-hidden h-36 rounded-xl">
			<img
				:src="`../../storage/app/RcModel/img/${rcModel.id}.png`"
				class="object-cover w-full h-full" />
		</div>
		<div
			class="p-2 flex flex-col rounded-xl m-5 min-h-full bg-gradient-to-bl from-gradientfrom via-gradientmiddle via-70%% to-gradientto shadow-lg flex-grow">
			<div>
				<TransitionRoot as="template" :show="openDelete">
					<Dialog
						as="div"
						class="relative z-10"
						@close="openDelete = false">
						<TransitionChild
							as="template"
							enter="ease-out duration-300"
							enter-from="opacity-0"
							enter-to="opacity-100"
							leave="ease-in duration-200"
							leave-from="opacity-100"
							leave-to="opacity-0">
							<div
								class="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
						</TransitionChild>

						<div class="fixed inset-0 z-10 overflow-y-auto">
							<div
								class="flex items-center justify-center min-h-full p-2 text-center">
								<TransitionChild
									as="template"
									enter="ease-out duration-300"
									enter-from="opacity-0 translate-y-0 scale-95"
									enter-to="opacity-100 translate-y-0 scale-100"
									leave="ease-in duration-200"
									leave-from="opacity-100 translate-y-0 scale-100"
									leave-to="opacity-0 translate-y-0 scale-95">
									<DialogPanel
										class="relative w-full text-left transition-all transform shadow-xl rounded-3xl bg-secPurple">
										<div class="p-6 px-4 pt-5 pb-4">
											<div>
												<div
													class="mt-0 text-center text-white">
													<DialogTitle
														as="h3"
														class="text-3xl leading-6 font-title">
														You are about to delete
														the plane !
													</DialogTitle>
													<div
														class="w-full mt-5 text-lg">
														This action is
														<strong
															>definitive</strong
														>.<br />
														Once confirmed, you will
														not be able to recover
														the plane.<br />Are you
														sure you want to
														continue ?
													</div>
												</div>
											</div>
										</div>
										<div
											class="flex flex-row-reverse items-center justify-center px-4 py-3 [&>*]:rounded-2xl gap-4 [&>*]:py-4">
											<RouterLink
												class="flex items-center justify-center w-full text-white bg-error"
												to="/home">
												Delete
											</RouterLink>
											<button
												type="button"
												class="flex items-center justify-center w-full text-white bg-settingColor"
												@click="openDelete = false">
												Cancel
											</button>
										</div>
									</DialogPanel>
								</TransitionChild>
							</div>
						</div>
					</Dialog>
				</TransitionRoot>
			</div>
			<div class="flex justify-between">
				<h1
					class="text-3xl text-white border-b-2 font-title w-fit border-b-pink">
					{{ rcModel.name }}
				</h1>
				<Menu as="div" class="relative inline-block text-left">
					<div>
						<MenuButton>
							<Icon
								icon="tabler:dots"
								class="w-8 h-8 mx-4 text-white" />
						</MenuButton>
					</div>

					<transition
						enter-active-class="transition duration-100 ease-out"
						enter-from-class="transform scale-95 opacity-0"
						enter-to-class="transform scale-100 opacity-100"
						leave-active-class="transition duration-75 ease-in"
						leave-from-class="transform scale-100 opacity-100"
						leave-to-class="transform scale-95 opacity-0">
						<MenuItems
							class="absolute right-0 z-10 mt-2 origin-top-right shadow-lg bg-accPurple rounded-xl w-fit">
							<div
								class="py-1 [&>*]:text-center [&>*]:text-white [&_button]:md:text-2xl">
								<MenuItem>
									<RouterLink
										:to="'/planes/' + rcModel.id + '/edit'"
										class="block px-4 py-2 text-sm"
										>Edit</RouterLink
									>
								</MenuItem>
								<MenuItem>
									<button
										@click="openDelete = true"
										class="block px-4 py-2 text-sm">
										Delete
									</button>
								</MenuItem>
							</div>
						</MenuItems>
					</transition>
				</Menu>
			</div>
			<div
				class="flex flex-col flex-grow max-h-full min-h-full overflow-y-scroll">
				<div class="grid grid-cols-4 gap-3 py-5 text-base text-white">
					<span class="">Wingspan</span>
					<span class="">{{ rcModel.wingspan }} m</span>
					<span class="">Height</span>
					<span class="">{{ rcModel.height }} cm</span>
					<span class="">Length</span>
					<span class="">{{ rcModel.length }} m</span>
					<span class="">Prop.</span>
					<span class="">{{ rcModel.propeller }}</span>
					<span class="">weight</span>
					<span class="">{{ rcModel.weight }}</span>
					<span class="">Type</span>
					<span class="">{{ rcModel.engines[0].type }}</span>
				</div>
				<hr class="w-3/4 mx-auto border-b-2 border-pink" />
				<p class="py-5 text-base text-center text-white">
					{{ rcModel.description }}
				</p>
				<hr class="w-3/4 mx-auto border-b-2 border-pink" />
				<div
					class="grid grid-cols-2 gap-8 px-2 py-4 text-base text-white justify-evenly">
					<ComponentCard
						v-for="engine in rcModel.engines"
						:title="engine.name">
						<span>{{ engine.stroke }} stroke</span>
						<span>{{ engine.fuel }}</span>
						<span>{{ engine.weight }} Kg</span>
					</ComponentCard>
					<ComponentCard
						v-for="battery in rcModel.batteries"
						:title="battery.name">
						<span>{{ battery.capacity }} mAh</span>
						<span>{{ battery.cells }}s {{ battery.cRate }}C</span>
					</ComponentCard>
				</div>
			</div>
		</div>
	</div>
</template>
