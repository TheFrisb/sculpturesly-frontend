<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Trade Program - Exclusive Art for Designers & Architects | Sculpturesly',
	description: 'Step inside the Sculpturesly Studio. Explore our design process, view gallery-worthy styling ideas, and discover the stories behind our latest artistic collections.',
	url: url.href,
})))
</script>

<template>
	<div class="w-full bg-gallery-50">
		<section class="relative min-h-[90vh] flex flex-col md:flex-row pt-32 md:pt-0">
			<div class="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 order-2 md:order-1">
				<div class="max-w-xl animate-fade-in-up"><h1 class="font-serif text-5xl md:text-6xl text-gallery-900 mb-6">For
					the Trade.</h1>
					<p class="font-sans text-lg text-gallery-600 leading-relaxed mb-10 max-w-md">Exclusive pricing, custom
						sourcing, and dedicated support for architects and interior designers building the exceptional.</p>
					<button
							class="inline-flex items-center space-x-4 bg-gallery-900 text-white px-8 py-4 hover:bg-clay-600 transition-colors duration-300">
						<span class="font-sans text-xs uppercase tracking-[0.2em]">Apply for Trade Account</span>
						<svg
								xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-arrow-right" aria-hidden="true">
							<path d="M5 12h14"/>
							<path d="m12 5 7 7-7 7"/>
						</svg>
					</button>
				</div>
			</div>
			<div class="w-full md:w-1/2 h-[50vh] md:h-auto bg-gallery-200 order-1 md:order-2 relative overflow-hidden"><NuxtImg
					alt="Interior Design Mood" class="w-full h-full object-cover filter contrast-[0.9] saturate-[0.8]"
					src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                    format="webp"
                    sizes="100vw md:50vw"
                    loading="lazy"
            />
				<div class="absolute inset-0 bg-gallery-900/10 mix-blend-multiply"/>
			</div>
		</section>
		<section class="w-full py-32 px-6 md:px-12 bg-white">
			<div class="max-w-[1400px] mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
					<div class="flex items-start space-x-6">
						<div
								class="w-12 h-12 flex items-center justify-center border border-gallery-200 text-clay-600 rounded-sm flex-shrink-0">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-percent" aria-hidden="true">
								<line x1="19" x2="5" y1="5" y2="19"/>
								<circle cx="6.5" cy="6.5" r="2.5"/>
								<circle cx="17.5" cy="17.5" r="2.5"/>
							</svg>
						</div>
						<div><h3 class="font-serif text-2xl text-gallery-900 mb-2">Trade-Only Pricing</h3>
							<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-sm">Access exclusive net pricing with
								up to 20% off our curated collection, with no minimum order requirements.</p></div>
					</div>
					<div class="flex items-start space-x-6">
						<div
								class="w-12 h-12 flex items-center justify-center border border-gallery-200 text-clay-600 rounded-sm flex-shrink-0">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-globe" aria-hidden="true">
								<circle cx="12" cy="12" r="10"/>
								<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/>
								<path d="M2 12h20"/>
							</svg>
						</div>
						<div><h3 class="font-serif text-2xl text-gallery-900 mb-2">Sourcing Services</h3>
							<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-sm">Our curators work as an extension
								of your team to find or commission specific forms that meet your project vision.</p></div>
					</div>
					<div class="flex items-start space-x-6">
						<div
								class="w-12 h-12 flex items-center justify-center border border-gallery-200 text-clay-600 rounded-sm flex-shrink-0">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-box" aria-hidden="true">
								<path
										d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
								<path d="m3.3 7 8.7 5 8.7-5"/>
								<path d="M12 22V12"/>
							</svg>
						</div>
						<div><h3 class="font-serif text-2xl text-gallery-900 mb-2">3D &amp; CAD Assets</h3>
							<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-sm">Download high-fidelity 3D models
								and CAD files for every piece in our collection to visualize directly in your renderings.</p></div>
					</div>
					<div class="flex items-start space-x-6">
						<div
								class="w-12 h-12 flex items-center justify-center border border-gallery-200 text-clay-600 rounded-sm flex-shrink-0">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-truck" aria-hidden="true">
								<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
								<path d="M15 18H9"/>
								<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
								<circle cx="17" cy="18" r="2"/>
								<circle cx="7" cy="18" r="2"/>
							</svg>
						</div>
						<div><h3 class="font-serif text-2xl text-gallery-900 mb-2">Consolidated Logistics</h3>
							<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-sm">We handle complex project
								logistics, offering consolidated warehousing and white-glove installation coordination.</p></div>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-32 bg-gallery-50 border-t border-gallery-200 overflow-hidden">
			<div class="max-w-[1600px] mx-auto px-6 md:px-12 mb-12 flex justify-between items-end"><h2
					class="font-serif text-4xl text-gallery-900">Featured Projects</h2><span
					class="font-sans text-xs uppercase tracking-widest text-gallery-500 hidden md:block">Global Installations</span>
			</div>
			<div class="flex overflow-x-auto space-x-8 px-6 md:px-12 pb-12 no-scrollbar">
				<div class="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] flex-shrink-0 group cursor-pointer">
					<div class="relative aspect-[4/3] bg-gallery-200 overflow-hidden mb-4"><NuxtImg
							alt="Luxury Hotel Lobby"
							class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter contrast-[0.95]"
							src="https://images.unsplash.com/photo-1590353836367-9d7a26ce4001?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="100vw md:33vw"
                            loading="lazy"
                    />
						<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"/>
					</div>
					<h4 class="font-serif text-xl text-gallery-900 mb-1">The Aman Kyoto</h4>
					<p class="font-sans text-xs text-gallery-500 uppercase tracking-wider">Lobby Installation</p></div>
				<div class="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] flex-shrink-0 group cursor-pointer">
					<div class="relative aspect-[4/3] bg-gallery-200 overflow-hidden mb-4"><NuxtImg
							alt="Private Residence Paris"
							class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter contrast-[0.95]"
							src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="100vw md:33vw"
                            loading="lazy"
                    />
						<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"/>
					</div>
					<h4 class="font-serif text-xl text-gallery-900 mb-1">Private Residence, Paris</h4>
					<p class="font-sans text-xs text-gallery-500 uppercase tracking-wider">Living Room Collection</p></div>
				<div class="min-w-[80vw] md:min-w-[45vw] lg:min-w-[30vw] flex-shrink-0 group cursor-pointer">
					<div class="relative aspect-[4/3] bg-gallery-200 overflow-hidden mb-4"><NuxtImg
							alt="Aesop Store"
							class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter contrast-[0.95]"
							src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="100vw md:33vw"
                            loading="lazy"
                    />
						<div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"/>
					</div>
					<h4 class="font-serif text-xl text-gallery-900 mb-1">Aesop Flagship, Milan</h4>
					<p class="font-sans text-xs text-gallery-500 uppercase tracking-wider">Retail Display</p></div>
			</div>
		</section>
		<section id="trade-application" class="w-full py-32 bg-gallery-100 border-t border-gallery-200">
			<div class="max-w-2xl mx-auto px-6">
				<div class="text-center mb-16"><h2 class="font-serif text-4xl text-gallery-900 mb-4">Apply for Membership</h2>
					<p class="font-sans text-sm text-gallery-500">Please complete the form below. Applications are reviewed
						within 24 hours.</p></div>
				<form class="space-y-8">
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div class="relative"><input
								id="trade-name"
								class="peer w-full bg-transparent border-b border-gallery-300 py-3 text-gallery-900 focus:border-clay-500 focus:outline-none placeholder-transparent"
								placeholder="Name" type="text"><label
								for="trade-name"
								class="absolute left-0 -top-3.5 text-[10px] text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gallery-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-clay-500">Full
							Name</label></div>
						<div class="relative"><input
								id="trade-firm"
								class="peer w-full bg-transparent border-b border-gallery-300 py-3 text-gallery-900 focus:border-clay-500 focus:outline-none placeholder-transparent"
								placeholder="Firm" type="text"><label
								for="trade-firm"
								class="absolute left-0 -top-3.5 text-[10px] text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gallery-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-clay-500">Firm
							Name</label></div>
					</div>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div class="relative"><input
								id="trade-email"
								class="peer w-full bg-transparent border-b border-gallery-300 py-3 text-gallery-900 focus:border-clay-500 focus:outline-none placeholder-transparent"
								placeholder="Email" type="email"><label
								for="trade-email"
								class="absolute left-0 -top-3.5 text-[10px] text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gallery-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-clay-500">Work
							Email</label></div>
						<div class="relative"><input
								id="trade-website"
								class="peer w-full bg-transparent border-b border-gallery-300 py-3 text-gallery-900 focus:border-clay-500 focus:outline-none placeholder-transparent"
								placeholder="Website" type="text"><label
								for="trade-website"
								class="absolute left-0 -top-3.5 text-[10px] text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gallery-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-clay-500">Website</label>
						</div>
					</div>
					<div class="relative"><input
							id="trade-resale"
							class="peer w-full bg-transparent border-b border-gallery-300 py-3 text-gallery-900 focus:border-clay-500 focus:outline-none placeholder-transparent"
							placeholder="Resale ID" type="text"><label
							for="trade-resale"
							class="absolute left-0 -top-3.5 text-[10px] text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gallery-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-clay-500">Resale
						Certificate ID</label></div>
					<div class="pt-8 text-center">
						<button
								type="button"
								class="bg-[#947E74] hover:bg-[#756560] text-white px-12 py-4 font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 shadow-md">
							Submit Application
						</button>
					</div>
				</form>
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>