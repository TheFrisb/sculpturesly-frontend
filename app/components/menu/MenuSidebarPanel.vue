<script setup lang="ts">
	import {ref} from 'vue';
	import {ChevronLeft, ChevronRight, X} from 'lucide-vue-next';

	const {isOpen, close} = useMobileMenu();
	const {categories} = useCategories();

	const activePanel = ref<'main' | 'collection'>('main');
	const isVisible = ref(false);

	const handleLinkClick = () => {
		close();
	};
	const goToCollection = () => activePanel.value = 'collection';
	const goBack = () => activePanel.value = 'main';
</script>

<template>
	<Teleport to="body">
		<div
				v-if="isVisible || isOpen"
				class="fixed inset-0 z-[60] flex justify-start md:justify-end"
				aria-label="Mobile Menu"
		>
			<!-- Backdrop -->
			<div
					class="absolute inset-0 bg-gallery-900/40 backdrop-blur-sm transition-opacity duration-500"
					:class="isOpen ? 'opacity-100' : 'opacity-0'"
					@click="close"
			/>

			<!-- Drawer -->
			<div
					class="relative w-[90%] max-w-[400px] h-full bg-[#F9F8F6] shadow-2xl transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
					:class="isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-full'"
			>
				<!-- Texture -->
				<div class="absolute inset-0 pointer-events-none opacity-[0.05] z-0 mix-blend-multiply">
					<svg width="100%" height="100%">
						<filter id="mobileMenuNoise">
							<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
						</filter>
						<rect width="100%" height="100%" filter="url(#mobileMenuNoise)"/>
					</svg>
				</div>

				<div class="relative w-full h-full overflow-hidden z-10 bg-transparent">

					<!-- PANEL 1: MAIN MENU -->
					<div
							class="absolute inset-0 w-full h-full flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
							:class="activePanel === 'main' ? 'translate-x-0' : '-translate-x-full opacity-50'"
					>
						<!-- Header -->
						<div class="flex justify-end p-6 pt-8">
							<button
									class="p-2 text-gallery-400 hover:text-gallery-900 transition-colors"
									aria-label="Close Menu"
									@click="close"
							>
								<X :size="32" :stroke-width="1"/>
							</button>
						</div>

						<!-- Links -->
						<div class="flex-1 px-8 flex flex-col justify-center space-y-10">

							<button
									class="group flex items-center justify-between w-full text-left font-serif text-3xl md:text-4xl text-gallery-900 hover:text-clay-600 transition-colors"
									@click="goToCollection"
							>
								<span>Collection</span>
								<ChevronRight
										:size="28"
										:stroke-width="1"
										class="text-clay-500 transform group-hover:translate-x-1 transition-transform"
								/>
							</button>

						</div>

						<!-- Footer Links -->
						<div class="p-8 pb-12 border-t border-gallery-200 mt-auto">
							<div class="grid grid-cols-3 gap-4 text-xs font-sans text-gallery-500 uppercase tracking-widest">
								<NuxtLink
										to="/policy/shipping" class="text-left hover:text-clay-600 transition-colors"
										@click="handleLinkClick">
									Shipping
								</NuxtLink>
								<NuxtLink
										to="/policy/returns" class="text-right hover:text-clay-600 transition-colors"
										@click="handleLinkClick">
									Returns
								</NuxtLink>
								<NuxtLink
										to="/contact" class="text-center hover:text-clay-600 transition-colors"
										@click="handleLinkClick">
									Contact
								</NuxtLink>

							</div>
						</div>
					</div>

					<!-- PANEL 2: COLLECTION DRILL-DOWN -->
					<div
							class="absolute inset-0 w-full h-full flex flex-col bg-[#F9F8F6] transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]"
							:class="activePanel === 'collection' ? 'translate-x-0' : 'translate-x-full'"
					>
						<div class="flex items-center justify-between p-6 pt-8 border-b border-gallery-200/60">
							<button
									class="flex items-center text-gallery-500 hover:text-gallery-900 transition-colors group"
									@click="goBack">
								<ChevronLeft :size="20" :stroke-width="1" class="mr-1 group-hover:-translate-x-1 transition-transform"/>
								<span class="font-sans text-xs uppercase tracking-widest">Back</span>
							</button>
							<span class="font-serif text-xl text-gallery-900">The Collection</span>
							<div class="w-12"/>
						</div>

						<div class="flex-1 overflow-y-auto px-8 py-8 space-y-12">
							<div
									v-for="(parent, index) in categories"
									:key="parent.id"
									class="animate-fade-in-up"
									:style="{ animationDelay: `${(index + 1) * 0.1}s` }"
							>
								<NuxtLink
										:to="`/category/${parent.slug}`"
										class="font-sans text-[10px] uppercase tracking-[0.25em] text-gallery-400 mb-6 border-b border-gallery-200 pb-2"
										@click="handleLinkClick">
									{{ parent.title }}
								</NuxtLink>

								<ul class="space-y-5">
									<li v-for="child in parent.children" :key="child.id">

										<NuxtLink
												:to="`/category/${child.slug}`"
												class="font-serif text-2xl text-gallery-800 hover:text-clay-600 transition-colors block w-full text-left"
												active-class="text-clay-600 italic"
												@click="handleLinkClick"
										>
											{{ child.title }}
										</NuxtLink>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Teleport>
</template>