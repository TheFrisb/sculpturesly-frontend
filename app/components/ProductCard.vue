<script setup lang="ts">
import {formatCurrency} from '~/utils/formatters';

const props = defineProps<{
	product: ProductListItem
}>();

const formattedPrice = computed(() => {
	return formatCurrency(props.product.base_price);
});

const year = computed(() => new Date(props.product.created_at).getFullYear());
</script>

<template>
	<NuxtLink :to="`/product/${product.slug}`" class="group mb-12 break-inside-avoid relative cursor-pointer block">
		<div class="relative overflow-hidden mb-4 bg-gallery-100 aspect-[3/4]">
			<NuxtImg
					v-if="product.thumbnail"
					:src="product.thumbnail"
					:alt="product.title"
                    format="webp"
                    loading="lazy"
                    sizes="100vw sm:50vw lg:33vw"
					class="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
			/>
			<div v-else class="w-full h-full flex items-center justify-center text-gallery-400 bg-gallery-200">
				<span class="font-serif italic">No Image</span>
			</div>

			<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
		</div>

		<div class="flex flex-col space-y-1">
			<div class="flex justify-between items-baseline">
				<h3 class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
					{{ product.title }}
				</h3>
				<span class="font-sans text-sm text-gallery-500">{{ formattedPrice }}</span>
			</div>

			<p v-if="product.category_names.length" class="font-sans text-xs uppercase tracking-wider text-gallery-500">
				{{ product.category_names.join(', ') }}
			</p>

			<p class="font-sans text-xs text-gallery-400 italic">
				Acquired {{ year }}
			</p>
		</div>

		<div
				class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
	</NuxtLink>
</template> 