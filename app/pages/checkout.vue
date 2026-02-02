<script setup lang="ts">
import {FetchError} from 'ofetch';
import type {OrderCreatePayload} from '~/types/orders';

definePageMeta({
	layout: false
})

const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Secure Checkout | Sculpturesly',
	description: 'Finalize your art acquisition securely. We offer encrypted payment processing and white-glove shipping options for your peace of mind.',
	robots: 'noindex, nofollow',
	url: url.href,
})))

const {cart} = useCart();

// --- STATE ---
const shippingMethod = useState<'standard' | 'priority'>('checkout-shipping', () => 'standard');
const isSubmitting = useState<boolean>('checkout-submitting', () => false);

// --- COMPUTED TOTALS ---
const subtotal = computed(() => parseFloat(cart.value?.total_price || '0'));

const shippingCost = computed(() => {
	return shippingMethod.value === 'priority' ? 450.00 : 0;
});

const total = computed(() => subtotal.value + shippingCost.value);

const formattedSubtotal = computed(() =>
		new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(subtotal.value)
);

const formattedShipping = computed(() =>
		shippingCost.value === 0
				? 'Free'
				: new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(shippingCost.value)
);

const formattedTotal = computed(() =>
		new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(total.value)
);

// --- TYPES ---
interface CheckoutSuccessResponse {
	status: string;
	order_number: string;
	checkout_url: string;
}

interface CheckoutErrorResponse {
	error?: string;
	code?: string;

	[key: string]: any; // To handle serializer field errors (e.g. { email: [...] })
}

// --- API SUBMISSION ---
const handleOrderSubmit = async (payload: OrderCreatePayload) => {
	if (isSubmitting.value) return;
	isSubmitting.value = true;

	try {
		// 1. Call Django View
		// fetchWithDefaults uses $fetch, which throws on 400-599 status codes.
		const response = await fetchWithDefaults<CheckoutSuccessResponse>('/api/orders/checkout/', {
			method: 'POST',
			body: payload,
		});

		// 2. Handle Success (201 Created)
		if (response.checkout_url) {
			console.log(`Order ${response.order_number} created. Redirecting to Stripe.`);
			// Force hard redirect to Stripe
			window.location.href = response.checkout_url;
		} else {
			throw new Error("Checkout URL missing from server response.");
		}

	} catch (err: unknown) {
		// 3. Handle Errors (400 Bad Request, 500, etc.)
		console.error("Checkout failed:", err);

		// Check if it's a FetchError (response from server)
		if (err instanceof FetchError) {
			const errorData = err.data as CheckoutErrorResponse;

			// Case A: Cart is empty (Matches your view: code="cart_empty")
			if (errorData?.code === 'cart_empty') {
				alert("Your cart appears to be empty. Redirecting to cart.");
				return navigateTo('/cart');
			}

			// Case B: Explicit Domain Error (Matches your view: error="...")
			if (errorData?.error) {
				alert(errorData.error);
				isSubmitting.value = false;
				return;
			}

			const firstErrorKey = Object.keys(errorData || {})[0];
			if (firstErrorKey) {
				const message = Array.isArray(errorData[firstErrorKey])
						? errorData[firstErrorKey][0]
						: "Please check your information.";
				alert(`Validation Error: ${message}`);
				isSubmitting.value = false;
				return;
			}
		}

		alert("Unable to process checkout. Please try again.");
		isSubmitting.value = false;
	}
};
</script>

<template>
	<div class="min-h-screen w-full flex flex-col lg:flex-row bg-gallery-50">

		<!-- LEFT COLUMN: FORM COMPONENT -->
		<div class="w-full lg:w-[60%] order-2 lg:order-1 border-r border-gallery-200">
			<CheckoutForm
					v-model:shipping-method="shippingMethod"
					:is-submitting="isSubmitting"
					@submit="handleOrderSubmit"
			/>
		</div>

		<!-- RIGHT COLUMN: ORDER SUMMARY -->
		<div
				class="w-full lg:w-[40%] order-1 lg:order-2 bg-[#F0EFEA] border-b lg:border-b-0 lg:border-l border-gallery-200">
			<div class="lg:sticky lg:top-0 h-full lg:h-screen overflow-y-auto px-8 md:px-16 py-12">
				<h2 class="font-serif text-2xl text-gallery-900 mb-8">Order Summary</h2>

				<!-- Cart Items -->
				<div v-if="cart && cart.items.length > 0" class="space-y-6 mb-12 border-b border-gallery-300/50 pb-8">
					<div v-for="item in cart.items" :key="item.id" class="flex space-x-6">

						<!-- Thumbnail with Badge -->
						<div class="w-20 h-20 bg-gallery-200 flex-shrink-0 relative">
							<NuxtImg
									v-if="item.variant.image" :src="item.variant.image" :alt="item.variant.product_title"
									class="w-full h-full object-cover"
                                    format="webp"
                                    sizes="80px"
                                    loading="lazy"
                            />
							<div v-else class="w-full h-full flex items-center justify-center text-xs text-gallery-500">No img</div>
							<span
									class="absolute -top-2 -right-2 w-5 h-5 bg-gallery-500 text-white text-[10px] flex items-center justify-center rounded-full font-sans">
                {{ item.quantity }}
              </span>
						</div>

						<!-- Info -->
						<div class="flex-1">
							<h3 class="font-serif text-lg text-gallery-900 leading-tight mb-1">{{ item.variant.product_title }}</h3>
							<span class="block font-sans text-[10px] uppercase tracking-widest text-gallery-500">{{
									item.variant.sku
								}}</span>
							<div class="text-[10px] text-gallery-500 mt-1 space-x-1">
								<span v-for="(val, key) in item.variant.attributes" :key="key">{{ val }}</span>
							</div>
						</div>

						<!-- Line Price -->
						<div class="text-right">
							<span class="font-sans text-sm text-gallery-900">${{ item.total_price }}</span>
						</div>
					</div>
				</div>

				<!-- Empty State -->
				<div v-else class="py-12 text-center text-gallery-500 font-serif italic mb-8">
					Your cart is empty.
				</div>

				<!-- Totals Calculation -->
				<div class="space-y-4 mb-8">
					<div class="flex justify-between items-center text-gallery-600">
						<span class="font-sans text-sm">Subtotal</span>
						<span class="font-sans text-sm font-medium">{{ formattedSubtotal }}</span>
					</div>
					<div class="flex justify-between items-center text-gallery-600">
						<span class="font-sans text-sm">Shipping</span>
						<span class="font-sans text-sm font-medium">{{ formattedShipping }}</span>
					</div>
				</div>

				<!-- Grand Total -->
				<div class="flex justify-between items-center pt-8 border-t border-gallery-300/50">
					<span class="font-serif text-xl text-gallery-900">Total</span>
					<div class="text-right">
						<span class="font-sans text-xs text-gallery-500 mr-2 uppercase tracking-wide">USD</span>
						<span class="font-serif text-3xl text-gallery-900">{{ formattedTotal }}</span>
					</div>
				</div>

			</div>
		</div>
	</div>
</template> 