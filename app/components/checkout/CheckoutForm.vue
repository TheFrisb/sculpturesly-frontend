<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';
import {LucideCheck, LucideChevronDown, LucideChevronLeft, LucideCreditCard, LucideLock} from 'lucide-vue-next';
import {z} from 'zod';
import type {OrderCreatePayload} from '~/types/order';

// --- PROPS & EMITS ---
const props = defineProps<{
	shippingMethod: 'standard' | 'priority';
	isSubmitting: boolean;
}>();

const emit = defineEmits<{
	(e: 'update:shippingMethod', value: 'standard' | 'priority'): void;
	(e: 'submit', payload: OrderCreatePayload): void;
}>();

// --- STATE ---
const form = useState<OrderCreatePayload>('checkout-form', () => ({
	email: '',
	shipping_address: {
		first_name: '',
		last_name: '',
		email: '',
		phone: '',
		address_line_1: '',
		address_line_2: '',
		city: '',
		state: '',
		postal_code: '',
		country: 'US' // Default
	},
	billing_address: null
}));

const errors = useState<Record<string, string>>('checkout-errors', () => ({}));

// --- COUNTRY AUTOCOMPLETE LOGIC ---
// Mocking useCountries for self-containment. 
// In your real app, keep: const { countries, fetchCountries } = useCountries();
const countries = ref<{ code: string; name: string; flag: string }[]>([]);
const countryQuery = ref('');
const isCountryOpen = ref(false);
const countryInputRef = ref<HTMLInputElement | null>(null);

// Mock fetch for demonstration
const fetchCountries = async () => {
	// Simulate API delay
	await new Promise(r => setTimeout(r, 100));
	countries.value = [
		{code: 'US', name: 'United States', flag: '🇺🇸'},
		{code: 'CA', name: 'Canada', flag: '🇨🇦'},
		{code: 'GB', name: 'United Kingdom', flag: '🇬🇧'},
		{code: 'FR', name: 'France', flag: '🇫🇷'},
		{code: 'DE', name: 'Germany', flag: '🇩🇪'},
	];
};

// Fetch countries on mount
onMounted(async () => {
	await fetchCountries();
	// Set initial display name based on default code ('US')
	const defaultCountry = countries.value.find(c => c.code === form.value.shipping_address.country);
	if (defaultCountry) {
		countryQuery.value = defaultCountry.name;
	}
});

// Filter countries based on user typing
const filteredCountries = computed(() => {
	if (countryQuery.value === '') {
		return countries.value;
	}
	return countries.value.filter((country) => {
		return country.name.toLowerCase().includes(countryQuery.value.toLowerCase());
	});
});

// Select a country
const selectCountry = (code: string, name: string) => {
	form.value.shipping_address.country = code;
	countryQuery.value = name;
	isCountryOpen.value = false;

	// Re-validate immediately
	validateField('country');
};

// Handle Blur (Close dropdown with delay to allow click to register)
const handleCountryBlur = () => {
	setTimeout(() => {
		isCountryOpen.value = false;
		// Reset query to match selected value if user typed garbage
		const selected = countries.value.find(c => c.code === form.value.shipping_address.country);
		if (selected && countryQuery.value !== selected.name) {
			countryQuery.value = selected.name;
		}
		validateField('country');
	}, 200);
};

// --- ZOD SCHEMA VALIDATION ---

// 1. Define the Schema using Zod
const checkoutSchema = z.object({
	email: z.string().email('Please enter a valid email address'),
	shipping_address: z.object({
		first_name: z.string().min(1, 'First name is required'),
		last_name: z.string().min(1, 'Last name is required'),
		address_line_1: z.string().min(5, 'Address is too short'),
		address_line_2: z.string().optional(),
		city: z.string().min(1, 'City is required'),
		state: z.string().min(1, 'State/Province is required'),
		postal_code: z.string().min(3, 'Invalid postal code'),
		// Basic length check, specific valid-code check happens in logic
		country: z.string().length(2, 'Country is required'),
		phone: z.string().min(7, 'Phone number is too short'),
	})
});

// 2. Helper to Validate a Single Field (for @blur)
const validateField = (field: string) => {
	// Clear error for this field first
	if (errors.value[field]) delete errors.value[field];

	// Specific Logic for Country Check against loaded list
	if (field === 'country') {
		const validCountry = countries.value.some(c => c.code === form.value.shipping_address.country);
		if (!validCountry) {
			errors.value.country = 'Please select a valid country from the list';
			return;
		}
	}

	// Parse whole form
	const result = checkoutSchema.safeParse(form.value);

	if (!result.success) {
		// Find error specifically for this field
		const fieldError = result.error.issues.find(issue => {
			// Map nested Zod path (shipping_address.city) to flat UI field name (city)
			const lastPath = issue.path[issue.path.length - 1];
			return lastPath === field;
		});

		if (fieldError) {
			errors.value[field] = fieldError.message;
		}
	}
};

// 3. Full Form Validation (for @submit)
const validate = (): boolean => {
	errors.value = {};

	// A. Schema Validation
	const result = checkoutSchema.safeParse(form.value);

	if (!result.success) {
		result.error.issues.forEach(issue => {
			// Flatten the error object:
			// Zod path: ['shipping_address', 'first_name'] -> UI key: 'first_name'
			// Zod path: ['email'] -> UI key: 'email'
			const key = issue.path[issue.path.length - 1] as string;
			errors.value[key] = issue.message;
		});
	}

	// B. Logic Validation (Country Existence)
	// Zod checks if it's a 2-char string, this checks if it's in our DB
	const validCountry = countries.value.some(c => c.code === form.value.shipping_address.country);
	if (!validCountry) {
		errors.value.country = 'Please select a valid country from the list';
	}

	return Object.keys(errors.value).length === 0;
};

// --- HANDLERS ---
const onSubmit = () => {
	if (!validate()) {
		const formEl = document.getElementById('checkout-form-container');
		if (formEl) formEl.scrollIntoView({behavior: 'smooth'});
		return;
	}

	// Sync top-level email to shipping address email before submission
	// (Matches Django serializer structure if OrderAddress expects email)
	form.value.shipping_address.email = form.value.email;

	emit('submit', form.value);
};
</script>

<template>
	<div id="checkout-form-container" class="w-full h-full">

		<!-- Header -->
		<div class="px-8 md:px-16 pt-12 pb-8 flex justify-between items-center">
			<NuxtLink to="/" class="font-serif text-3xl font-medium tracking-tight text-gallery-900">Sculpturesly.</NuxtLink>
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

			<form novalidate @submit.prevent="onSubmit">

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
									@blur="validateField('email')"
							>
							<label
									for="email"
									class="absolute left-4 top-4 text-xs text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-clay-500 z-10">
								Email Address
							</label>
							<span v-if="errors.email" class="text-[10px] text-red-500 mt-1 block font-medium">{{
									errors.email
								}}</span>
						</div>
						<div class="flex items-start space-x-2">
							<input
									id="news"
									class="mt-1 w-4 h-4 border-gallery-300 rounded-sm text-clay-500 focus:ring-clay-400"
									type="checkbox">
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
									:class="errors.first_name ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="text"
									@blur="validateField('first_name')"
							>
							<label
									for="fname"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">First
								Name</label>
							<span
									v-if="errors.first_name"
									class="text-[10px] text-red-500 mt-1 block font-medium">{{ errors.first_name }}</span>
						</div>

						<div class="relative">
							<input
									id="lname"
									v-model="form.shipping_address.last_name"
									class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
									:class="errors.last_name ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="text"
									@blur="validateField('last_name')"
							>
							<label
									for="lname"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Last
								Name</label>
							<span v-if="errors.last_name" class="text-[10px] text-red-500 mt-1 block font-medium">{{
									errors.last_name
								}}</span>
						</div>

						<!-- Address 1 -->
						<div class="relative md:col-span-2">
							<input
									id="addr"
									v-model="form.shipping_address.address_line_1"
									class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
									:class="errors.address_line_1 ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="text"
									@blur="validateField('address_line_1')"
							>
							<label
									for="addr"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Address</label>
							<span
									v-if="errors.address_line_1"
									class="text-[10px] text-red-500 mt-1 block font-medium">{{ errors.address_line_1 }}</span>
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
									:class="errors.city ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="text"
									@blur="validateField('city')"
							>
							<label
									for="city"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">City</label>
							<span v-if="errors.city" class="text-[10px] text-red-500 mt-1 block font-medium">{{ errors.city }}</span>
						</div>

						<!-- --- COUNTRY AUTOCOMPLETE --- -->
						<div class="relative">
							<!-- Input Field -->
							<input
									id="country"
									ref="countryInputRef"
									v-model="countryQuery"
									type="text"
									class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none cursor-pointer"
									:class="errors.country ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									autocomplete="off"
									@focus="isCountryOpen = true"
									@input="isCountryOpen = true"
									@blur="handleCountryBlur"
							>
							<label
									for="country"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10 pointer-events-none">Country</label>

							<!-- Dropdown Arrow Icon -->
							<div class="absolute right-4 top-6 pointer-events-none text-gallery-400">
								<LucideChevronDown
										:size="16" class="transition-transform duration-200"
										:class="{ 'rotate-180': isCountryOpen }"/>
							</div>

							<!-- Dropdown Options -->
							<div
									v-if="isCountryOpen"
									class="absolute z-50 left-0 right-0 top-full mt-1 bg-white border border-gallery-300 max-h-60 overflow-y-auto shadow-lg">
								<!-- Loading State -->
								<div v-if="countries.length === 0" class="p-3 text-sm text-gallery-500 font-sans italic text-center">
									Loading countries...
								</div>
								<!-- No Results -->
								<div
										v-else-if="filteredCountries.length === 0"
										class="p-3 text-sm text-gallery-500 font-sans italic text-center">
									No matches found.
								</div>
								<!-- List -->
								<ul v-else>
									<li
											v-for="c in filteredCountries" :key="c.code"
											class="flex items-center px-4 py-3 hover:bg-gallery-100 cursor-pointer transition-colors"
											:class="{ 'bg-gallery-50': form.shipping_address.country === c.code }"
											@mousedown.prevent="selectCountry(c.code, c.name)">
										<img :src="c.flag" alt="" class="w-5 h-auto mr-3 shadow-sm border border-gallery-200">
										<span class="font-sans text-sm text-gallery-900">{{ c.name }}</span>
										<LucideCheck
												v-if="form.shipping_address.country === c.code" :size="14"
												class="ml-auto text-clay-500"/>
									</li>
								</ul>
							</div>

							<span v-if="errors.country" class="text-[10px] text-red-500 mt-1 block font-medium">{{
									errors.country
								}}</span>
						</div>
						<!-- --- END COUNTRY --- -->

						<!-- State -->
						<div class="relative">
							<input
									id="state"
									v-model="form.shipping_address.state"
									class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
									:class="errors.state ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="text"
									@blur="validateField('state')"
							>
							<label
									for="state"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">State</label>
							<span v-if="errors.state" class="text-[10px] text-red-500 mt-1 block font-medium">{{
									errors.state
								}}</span>
						</div>

						<!-- Zip -->
						<div class="relative">
							<input
									id="zip"
									v-model="form.shipping_address.postal_code"
									class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
									:class="errors.postal_code ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="text"
									@blur="validateField('postal_code')"
							>
							<label
									for="zip"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Postal
								Code</label>
							<span
									v-if="errors.postal_code"
									class="text-[10px] text-red-500 mt-1 block font-medium">{{ errors.postal_code }}</span>
						</div>

						<!-- Phone -->
						<div class="relative">
							<input
									id="phone"
									v-model="form.shipping_address.phone"
									class="peer w-full border bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:outline-none rounded-none"
									:class="errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gallery-300 focus:border-clay-500'"
									placeholder=" "
									type="tel"
									@blur="validateField('phone')"
							>
							<label
									for="phone"
									class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Phone</label>
							<span v-if="errors.phone" class="text-[10px] text-red-500 mt-1 block font-medium">{{
									errors.phone
								}}</span>
						</div>
					</div>
				</div>

				<!-- 3. SHIPPING METHOD -->
				<div class="mb-16">
					<h2 class="font-serif text-2xl text-gallery-900 mb-6">Shipping Method</h2>
					<div class="space-y-4">
						<div
								class="cursor-pointer border p-6 flex justify-between items-center transition-all duration-300"
								:class="shippingMethod === 'standard' ? 'border-clay-500 bg-clay-50/20' : 'border-gallery-300 hover:border-gallery-400'"
								@click="$emit('update:shippingMethod', 'standard')">
							<div class="flex items-center space-x-4">
								<div
										class="w-5 h-5 rounded-full border flex items-center justify-center"
										:class="shippingMethod === 'standard' ? 'border-clay-500' : 'border-gallery-300'">
									<div v-if="shippingMethod === 'standard'" class="w-2.5 h-2.5 bg-clay-500 rounded-full"/>
								</div>
								<div>
									<span class="block font-serif text-gallery-900">Standard Art Delivery</span>
									<span class="block font-sans text-xs text-gallery-500 mt-1">Insured & Tracked (5-7 Business
                    Days)</span>
								</div>
							</div>
							<span class="font-sans text-sm text-gallery-900">Free</span>
						</div>
					</div>
				</div>

				<!-- 4. PAYMENT -->
				<div class="mb-16">
					<h2 class="font-serif text-2xl text-gallery-900 mb-6">Payment</h2>
					<div
							class="border border-gallery-300 bg-gallery-100/50 p-4 text-center rounded-sm flex flex-col items-center justify-center">
						<LucideCreditCard class="mx-auto text-gallery-400 mb-3" :size="28"/>
						<h3 class="font-serif text-lg text-gallery-900 mb-2">Secure Stripe Payments</h3>
						<p class="font-sans text-sm text-gallery-500 mx-auto">
							Your transaction is encrypted and securely processed by Stripe.<br>We do not store financial details.
						</p>
					</div>
				</div>

				<!-- SUBMIT BUTTON -->
				<button
						type="submit" :disabled="isSubmitting"
						class="w-full bg-[#947E74] hover:bg-[#756560] text-white py-5 font-serif text-lg tracking-wide italic transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed">
					{{ isSubmitting ? 'Processing...' : 'Complete Acquisition' }}
				</button>

			</form>
		</div>
	</div>
</template>