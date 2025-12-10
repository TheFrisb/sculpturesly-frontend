<script setup lang="ts">
import {LucideArrowRight} from 'lucide-vue-next'
import type {Category} from "~/types/category";

interface FeaturedCategoryItem {
	id: number;
	image: string;
	category: Category;
}

const {data: categories, error, status} = await useAPI<FeaturedCategoryItem[]>('/api/sections/featured-categories/', {
	key: 'home-featured-categories',
});

const isLoading = computed(() => status.value === 'pending');

const hasData = computed(() => categories.value && categories.value.length >= 3);
</script>

<template>
	<section class="w-full py-24 px-6 md:px-12 bg-gallery-50 border-y border-gallery-200/50">
		<div class="max-w-[1600px] mx-auto">

			<div class="mb-12">
				<h2 class="font-serif text-4xl text-gallery-900">Curated Sets.</h2>
			</div>

			<div v-if="isLoading" class="h-[80vh] flex items-center justify-center bg-gallery-100">
				<span class="font-serif italic text-gallery-400 animate-pulse">Loading curation...</span>
			</div>

			<div v-else-if="error" class="h-[20vh] flex items-center justify-center text-red-400">
				{{ error }}
				Unable to load collections.
			</div>

			<div v-else-if="hasData" class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 h-auto">
				<NuxtLink
						:to="`/category/${categories[0].category.slug}`"
						class="group relative w-full h-[60vh] lg:h-full bg-gallery-200 overflow-hidden cursor-pointer block">
					<img
							:src="categories[0].image" :alt="categories[0].category.title"
							class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0">
					<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity"/>

					<div class="absolute bottom-8 left-8 text-white z-10">
						<div class="flex items-center space-x-4 mb-2">
							<h3 class="font-serif text-4xl md:text-5xl">
								{{ categories[0].category.title }}
							</h3>
							<LucideArrowRight
									class="opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-white"/>
						</div>
						<p
								v-if="categories[0].category.description"
								class="font-sans text-xs uppercase tracking-[0.2em] text-white/90">
							{{ categories[0].category.description }}
						</p>
					</div>
				</NuxtLink>

				<div class="flex flex-col gap-6 md:gap-12 h-full">
					<NuxtLink
							:to="`/category/${categories[1].category.slug}`"
							class="group relative flex-1 bg-gallery-200 overflow-hidden cursor-pointer min-h-[40vh] lg:min-h-0 block">
						<img
								:src="categories[1].image" :alt="categories[1].category.title"
								class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter sepia-[0.2] group-hover:sepia-0">
						<div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 transition-opacity"/>

						<div class="absolute bottom-8 left-8 text-white z-10">
							<h3 class="font-serif text-3xl mb-1 group-hover:translate-x-2 transition-transform duration-500">
								{{ categories[1].category.title }}
							</h3>
							<p
									v-if="categories[1].category.description"
									class="font-sans text-[10px] uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								{{ categories[1].category.description }}
							</p>
						</div>
					</NuxtLink>

					<NuxtLink
							:to="`/category/${categories[2].category.slug}`"
							class="group relative flex-1 bg-gallery-200 overflow-hidden cursor-pointer min-h-[40vh] lg:min-h-0 block">
						<img
								:src="categories[2].image" :alt="categories[2].category.title"
								class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter contrast-[1.1]">
						<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity"/>

						<div class="absolute bottom-8 left-8 text-white z-10">
							<h3 class="font-serif text-3xl mb-1 group-hover:translate-x-2 transition-transform duration-500">
								{{ categories[2].category.title }}
							</h3>
							<p
									v-if="categories[2].category.description"
									class="font-sans text-[10px] uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								{{ categories[2].category.description }}
							</p>
						</div>
					</NuxtLink>
				</div>
			</div>

			<div v-else class="py-12 text-center">
				<span class="font-serif italic text-gallery-400">Coming soon.</span>
			</div>

		</div>
	</section>
</template>