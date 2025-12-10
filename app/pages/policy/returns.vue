<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Returns & Refund Policy - Satisfaction Guarantee | Sculpturesly',
	description: 'Shop art with confidence. View Sculpturesly\'s return guidelines, refund timelines, and how we handle returns for damaged or unsuitable items.',
	url: url.href,
})))
</script>

<template>
	<div class="w-full bg-gallery-50">
		<section class="relative w-full py-32 md:py-40 px-6 flex flex-col items-center text-center">
			<div class="absolute inset-0 bg-gallery-100/30 opacity-50 pointer-events-none mix-blend-multiply"/>
			<div class="relative z-10 max-w-3xl mx-auto">
				<div class="flex flex-col items-center mb-8">
					<div class="relative w-24 h-24 mb-8 flex items-center justify-center">
						<svg viewBox="0 0 100 100" class="w-full h-full fill-clay-500 opacity-90 drop-shadow-md">
							<path
									d="M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 90c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
							<path
									d="M50 10c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 70c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zM10 50c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-2.2-5-5-5zm70 0c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-2.2-5-5-5z"/>
							<circle cx="50" cy="50" r="30" class="fill-clay-600"/>
						</svg>
						<span class="absolute font-serif text-white text-2xl italic font-bold">S.</span></div>
					<h1 class="font-serif text-4xl md:text-6xl text-gallery-900 mb-6 tracking-tight">Our Promise to the
						Collector.</h1>
					<div class="w-24 h-1 bg-clay-500 mb-8"/>
					<p class="font-sans text-lg md:text-xl text-gallery-600 leading-relaxed max-w-2xl">We believe a sculpture
						must resonate with its environment. If the connection isn't there, we make it right.</p></div>
			</div>
		</section>
		<section class="w-full pb-32 px-6 md:px-12">
			<div class="max-w-[1200px] mx-auto">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
					<div
							class="flex flex-col items-center text-center p-10 border border-gallery-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-500">
						<div class="w-16 h-16 mb-8 text-clay-600">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-calendar" aria-hidden="true">
								<path d="M8 2v4"/>
								<path d="M16 2v4"/>
								<rect width="18" height="18" x="3" y="4" rx="2"/>
								<path d="M3 10h18"/>
							</svg>
						</div>
						<h3 class="font-serif text-2xl text-gallery-900 mb-4">The 14-Day Sanctuary Trial</h3>
						<p class="font-sans text-sm text-gallery-500 leading-relaxed">Live with the piece for 14 days. If it
							doesn't transform your space as expected, we will arrange for its return—no questions asked.</p></div>
					<div
							class="flex flex-col items-center text-center p-10 border border-gallery-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-500">
						<div class="w-16 h-16 mb-8 text-clay-600">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-shield-check" aria-hidden="true">
								<path
										d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
								<path d="m9 12 2 2 4-4"/>
							</svg>
						</div>
						<h3 class="font-serif text-2xl text-gallery-900 mb-4">Transit Perfection</h3>
						<p class="font-sans text-sm text-gallery-500 leading-relaxed">Every acquisition is fully insured during
							transit. If it arrives with even a minor imperfection, we handle the restoration or replacement
							immediately.</p></div>
					<div
							class="flex flex-col items-center text-center p-10 border border-gallery-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-500">
						<div class="w-16 h-16 mb-8 text-clay-600">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-file-text" aria-hidden="true">
								<path
										d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/>
								<path d="M14 2v5a1 1 0 0 0 1 1h5"/>
								<path d="M10 9H8"/>
								<path d="M16 13H8"/>
								<path d="M16 17H8"/>
							</svg>
						</div>
						<h3 class="font-serif text-2xl text-gallery-900 mb-4">Provenance Guaranteed</h3>
						<p class="font-sans text-sm text-gallery-500 leading-relaxed">All works include a signed Certificate of
							Authenticity and a permanent record in the Sculpturesly archive, ensuring future value.</p></div>
				</div>
			</div>
		</section>
		<section class="w-full py-32 bg-gallery-100 border-t border-gallery-200">
			<div class="max-w-[800px] mx-auto px-6"><h2
					class="font-serif text-3xl md:text-4xl text-gallery-900 mb-16 text-center">A Seamless Return Process</h2>
				<div class="relative pl-8 md:pl-0">
					<div
							class="absolute left-8 md:left-1/2 top-4 bottom-12 w-px bg-gallery-300 transform md:-translate-x-1/2"/>
					<div class="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
						<div class="md:w-5/12 text-left md:text-right pr-8 order-2 md:order-1"><h4
								class="font-serif text-xl text-gallery-900 mb-2 group-hover:text-clay-600 transition-colors">Contact
							Curator</h4>
							<p class="font-sans text-sm text-gallery-500">Simply email or call your dedicated curator within 14 days
								of delivery.</p></div>
						<div
								class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-gallery-300 transform md:-translate-x-1/2 z-10 group-hover:border-clay-500 transition-colors order-1 md:order-2 mb-4 md:mb-0"/>
						<div class="md:w-5/12 pl-8 order-3 md:order-3 hidden md:block"><span
								class="font-sans text-[10px] uppercase tracking-widest text-gallery-400">Step 01</span></div>
					</div>
					<div class="relative flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
						<div class="md:w-5/12 text-left md:text-right pr-8 order-2 md:order-1 hidden md:block"><span
								class="font-sans text-[10px] uppercase tracking-widest text-gallery-400">Step 02</span></div>
						<div
								class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-gallery-300 transform md:-translate-x-1/2 z-10 group-hover:border-clay-500 transition-colors order-1 md:order-2 mb-4 md:mb-0"/>
						<div class="md:w-5/12 pl-8 order-3 md:order-3"><h4
								class="font-serif text-xl text-gallery-900 mb-2 group-hover:text-clay-600 transition-colors">
							White-Glove Retrieval</h4>
							<p class="font-sans text-sm text-gallery-500">We dispatch our logistics partner to re-crate and collect
								the work from your home.</p></div>
					</div>
					<div class="relative flex flex-col md:flex-row items-start md:items-center justify-between group">
						<div class="md:w-5/12 text-left md:text-right pr-8 order-2 md:order-1"><h4
								class="font-serif text-xl text-gallery-900 mb-2 group-hover:text-clay-600 transition-colors">Immediate
							Refund</h4>
							<p class="font-sans text-sm text-gallery-500">Upon studio inspection confirming condition, funds are
								returned immediately.</p></div>
						<div
								class="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-gallery-300 transform md:-translate-x-1/2 z-10 group-hover:border-clay-500 transition-colors order-1 md:order-2 mb-4 md:mb-0"/>
						<div class="md:w-5/12 pl-8 order-3 md:order-3 hidden md:block"><span
								class="font-sans text-[10px] uppercase tracking-widest text-gallery-400">Step 03</span></div>
					</div>
				</div>
			</div>
		</section>
		<section class="w-full py-32 px-6">
			<div class="max-w-4xl mx-auto flex flex-col items-center">
				<div
						class="relative w-full aspect-[16/9] md:aspect-[21/9] bg-white shadow-2xl p-8 md:p-12 border border-gallery-200 transform hover:scale-[1.01] transition-transform duration-700">
					<img
							alt="Certificate of Authenticity" class="w-full h-full object-cover filter sepia-[0.3] contrast-[0.9]"
							src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
					<div class="absolute inset-0 bg-gallery-900/10 mix-blend-multiply pointer-events-none"/>
					<div
							class="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 bg-gallery-900 text-white px-8 py-3 shadow-lg">
						<span class="font-sans text-xs uppercase tracking-[0.2em]">Permanent Record of Ownership</span></div>
				</div>
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>