<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'The Studio - Design Inspiration & Artist Lookbook | Sculpturesly',
	description: 'Step inside the Sculpturesly Studio. Explore our design process, view gallery-worthy styling ideas, and discover the stories behind our latest artistic collections',
	url: url.href,
})))
</script>

<template>
	<div class="w-full bg-gallery-50">
		<section class="relative w-full h-[85vh] overflow-hidden">
			<div class="absolute inset-0 bg-black/20 z-10"/>
			<NuxtImg
					alt="Sculptor Workshop Table"
					class="w-full h-full object-cover object-center filter grayscale-[0.3] contrast-[1.1]"
					src="https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?q=80&amp;w=1800&amp;auto=format&amp;fit=crop"
                    format="webp"
                    sizes="100vw"
                    preload
            />
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"><h1
					class="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 drop-shadow-lg tracking-tight animate-fade-in-up">
				Form Follows Feeling.</h1>
				<p
						class="font-sans text-xs md:text-sm uppercase tracking-[0.3em] text-white/90 animate-fade-in-up"
						style="animation-delay: 0.2s;">Inside the Sculpturesly Design Process</p></div>
		</section>
		<section class="w-full py-32 bg-gallery-50">
			<div class="max-w-[1600px] mx-auto px-6 md:px-12 space-y-32">
				<div class="flex flex-col md:flex-row items-center gap-16 md:gap-24">
					<div class="w-full md:w-1/2 relative aspect-[4/5] bg-gallery-200 group overflow-hidden"><NuxtImg
							alt="Hand touching stone texture"
							class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter grayscale-[0.2]"
							src="https://images.unsplash.com/photo-1596627889757-5326779d750c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="100vw md:50vw"
                            loading="lazy"
                    />
						<div
								class="absolute inset-0 bg-gallery-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
					</div>
					<div class="w-full md:w-1/2 max-w-lg"><span
							class="font-sans text-xs uppercase tracking-[0.2em] text-clay-500 mb-4 block">Origin</span>
						<h2 class="font-serif text-4xl md:text-5xl text-gallery-900 mb-8">Sourced from the Earth.</h2>
						<p class="font-sans text-lg text-gallery-600 leading-relaxed">We travel to the quarries of Carrara and the
							riverbanks of Kyoto, seeking the most expressive veins of marble and the most resilient clays. We
							believe the material dictates the form, not the other way around.</p></div>
				</div>
				<div class="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24">
					<div class="w-full md:w-1/2 relative aspect-[4/5] bg-gallery-200 group overflow-hidden"><NuxtImg
							alt="Applying patina"
							class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 filter sepia-[0.2] contrast-[1.1]"
							src="https://images.unsplash.com/photo-1616423662038-045b41295328?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="100vw md:50vw"
                            loading="lazy"
                    />
						<div
								class="absolute inset-0 bg-gallery-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
					</div>
					<div class="w-full md:w-1/2 max-w-lg md:text-right"><span
							class="font-sans text-xs uppercase tracking-[0.2em] text-clay-500 mb-4 block">Refinement</span>
						<h2 class="font-serif text-4xl md:text-5xl text-gallery-900 mb-8">Finished by Hand.</h2>
						<p class="font-sans text-lg text-gallery-600 leading-relaxed">No two patinas are alike. Every object is
							hand-finished in our New York atelier to ensure it catches the light perfectly. We employ centuries-old
							techniques—oxidizing bronze, sealing plaster, and polishing wood—until the surface sings.</p></div>
				</div>
			</div>
		</section>
		<section class="w-full py-32 bg-gallery-100 border-t border-gallery-200">
			<div class="max-w-4xl mx-auto px-6 text-center">
				<blockquote class="font-serif text-3xl md:text-5xl text-gallery-800 italic leading-snug mb-16">"We believe
					that our environments shape our thoughts. A sculpture is not just decoration; it is an anchor for the room
					and a totem for the mind."
				</blockquote>
				<button
						class="inline-flex items-center space-x-4 bg-[#947E74] hover:bg-[#756560] text-white px-10 py-5 font-sans text-xs uppercase tracking-[0.2em] transition-colors duration-300 shadow-md">
					<span>View the Collection</span>
					<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-arrow-right" aria-hidden="true">
						<path d="M5 12h14"/>
						<path d="m12 5 7 7-7 7"/>
					</svg>
				</button>
			</div>
		</section>
	</div>
</template>

<style scoped>

</style>