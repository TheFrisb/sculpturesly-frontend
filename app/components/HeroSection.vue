<script setup lang="ts">
import {LucideArrowRight} from 'lucide-vue-next'
import type {ProductListItem} from '~/types/Product'

interface FeaturedSectionItem {
	image: string;
	product: ProductListItem;
}

const {data: slides} = await useAPI<FeaturedSectionItem[]>('/api/sections/featured-products/', {
	key: 'hero-featured-products',
})

const [containerRef, slider] = useKeenSlider(
		{
			loop: true,
			drag: false,
		},
		[
			(slider) => {
				let timeout
				let mouseOver = false

				function clearNextTimeout() {
					clearTimeout(timeout)
				}

				function nextTimeout() {
					clearTimeout(timeout)
					if (mouseOver) return
					timeout = setTimeout(() => {
						slider.next()
					}, 2000)
				}

				slider.on("created", () => {
					slider.container.addEventListener("mouseover", () => {
						mouseOver = true
						clearNextTimeout()
					})
					slider.container.addEventListener("mouseout", () => {
						mouseOver = false
						nextTimeout()
					})
					nextTimeout()
				})
				slider.on("dragStarted", clearNextTimeout)
				slider.on("animationEnded", nextTimeout)
				slider.on("updated", nextTimeout)
			},
		]
);

const currentSlide = ref(0)
</script>

<template>
	<section
			class="relative min-h-[90vh] w-full pt-32 pb-20 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col justify-center">
		<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center h-full">

			<div class="lg:col-span-7 h-[60vh] lg:h-[80vh] w-full order-1 relative animate-fade-in group">
				<div class="absolute inset-0 bg-gallery-100/10 mix-blend-multiply pointer-events-none z-20"/>

				<!-- Slider Container -->
				<div class="relative w-full h-full bg-gallery-200 overflow-hidden shadow-2xl">
					<div v-if="slides && slides.length > 0" ref="containerRef" class="keen-slider h-full w-full">
						<div
								v-for="(item, index) in slides"
								:key="item.id"
								class="keen-slider__slide h-full w-full absolute top-0 left-0"
								:style="{ zIndex: slides.length - index }"
						>
							<NuxtLink
									:to="`/product/${item.product.slug}`"
									class="block w-full h-full cursor-pointer"
									:aria-label="`View ${item.product.title}`"
							>
								<img
										:src="item.image"
										:alt="item.product.title"
										class="w-full h-full object-cover object-center filter grayscale-[0.2] contrast-[1.05] transition-transform duration-[6000ms] ease-out"
										:class="{ 'scale-110': currentSlide === index }"
								>
							</NuxtLink>
							<div
									class="absolute bottom-6 right-6 z-30 hidden md:block transition-opacity duration-1000"
							>
								<p class="font-sans text-[10px] uppercase tracking-widest text-white/90 drop-shadow-md">
									Fig. 0{{ index + 1 }} — {{ item.product.title }}
								</p>
							</div>
						</div>

					</div>

					<!-- Loading State -->
					<div v-else class="w-full h-full bg-gallery-300 flex items-center justify-center">
						<span class="font-serif text-gallery-500 italic">Loading curation...</span>
					</div>

					<!-- Gradient Overlay -->
					<div
							class="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-gallery-900/10 to-transparent opacity-60 z-10 pointer-events-none"/>

				</div>
			</div>
			<!-- --- END CAROUSEL --- -->

			<!-- Content Side (Static) -->
			<div class="lg:col-span-5 flex flex-col space-y-12 z-10 order-2 pl-0 lg:pl-12">
				<div class="animate-fade-in-up">
          <span class="block font-sans text-xs tracking-[0.25em] uppercase text-clay-500 mb-6 pl-1">
            Est. 2024 — New York
          </span>
					<h1 class="font-serif text-6xl md:text-7xl lg:text-8xl leading-[0.95] text-gallery-900 tracking-tighter mb-8">
						Curating <br>
						<span class="italic font-light text-gallery-600 ml-12">Form</span> &amp; <br>Space.
					</h1>
					<div class="w-12 h-[1px] bg-gallery-900 mb-8"/>
					<p class="font-sans text-gallery-600 leading-relaxed text-sm max-w-sm">
						We believe objects have souls.
						Sculpturesly offers a quiet collection of tactile forms designed to ground your environment and elevate
						your daily rituals.
					</p>
				</div>
				<div class="animate-fade-in-up" style="animation-delay: 0.2s;">
					<NuxtLink
							to="/category/all"
							class="group flex items-center space-x-6 text-gallery-900 hover:text-clay-600 transition-colors duration-500"
					>
						<span class="uppercase tracking-[0.2em] text-xs font-medium">Explore Collections</span>
						<div
								class="w-8 h-8 rounded-full border border-gallery-300 flex items-center justify-center group-hover:border-clay-500 transition-colors duration-500"
						>
							<LucideArrowRight
									:size="14"
									class="transform group-hover:translate-x-0.5 transition-transform duration-300"
							/>
						</div>
					</NuxtLink>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.scale-110 {
	transform: scale(1.1);
}
</style> 