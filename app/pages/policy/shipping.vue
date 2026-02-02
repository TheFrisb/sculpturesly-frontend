<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Shipping Policy - Delivery, Handling & Rates | Sculpturesly',
	description: 'Learn about our shipping methods for delicate sculptures. Information on delivery times, international shipping options, and how we package art for safe arrival.',
	url: url.href,
})))
</script>

<template>
	<div class="w-full bg-gallery-50">
		<section class="relative w-full h-[70vh] overflow-hidden">
			<div class="absolute inset-0 bg-gallery-900/20 z-10 mix-blend-multiply"/>
			<NuxtImg
					alt="Wooden Art Crate in Sunlit Room"
					class="w-full h-full object-cover object-center filter sepia-[0.1] contrast-[0.95]"
					src="https://images.unsplash.com/photo-1595246140625-573b715d1128?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"
                    format="webp"
                    sizes="100vw"
                    preload
            />
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"><h1
					class="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 drop-shadow-lg tracking-tight animate-fade-in-up">
				From Our Studio to Your Sanctuary.</h1>
				<p
						class="font-sans text-xs md:text-sm uppercase tracking-[0.2em] text-white/90 animate-fade-in-up"
						style="animation-delay: 0.2s;">Global, insured, white-glove delivery for exceptional forms</p></div>
		</section>
		<section class="w-full py-32 px-6 md:px-12 bg-white">
			<div class="max-w-[1200px] mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
					<div class="flex flex-col p-8 md:p-12 border border-gallery-200 bg-gallery-50/50 rounded-sm">
						<div class="w-16 h-16 rounded-full bg-gallery-200 flex items-center justify-center text-gallery-600 mb-8">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-package" aria-hidden="true">
								<path
										d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/>
								<path d="M12 22V12"/>
								<polyline points="3.29 7 12 12 20.71 7"/>
								<path d="m7.5 4.27 9 5.15"/>
							</svg>
						</div>
						<h3 class="font-serif text-2xl text-gallery-900 mb-2">Standard Art Parcel</h3>
						<p class="font-sans text-xs uppercase tracking-widest text-gallery-500 mb-8">For items under 15kg</p>
						<ul class="space-y-4 font-sans text-sm text-gallery-600">
							<li class="flex items-center space-x-3">
								<div class="w-1.5 h-1.5 rounded-full bg-gallery-400"/>
								<span>Double-walled reinforced boxing</span></li>
							<li class="flex items-center space-x-3">
								<div class="w-1.5 h-1.5 rounded-full bg-gallery-400"/>
								<span>Custom high-density foam inserts</span></li>
							<li class="flex items-center space-x-3">
								<div class="w-1.5 h-1.5 rounded-full bg-gallery-400"/>
								<span>Tracked Priority Air Courier</span></li>
						</ul>
					</div>
					<div
							class="relative flex flex-col p-8 md:p-12 border border-clay-200 bg-[#FDFCF8] shadow-xl shadow-gallery-200/50 rounded-sm overflow-hidden">
						<div class="absolute top-0 left-0 w-full h-1 bg-clay-400"/>
						<div class="w-16 h-16 rounded-full bg-clay-100 flex items-center justify-center text-clay-600 mb-8">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-truck" aria-hidden="true">
								<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
								<path d="M15 18H9"/>
								<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
								<circle cx="17" cy="18" r="2"/>
								<circle cx="7" cy="18" r="2"/>
							</svg>
						</div>
						<h3 class="font-serif text-2xl text-gallery-900 mb-2">White Glove Freight</h3>
						<p class="font-sans text-xs uppercase tracking-widest text-clay-500 mb-8">For items over 15kg</p>
						<ul class="space-y-4 font-sans text-sm text-gallery-600">
							<li class="flex items-center space-x-3">
								<div
										class="w-4 h-4 rounded-full bg-clay-100 flex items-center justify-center text-clay-600 flex-shrink-0">
									<svg
											width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round">
										<polyline points="1 4 3.5 6.5 9 1"/>
									</svg>
								</div>
								<span>Custom Ply Wood Crate (ISPM-15 compliant)</span></li>
							<li class="flex items-center space-x-3">
								<div
										class="w-4 h-4 rounded-full bg-clay-100 flex items-center justify-center text-clay-600 flex-shrink-0">
									<svg
											width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round">
										<polyline points="1 4 3.5 6.5 9 1"/>
									</svg>
								</div>
								<span>Appointment-based Delivery</span></li>
							<li class="flex items-center space-x-3">
								<div
										class="w-4 h-4 rounded-full bg-clay-100 flex items-center justify-center text-clay-600 flex-shrink-0">
									<svg
											width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round">
										<polyline points="1 4 3.5 6.5 9 1"/>
									</svg>
								</div>
								<span>Inside Placement &amp; Unpacking</span></li>
							<li class="flex items-center space-x-3">
								<div
										class="w-4 h-4 rounded-full bg-clay-100 flex items-center justify-center text-clay-600 flex-shrink-0">
									<svg
											width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="currentColor" stroke-width="1.5"
											stroke-linecap="round" stroke-linejoin="round">
										<polyline points="1 4 3.5 6.5 9 1"/>
									</svg>
								</div>
								<span>Packaging Debris Removal</span></li>
						</ul>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-32 bg-gallery-50 border-t border-gallery-200">
			<div class="max-w-[1400px] mx-auto px-6 md:px-12">
				<div class="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
					<div class="w-full lg:w-1/2 relative aspect-square bg-white border border-gallery-200 p-8 shadow-sm group">
						<NuxtImg
								alt="Open Art Crate" class="w-full h-full object-cover filter grayscale-[0.2] contrast-110"
								src="https://images.unsplash.com/photo-1590664216212-62e7637d1665?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"
                                format="webp"
                                sizes="100vw lg:50vw"
                                loading="lazy"
                        />
						<div
								class="absolute top-[30%] left-[40%] group-hover:opacity-100 opacity-0 transition-opacity duration-500">
							<div class="relative">
								<div class="w-3 h-3 bg-clay-500 rounded-full animate-ping absolute"/>
								<div class="w-3 h-3 bg-clay-500 rounded-full relative z-10 border-2 border-white"/>
								<div
										class="absolute left-6 top-0 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-sans uppercase tracking-wider text-gallery-900 shadow-sm whitespace-nowrap">
									High-Density Foam
								</div>
							</div>
						</div>
						<div
								class="absolute bottom-[25%] right-[30%] group-hover:opacity-100 opacity-0 transition-opacity duration-500 delay-200">
							<div class="relative">
								<div class="w-3 h-3 bg-clay-500 rounded-full animate-ping absolute"/>
								<div class="w-3 h-3 bg-clay-500 rounded-full relative z-10 border-2 border-white"/>
								<div
										class="absolute right-6 top-0 bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-sans uppercase tracking-wider text-gallery-900 shadow-sm whitespace-nowrap">
									Timber Bracing
								</div>
							</div>
						</div>
					</div>
					<div class="w-full lg:w-1/2 max-w-lg">
						<div class="flex items-center space-x-3 mb-6">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-shield-check text-clay-500" aria-hidden="true">
								<path
										d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
							<span class="font-sans text-xs uppercase tracking-[0.2em] text-gallery-400">Safety Engineering</span>
						</div>
						<h2 class="font-serif text-4xl text-gallery-900 mb-8">Museum-Grade Protection.</h2>
						<p class="font-sans text-lg text-gallery-600 leading-relaxed mb-8">We treat the journey as critical as the
							creation. Every large form is 3D-scanned to create custom-cut foam housing, ensuring zero movement
							during transit.</p>
						<div class="space-y-6 border-l border-gallery-300 pl-8">
							<div><h4 class="font-serif text-lg text-gallery-800 mb-1">Layer 1: Preservation</h4>
								<p class="font-sans text-sm text-gallery-500">Acid-free archival tissue wrap protects surface
									patina.</p></div>
							<div><h4 class="font-serif text-lg text-gallery-800 mb-1">Layer 2: Suspension</h4>
								<p class="font-sans text-sm text-gallery-500">Contour-cut Ethafoam™ absorbs vibration and shock.</p>
							</div>
							<div><h4 class="font-serif text-lg text-gallery-800 mb-1">Layer 3: Structure</h4>
								<p class="font-sans text-sm text-gallery-500">Kiln-dried pine exoskeleton provides crush
									resistance.</p></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-24 bg-gallery-100 border-t border-gallery-200">
			<div class="max-w-2xl mx-auto px-6 text-center">
				<div class="w-12 h-12 mx-auto mb-6 text-gallery-400">
					<svg
							xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-globe" aria-hidden="true">
						<circle cx="12" cy="12" r="10"/>
						<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
						<path d="M2 12h20"/>
					</svg>
				</div>
				<h3 class="font-serif text-3xl text-gallery-900 mb-4">International Customs &amp; Duties</h3>
				<p class="font-sans text-gallery-600 leading-relaxed">Art knows no borders, but logistics do. We handle all
					export documentation. For international acquisitions, our team manages the customs brokerage to ensure a
					seamless entry into your country.</p>
				<div class="mt-8 flex justify-center">
					<div
							class="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-gallery-500 bg-white px-4 py-2 rounded-full border border-gallery-200">
						<svg
								xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-info" aria-hidden="true">
							<circle cx="12" cy="12" r="10"/>
							<path d="M12 16v-4"/>
							<path d="M12 8h.01"/>
						</svg>
						<span>DDP (Delivered Duty Paid) Available on Request</span></div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>