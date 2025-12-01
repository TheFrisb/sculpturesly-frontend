<script setup lang="ts">

</script>

<template>
	<section
			class="relative min-h-[90vh] w-full pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col justify-center">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center h-full">
			<div class="lg:col-span-7 h-[60vh] lg:h-[80vh] w-full order-1 relative animate-fade-in group">
				<div class="absolute inset-0 bg-gallery-100/10 mix-blend-multiply pointer-events-none z-10"/>
				<div class="relative w-full h-full overflow-hidden bg-gallery-200"><img
						alt="Sculptural Form Abstract"
						class="w-full h-full object-cover object-center filter grayscale-[0.2] contrast-[1.05] transition-transform duration-[2000ms] ease-out group-hover:scale-[1.02]"
						src="https://images.unsplash.com/photo-1537243936660-de09695d53cb?q=80&amp;w=1500&amp;auto=format&amp;fit=crop">
					<div
							class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gallery-900/10 to-transparent opacity-60"/>
				</div>
				<div class="absolute bottom-6 right-6 z-20 hidden md:block"><p
						class="font-sans text-[10px] uppercase tracking-widest text-white/80">Fig. 01 — The Weight of Light</p>
				</div>
			</div>
			<div class="lg:col-span-5 flex flex-col space-y-12 z-10 order-2 pl-0 lg:pl-12">
				<div class="animate-fade-in-up"><span
						class="block font-sans text-xs tracking-[0.25em] uppercase text-clay-500 mb-6 pl-1">Est. 2024 — New York</span>
					<h1 class="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-gallery-900 tracking-tighter mb-8">
						Curating <br><span class="italic font-light text-gallery-600 ml-12">Form</span> &amp; <br>Space.</h1>
					<div class="w-12 h-[1px] bg-gallery-900 mb-8"/>
					<p class="font-sans text-gallery-600 leading-relaxed text-sm max-w-sm">We believe objects have souls.
						Sculpturesly offers a quiet collection of tactile forms designed to ground your environment and elevate
						your daily rituals.</p></div>
				<div class="animate-fade-in-up" style="animation-delay: 0.2s;">
					<button
							class="group flex items-center space-x-6 text-gallery-900 hover:text-clay-600 transition-colors duration-500">
						<span class="uppercase tracking-[0.2em] text-xs font-medium">Explore Collection</span>
						<div
								class="w-8 h-8 rounded-full border border-gallery-300 flex items-center justify-center group-hover:border-clay-500 transition-colors duration-500">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-arrow-right transform group-hover:translate-x-0.5 transition-transform duration-300"
									aria-hidden="true">
								<path d="M5 12h14"/>
								<path d="m12 5 7 7-7 7"/>
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full py-24 px-6 md:px-12 bg-gallery-50 border-y border-gallery-200/50">
		<div class="max-w-[1600px] mx-auto">
			<div class="mb-12"><h2 class="font-serif text-4xl text-gallery-900">Curated Sets.</h2></div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 h-auto lg:h-[80vh]">
				<div class="group relative w-full h-[60vh] lg:h-full bg-gallery-200 overflow-hidden cursor-pointer"><img
						alt="The Minimalist Edit"
						class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
						src="https://images.unsplash.com/photo-1516546453174-5e1098616b1e?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
					<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-70 transition-opacity"/>
					<div class="absolute bottom-8 left-8 text-white z-10">
						<div class="flex items-center space-x-4 mb-2"><h3 class="font-serif text-4xl md:text-5xl">The Minimalist
							Edit</h3>
							<svg
									xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-arrow-right opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-white"
									aria-hidden="true">
								<path d="M5 12h14"/>
								<path d="m12 5 7 7-7 7"/>
							</svg>
						</div>
						<p class="font-sans text-xs uppercase tracking-[0.2em] text-white/90">Calm forms in stone and plaster</p>
					</div>
				</div>
				<div class="flex flex-col gap-6 md:gap-12 h-full">
					<div class="group relative flex-1 bg-gallery-200 overflow-hidden cursor-pointer min-h-[40vh] lg:min-h-0">
						<img
								alt="Organic Modern"
								class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter sepia-[0.2] group-hover:sepia-0"
								src="https://images.unsplash.com/photo-1595867453677-76a03295988e?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-80 transition-opacity"/>
						<div class="absolute bottom-8 left-8 text-white z-10"><h3
								class="font-serif text-3xl mb-1 group-hover:translate-x-2 transition-transform duration-500">Organic
							Modern</h3>
							<p class="font-sans text-[10px] uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								Warmth &amp; Texture</p></div>
					</div>
					<div class="group relative flex-1 bg-gallery-200 overflow-hidden cursor-pointer min-h-[40vh] lg:min-h-0">
						<img
								alt="The Executive Desk"
								class="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter contrast-[1.1]"
								src="https://images.unsplash.com/photo-1550614000-4b9519e09eb3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity"/>
						<div class="absolute bottom-8 left-8 text-white z-10"><h3
								class="font-serif text-3xl mb-1 group-hover:translate-x-2 transition-transform duration-500">The
							Executive Desk</h3>
							<p class="font-sans text-[10px] uppercase tracking-widest text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
								Power &amp; Focus</p></div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section id="curation" class="w-full py-32 px-6 md:px-12 bg-gallery-50">
		<div class="max-w-[1600px] mx-auto">
			<div class="mb-20 flex flex-col md:flex-row md:items-end justify-between border-b border-gallery-200 pb-8">
				<div class="max-w-xl"><h2 class="font-serif text-4xl md:text-5xl text-gallery-900 mb-6">Recent
					Acquisitions</h2>
					<p class="font-sans text-gallery-600 leading-relaxed text-sm md:text-base">A collection of objects that
						speak. Selected for their texture, form, and ability to transform the space they inhabit.</p></div>
				<div class="mt-8 md:mt-0"><span class="font-sans text-xs tracking-widest uppercase text-clay-500">8 Objects Available</span>
				</div>
			</div>
			<div class="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="The Silent Void"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							The Silent Void</h3><span class="font-sans text-sm text-gallery-500">$9,500</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Elena Vora</p>
						<p class="font-sans text-xs text-gallery-400 italic">Carrara Marble, 2023</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Fragmented Memory"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Fragmented Memory</h3><span class="font-sans text-sm text-gallery-500">$450</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Davide Russo</p>
						<p class="font-sans text-xs text-gallery-400 italic">Oxidized Bronze, 2024</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Equilibrium II"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Equilibrium II</h3><span class="font-sans text-sm text-gallery-500">$1,200</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Sarah Jenkins</p>
						<p class="font-sans text-xs text-gallery-400 italic">Reclaimed Oak &amp; Iron, 2022</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Ceramic Study No. 5"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Ceramic Study No. 5</h3><span class="font-sans text-sm text-gallery-500">$250</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Koji Tanaka</p>
						<p class="font-sans text-xs text-gallery-400 italic">Stoneware Clay, 2024</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Ascension"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Ascension</h3><span class="font-sans text-sm text-gallery-500">$10,500</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Marcus Thorne</p>
						<p class="font-sans text-xs text-gallery-400 italic">Cast Aluminum, 2021</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Soft Landing"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Soft Landing</h3><span class="font-sans text-sm text-gallery-500">$3,200</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Anna Briar</p>
						<p class="font-sans text-xs text-gallery-400 italic">Plaster &amp; Resin, 2023</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Obsidian Flow"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Obsidian Flow</h3><span class="font-sans text-sm text-gallery-500">$6,800</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Jonas Heil</p>
						<p class="font-sans text-xs text-gallery-400 italic">Black Glass, 2022</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
				<div class="group mb-12 break-inside-avoid relative cursor-pointer">
					<div class="relative overflow-hidden mb-4 bg-gallery-100"><img
							alt="Minimalist Form 8"
							class="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale-[0.2] group-hover:grayscale-0"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"/>
					</div>
					<div class="flex flex-col space-y-1">
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-500 transition-colors duration-300">
							Minimalist Form 8</h3><span class="font-sans text-sm text-gallery-500">$200</span></div>
						<p class="font-sans text-xs uppercase tracking-wider text-gallery-500">Studio Unknown</p>
						<p class="font-sans text-xs text-gallery-400 italic">Cast Concrete, 2024</p></div>
					<div
							class="absolute -bottom-4 left-4 right-4 h-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-black/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"/>
				</div>
			</div>
			<div class="mt-20 text-center">
				<button
						class="px-10 py-4 border border-gallery-300 text-gallery-800 font-sans text-xs uppercase tracking-[0.2em] hover:bg-gallery-800 hover:text-gallery-50 hover:border-gallery-800 transition-all duration-300">
					View Full Archive
				</button>
			</div>
		</div>
	</section>
	<section id="artists" class="w-full py-20 px-4 md:px-8">
		<div class="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-sm group">
			<div class="absolute inset-0 bg-gallery-900/30 z-10"/>
			<img
					alt="Artist Hands Working Clay"
					class="w-full h-full object-cover object-center filter grayscale-[0.4] transition-transform duration-[3s] ease-in-out group-hover:scale-105"
					src="https://images.unsplash.com/photo-1459908676235-d5f02a50184b?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">
			<div class="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"><p
					class="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-white/80 mb-8 animate-fade-in">Inside
				The Studio</p>
				<blockquote
						class="font-serif text-3xl md:text-5xl lg:text-6xl text-gallery-50 max-w-4xl leading-tight mb-12 drop-shadow-lg">
					"The sculpture already exists within the stone. I simply remove the excess material."
				</blockquote>
				<a
						href="#"
						class="inline-block px-8 py-3 border border-white/30 hover:border-white/80 text-white font-sans text-xs uppercase tracking-widest backdrop-blur-sm transition-all duration-300">Meet
					the Artists</a></div>
		</div>
	</section>
	<section class="w-full py-32 bg-gallery-50">
		<div class="max-w-[1600px] mx-auto px-6 md:px-12">
			<div class="mb-12"><h2 class="font-serif text-4xl text-gallery-900">In Context</h2></div>
			<div class="relative w-full aspect-[16/10] md:aspect-[21/9] overflow-hidden bg-gallery-200"><img
					alt="Modern minimalist living room with sculpture" class="w-full h-full object-cover"
					src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop">
				<div class="absolute top-[45%] left-[62%] transform -translate-x-1/2 -translate-y-1/2 group">
					<button class="relative w-8 h-8 flex items-center justify-center" aria-label="View product details"><span
							class="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-ping"/><span
							class="relative inline-flex rounded-full h-3 w-3 bg-white shadow-lg group-hover:scale-150 transition-transform duration-300"/>
					</button>
					<div
							class="absolute left-8 top-1/2 transform -translate-y-1/2 ml-4 w-64 bg-gallery-50/95 backdrop-blur-md p-4 shadow-xl transition-all duration-300 origin-left opacity-0 scale-90 pointer-events-none">
						<div class="flex justify-between items-start mb-2"><h4
								class="font-serif text-lg text-gallery-900 leading-none">Equilibrium II</h4><span
								class="text-xs font-sans text-gallery-500">$1,200</span></div>
						<p class="text-[10px] uppercase tracking-widest text-gallery-400 mb-3">By Sarah Jenkins</p><a
							href="#"
							class="flex items-center text-xs font-sans text-clay-600 hover:text-clay-400 transition-colors">View
						Detail
						<svg
								xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-plus ml-1" aria-hidden="true">
							<path d="M5 12h14"/>
							<path d="M12 5v14"/>
						</svg>
					</a></div>
				</div>
			</div>
		</div>
	</section>
	<section class="w-full py-24 bg-gallery-100 border-t border-gallery-200">
		<div class="max-w-[1400px] mx-auto px-6 md:px-12">
			<div class="text-center mb-16"><span class="font-sans text-xs tracking-[0.2em] uppercase text-clay-500">Our Promise</span>
				<h2 class="font-serif text-3xl mt-4 text-gallery-900">For The Discerning Collector</h2></div>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
				<div class="flex flex-col items-center text-center space-y-4">
					<div class="w-16 h-16 rounded-full bg-gallery-200 flex items-center justify-center text-gallery-600 mb-2">
						<svg
								xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-shield-check" aria-hidden="true">
							<path
									d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
							<path d="m9 12 2 2 4-4"/>
						</svg>
					</div>
					<h3 class="font-serif text-xl text-gallery-800">Certified Authenticity</h3>
					<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-xs">Every piece arrives with signed
						documentation verifying its provenance and artist origin.</p></div>
				<div class="flex flex-col items-center text-center space-y-4">
					<div class="w-16 h-16 rounded-full bg-gallery-200 flex items-center justify-center text-gallery-600 mb-2">
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
					<h3 class="font-serif text-xl text-gallery-800">White-Glove Shipping</h3>
					<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-xs">Specialized art handlers ensure your
						sculpture travels securely from studio to sanctuary.</p></div>
				<div class="flex flex-col items-center text-center space-y-4">
					<div class="w-16 h-16 rounded-full bg-gallery-200 flex items-center justify-center text-gallery-600 mb-2">
						<svg
								xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-user-check" aria-hidden="true">
							<path d="m16 11 2 2 4-4"/>
							<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
							<circle cx="9" cy="7" r="4"/>
						</svg>
					</div>
					<h3 class="font-serif text-xl text-gallery-800">Curator Consultation</h3>
					<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-xs">Schedule a private session with our
						team to find the form that speaks to your space.</p></div>
			</div>
		</div>
	</section>
	<section class="w-full py-32 bg-[#F9F8F6] border-t border-gallery-200">
		<div class="max-w-xl mx-auto px-8 text-center flex flex-col items-center">
			<div
					class="w-28 h-28 rounded-full overflow-hidden mb-10 border border-gallery-300 shadow-xl shadow-gallery-200/50">
				<img
						alt="Founder inspecting sculpture" class="w-full h-full object-cover filter grayscale contrast-125"
						src="https://images.unsplash.com/photo-1629196914168-3a964433845c?q=80&amp;w=400&amp;auto=format&amp;fit=crop">
			</div>
			<div class="mb-10 animate-fade-in-up"><h3 class="font-serif text-2xl md:text-3xl text-gallery-900 mb-6">
				Hand-Inspected in New York.</h3>
				<p class="font-sans text-sm md:text-base text-gallery-600 leading-relaxed">Every piece that leaves our studio
					is personally examined for quality and provenance. We don't just sell objects; we act as custodians until
					they find their permanent home with you.</p></div>
			<div class="animate-fade-in-up" style="animation-delay: 0.2s;"><span
					class="font-script text-4xl text-gallery-800 transform -rotate-2 block">Elena C., Founder</span></div>
		</div>
	</section>
</template>