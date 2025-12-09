<script setup lang="ts">
import type {ProductListItem} from '~/types/product';

const route = useRoute();
const slug = route.params.slug as string;

const products = ref<ProductListItem[]>([]);
const nextPage = ref<string | null>(null);
const isLoading = ref(false);
const totalCount = ref(0);

const categoryTitle = computed(() => {
	return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
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

		if (slug !== 'all') {
			params.categories__slug = slug
		}

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

		// 3. API Call
		const {data} = await useAPI<PaginatedProductResponse>('/api/products/', {
			query: params
		});

		// 4. Handle Response
		if (data.value) {
			if (isLoadMore) {
				// Append new results to existing list
				products.value.push(...data.value.results);
			} else {
				// Replace list (initial load)
				products.value = data.value.results;
			}

			// Update state for next fetch
			nextPage.value = data.value.next;
			totalCount.value = data.value.count;
		}
	} catch (err) {
		console.error('Failed to fetch products', err);
	} finally {
		isLoading.value = false;
	}
};

// Initial Fetch
await fetchProducts();

// SEO
useHead({
	title: `${categoryTitle.value} | Sculpturesly`,
	meta: [{name: 'description', content: `Browse our exclusive ${categoryTitle.value} collection.`}]
});
</script>

<template>
	<div class="w-full bg-gallery-50 min-h-screen pt-32 pb-20">
		<div class="max-w-[1600px] mx-auto px-6 md:px-12 mb-12">
			<h1 class="font-serif text-5xl md:text-6xl text-gallery-900 mb-4">
				{{ categoryTitle }}
			</h1>
			<p class="font-sans text-gallery-500 text-sm tracking-wide">
				Found {{ totalCount }} works.
			</p>
		</div>

		<!--		<div-->
		<!--				class="sticky top-[85px] z-30 bg-gallery-50/95 backdrop-blur-md border-b border-gallery-200 py-4 mb-16 transition-all">-->
		<!--			<div class="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">-->
		<!--				<div class="flex space-x-4 overflow-x-visible no-scrollbar pb-2 md:pb-0">-->
		<!--					<div class="relative">-->
		<!--						<button-->
		<!--								class="group flex items-center space-x-2 px-5 py-3 border rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border-gallery-300 text-gallery-600 hover:border-gallery-800 hover:text-gallery-900 bg-white">-->
		<!--							<span>Material</span>-->
		<!--							<LucideChevronDown :size="14" class="text-gallery-400 group-hover:text-gallery-900"/>-->
		<!--						</button>-->
		<!--					</div>-->
		<!--					<div class="relative">-->
		<!--						<button-->
		<!--								class="group flex items-center space-x-2 px-5 py-3 border rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border-gallery-300 text-gallery-600 hover:border-gallery-800 hover:text-gallery-900 bg-white">-->
		<!--							<span>Price</span>-->
		<!--							<LucideChevronDown :size="14" class="text-gallery-400 group-hover:text-gallery-900"/>-->
		<!--						</button>-->
		<!--					</div>-->
		<!--				</div>-->
		<!--				<div class="flex items-center space-x-6">-->
		<!--					<button-->
		<!--							class="hidden md:flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-gallery-500 hover:text-clay-600 transition-colors">-->
		<!--						<span>All Filters</span>-->
		<!--						<LucidePlus :size="14"/>-->
		<!--					</button>-->
		<!--				</div>-->
		<!--			</div>-->
		<!--		</div>-->

		<div class="max-w-[1600px] mx-auto px-6 md:px-12 min-h-[400px]">

			<div v-if="isLoading && products.length === 0" class="flex justify-center items-center py-20">
				<span class="font-serif text-gallery-400 italic">Loading collection...</span>
			</div>

			<div v-else-if="products.length === 0" class="flex justify-center items-center py-20">
				<span class="font-serif text-gallery-500">No works found in this collection.</span>
			</div>

			<div v-else class="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">

				<NuxtLink
						v-for="product in products"
						:key="product.id"
						:to="`/product/${product.slug}`"
						class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up block"
				>
					<div class="relative overflow-hidden mb-4 bg-gallery-200">
						<img
								:alt="product.title"
								class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
								:src="product.thumbnail"
								loading="lazy"
						>
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
                ${{ product.base_price }}
              </span>
						</div>
					</div>
				</NuxtLink>

			</div>

			<div v-if="nextPage" class="mt-24 flex justify-center">
				<button
						:disabled="isLoading"
						class="flex flex-col items-center space-y-2 group text-gallery-400 hover:text-clay-600 transition-colors disabled:opacity-50"
						@click="fetchProducts(true)"
				>
          <span class="font-sans text-[10px] uppercase tracking-[0.3em]">
            {{ isLoading ? 'Loading...' : 'Load More' }}
          </span>
					<div class="w-px h-12 bg-gallery-300 group-hover:h-16 group-hover:bg-clay-400 transition-all duration-500"/>
				</button>
			</div>

		</div>
	</div>
</template>

<style scoped>
/* Ensure styles are correctly scoped or global based on your setup */
</style>