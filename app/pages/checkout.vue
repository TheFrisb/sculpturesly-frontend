<script setup lang="ts">

</script>

<template>
	<div class="min-h-screen w-full flex flex-col lg:flex-row bg-gallery-50">
		<div class="w-full lg:w-[60%] order-2 lg:order-1 border-r border-gallery-200">
			<div class="px-8 md:px-16 pt-12 pb-8 flex justify-between items-center">
				<button class="font-serif text-3xl font-medium tracking-tight text-gallery-900">Sculpturesly.</button>
				<div class="flex items-center space-x-2 text-gallery-400">
					<svg
							xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-lock" aria-hidden="true">
						<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
						<path d="M7 11V7a5 5 0 0 1 10 0v4"/>
					</svg>
					<span class="font-sans text-[10px] uppercase tracking-widest">Secure Checkout</span></div>
			</div>
			<div class="px-8 md:px-16 pb-24 max-w-3xl mx-auto">
				<button class="flex items-center space-x-2 text-gallery-400 hover:text-clay-600 transition-colors mb-12">
					<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-chevron-left" aria-hidden="true">
						<path d="m15 18-6-6 6-6"/>
					</svg>
					<span class="font-sans text-xs uppercase tracking-wider">Return to Gallery</span></button>
				<div class="mb-16"><h2 class="font-serif text-2xl text-gallery-900 mb-6">Contact Information</h2>
					<div class="space-y-4">
						<div class="relative"><input
								id="email"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none transition-colors"
								placeholder=" " type="email"><label
								for="email"
								class="absolute left-4 top-4 text-xs text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-clay-500 z-10">Email
							Address</label></div>
						<div class="flex items-start space-x-2"><input
								id="news"
								class="mt-1 w-4 h-4 border-gallery-300 rounded-sm text-clay-500 focus:ring-clay-400"
								type="checkbox"><label
								for="news"
								class="font-sans text-xs text-gallery-500">Keep
							me updated on new curations and private sales.</label></div>
					</div>
				</div>
				<div class="mb-16"><h2 class="font-serif text-2xl text-gallery-900 mb-6">Shipping Address</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div class="relative"><input
								id="fname"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
								placeholder=" " type="text"><label
								for="fname"
								class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">First
							Name</label></div>
						<div class="relative"><input
								id="lname"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
								placeholder=" " type="text"><label
								for="lname"
								class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Last
							Name</label></div>
						<div class="relative md:col-span-2"><input
								id="addr"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
								placeholder=" " type="text"><label
								for="addr"
								class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Address</label>
						</div>
						<div class="relative md:col-span-2"><input
								id="city"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
								placeholder=" " type="text"><label
								for="city"
								class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">City</label>
						</div>
						<div class="relative"><input
								id="country"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
								placeholder=" " type="text"><label
								for="country"
								class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Country</label>
						</div>
						<div class="relative"><input
								id="zip"
								class="peer w-full border border-gallery-300 bg-[#FDFCF8] shadow-[0_0_0_30px_#FDFCF8_inset] px-4 pt-6 pb-2 text-gallery-900 focus:border-clay-500 focus:outline-none rounded-none"
								placeholder=" " type="text"><label
								for="zip"
								class="absolute left-4 top-2 text-[10px] text-gallery-400 uppercase tracking-widest z-10">Postal
							Code</label></div>
					</div>
				</div>
				<div class="mb-16"><h2 class="font-serif text-2xl text-gallery-900 mb-6">Shipping Method</h2>
					<div class="space-y-4">
						<div
								class="cursor-pointer border p-6 flex justify-between items-center transition-all duration-300 border-clay-500 bg-clay-50/20">
							<div class="flex items-center space-x-4">
								<div class="w-5 h-5 rounded-full border flex items-center justify-center border-clay-500">
									<div class="w-2.5 h-2.5 bg-clay-500 rounded-full"/>
								</div>
								<div><span class="block font-serif text-gallery-900">Standard Art Delivery</span><span
										class="block font-sans text-xs text-gallery-500 mt-1">Insured &amp; Tracked (5-7 Business Days)</span>
								</div>
							</div>
							<span class="font-sans text-sm text-gallery-900">Free</span></div>
						<div
								class="cursor-pointer border p-6 flex justify-between items-center transition-all duration-300 border-gallery-300 hover:border-gallery-400">
							<div class="flex items-center space-x-4">
								<div class="w-5 h-5 rounded-full border flex items-center justify-center border-gallery-300"/>
								<div><span class="block font-serif text-gallery-900">Priority Air Freight</span><span
										class="block font-sans text-xs text-gallery-500 mt-1">Expedited Crating (2-3 Business Days)</span>
								</div>
							</div>
							<span class="font-sans text-sm text-gallery-900">$450.00</span></div>
					</div>
				</div>
				<div class="mb-16"><h2 class="font-serif text-2xl text-gallery-900 mb-6">Payment</h2>
					<div class="border border-gallery-300 bg-gallery-100/50 p-8 text-center rounded-sm">
						<svg
								xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-lock mx-auto text-gallery-400 mb-3" aria-hidden="true">
							<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/>
							<path d="M7 11V7a5 5 0 0 1 10 0v4"/>
						</svg>
						<p class="font-sans text-sm text-gallery-500">Secure payment processing is simulated for this demo.</p>
					</div>
				</div>
				<button
						class="w-full bg-[#947E74] hover:bg-[#756560] text-white py-5 font-serif text-lg tracking-wide italic transition-colors duration-300 shadow-lg">
					Complete Acquisition
				</button>
			</div>
		</div>
		<div
				class="w-full lg:w-[40%] order-1 lg:order-2 bg-[#F0EFEA] border-b lg:border-b-0 lg:border-l border-gallery-200">
			<div class="lg:sticky lg:top-0 h-full lg:h-screen overflow-y-auto px-8 md:px-16 py-12"><h2
					class="font-serif text-2xl text-gallery-900 mb-8">Order Summary</h2>
				<div class="space-y-6 mb-12 border-b border-gallery-300/50 pb-8">
					<div class="flex space-x-6">
						<div class="w-20 h-20 bg-gallery-200 flex-shrink-0 relative"><img
								alt="The Weight of Silence"
								class="w-full h-full object-cover"
								src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop"><span
								class="absolute -top-2 -right-2 w-5 h-5 bg-gallery-500 text-white text-[10px] flex items-center justify-center rounded-full font-sans">1</span>
						</div>
						<div class="flex-1"><h3 class="font-serif text-lg text-gallery-900">The Weight of Silence</h3><span
								class="block font-sans text-[10px] uppercase tracking-widest text-gallery-500 mt-1">Elara Vance</span>
						</div>
						<div class="text-right"><span class="font-sans text-sm text-gallery-900">$4,500</span></div>
					</div>
				</div>
				<div class="space-y-4 mb-8">
					<div class="flex justify-between items-center text-gallery-600"><span
							class="font-sans text-sm">Subtotal</span><span class="font-sans text-sm font-medium">$4,500</span></div>
					<div class="flex justify-between items-center text-gallery-600"><span
							class="font-sans text-sm">Shipping</span><span class="font-sans text-sm font-medium">Free</span></div>
				</div>
				<div class="flex justify-between items-center pt-8 border-t border-gallery-300/50"><span
						class="font-serif text-xl text-gallery-900">Total</span>
					<div class="text-right"><span
							class="font-sans text-xs text-gallery-500 mr-2 uppercase tracking-wide">USD</span><span
							class="font-serif text-3xl text-gallery-900">$4,500</span></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>