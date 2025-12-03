<script setup lang="ts">
import {LucideChevronLeft, LucideLock} from 'lucide-vue-next';
import type {OrderCreatePayload} from '~/types/order';

const {cart} = useCart();

// --- STATE ---

// 1. Form Data (Persists on navigation)
// Matches OrderCreateSerializer structure
const form = useState<OrderCreatePayload>('checkout-form', () => ({
	email: '',
	shipping_address: {
		first_name: '',
		last_name: '',
		email: '', // Will be synced with main email before submit
		phone: '',
		address_line_1: '',
		address_line_2: '',
		city: '',
		state: '',
		postal_code: '',
		country: 'US'
	},
	billing_address: null // Null implies same as shipping for this demo
}));

// 2. Local UI State
const shippingMethod = useState<'standard' | 'priority'>('checkout-shipping', () => 'standard');
const errors = useState<Record<string, string>>('checkout-errors', () => ({}));
const isSubmitting = useState<boolean>('checkout-submitting', () => false);

// --- COMPUTED ---

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

// --- VALIDATION ---

const validate = () => {
	errors.value = {};
	let isValid = true;

	// Email Validation
	if (!form.value.email || !/^\S+@\S+\.\S+$/.test(form.value.email)) {
		errors.value.email = 'Valid email is required';
		isValid = false;
	}

	// Address Validation
	const requiredFields = ['first_name', 'last_name', 'address_line_1', 'city', 'postal_code', 'state', 'country'];
	requiredFields.forEach(field => {
		// @ts-ignore
		if (!form.value.shipping_address[field]) {
			errors.value[field] = 'Required';
			isValid = false;
		}
	});

	if (!form.value.shipping_address.phone) {
		errors.value.phone = 'Required';
		isValid = false;
	}

	return isValid;
};

// --- SUBMISSION ---

const handleSubmit = async () => {
	if (!validate()) {
		// Scroll to top to see errors
		window.scrollTo({top: 0, behavior: 'smooth'});
		return;
	}

	isSubmitting.value = true;

	// Sync emails
	form.value.shipping_address.email = form.value.email;

	// Mock API Call
	console.log('Submitting Order Payload:', {
		...form.value,
		shipping_method: shippingMethod.value,
		total: total.value
	});

	setTimeout(() => {
		isSubmitting.value = false;
		alert("Order validation passed. (Mock Submission)");
	}, 1500);
};
</script>

<template>
	<div class="min-h-screen w-full flex flex-col lg:flex-row bg-gallery-50">

		<!-- LEFT COLUMN: FORM INPUTS -->
		<div class="w-full lg:w-[60%] order-2 lg:order-1 border-r border-gallery-200">

			<!-- Header -->
			<div class="px-8 md:px-16 pt-12 pb-8 flex justify-between items-center">
				<NuxtLink to="/" class="font-serif text-3xl font-medium tracking-tight text-gallery-900">Sculpturesly.
				</NuxtLink>
				<div class="flex items-center space-x-2 text-gallery-400">
					<LucideLock :size="14"/>
					<span class="font-sans text-[10px] uppercase tracking-widest">Secure Checkout</span>
				</div>
			</div>

			<div class="px-8 md:px-16 pb-24 max-w-3xl mx-auto">
				<NuxtLink
to="/cart"
									class="flex items-center space-x-2 text-gallery-400 hover:text-clay-600 transition-colors mb-12">
					<LucideChevronLeft :size="16"/>
					<span class="font-sans text-xs uppercase tracking-wider">Return to Gallery</span>
				</NuxtLink>

				<form @submit.prevent="handleSubmit">

					<!-- 1. CONTACT INFO -->
					<div class="mb-16">
						<h2 class="font-serif text-2xl text-gallery-900 mb-6">Contact Information</h2>
						<div class="space-y-4">
							<div class="relative">
								<input
										id="email"
										v-model="form.email"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none transition-colors"
										:class="errors.email ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="email"
								>
								<label
										for="email"
										class="absolute left-4 top-4 text-xs text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-clay-500 z-10"
								>
									Email Address
								</label>
								<span v-if="errors.email" class="text-[10px] text-red-500 mt-1 block">{{ errors.email }}</span>
							</div>
							<div class="flex items-start space-x-2">
								<input
										id="news"
										class="mt-1 w-4 h-4 border-gallery-300 rounded-sm text-clay-500 focus:ring-clay-400"
										type="checkbox"
								>
								<label for="news" class="font-sans text-xs text-gallery-500">
									Keep me updated on new curations and private sales.
								</label>
							</div>
						</div>
					</div>

					<!-- 2. SHIPPING ADDRESS -->
					<div class="mb-16">
						<h2 class="font-serif text-2xl text-gallery-900 mb-6">Shipping Address</h2>
						<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
							<!-- First Name -->
							<div class="relative">
								<input
										id="fname"
										v-model="form.shipping_address.first_name"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.first_name ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="text"
								>
								<label
for="fname"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">First
									Name</label>
							</div>

							<!-- Last Name -->
							<div class="relative">
								<input
										id="lname"
										v-model="form.shipping_address.last_name"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.last_name ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="text"
								>
								<label
for="lname"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Last
									Name</label>
							</div>

							<!-- Address 1 -->
							<div class="relative md:col-span-2">
								<input
										id="addr"
										v-model="form.shipping_address.address_line_1"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.address_line_1 ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="text"
								>
								<label
for="addr"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Address</label>
							</div>

							<!-- Address 2 -->
							<div class="relative md:col-span-2">
								<input
										id="addr2"
										v-model="form.shipping_address.address_line_2"
										class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
										placeholder=" "
										type="text"
								>
								<label
for="addr2"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Apartment
									(optional)</label>
							</div>

							<!-- City -->
							<div class="relative md:col-span-2">
								<input
										id="city"
										v-model="form.shipping_address.city"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.city ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="text"
								>
								<label
for="city"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">City</label>
							</div>

							<!-- Country -->
							<div class="relative">
								<select
										id="country"
										v-model="form.shipping_address.country"
										class="peer w-full border bg-[#FDFCF8] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none appearance-none"
										:class="errors.country ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
								>
									<option value="US">United States</option>
									<option value="CA">Canada</option>
									<option value="GB">United Kingdom</option>
									<option value="AU">Australia</option>
								</select>
								<label
for="country"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Country</label>
							</div>

							<!-- State -->
							<div class="relative">
								<input
										id="state"
										v-model="form.shipping_address.state"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.state ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="text"
								>
								<label
for="state"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">State</label>
							</div>

							<!-- Zip -->
							<div class="relative">
								<input
										id="zip"
										v-model="form.shipping_address.postal_code"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.postal_code ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="text"
								>
								<label
for="zip"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Postal
									Code</label>
							</div>

							<!-- Phone -->
							<div class="relative">
								<input
										id="phone"
										v-model="form.shipping_address.phone"
										class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
										:class="errors.phone ? 'border-red-400' : 'border-gallery-300 focus:border-clay-500'"
										placeholder=" "
										type="tel"
								>
								<label
for="phone"
											 class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Phone</label>
							</div>
						</div>
					</div>

					<!-- 3. SHIPPING METHOD -->
					<div class="mb-16">
						<h2 class="font-serif text-2xl text-gallery-900 mb-6">Shipping Method</h2>
						<div class="space-y-4">

							<!-- Standard Option -->
							<div
									class="cursor-pointer border p-6 flex justify-between items-center transition-all duration-300"
									:class="shippingMethod === 'standard' ? 'border-clay-500 bg-clay-50/20' : 'border-gallery-300 hover:border-gallery-400'"
									@click="shippingMethod = 'standard'"
							>
								<div class="flex items-center space-x-4">
									<div
											class="w-5 h-5 rounded-full border flex items-center justify-center"
											:class="shippingMethod === 'standard' ? 'border-clay-500' : 'border-gallery-300'"
									>
										<div v-if="shippingMethod === 'standard'" class="w-2.5 h-2.5 bg-clay-500 rounded-full"/>
									</div>
									<div>
										<span class="block font-serif text-gallery-900">Standard Art Delivery</span>
										<span
												class="block font-sans text-xs text-gallery-500 mt-1">Insured & Tracked (5-7 Business Days)</span>
									</div>
								</div>
								<span class="font-sans text-sm text-gallery-900">Free</span>
							</div>

							<!-- Priority Option -->
							<div
									class="cursor-pointer border p-6 flex justify-between items-center transition-all duration-300"
									:class="shippingMethod === 'priority' ? 'border-clay-500 bg-clay-50/20' : 'border-gallery-300 hover:border-gallery-400'"
									@click="shippingMethod = 'priority'"
							>
								<div class="flex items-center space-x-4">
									<div
											class="w-5 h-5 rounded-full border flex items-center justify-center"
											:class="shippingMethod === 'priority' ? 'border-clay-500' : 'border-gallery-300'"
									>
										<div v-if="shippingMethod === 'priority'" class="w-2.5 h-2.5 bg-clay-500 rounded-full"/>
									</div>
									<div>
										<span class="block font-serif text-gallery-900">Priority Air Freight</span>
										<span
												class="block font-sans text-xs text-gallery-500 mt-1">Expedited Crating (2-3 Business Days)</span>
									</div>
								</div>
								<span class="font-sans text-sm text-gallery-900">$450.00</span>
							</div>

						</div>
					</div>

					<!-- 4. PAYMENT -->
					<div class="mb-16">
						<h2 class="font-serif text-2xl text-gallery-900 mb-6">Payment</h2>
						<div class="border border-gallery-300 bg-gallery-100/50 p-8 text-center rounded-sm">
							<LucideLock class="mx-auto text-gallery-400 mb-3" :size="24"/>
							<p class="font-sans text-sm text-gallery-500">Secure payment processing is simulated for this demo.</p>
						</div>
					</div>

					<!-- SUBMIT BUTTON -->
					<button
							type="submit"
							:disabled="isSubmitting"
							class="w-full bg-[#947E74] hover:bg-[#756560] text-white py-5 font-serif text-lg tracking-wide italic transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
					>
						{{ isSubmitting ? 'Processing...' : 'Complete Acquisition' }}
					</button>

				</form>
			</div>
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
							<img
									v-if="item.variant.image"
									:src="item.variant.image"
									:alt="item.variant.product_title"
									class="w-full h-full object-cover"
							>
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