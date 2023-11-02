<script setup>
import {
	Dialog,
	DialogPanel,
	DialogTitle,
	TransitionChild,
	TransitionRoot,
} from "@headlessui/vue";

function destroy() {
	console.log("destroy");
}

defineProps({
	openDelete: {
		type: Boolean,
		required: true,
	},
});
</script>
<!-- ! issue with the prop reference Not used currently -->
<template>
	<TransitionRoot as="template" :show="openDelete">
		<Dialog as="div" class="relative z-10" @close="openDelete = false">
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
							class="relative w-full text-left transition-all transform shadow-xl bg-secPurple xl:max-w-2xl">
							<div class="p-6 px-4 pt-5 pb-4">
								<div>
									<div class="mt-0 text-center text-white">
										<DialogTitle
											as="h3"
											class="text-3xl leading-6 font-title">
											You are about to delete the plane !
										</DialogTitle>
										<div class="w-full mt-5 text-lg">
											This action is
											<strong>definitive</strong>.<br />
											Once confirmed, you will not be able
											to recover the plane.<br />Are you
											sure you want to continue ?
										</div>
									</div>
								</div>
							</div>
							<div
								class="flex flex-row-reverse items-center justify-center px-4 py-3 [&>button]:rounded-2xl gap-4 [&>button]:py-4">
								<button
									type="button"
									class="flex items-center justify-center w-full text-white bg-error"
									@click="destroy(rcModel.id)">
									Delete
								</button>
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
</template>
