<script setup lang="ts">
// 1. Fetch Products
// We explicitly ask for 8 items, ordered by creation date
const {fetchProducts} = useProducts();

const {data: response, error, status} = await fetchProducts({
	page_size: 8,
	ordering: '-created_at'
});

const products = computed(() => response.value?.results || []);
const totalCount = computed(() => response.value?.count || 0);
const isLoading = computed(() => status.value === 'pending');
</script>

<template>
	<section class="w-full py-32 px-6 md:px-12 bg-gallery-50">
		<div class="max-w-[1600px] mx-auto">

			<!-- Header -->
			<div class="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-gallery-200 pb-8">
				<div class="max-w-xl">
					<h2 class="font-serif text-4xl md:text-5xl text-gallery-900 mb-6">Recent Acquisitions</h2>
					<p class="font-sans text-gallery-600 leading-relaxed text-sm md:text-base">
						A collection of objects that speak. Selected for their texture, form, and ability to transform the space
						they inhabit.
					</p>
				</div>
				<div class="mt-8 md:mt-0">
          <span class="font-sans text-xs tracking-widest uppercase text-clay-500">
            {{ totalCount }} Objects Available
          </span>
				</div>
			</div>

			<div v-if="isLoading" class="py-20 text-center">
				<span class="font-serif text-gallery-400 italic">Loading collection...</span>
			</div>

			<div v-else-if="error" class="py-20 text-center text-red-400 font-sans">
				Unable to load products at this time.
			</div>

			<div v-else class="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
				<ProductCard
						v-for="product in products"
						:key="product.id"
						:product="product"
				/>
			</div>

			<div class="mt-20 text-center">
				<NuxtLink
						to="/category/all"
						class="inline-block px-10 py-4 border border-gallery-300 text-gallery-800 font-sans text-xs uppercase tracking-[0.2em] hover:bg-gallery-800 hover:text-gallery-50 hover:border-gallery-800 transition-all duration-300"
				>
					View Full Archive
				</NuxtLink>
			</div>

		</div>
	</section>
</template>