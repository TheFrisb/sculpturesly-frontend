<script setup lang="ts">
import type {ProductListItem} from '~/types/product';

const {categories} = useCategories();
const featuredCategory = computed(() => categories.value?.[0] || null);

const {fetchProducts} = useProducts();
const {data: productData} = await fetchProducts({page_size: 2});

const curatedProducts = computed<ProductListItem[]>(() => {
	return productData.value?.results || [];
});
</script>

<template>
	<section class="w-full py-24 bg-gallery-50 border-t border-gallery-200">
		<div class="max-w-[1600px] mx-auto px-6 md:px-12">
			<h3 class="font-serif text-3xl text-gallery-900 mb-12 text-center md:text-left">
				Curated Pairings
			</h3>

			<div class="grid grid-cols-1 md:grid-cols-4 gap-12">

				<div v-if="featuredCategory" class="md:col-span-2 relative group cursor-pointer">
					<NuxtLink :to="`/category/${featuredCategory.slug}`" class="block h-full">
						<div class="w-full h-full min-h-[400px] bg-gallery-200 overflow-hidden relative">
							<img
									:alt="featuredCategory.title"
									class="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
									:src="featuredCategory.image || 'https://images.unsplash.com/photo-1543445330-3629471bb952?q=80&w=1200&auto=format&fit=crop'"
							>
							<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"/>
							<div class="absolute bottom-8 left-8 text-white">
                <span class="font-sans text-[10px] uppercase tracking-widest block mb-2 opacity-90">
                  Suggested Collection
                </span>
								<h3 class="font-serif text-3xl">{{ featuredCategory.title }}</h3>
							</div>
						</div>
					</NuxtLink>
				</div>

				<div
						v-for="item in curatedProducts"
						:key="item.id"
						class="md:col-span-1"
				>
					<ProductCard :product="item"/>
				</div>

			</div>
		</div>
	</section>
</template>