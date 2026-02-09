<script lang="ts" setup>
import type {ProductListItem} from '~/types/product';
import type {DimensionPreset} from '~/types/filters';

const route = useRoute();
const slug = computed(() => route.params.slug as string);

// State
const products = ref<ProductListItem[]>([]);
const nextPage = ref<string | null>(null);
const isLoading = ref(false);
const fetchError = ref<any>(null);
const totalCount = ref(0);

// Infinite scroll
const loadMoreSentinel = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

// Filter state
const activeDimensionSize = ref<string | null>(null);
const dimensionPresets = ref<DimensionPreset[]>([]);
const isFiltersLoading = ref(false);

// Scroll indicator state
const filterScrollContainer = ref<HTMLElement | null>(null);
const canScrollLeft = ref(false);
const canScrollRight = ref(false);

// Category data
const {data: category} = await useCategory(slug.value);

// Fetch dimension presets
const {fetchDimensionPresets} = useFilters();

const loadDimensionPresets = async () => {
	isFiltersLoading.value = true;
	try {
		const categorySlug = slug.value !== 'all' ? slug.value : null;
		const {data} = await fetchDimensionPresets(categorySlug);
		if (data.value) {
			dimensionPresets.value = data.value;
		}
	} finally {
		isFiltersLoading.value = false;
	}
};

// Check scroll position for indicators
const updateScrollIndicators = () => {
	if (!filterScrollContainer.value) return;
	const el = filterScrollContainer.value;
	canScrollLeft.value = el.scrollLeft > 0;
	canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
};

// Scroll handlers
const scrollFilters = (direction: 'left' | 'right') => {
	if (!filterScrollContainer.value) return;
	const scrollAmount = 200;
	filterScrollContainer.value.scrollBy({
		left: direction === 'left' ? -scrollAmount : scrollAmount,
		behavior: 'smooth'
	});
};

// Set up infinite scroll observer
const setupInfiniteScroll = () => {
	if (observer) {
		observer.disconnect();
	}

	observer = new IntersectionObserver(
			(entries) => {
				const entry = entries[0];
				if (entry?.isIntersecting && nextPage.value && !isLoading.value) {
					fetchProducts(true);
				}
			},
			{
				// Root margin adds 200px buffer below viewport for early loading
				rootMargin: '0px 0px 200px 0px',
				threshold: 0
			}
	);

	if (loadMoreSentinel.value) {
		observer.observe(loadMoreSentinel.value);
	}
};

// Watch for sentinel element availability and re-observe when products change
watch(
		() => [loadMoreSentinel.value, products.value.length],
		() => {
			if (loadMoreSentinel.value && observer) {
				observer.disconnect();
				observer.observe(loadMoreSentinel.value);
			}
		},
		{flush: 'post'}
);

// Update scroll indicators on mount and resize
onMounted(() => {
	updateScrollIndicators();
	window.addEventListener('resize', updateScrollIndicators);

	// Set up infinite scroll after DOM is ready
	nextTick(() => {
		setupInfiniteScroll();
	});
});

onUnmounted(() => {
	window.removeEventListener('resize', updateScrollIndicators);

	// Clean up observer
	if (observer) {
		observer.disconnect();
		observer = null;
	}
});

// Get active filter label
const activeFilterLabel = computed(() => {
	if (!activeDimensionSize.value) return null;
	const preset = dimensionPresets.value.find(p => p.slug === activeDimensionSize.value);
	return preset?.label || null;
});

interface PaginatedProductResponse {
	count: number;
	next: string | null;
	previous: string | null;
	results: ProductListItem[];
}

const fetchProducts = async (isLoadMore = false) => {
	isLoading.value = true;

	try {
		const params: Record<string, any> = {};

		// Category filter
		if (slug.value !== 'all') {
			params.categories__slug = slug.value;
		}

		// Dimension filter
		if (activeDimensionSize.value) {
			params.dimension_size = activeDimensionSize.value;
		}

		// Pagination
		if (isLoadMore && nextPage.value) {
			try {
				const url = new URL(nextPage.value);
				const pageParam = url.searchParams.get('page');
				const offsetParam = url.searchParams.get('offset');
				const limitParam = url.searchParams.get('limit');

				if (pageParam) params.page = pageParam;
				if (offsetParam) params.offset = offsetParam;
				if (limitParam) params.limit = limitParam;
			} catch (e) {
				console.warn('Could not parse next page URL', e);
			}
		}

		const {data, error} = await useAPI<PaginatedProductResponse>('/api/products/', {
			query: params,
			key: `category-products-${JSON.stringify(params)}`
		});

		if (error.value) {
			console.error('Failed to fetch products', error.value);
			fetchError.value = error.value;
		} else if (data.value) {
			fetchError.value = null;
			if (isLoadMore) {
				products.value.push(...data.value.results);
			} else {
				products.value = data.value.results;
			}
			nextPage.value = data.value.next;
			totalCount.value = data.value.count;
		}
	} finally {
		isLoading.value = false;
	}
};

// Handle dimension filter toggle
const toggleDimensionFilter = async (sizeSlug: string) => {
	if (activeDimensionSize.value === sizeSlug) {
		// Clear filter
		activeDimensionSize.value = null;
	} else {
		activeDimensionSize.value = sizeSlug;
	}
	// Reset and fetch with new filter
	nextPage.value = null;
	await fetchProducts();
};

// Clear all filters
const clearFilters = async () => {
	activeDimensionSize.value = null;
	nextPage.value = null;
	await fetchProducts();
};

// Check if any filters are active
const hasActiveFilters = computed(() => !!activeDimensionSize.value);

// Initial data fetch
await Promise.all([
	loadDimensionPresets(),
	fetchProducts()
]);

// SEO
	useSeoMeta(resolveSeoTags(() => category.value?.seo_metadata));
	
	useHead({
		script: [
			{
				type: 'application/ld+json',
				innerHTML: JSON.stringify(buildBreadcrumbJsonLd([
					{name: 'Home', item: '/'},
					{name: category.value?.title || 'Collection', item: route.path}
				]))
			}
		]
	});
	
	import {formatCurrency} from '~/utils/formatters';
</script>

<template>
	<div class="w-full bg-gallery-50 min-h-screen pt-32 pb-20">
		<!-- Header -->
		<div class="max-w-[1600px] mx-auto px-6 md:px-12 mb-8">
			<h1 class="font-serif text-5xl md:text-6xl text-gallery-900 mb-4">
				{{ category?.title || 'Collection' }}
			</h1>
			<p class="font-sans text-gallery-500 text-sm tracking-wide">
				Found {{ totalCount }} works.
			</p>
		</div>

		<!-- Filter Bar -->
		<div class="sticky top-[85px] z-30 bg-gallery-50/95 backdrop-blur-md border-b border-gallery-200 mb-16">
			<div class="max-w-[1600px] mx-auto px-6 md:px-12 py-4">
				<!-- Size Label Above -->
				<span class="font-sans text-xs uppercase tracking-wider text-gallery-400 block mb-3">
					Size
				</span>

				<!-- Filter Row with Overlay Arrows -->
				<div class="relative">
					<!-- Left Scroll Arrow (overlay) -->
					<transition
							enter-active-class="transition-opacity duration-150"
							enter-from-class="opacity-0"
							enter-to-class="opacity-100"
							leave-active-class="transition-opacity duration-150"
							leave-from-class="opacity-100"
							leave-to-class="opacity-0"
					>
						<button
								v-show="canScrollLeft"
								class="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-gallery-500 hover:text-gallery-800 transition-colors"
								@click="scrollFilters('left')"
						>
							<LucideChevronLeft :size="14"/>
						</button>
					</transition>

					<!-- Scrollable Filter Container -->
					<div
							ref="filterScrollContainer"
							class="flex items-center gap-2 overflow-x-auto no-scrollbar"
							@scroll="updateScrollIndicators"
					>
						<!-- Loading skeleton -->
						<template v-if="isFiltersLoading">
							<div v-for="i in 5" :key="i" class="h-9 w-20 bg-gallery-200 rounded-full animate-pulse shrink-0"/>
						</template>

						<!-- Filter buttons -->
						<template v-else>
							<button
									v-for="preset in dimensionPresets"
									:key="preset.slug"
									:class="[
									activeDimensionSize === preset.slug
										? 'bg-gallery-900 border-gallery-900 text-white'
										: preset.count === 0
											? 'border-gallery-200 text-gallery-300 cursor-not-allowed'
											: 'border-gallery-300 text-gallery-600 hover:border-gallery-600 bg-white'
								]"
									:disabled="preset.count === 0"
									class="group flex items-center gap-1.5 px-3 py-2 border rounded-full text-xs font-sans tracking-wide transition-all duration-200 shrink-0"
									@click="preset.count > 0 && toggleDimensionFilter(preset.slug)"
							>
								<span>{{ preset.label }}</span>
								<span
										class="text-[10px] opacity-60"
								>
									({{ preset.count }})
								</span>
							</button>
						</template>
					</div>

					<!-- Right Scroll Arrow (overlay) -->
					<transition
							enter-active-class="transition-opacity duration-150"
							enter-from-class="opacity-0"
							enter-to-class="opacity-100"
							leave-active-class="transition-opacity duration-150"
							leave-from-class="opacity-100"
							leave-to-class="opacity-0"
					>
						<button
								v-show="canScrollRight"
								class="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-gallery-500 hover:text-gallery-800 transition-colors"
								@click="scrollFilters('right')"
						>
							<LucideChevronRight :size="14"/>
						</button>
					</transition>
				</div>

				<!-- Active Filter Display -->
				<transition
						enter-active-class="transition-all duration-200 ease-out"
						enter-from-class="opacity-0 -translate-y-2"
						enter-to-class="opacity-100 translate-y-0"
						leave-active-class="transition-all duration-150 ease-in"
						leave-from-class="opacity-100 translate-y-0"
						leave-to-class="opacity-0 -translate-y-2"
				>
					<div v-if="hasActiveFilters" class="flex items-center gap-3 mt-3 pt-3 border-t border-gallery-100">
						<span class="font-sans text-xs text-gallery-400">
							Filtered by:
						</span>
						<div class="flex items-center gap-2">
							<span class="font-sans text-xs text-gallery-700 font-medium">
								{{ activeFilterLabel }}
							</span>
							<button
									class="flex items-center gap-1 px-2 py-1 text-xs text-clay-600 hover:text-clay-800 hover:bg-clay-50 rounded transition-colors"
									@click="clearFilters"
							>
								<span>Remove</span>
							</button>
						</div>
					</div>
				</transition>
			</div>
		</div>

		<!-- Products Grid -->
		<div class="max-w-[1600px] mx-auto px-6 md:px-12 min-h-[400px]">
			<!-- Loading State -->
			<div v-if="isLoading && products.length === 0" class="flex justify-center items-center py-20">
				<div class="flex flex-col items-center gap-4">
					<div class="w-8 h-8 border-2 border-gallery-300 border-t-clay-500 rounded-full animate-spin"/>
					<span class="font-serif text-gallery-400 italic">Loading collection...</span>
				</div>
			</div>

			<!-- Error State -->
			<div v-else-if="fetchError" class="flex justify-center items-center py-20">
				<span class="font-serif text-gallery-500 italic">Unable to load collection.</span>
			</div>

			<!-- Empty State -->
			<div v-else-if="products.length === 0" class="flex flex-col justify-center items-center py-20 gap-4">
				<LucidePackageOpen :size="48" class="text-gallery-300"/>
				<span class="font-serif text-gallery-500">No works found matching your filters.</span>
				<button
						v-if="hasActiveFilters"
						class="mt-4 px-6 py-3 border border-gallery-300 rounded-full text-xs font-sans uppercase tracking-wider text-gallery-600 hover:border-gallery-800 hover:text-gallery-900 transition-colors"
						@click="clearFilters"
				>
					Clear Filters
				</button>
			</div>

			<!-- Products -->
			<div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
				<NuxtLink
						v-for="product in products"
						:key="product.id"
						:to="`/product/${product.slug}`"
						class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up block"
				>
					<div class="relative overflow-hidden mb-4 bg-gallery-200">
						<NuxtImg
								:alt="product.title"
								:src="product.thumbnail"
								class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
								format="webp"
								loading="lazy"
								sizes="100vw sm:50vw lg:33vw"
						/>
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20">
								<span class="font-mono text-xs text-white tracking-widest uppercase">View Work</span>
							</div>
						</div>
					</div>

					<div class="flex flex-col space-y-1">
						<span class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">
							{{ product.category_names?.[0] || 'Studio' }}
						</span>
						<div class="flex justify-between items-baseline">
							<h3 class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">
								{{ product.title }}
							</h3>
							<span class="font-sans text-sm text-gallery-600">
								{{ formatCurrency(product.base_price) }}
							</span>
						</div>
					</div>
				</NuxtLink>
			</div>

			<!-- Infinite Scroll Sentinel & Loading Indicator -->
			<div
					ref="loadMoreSentinel"
					class="mt-16 flex justify-center items-center min-h-[100px]"
			>
				<!-- Loading indicator -->
				<transition
						enter-active-class="transition-opacity duration-200"
						enter-from-class="opacity-0"
						enter-to-class="opacity-100"
						leave-active-class="transition-opacity duration-200"
						leave-from-class="opacity-100"
						leave-to-class="opacity-0"
				>
					<div v-if="isLoading && products.length > 0" class="flex flex-col items-center space-y-3">
						<div class="w-6 h-6 border-2 border-gallery-300 border-t-clay-500 rounded-full animate-spin"/>
						<span class="font-sans text-xs uppercase tracking-widest text-gallery-400">Loading more...</span>
					</div>
				</transition>

				<!-- End of results indicator (when no more pages) -->
				<transition
						enter-active-class="transition-opacity duration-300"
						enter-from-class="opacity-0"
						enter-to-class="opacity-100"
				>
					<div
							v-if="!nextPage && products.length > 0 && !isLoading"
							class="flex flex-col items-center space-y-2 text-gallery-400"
					>
						<div class="w-12 h-px bg-gallery-300"/>
						<span class="font-sans text-xs uppercase tracking-widest">End of collection</span>
					</div>
				</transition>
			</div>
		</div>
	</div>
</template>

<style scoped>
.no-scrollbar {
	-ms-overflow-style: none;
	scrollbar-width: none;
}

.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>