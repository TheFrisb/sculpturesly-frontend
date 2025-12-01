<script setup lang="ts">

</script>

<template>
	<div class="w-full bg-gallery-50 min-h-screen pt-32 pb-20">
		<div class="max-w-[1600px] mx-auto px-6 md:px-12 mb-12"><h1
				class="font-serif text-5xl md:text-6xl text-gallery-900 mb-4">Figurative Forms.</h1>
			<p class="font-sans text-gallery-500 text-sm tracking-wide">Exploring the human condition through bronze and
				stone. (12 Works)</p></div>
		<div
				class="sticky top-[85px] z-30 bg-gallery-50/95 backdrop-blur-md border-b border-gallery-200 py-4 mb-16 transition-all">
			<div class="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
				<div class="flex space-x-4 overflow-x-visible no-scrollbar pb-2 md:pb-0">
					<div class="relative">
						<button
								class="group flex items-center space-x-2 px-5 py-3 border rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border-gallery-300 text-gallery-600 hover:border-gallery-800 hover:text-gallery-900 bg-white">
							<span>Material</span>
							<svg
									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-chevron-down transform transition-transform duration-300 text-gallery-400 group-hover:text-gallery-900"
									aria-hidden="true">
								<path d="m6 9 6 6 6-6"/>
							</svg>
						</button>
						<div
								class="absolute top-full left-0 mt-2 w-56 bg-white border border-gallery-200 shadow-xl rounded-sm py-2 z-50 transform origin-top transition-all duration-200 opacity-0 scale-95 pointer-events-none">
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-clay-600 bg-gallery-50">
								<span>All Materials</span>
								<svg
										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-check text-clay-500" aria-hidden="true">
									<path d="M20 6 9 17l-5-5"/>
								</svg>
							</button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Bronze</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Marble</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Clay</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Stone</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Metal</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Glass</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Concrete</span></button>
						</div>
					</div>
					<div class="relative">
						<button
								class="group flex items-center space-x-2 px-5 py-3 border rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border-gallery-300 text-gallery-600 hover:border-gallery-800 hover:text-gallery-900 bg-white">
							<span>Price</span>
							<svg
									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-chevron-down transform transition-transform duration-300 text-gallery-400 group-hover:text-gallery-900"
									aria-hidden="true">
								<path d="m6 9 6 6 6-6"/>
							</svg>
						</button>
						<div
								class="absolute top-full left-0 mt-2 w-56 bg-white border border-gallery-200 shadow-xl rounded-sm py-2 z-50 transform origin-top transition-all duration-200 opacity-0 scale-95 pointer-events-none">
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-clay-600 bg-gallery-50">
								<span>All Prices</span>
								<svg
										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-check text-clay-500" aria-hidden="true">
									<path d="M20 6 9 17l-5-5"/>
								</svg>
							</button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Under $1,000</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>$1k - $5k</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>$5k - $10k</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Over $10k</span></button>
						</div>
					</div>
					<div class="relative">
						<button
								class="group flex items-center space-x-2 px-5 py-3 border rounded-full text-xs font-sans uppercase tracking-wider transition-all duration-300 border-gallery-300 text-gallery-600 hover:border-gallery-800 hover:text-gallery-900 bg-white">
							<span>Scale</span>
							<svg
									xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-chevron-down transform transition-transform duration-300 text-gallery-400 group-hover:text-gallery-900"
									aria-hidden="true">
								<path d="m6 9 6 6 6-6"/>
							</svg>
						</button>
						<div
								class="absolute top-full left-0 mt-2 w-56 bg-white border border-gallery-200 shadow-xl rounded-sm py-2 z-50 transform origin-top transition-all duration-200 opacity-0 scale-95 pointer-events-none">
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-clay-600 bg-gallery-50">
								<span>All Sizes</span>
								<svg
										xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-check text-clay-500" aria-hidden="true">
									<path d="M20 6 9 17l-5-5"/>
								</svg>
							</button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Tabletop (&lt; 60cm)</span></button>
							<button
									class="w-full text-left px-4 py-3 text-xs font-sans uppercase tracking-wider flex justify-between items-center hover:bg-gallery-100 transition-colors text-gallery-600">
								<span>Floor-Standing (&gt; 60cm)</span></button>
						</div>
					</div>
				</div>
				<div class="flex items-center space-x-6">
					<button
							class="hidden md:flex items-center space-x-2 text-xs font-sans uppercase tracking-widest text-gallery-500 hover:text-clay-600 transition-colors">
						<span>All Filters</span>
						<svg
								xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-plus" aria-hidden="true">
							<path d="M5 12h14"/>
							<path d="M12 5v14"/>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<div class="max-w-[1600px] mx-auto px-6 md:px-12 min-h-[400px]">
			<div class="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="The Silent Void"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 80cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Elena Vora</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">The Silent
							Void</h3><span class="font-sans text-sm text-gallery-600">$9,500</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Fragmented Memory"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 50cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Davide Russo</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Fragmented
							Memory</h3><span class="font-sans text-sm text-gallery-600">$450</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Equilibrium II"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 70cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Sarah Jenkins</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Equilibrium
							II</h3><span class="font-sans text-sm text-gallery-600">$1,200</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Ceramic Study No. 5"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 40cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Koji Tanaka</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Ceramic Study
							No. 5</h3><span class="font-sans text-sm text-gallery-600">$250</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Ascension"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 90cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Marcus Thorne</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Ascension</h3>
							<span class="font-sans text-sm text-gallery-600">$10,500</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Soft Landing"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 60cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Anna Briar</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Soft
							Landing</h3><span class="font-sans text-sm text-gallery-600">$3,200</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Obsidian Flow"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 55cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Jonas Heil</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Obsidian
							Flow</h3><span class="font-sans text-sm text-gallery-600">$6,800</span></div>
					</div>
				</div>
				<div class="group break-inside-avoid relative cursor-pointer mb-12 animate-fade-in-up">
					<div class="relative overflow-hidden mb-4 bg-gallery-200"><img
							alt="Minimalist Form 8"
							class="w-full h-auto object-cover transform transition-transform duration-[1s] ease-out group-hover:scale-105 filter grayscale-[0.1] group-hover:grayscale-0 opacity-100 group-hover:opacity-90"
							src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&amp;w=800&amp;auto=format&amp;fit=crop">
						<div
								class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
							<div class="bg-black/40 backdrop-blur-sm px-6 py-3 border border-white/20"><span
									class="font-mono text-xs text-white tracking-widest uppercase">H 45cm</span></div>
						</div>
					</div>
					<div class="flex flex-col space-y-1"><span
							class="font-sans text-[10px] uppercase tracking-widest text-gallery-500">Studio Unknown</span>
						<div class="flex justify-between items-baseline"><h3
								class="font-serif text-xl text-gallery-900 group-hover:text-clay-600 transition-colors">Minimalist
							Form 8</h3><span class="font-sans text-sm text-gallery-600">$200</span></div>
					</div>
				</div>
			</div>
			<div class="mt-24 flex justify-center">
				<button
						class="flex flex-col items-center space-y-2 group text-gallery-400 hover:text-clay-600 transition-colors">
					<span class="font-sans text-[10px] uppercase tracking-[0.3em]">Load More</span>
					<div
							class="w-px h-12 bg-gallery-300 group-hover:h-16 group-hover:bg-clay-400 transition-all duration-500"/>
				</button>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>