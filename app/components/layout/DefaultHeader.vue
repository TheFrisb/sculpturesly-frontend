<script setup lang="ts">

</script>

<template>
	<header
			role="banner" aria-label="Main Navigation"
			class="fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b border-gallery-900/5 bg-transparent">
		<div
				class="max-w-[1600px] mx-auto px-6 md:px-12 py-6 md:py-8 flex items-center justify-between h-full relative z-50">
			<div class="flex md:hidden items-center space-x-5 z-50 text-gallery-900">
				<MenuSidebarButton/>
				<button aria-label="Open Search" class="hover:text-clay-500 transition-colors">
					<LucideSearch :size="22"/>
				</button>
			</div>
			<div
					class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:transform-none md:translate-x-0 md:translate-y-0 flex-shrink-0 z-50">
				<NuxtLink
						to="/" class="font-serif text-3xl md:text-4xl font-medium tracking-tight text-gallery-900 block pt-1"
						aria-label="Sculpturesly Home">
					Sculpturesly.
				</NuxtLink>
			</div>
			<div
					class="hidden md:flex space-x-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full items-center">
				<div class="h-full flex items-center">
					<NuxtLink
							to="/category/all"
							class="font-sans text-xs tracking-[0.2em] text-gallery-600 hover:text-gallery-900 transition-colors duration-300 uppercase py-2">
						Collection
					</NuxtLink>
				</div>
				<div class="h-full flex items-center">
					<NuxtLink
							to="/trade"
							class="font-sans text-xs tracking-[0.2em] text-gallery-600 hover:text-gallery-900 transition-colors duration-300 uppercase py-2">
						Trade
					</NuxtLink>
				</div>
				<div class="h-full flex items-center">
					<NuxtLink
							href="/studio"
							class="font-sans text-xs tracking-[0.2em] text-gallery-600 hover:text-gallery-900 transition-colors duration-300 uppercase py-2">
						Studio
					</NuxtLink>
				</div>
				<!--				<div class="h-full flex items-center">-->
				<!--					<NuxtLink-->
				<!--							to="/journal"-->
				<!--							class="font-sans text-xs tracking-[0.2em] text-gallery-600 hover:text-gallery-900 transition-colors duration-300 uppercase py-2">-->
				<!--						Journal-->
				<!--					</NuxtLink>-->
				<!--				</div>-->
			</div>
			<div class="flex items-center space-x-6 md:space-x-8 text-gallery-800 z-50">
				<button aria-label="Open Search" class="hidden md:block hover:text-clay-500 transition-colors duration-300">
					<LucideSearch :size="20"/>
				</button>
				<button
						aria-label="Shopping Bag, 0 items"
						class="hover:text-clay-500 transition-colors duration-300 relative group">
					<LucideShoppingBag :size="22"/>
				</button>
			</div>
		</div>
		<div
				class="absolute top-full left-0 w-full bg-[#F9F8F6] border-b border-gallery-200 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-top max-h-0 opacity-0 -translate-y-2"
				role="region" aria-label="Collection Menu">
			<div class="max-w-[1600px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
				<div class="flex flex-col space-y-6 animate-fade-in-up" style="animation-delay: 0.05s;">
					<h4 class="font-sans text-[10px] uppercase tracking-[0.25em] text-gallery-400">By Form</h4>
					<ul class="flex flex-col space-y-4">
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Abstract
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-clay-600 pl-2 border-l-2 border-clay-400 transition-all block">
								Figurative
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Fauna
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Objects
							</a>
						</li>
					</ul>
				</div>
				<div class="flex flex-col space-y-6 animate-fade-in-up" style="animation-delay: 0.1s;">
					<h4 class="font-sans text-[10px] uppercase tracking-[0.25em] text-gallery-400">By Space</h4>
					<ul class="flex flex-col space-y-4">
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Plinth &amp; Tabletop
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Relief &amp; Wall
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Garden &amp; Estate
							</a>
						</li>
					</ul>
				</div>
				<div class="flex flex-col space-y-6 animate-fade-in-up" style="animation-delay: 0.15s;">
					<h4 class="font-sans text-[10px] uppercase tracking-[0.25em] text-gallery-400">Material</h4>
					<ul class="flex flex-col space-y-4">
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Bronze
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Marble
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">
								Terracotta
							</a>
						</li>
						<li>
							<a href="#" class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block">Wood
							</a>
						</li>
					</ul>
				</div>
				<div class="flex flex-col space-y-6 animate-fade-in-up" style="animation-delay: 0.2s;">
					<h4 class="font-sans text-[10px] uppercase tracking-[0.25em] text-gallery-400 invisible">Featured</h4>
					<a
							href="#" class="group relative w-full aspect-[4/5] overflow-hidden bg-gallery-200 block"
							aria-label="Featured Sculpture: The Bronze Torso">
						<img
								alt="The Bronze Torso Sculpture"
								class="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
								src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&amp;w=600&amp;auto=format&amp;fit=crop">
						<div class="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"/>
						<div class="absolute bottom-6 left-6 text-white z-10">
							<span class="font-sans text-[10px] uppercase tracking-widest block mb-2 opacity-90">Featured</span>
							<span class="font-serif text-xl block">The Bronze Torso</span>
							<div
									class="flex items-center space-x-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
								<span class="font-sans text-xs uppercase tracking-wider">View</span>
								<svg
										xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-arrow-right" aria-hidden="true">
									<path d="M5 12h14"/>
									<path d="m12 5 7 7-7 7"/>
								</svg>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
		<div
				class="fixed inset-0 bg-gallery-50/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out opacity-0 pointer-events-none"
				role="dialog" aria-modal="true" aria-label="Mobile Navigation">
			<div class="flex flex-col space-y-10 text-center">
				<a
						href="#collection"
						class="font-serif text-4xl text-gallery-800 hover:text-clay-500 transition-colors duration-300 transform translate-y-8 opacity-0"
						style="transition-delay: 0ms;">
					Collection
				</a>
				<a
						href="#trade"
						class="font-serif text-4xl text-gallery-800 hover:text-clay-500 transition-colors duration-300 transform translate-y-8 opacity-0"
						style="transition-delay: 100ms;">
					Trade
				</a>
				<a
						href="#studio"
						class="font-serif text-4xl text-gallery-800 hover:text-clay-500 transition-colors duration-300 transform translate-y-8 opacity-0"
						style="transition-delay: 200ms;">
					Studio
				</a>
				<a
						href="#journal"
						class="font-serif text-4xl text-gallery-800 hover:text-clay-500 transition-colors duration-300 transform translate-y-8 opacity-0"
						style="transition-delay: 300ms;">
					Journal
				</a>
			</div>
		</div>

		<MenuSidebarPanel/>
	</header>
</template>
