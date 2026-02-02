<script setup lang="ts">
import type {CartItem} from '~/types/cart';

const props = defineProps<{
	item: CartItem;
}>();

const {updateItemQuantity, removeItem} = useCart();

const handleIncrease = () => {
	updateItemQuantity(props.item.id, {quantity: props.item.quantity + 1});
};

const handleDecrease = () => {
	if (props.item.quantity > 1) {
		updateItemQuantity(props.item.id, {quantity: props.item.quantity - 1});
	} else {
		removeItem(props.item.id);
	}
};

const handleRemove = () => {
	removeItem(props.item.id);
};

const formattedPrice = computed(() => {
	const val = parseFloat(props.item.variant.price);
	return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(val);
});
</script>

<template>
	<div class="group relative flex py-4 border-b border-gallery-200/60 last:border-0 animate-fade-in-up">

		<div class="w-24 h-24 bg-gallery-200 flex-shrink-0 overflow-hidden shadow-sm">
			<NuxtImg
					v-if="item.variant.image"
					:src="item.variant.image"
					:alt="item.variant.product_title"
					class="w-full h-full object-cover grayscale-[0.1] group-hover:grayscale-0 transition-all duration-500"
                    format="webp"
                    sizes="96px"
                    loading="lazy"
			/>
			<div v-else class="w-full h-full flex items-center justify-center bg-gallery-300 text-gallery-500 font-serif">
				<span class="text-xs uppercase tracking-widest">No Img</span>
			</div>
		</div>

		<div class="flex-1 flex pl-5">

			<div class="flex-1 flex flex-col justify-between py-0.5">
				<div>
					<span class="block font-sans text-[10px] uppercase tracking-widest text-gallery-400 mb-1">
            {{ item.variant.sku }}
          </span>

					<h3 class="font-serif text-lg text-gallery-900 leading-tight mb-1">
						<NuxtLink :to="`/product/${item.variant.product_slug}`" class="hover:text-clay-600 transition-colors">
							{{ item.variant.product_title }}
						</NuxtLink>
					</h3>

					<div class="font-sans text-[10px] text-gallery-500 flex flex-wrap gap-1">
            <span v-for="(val, key) in item.variant.attributes" :key="key">
              {{ val }}
            </span>
					</div>
				</div>
			</div>

			<div class="flex flex-col justify-between items-end pl-4 py-0.5">
        <span class="font-sans text-sm text-gallery-900 font-medium">
          {{ formattedPrice }}
        </span>

				<div class="flex flex-col items-end space-y-3">
					<div class="flex items-center space-x-3 text-gallery-400">
						<button
								class="hover:text-gallery-900 transition-colors p-1"
								aria-label="Decrease quantity"
								@click="handleDecrease"
						>
							<LucideMinus :size="12"/>
						</button>

						<span class="font-sans text-xs text-gallery-900 w-3 text-center">
              {{ item.quantity }}
            </span>

						<button
								class="hover:text-gallery-900 transition-colors p-1"
								aria-label="Increase quantity"
								@click="handleIncrease"
						>
							<LucidePlus :size="12"/>
						</button>
					</div>

					<!-- Remove Button -->
					<button
							class="font-sans text-[10px] uppercase tracking-wider text-gallery-400 hover:text-clay-500 transition-colors border-b border-transparent hover:border-clay-300 pb-0.5"
							@click="handleRemove"
					>
						Remove
					</button>
				</div>
			</div>

		</div>
	</div>
</template> 