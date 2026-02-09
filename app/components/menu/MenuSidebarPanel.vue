<script setup lang="ts">
import { X, ChevronDown, ChevronRight, Truck, RotateCcw, Mail } from 'lucide-vue-next';
import type { CategoryTree } from '~/types/category';

// Composables
const { isOpen, close } = useMobileMenu();
const { categories } = useCategories();

// State for expanded categories (using category ID as key)
const expandedCategories = ref<Set<number>>(new Set());

// Track if closing due to navigation (instant close)
const isNavigating = ref(false);

// Toggle category expansion
const toggleCategory = (categoryId: number) => {
	const expanded = new Set(expandedCategories.value);
	if (expanded.has(categoryId)) {
		expanded.delete(categoryId);
	} else {
		expanded.add(categoryId);
	}
	expandedCategories.value = expanded;
};

// Check if a category is expanded
const isExpanded = (categoryId: number): boolean => {
	return expandedCategories.value.has(categoryId);
};

// Handle link click - instantly hide sidebar
const handleLinkClick = () => {
	isNavigating.value = true;
	close();
};

// Reset state when menu closes
watch(isOpen, (open) => {
	if (!open) {
		// Reset after close
		setTimeout(() => {
			expandedCategories.value = new Set();
			isNavigating.value = false;
		}, 50);
	}
});
</script>

<template>
	<Teleport to="body">
		<!-- Wrapper with conditional instant/animated transitions -->
		<div
			v-if="isOpen || (!isNavigating && isOpen === false)"
			v-show="isOpen"
			class="fixed inset-0 z-[60] flex"
			:class="{
				'animate-fade-in': isOpen && !isNavigating,
				'opacity-0 pointer-events-none': !isOpen
			}"
			role="dialog"
			aria-modal="true"
			aria-label="Navigation Menu"
		>
			<!-- Backdrop with elegant fade -->
			<div
				class="absolute inset-0 bg-gallery-900/60 backdrop-blur-md transition-opacity"
				:class="isOpen && !isNavigating ? 'duration-500 ease-out opacity-100' : 'duration-0 opacity-0'"
				@click="close"
			/>

			<!-- Drawer Panel with enhanced entry animation -->
			<aside
				class="relative w-[85vw] max-w-[380px] h-full bg-[#FDFCFA] shadow-2xl flex flex-col overflow-hidden"
				:class="{
					'animate-slide-in-left': isOpen && !isNavigating,
					'-translate-x-full': !isOpen
				}"
			>
						<!-- Subtle texture overlay -->
						<div class="absolute inset-0 pointer-events-none opacity-[0.03] z-0">
							<svg class="w-full h-full">
								<filter id="sidebarNoise">
									<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
								</filter>
								<rect width="100%" height="100%" filter="url(#sidebarNoise)" />
							</svg>
						</div>

				<!-- Header with staggered animation -->
				<header 
					class="relative z-10 flex items-center justify-between px-6 py-5 border-b border-gallery-100"
					:class="{ 'animate-fade-in-up': isOpen && !isNavigating }"
					:style="{ animationDelay: '100ms' }"
				>
					<span class="font-serif text-lg text-gallery-800 tracking-tight">Menu</span>
					<button
						type="button"
						class="p-2 -mr-2 text-gallery-400 hover:text-gallery-800 transition-colors duration-200 rounded-full hover:bg-gallery-100"
						aria-label="Close menu"
						@click="close"
					>
						<X :size="24" :stroke-width="1.5" />
					</button>
				</header>

				<!-- Scrollable Content -->
				<nav class="relative z-10 flex-1 overflow-y-auto overscroll-contain px-6 py-6">
					<div class="space-y-2">
						<div
							v-for="(parent, parentIndex) in categories"
							:key="parent.id"
							class="border-b border-gallery-100 last:border-b-0"
							:class="{ 'animate-fade-in-up': isOpen && !isNavigating }"
							:style="{ animationDelay: `${150 + parentIndex * 50}ms` }"
						>
									<!-- Parent Category Header - Entire row is clickable as toggle -->
									<button
										v-if="parent.children && parent.children.length > 0"
										type="button"
										class="w-full flex items-center justify-between py-4 text-left group"
										:aria-expanded="isExpanded(parent.id)"
										:aria-label="`${isExpanded(parent.id) ? 'Collapse' : 'Expand'} ${parent.title}`"
										@click="toggleCategory(parent.id)"
									>
										<NuxtLink
											:to="`/category/${parent.slug}`"
											class="font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-gallery-500 hover:text-clay-600 transition-colors duration-200"
											@click.stop="handleLinkClick"
										>
											{{ parent.title }}
										</NuxtLink>

										<ChevronDown
											:size="18"
											:stroke-width="1.5"
											class="text-gallery-400 group-hover:text-gallery-600 transition-all duration-300 ease-out"
											:class="{ 'rotate-180': isExpanded(parent.id) }"
										/>
									</button>

									<!-- Parent without children - full tile link with arrow -->
									<NuxtLink
										v-else
										:to="`/category/${parent.slug}`"
										class="w-full flex items-center justify-between py-4 font-sans text-[11px] font-medium uppercase tracking-[0.15em] text-gallery-500 hover:text-clay-600 transition-colors duration-200 group"
										@click="handleLinkClick"
									>
										<span>{{ parent.title }}</span>
										<ChevronRight
											:size="16"
											:stroke-width="1.5"
											class="text-gallery-400 group-hover:text-clay-500 group-hover:translate-x-0.5 transition-all duration-200"
										/>
									</NuxtLink>

									<!-- Children List (Collapsible) -->
									<Transition
										enter-active-class="transition-all duration-300 ease-out"
										enter-from-class="opacity-0 max-h-0"
										enter-to-class="opacity-100 max-h-[500px]"
										leave-active-class="transition-all duration-200 ease-in"
										leave-from-class="opacity-100 max-h-[500px]"
										leave-to-class="opacity-0 max-h-0"
									>
										<ul
											v-if="parent.children && parent.children.length > 0 && isExpanded(parent.id)"
											class="pb-5 pl-3 space-y-2 overflow-hidden"
										>
											<li
												v-for="(child, index) in parent.children"
												:key="child.id"
												class="transform transition-all duration-300"
												:style="{ transitionDelay: `${index * 30}ms` }"
											>
												<NuxtLink
													:to="`/category/${child.slug}`"
													class="group flex items-center py-3 px-3 -mx-3 rounded-lg transition-all duration-200 hover:bg-gallery-50"
													active-class="bg-clay-50 text-clay-700"
													@click="handleLinkClick"
												>
													<span class="w-1.5 h-1.5 rounded-full bg-gallery-300 group-hover:bg-clay-400 transition-colors duration-200 mr-3 flex-shrink-0" />
													<span class="font-serif text-base text-gallery-700 group-hover:text-gallery-900 transition-colors duration-200">
														{{ child.title }}
													</span>
												</NuxtLink>
											</li>
										</ul>
									</Transition>
					</div>
				</div>

				<!-- "View All" Link -->
				<div 
					class="mt-6 pt-4 border-t border-gallery-100"
					:class="{ 'animate-fade-in-up': isOpen && !isNavigating }"
					:style="{ animationDelay: `${150 + (categories?.length || 0) * 50 + 50}ms` }"
				>
					<NuxtLink
						to="/category/all"
						class="flex items-center justify-center py-3 px-4 bg-gallery-50 hover:bg-gallery-100 rounded-lg text-gallery-600 hover:text-gallery-900 font-sans text-sm tracking-wide transition-all duration-200"
						@click="handleLinkClick"
					>
						View All Collection
					</NuxtLink>
				</div>
			</nav>

			<!-- Footer -->
			<footer 
				class="relative z-10 border-t border-gallery-100 bg-gallery-50/50 px-6 py-5"
				:class="{ 'animate-fade-in-up': isOpen && !isNavigating }"
				:style="{ animationDelay: `${150 + (categories?.length || 0) * 50 + 100}ms` }"
			>
				<nav class="flex items-center justify-between" aria-label="Footer links">
					<NuxtLink
						to="/policy/shipping"
						class="group flex flex-col items-center gap-1.5 text-gallery-500 hover:text-clay-600 transition-colors duration-200"
						@click="handleLinkClick"
					>
						<Truck :size="18" :stroke-width="1.5" class="group-hover:scale-110 transition-transform duration-200" />
						<span class="font-sans text-[10px] uppercase tracking-widest">Shipping</span>
					</NuxtLink>

					<div class="w-px h-8 bg-gallery-200" aria-hidden="true" />

					<NuxtLink
						to="/policy/returns"
						class="group flex flex-col items-center gap-1.5 text-gallery-500 hover:text-clay-600 transition-colors duration-200"
						@click="handleLinkClick"
					>
						<RotateCcw :size="18" :stroke-width="1.5" class="group-hover:scale-110 transition-transform duration-200" />
						<span class="font-sans text-[10px] uppercase tracking-widest">Returns</span>
					</NuxtLink>

					<div class="w-px h-8 bg-gallery-200" aria-hidden="true" />

					<NuxtLink
						to="/contact"
						class="group flex flex-col items-center gap-1.5 text-gallery-500 hover:text-clay-600 transition-colors duration-200"
						@click="handleLinkClick"
					>
						<Mail :size="18" :stroke-width="1.5" class="group-hover:scale-110 transition-transform duration-200" />
						<span class="font-sans text-[10px] uppercase tracking-widest">Contact</span>
					</NuxtLink>
				</nav>
			</footer>
		</aside>
	</div>
</Teleport>
</template>

<style scoped>
/* Custom entry animation for the drawer - smooth slide without detachment */
@keyframes slide-in-left {
	0% {
		transform: translateX(-100%);
	}
	100% {
		transform: translateX(0);
	}
}

@keyframes fade-in {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.animate-slide-in-left {
	animation: slide-in-left 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-fade-in {
	animation: fade-in 0.3s ease-out forwards;
}
</style>