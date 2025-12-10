<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Sculpturesly: Modern Sculptures, Statues & Artistic Home Deco',
	description: 'Elevate your space with Sculpturesly. Shop our curated collection of handcrafted sculptures, garden statues, and modern art pieces. Discover timeless design today.',
	url: url.href,
})))
</script>

<template>
	<HeroSection/>
	<PromotedCategoriesSection/>
	<RecentProductsGrid/>
	<section id="artists" class="w-full pt-20 px-4 md:px-8">
		<div class="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-sm group">
			<div class="absolute inset-0 bg-gallery-900/30 z-10"/>
			<img
					alt="Artist Hands Working Clay"
					class="w-full h-full object-cover object-center filter grayscale-[0.4] transition-transform duration-[3s] ease-in-out group-hover:scale-105"
					src="https://picsum.photos/2000">
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"><p
					class="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-8 animate-fade-in">Inside
				The Studio</p>
				<blockquote
						class="font-serif text-3xl md:text-5xl lg:text-6xl text-gallery-50 max-w-4xl leading-tight mb-12 drop-shadow-lg">
					"The sculpture already exists within the stone. I simply remove the excess material."
				</blockquote>
				<!--				<a-->
				<!--						href="#"-->
				<!--						class="inline-block px-8 py-3 border border-white/30 hover:border-white/80 text-white font-sans text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300">Meet-->
				<!--					the Artists</a>-->
			</div>
		</div>
	</section>
	<!--	<section class="w-full py-32 bg-gallery-50">-->
	<!--		<div class="max-w-[1600px] mx-auto px-6 md:px-12">-->
	<!--			<div class="mb-12"><h2 class="font-serif text-4xl text-gallery-900">In Context</h2></div>-->
	<!--			<div class="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-gallery-200"><img-->
	<!--					alt="Modern minimalist living room with sculpture" class="w-full h-full object-cover"-->
	<!--					src="https://picsum.photos/2000">-->
	<!--				<div class="absolute top-[45%] left-[62%] transform -translate-x-1/2 -translate-y-1/2 group">-->
	<!--					<button class="relative w-8 h-8 flex items-center justify-center" aria-label="View product details"><span-->
	<!--							class="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping"/><span-->
	<!--							class="relative inline-flex rounded-full h-3 w-3 bg-white shadow-lg group-hover:scale-150 transition-transform duration-300"/>-->
	<!--					</button>-->
	<!--					<div-->
	<!--							class="absolute left-8 top-1/2 transform -translate-y-1/2 ml-4 w-64 bg-gallery-50/95 backdrop-blur-md p-4 shadow-xl transition-all duration-300 origin-left opacity-0 scale-90 pointer-events-none">-->
	<!--						<div class="flex justify-between items-start mb-2"><h4-->
	<!--								class="font-serif text-lg text-gallery-900 leading-none">Equilibrium II</h4><span-->
	<!--								class="text-xs font-sans text-gallery-500">$1,200</span></div>-->
	<!--						<p class="text-[10px] uppercase tracking-widest text-gallery-400 mb-3">By Sarah Jenkins</p><a-->
	<!--							href="#"-->
	<!--							class="flex items-center text-xs font-sans text-clay-600 hover:text-clay-400 transition-colors">View-->
	<!--						Detail-->
	<!--						<svg-->
	<!--								xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"-->
	<!--								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"-->
	<!--								class="lucide lucide-plus ml-1" aria-hidden="true">-->
	<!--							<path d="M5 12h14"/>-->
	<!--							<path d="M12 5v14"/>-->
	<!--						</svg>-->
	<!--					</a></div>-->
	<!--				</div>-->
	<!--			</div>-->
	<!--		</div>-->
	<!--	</section>-->
	<OurPromiseSection/>
	<HandInspectedSection/>
</template>