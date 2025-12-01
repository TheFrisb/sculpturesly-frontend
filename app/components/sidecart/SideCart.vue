<script setup lang="ts">

import SideCartItem from "~/components/sidecart/SideCartItem.vue";

const {
	cart,
	isCartOpen,
	closeCart,
	loading
} = useCart();

watch(isCartOpen, (isOpen) => {
	if (import.meta.client) {
		document.body.style.overflow = isOpen ? 'hidden' : '';
	}
});

const handleCheckout = () => {
	closeCart();
	navigateTo('/checkout');
};

const formattedSubtotal = computed(() => {
	const total = parseFloat(cart.value?.total_price || '0');
	return new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(total);
});
</script>

<template>
	<Teleport to="body">
		<Transition name="cart-backdrop">
			<div
					v-if="isCartOpen"
					class="fixed inset-0 z-[60] flex justify-end"
					aria-label="Shopping Cart Drawer"
			>
				<div
						class="absolute inset-0 bg-gallery-900/40 backdrop-blur-sm"
						aria-hidden="true"
						@click="closeCart"
				/>

				<Transition name="cart-drawer" appear>
					<div
							v-if="isCartOpen"
							class="relative w-full max-w-[420px] h-full bg-[#F9F8F6] shadow-2xl flex flex-col"
					>
						<div class="absolute inset-0 pointer-events-none opacity-[0.05] z-0 mix-blend-multiply">
							<svg width="100%" height="100%">
								<filter id="cartNoise">
									<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
								</filter>
								<rect width="100%" height="100%" filter="url(#cartNoise)"/>
							</svg>
						</div>

						<div class="relative z-10 flex flex-col h-full">

							<div class="pt-10 px-8 pb-6 flex justify-between items-center bg-[#F9F8F6] border-b border-transparent">
								<h2 class="font-serif text-2xl text-gallery-900">Your Selection</h2>
								<button
										class="text-gallery-400 hover:text-clay-500 transition-colors group flex items-center"
										aria-label="Close Cart"
										@click="closeCart"
								>
									<span
											class="font-sans text-[10px] uppercase tracking-widest mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Close</span>
									<LucideX :stroke-width="1" :size="24"/>
								</button>
							</div>

							<div class="flex-1 overflow-y-auto px-8 py-2">

								<div
										v-if="loading && (!cart || cart.items.length === 0)"
										class="h-full flex items-center justify-center">
									<span class="font-serif text-gallery-400 italic">Updating...</span>
								</div>

								<div
										v-else-if="!cart || cart.items.length === 0"
										class="h-full flex flex-col items-center justify-center text-center animate-fade-in"
								>
									<p class="font-serif text-lg text-gallery-500 italic mb-6">Your collection is empty.</p>
									<button
											class="text-xs font-sans uppercase tracking-widest text-clay-600 hover:text-clay-800 border-b border-clay-300 pb-1 transition-colors"
											@click="closeCart"
									>
										Continue Browsing
									</button>
								</div>

								<div v-else class="space-y-8 mt-4">
									<SideCartItem
											v-for="item in cart.items"
											:key="item.id"
											:item="item"
									/>
								</div>
							</div>

							<div v-if="cart && cart.items.length > 0" class="p-8 bg-[#F9F8F6] border-t border-gallery-200">
								<div class="flex justify-between items-end mb-2">
									<span class="font-sans text-xs uppercase tracking-widest text-gallery-500">Subtotal</span>
									<span class="font-serif text-2xl text-gallery-900">{{ formattedSubtotal }}</span>
								</div>

								<p class="font-sans text-[10px] text-gallery-400 text-right mb-6">
									Shipping & taxes calculated at next step
								</p>

								<button
										class="w-full bg-[#947E74] hover:bg-[#756560] text-white py-4 font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
										@click="handleCheckout"
								>
									<span>Checkout</span>
									<LucideArrowRight :size="14"/>
								</button>
							</div>

						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</Teleport>
</template>

<style scoped>
.cart-backdrop-enter-active,
.cart-backdrop-leave-active {
	transition: opacity 0.5s ease;
}

.cart-backdrop-enter-from,
.cart-backdrop-leave-to {
	opacity: 0;
}

/* 2. Drawer Slide */
.cart-drawer-enter-active,
.cart-drawer-leave-active {
	transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
}

.cart-drawer-enter-from,
.cart-drawer-leave-to {
	transform: translateX(100%);
}
</style>  