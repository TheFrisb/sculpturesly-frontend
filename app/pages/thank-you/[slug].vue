<script setup lang="ts">
import type {OrderRead} from '~/types/orders';

const route = useRoute();
const orderNumber = computed(() => route.params.slug as string);

const {data: order, status, error} = await useAPI<OrderRead>(() => `/api/orders/${orderNumber.value}/`, {
	immediate: !!orderNumber.value,
	watch: [orderNumber]
});

const isLoading = computed(() => status.value === 'pending');

const firstItem = computed(() => order.value?.items?.[0]);

const artistName = computed(() => firstItem.value?.attributes?.Artist || 'Sculpturesly Collection');
const itemImage = computed(() => {
	return firstItem.value?.attributes?.image || 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop';
});

const formattedDate = computed(() => {
	if (!order.value?.created_at) return new Date().toLocaleDateString();
	return new Date(order.value.created_at).toLocaleDateString('en-US', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
});
</script>

<template>
	<div class="min-h-screen w-full bg-gallery-50 pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">

		<!-- LOADING STATE -->
		<div v-if="isLoading" class="flex flex-col items-center justify-center space-y-4 animate-pulse">
			<div class="h-12 w-64 bg-gallery-200 rounded"/>
			<div class="h-4 w-48 bg-gallery-200 rounded"/>
		</div>

		<!-- ERROR STATE -->
		<div v-else-if="error || !order" class="text-center">
			<p>{{ error }}</p>
			<h1 class="font-serif text-3xl text-gallery-900 mb-4">Order Not Found</h1>
			<p class="font-sans text-sm text-gallery-500 mb-8">
				We couldn't locate the order details. Please check your email for confirmation.
			</p>
			<NuxtLink to="/" class="underline text-gallery-900">Return Home</NuxtLink>
		</div>

		<!-- SUCCESS CONTENT -->
		<div v-else class="w-full flex flex-col items-center">

			<!-- HEADER -->
			<div class="text-center mb-16 animate-fade-in-up">
				<h1 class="font-serif text-4xl md:text-5xl lg:text-6xl text-gallery-900 mb-6 tracking-tight">
					Excellent Acquisition.
				</h1>
				<div class="flex flex-col items-center space-y-2 text-gallery-500 font-sans text-sm">
					<p>
						Your order
						<span class="text-gallery-900 font-medium">#{{ order.order_number }}</span>
						is confirmed.
					</p>
					<p>A confirmation email has been sent to {{ order.email }}.</p>
				</div>
			</div>

			<!-- ORDER CARD -->
			<div
					class="w-full max-w-5xl bg-white shadow-2xl shadow-gallery-200 rounded-sm overflow-hidden flex flex-col md:flex-row mb-16 animate-fade-in-up"
					style="animation-delay: 0.2s;">

				<!-- VISUAL (Left) -->
				<div class="w-full md:w-1/2 aspect-square md:aspect-auto relative bg-gallery-200">
					<NuxtImg
							:alt="firstItem?.product_name || 'Artwork'"
							class="w-full h-full object-cover filter grayscale-[0.1]"
							:src="itemImage"
                            format="webp"
                            sizes="100vw md:50vw"
                    />
					<div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/>
					<div class="absolute bottom-8 left-8 text-white">
            <span class="font-sans text-[10px] uppercase tracking-widest opacity-80 mb-2 block">
              {{ artistName }}
            </span>
						<h3 class="font-serif text-2xl md:text-3xl">
							{{ firstItem?.product_name || 'Art Piece' }}
						</h3>
						<span v-if="order.items.length > 1" class="text-xs opacity-75 mt-1 block">
              + {{ order.items.length - 1 }} other items
            </span>
					</div>
				</div>

				<!-- TIMELINE (Right) -->
				<div class="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-white relative">
					<!-- Background Noise Texture -->
					<div class="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply">
						<svg width="100%" height="100%">
							<filter id="cardNoise">
								<feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" stitchTiles="stitch"/>
							</filter>
							<rect width="100%" height="100%" filter="url(#cardNoise)"/>
						</svg>
					</div>

					<h4 class="font-serif text-2xl text-gallery-900 mb-10 z-10">Preparation Timeline</h4>

					<div class="space-y-0 relative z-10 pl-2">
						<!-- Vertical Line -->
						<div class="absolute left-[15px] top-2 bottom-4 w-[1px] bg-gallery-200"/>

						<!-- Step 1: Verified (Active) -->
						<div class="flex items-start space-x-6 relative pb-10">
							<div
									class="relative z-10 w-8 h-8 rounded-full bg-clay-500 text-white flex items-center justify-center shadow-lg shadow-clay-200">
								<svg
										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-check" aria-hidden="true">
									<path d="M20 6 9 17l-5-5"/>
								</svg>
							</div>
							<div class="pt-1">
								<span class="block font-sans text-xs uppercase tracking-widest text-clay-600 mb-1">Step 01</span>
								<h5 class="font-serif text-lg text-gallery-900">Payment Verified</h5>
								<p class="font-sans text-xs text-gallery-400 mt-1">
									Order #{{ order.order_number }} processed on {{ formattedDate }}.
								</p>
							</div>
						</div>

						<!-- Step 2: Inspection -->
						<div class="flex items-start space-x-6 relative pb-10">
							<div
									class="relative z-10 w-8 h-8 rounded-full bg-white border-2 border-clay-300 flex items-center justify-center">
								<div class="w-2 h-2 rounded-full bg-clay-300"/>
							</div>
							<div class="pt-1 opacity-70">
								<span class="block font-sans text-xs uppercase tracking-widest text-gallery-400 mb-1">Step 02</span>
								<h5 class="font-serif text-lg text-gallery-800">Curator Inspection</h5>
								<p class="font-sans text-xs text-gallery-400 mt-1">Final polishing and condition report.</p>
							</div>
						</div>

						<!-- Step 3: Crating -->
						<div class="flex items-start space-x-6 relative pb-10">
							<div
									class="relative z-10 w-8 h-8 rounded-full bg-white border border-gallery-300 flex items-center justify-center"/>
							<div class="pt-1 opacity-40">
								<span class="block font-sans text-xs uppercase tracking-widest text-gallery-400 mb-1">Step 03</span>
								<h5 class="font-serif text-lg text-gallery-800">Custom Crating</h5>
							</div>
						</div>

						<!-- Step 4: Dispatch -->
						<div class="flex items-start space-x-6 relative">
							<div
									class="relative z-10 w-8 h-8 rounded-full bg-white border border-gallery-300 flex items-center justify-center"/>
							<div class="pt-1 opacity-40">
								<span class="block font-sans text-xs uppercase tracking-widest text-gallery-400 mb-1">Step 04</span>
								<h5 class="font-serif text-lg text-gallery-800">Dispatch</h5>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- DOWNLOAD DOCS -->
			<div class="w-full max-w-xl text-center mb-24 animate-fade-in-up" style="animation-delay: 0.4s;">
				<h4 class="font-serif text-xl text-gallery-900 mb-6">Ownership Documents</h4>
				<button
						class="group relative inline-flex items-center space-x-4 border border-gallery-300 px-8 py-4 hover:border-gallery-900 hover:bg-gallery-900 transition-all duration-300">
					<svg
							xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-download text-gallery-500 group-hover:text-white transition-colors"
							aria-hidden="true">
						<path d="M12 15V3"/>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
						<path d="m7 10 5 5 5-5"/>
					</svg>
					<span
							class="font-sans text-xs uppercase tracking-[0.15em] text-gallery-800 group-hover:text-white transition-colors">
            Download Certificate of Authenticity (PDF)
          </span>
				</button>
			</div>

			<!-- FOOTER LINKS -->
			<div class="flex flex-col items-center space-y-8 animate-fade-in-up" style="animation-delay: 0.6s;">
				<NuxtLink
						to="/"
						class="flex items-center space-x-2 text-clay-600 hover:text-clay-800 transition-colors border-b border-transparent hover:border-clay-800 pb-1">
					<span class="font-sans text-xs uppercase tracking-widest">Return to Collection</span>
					<svg
							xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-arrow-right" aria-hidden="true">
						<path d="M5 12h14"/>
						<path d="m12 5 7 7-7 7"/>
					</svg>
				</NuxtLink>
				<p class="font-serif text-gallery-400 italic text-sm">Questions? Our curator is available at +1 (212)
					555-0199</p>
			</div>

		</div>
	</div>
</template>

<style scoped>
/* Ensure custom animations exist in your global CSS or Tailwind config,
   otherwise, these classes won't animate. */
</style>