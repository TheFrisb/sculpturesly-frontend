<script setup lang="ts">
import {onMounted, ref, watch} from 'vue';

const route = useRoute();
const slug = computed(() => route.params.slug as string);

const {fetchProduct} = useProducts();
const {addToCart} = useCart();
const {sendViewContentEvent, sendAddToCartEvent} = useFacebookPixel();

const {data: product, error} = await fetchProduct(slug.value);

if (error.value?.statusCode === 404 || !product.value) {
	throw createError({
		statusCode: 404,
		statusMessage: 'Product not found',
		fatal: true
	});
}

useHead({
	title: product.value ? `${product.value.title} | Sculpturesly` : 'Object',
	meta: [
		{name: 'description', content: product.value?.description || 'View this exclusive sculpture.'}
	]
});

useSeoMeta(resolveSeoTags(() => product.value?.seo_metadata))

const trackViewContent = () => {
	if (product.value) {
		const defaultVariantSku = product.value.variants?.[0]?.sku;
		sendViewContentEvent(product.value, defaultVariantSku);
	}
};

const url = useRequestURL();
useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify(buildProductJsonLd(product.value, url.href), null, 2)
        }
    ]
})

onMounted(() => {
	trackViewContent();
});

watch(slug, () => {
	if (product.value) {
		trackViewContent();
	}
});

const quantity = ref(1);
const activeAccordion = ref<string | null>('specs');

const increment = () => quantity.value++;
const decrement = () => {
	if (quantity.value > 1) quantity.value--;
};

const variantAttributes = computed(() => product.value?.variants?.[0]?.attributes || {});
const allowedAttributes = computed(() => product.value?.product_type?.allowed_attributes || []);

const specAttributes = computed(() => {
    const ignoredSlugs = ['gross-weight', 'pieces-per-carton', 'pieces-per-set'];
    return allowedAttributes.value
        .filter(attr => !ignoredSlugs.includes(attr.slug))
        .map(attr => ({
            name: attr.name,
            value: variantAttributes.value[attr.slug]
        }))
        .filter(item => item.value);
});

const shippingAttributes = computed(() => {
    const targetSlugs = ['gross-weight', 'pieces-per-carton', 'pieces-per-set'];
    return allowedAttributes.value
        .filter(attr => targetSlugs.includes(attr.slug))
        .map(attr => ({
             name: attr.name,
             value: variantAttributes.value[attr.slug]
        }))
        .filter(item => item.value);
});

const handleAddToCart = async () => {
	if (!product.value) return;

	const selectedVariant = product.value.variants?.[0];

	if (selectedVariant) {
		await addToCart({
			product_variant_id: selectedVariant.id,
			quantity: quantity.value
		});

		console.log(product.value)

		sendAddToCartEvent(
				product.value,
				quantity.value,
				selectedVariant.sku
		);

	} else {
		console.error("No variant ID found for this product");
	}
};

const toggleAccordion = (section: string) => {
	activeAccordion.value = activeAccordion.value === section ? null : section;
};
</script>

<template>
	<div>
		<article v-if="product" class="w-full bg-gallery-50">
			<section class="pt-32 pb-20 max-w-[1800px] mx-auto px-6 md:px-12">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative">
					<div class="flex flex-col space-y-12">
						<div class="w-full bg-gallery-200 overflow-hidden relative group">
							<NuxtImg
									:alt="product.title"
									class="w-full h-auto object-cover transform transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]"
									:src="product.thumbnail"
                                    format="webp"
                                    sizes="100vw lg:50vw"
                                    preload
							/>
						</div>
						<div
								v-if="product.gallery_images && product.gallery_images.length > 0"
								class="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div
									v-for="img in product.gallery_images.slice(0, 2)"
									:key="img.id"
									class="w-full aspect-[4/5] bg-gallery-200 overflow-hidden"
							>
								<NuxtImg
										:src="img.image"
										:alt="img.alt_text || product.title"
										class="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
                                        format="webp"
                                        sizes="100vw md:50vw"
                                        loading="lazy"
								/>
							</div>
						</div>
					</div>
					<div class="relative h-full">
						<div class="lg:sticky lg:top-32 flex flex-col h-full max-w-xl">
							<header class="mb-10 animate-fade-in-up">
								<h2 class="font-sans text-xs tracking-[0.25em] uppercase text-gallery-500 mb-4" itemprop="brand">
									zaza
								</h2>
								<h1
										class="font-serif text-4xl md:text-5xl lg:text-6xl text-gallery-900 mb-6 leading-tight">
									{{ product.title }}
								</h1>
								<p class="font-sans text-xs uppercase tracking-[0.2em] text-clay-500 mb-2">
									{{ product.status === 'PUBLISHED' ? 'Original Artwork' : product.status }}
								</p>
								<p class="font-sans text-xl text-gallery-600 font-light" itemprop="offers">
									<span itemprop="price">{{ product.base_price }}</span>
								</p>
							</header>

							<div class="border-gallery-200 pb-8 animate-fade-in-up" style="animation-delay: 0.1s;">
								<div class="flex items-center space-x-8 mb-8">
									<!-- Quantity Selector -->
									<div class="flex items-center border border-gallery-300 px-4 py-3 space-x-6">
										<button
												class="text-gallery-400 hover:text-gallery-900" aria-label="Decrease quantity"
												@click="decrement">
											<LucideMinus :size="14"/>
										</button>
										<span class="font-sans text-sm text-gallery-900 w-4 text-center">{{ quantity }}</span>
										<button
												class="text-gallery-400 hover:text-gallery-900" aria-label="Increase quantity"
												@click="increment">
											<LucidePlus :size="14"/>
										</button>
									</div>
									<!-- Add to Cart -->
									<button
											class="flex-1 bg-clay-500 hover:bg-clay-600 text-white font-sans text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 shadow-md shadow-clay-900/10 hover:shadow-clay-900/20"
											@click="handleAddToCart"
									>
										Acquire Art
									</button>
								</div>
							</div>

							<div class="mb-12 animate-fade-in-up" style="animation-delay: 0.2s;">
								<div class="border-t border-gallery-300">
									<button
											class="w-full py-6 flex justify-between items-center text-left group"
											:aria-expanded="activeAccordion === 'specs'"
											@click="toggleAccordion('specs')">
										<span class="font-serif text-lg text-gallery-800 group-hover:text-clay-600 transition-colors">Dimensions &amp; Materials</span>
										<LucideChevronDown
												:size="20"
												class="text-gallery-400 transform transition-transform duration-300"
												:class="{ 'rotate-180': activeAccordion === 'specs' }"
										/>
									</button>
									<div class="overflow-hidden transition-all duration-500 ease-in-out" :class="activeAccordion === 'specs' ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'">
										<div class="font-sans text-sm text-gallery-600 leading-relaxed pr-4">
											<div v-if="specAttributes.length > 0" class="space-y-4">
                                                <div v-for="attr in specAttributes" :key="attr.name" class="flex justify-between border-b border-gallery-200 pb-2 last:border-0">
                                                    <span class="text-gallery-500 uppercase tracking-widest text-xs">{{ attr.name }}</span>
                                                    <span class="text-gallery-900 font-medium">{{ attr.value }}</span>
                                                </div>
                                            </div>
                                            <p v-else class="italic text-gallery-400">No specifications available.</p>
										</div>
									</div>
								</div>
								<div class="border-t border-gallery-300">
									<button
											class="w-full py-6 flex justify-between items-center text-left group"
											:aria-expanded="activeAccordion === 'shipping'"
											@click="toggleAccordion('shipping')"
									>
										<span class="font-serif text-lg text-gallery-800 group-hover:text-clay-600 transition-colors">Provenance &amp; Shipping</span>
										<LucideChevronDown
												:size="20"
												class="text-gallery-400 transform transition-transform duration-300"
												:class="{ 'rotate-180': activeAccordion === 'shipping' }"
										/>
									</button>
									<div class="overflow-hidden transition-all duration-500 ease-in-out" :class="activeAccordion === 'shipping' ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'">
										<div class="font-sans text-sm text-gallery-600 leading-relaxed pr-4">
                                            <p class="mb-4">Direct from Artist Studio. Fully authentic.</p>
											<p class="mb-4">Ships in a custom-built crate via White Glove service. Fully insured.</p>
                                            
                                            <div v-if="shippingAttributes.length > 0" class="mt-6 pt-4 border-t border-gallery-200 space-y-2">
                                                <div v-for="attr in shippingAttributes" :key="attr.name" class="flex justify-between">
                                                    <span class="text-gallery-500 text-xs uppercase tracking-wider">{{ attr.name }}:</span>
                                                    <span class="text-gallery-800 text-xs font-medium">{{ attr.value }}</span>
                                                </div>
                                            </div>
                                        </div>
									</div>
								</div>
							</div>
							<div class="flex items-center justify-start space-x-8 pt-2">
								<div class="flex items-center space-x-3 group">
									<LucideAward :size="20" class="text-gallery-800"/>
									<div class="flex flex-col"><h4 class="font-serif text-sm text-gallery-900">Authenticity</h4><span
											class="font-sans text-[10px] text-gallery-500 uppercase tracking-wider">Verified &amp; Signed</span>
									</div>
								</div>
								<div class="w-[1px] h-8 bg-gallery-300/50"/>
								<div class="flex items-center space-x-3 group">
									<LucideTruck :size="20" class="text-gallery-800"/>
									<div class="flex flex-col"><h4 class="font-serif text-sm text-gallery-900">Shipping</h4><span
											class="font-sans text-[10px] text-gallery-500 uppercase tracking-wider">Insured White-Glove</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="w-full py-24 bg-gallery-100/50 border-y border-gallery-200/50">
				<div class="max-w-[1400px] mx-auto px-6 md:px-12"><h3
						class="font-serif text-2xl text-gallery-900 mb-12 text-center">Process &amp; Creation</h3>
					<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div class="flex flex-col space-y-4 group">
							<div class="w-full aspect-square bg-gallery-200 overflow-hidden"><NuxtImg
									alt="Raw Materials"
									class="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
									src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=80&amp;w=600&amp;auto=format&amp;fit=crop"
                                    format="webp"
                                    sizes="100vw md:33vw"
                                    loading="lazy"
                            />
							</div>
							<p class="font-serif text-sm italic text-gallery-600 border-l border-clay-400 pl-4">Sourced from recycled
								industrial bronze.</p></div>
						<div class="flex flex-col space-y-4 group">
							<div class="w-full aspect-square bg-gallery-200 overflow-hidden"><NuxtImg
									alt="Casting Process"
									class="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
									src="https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&amp;w=600&amp;auto=format&amp;fit=crop"
                                    format="webp"
                                    sizes="100vw md:33vw"
                                    loading="lazy"
                            />
							</div>
							<p class="font-serif text-sm italic text-gallery-600 border-l border-clay-400 pl-4">Lost-wax casted at
								1200°C.</p></div>
						<div class="flex flex-col space-y-4 group">
							<div class="w-full aspect-square bg-gallery-200 overflow-hidden"><NuxtImg
									alt="Finishing"
									class="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
									src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&amp;w=600&amp;auto=format&amp;fit=crop"
                                    format="webp"
                                    sizes="100vw md:33vw"
                                    loading="lazy"
                            />
							</div>
							<p class="font-serif text-sm italic text-gallery-600 border-l border-clay-400 pl-4">Hand-polished patina
								for 40 hours.</p></div>
					</div>
				</div>
			</section>
			<section class="w-full py-24 bg-gallery-50">
				<div class="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
					<div class="mb-12 md:mb-0 md:pr-12 max-w-sm text-center md:text-left"><span
							class="font-sans text-xs tracking-[0.2em] uppercase text-gallery-400">Maintenance</span>
						<h3 class="font-serif text-3xl text-gallery-900 mt-3 mb-6">Preserving the Form</h3>
						<p class="font-sans text-sm text-gallery-500 leading-relaxed">Bronze is a living material. Over decades, it
							will develop a deeper complexity. Follow these clinical steps to maintain its original luster.</p></div>
					<div class="flex space-x-8 md:space-x-16">
						<div class="flex flex-col items-center text-center space-y-3 group">
							<div
									class="relative w-16 h-16 flex items-center justify-center rounded-full border border-gallery-200 bg-gallery-50 text-gallery-400 group-hover:border-clay-300 group-hover:text-clay-500 transition-all duration-500">
								<svg
										xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-feather" aria-hidden="true">
									<path
											d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/>
									<path d="M16 8 2 22"/>
									<path d="M17.5 15H9"/>
								</svg>
							</div>
							<div><h4 class="font-sans text-xs uppercase tracking-widest text-gallery-800">Dusting</h4>
								<p class="font-serif text-sm italic text-gallery-500 mt-1">Microfiber Only</p></div>
						</div>
						<div class="flex flex-col items-center text-center space-y-3 group">
							<div
									class="relative w-16 h-16 flex items-center justify-center rounded-full border border-gallery-200 bg-gallery-50 text-gallery-400 group-hover:border-clay-300 group-hover:text-clay-500 transition-all duration-500">
								<svg
										xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-sun" aria-hidden="true">
									<circle cx="12" cy="12" r="4"/>
									<path d="M12 2v2"/>
									<path d="M12 20v2"/>
									<path d="m4.93 4.93 1.41 1.41"/>
									<path d="m17.66 17.66 1.41 1.41"/>
									<path d="M2 12h2"/>
									<path d="M20 12h2"/>
									<path d="m6.34 17.66-1.41 1.41"/>
									<path d="m19.07 4.93-1.41 1.41"/>
								</svg>
								<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
									<div
											class="w-8 h-[1px] bg-gallery-400/50 rotate-45 group-hover:bg-clay-500/50 transition-colors"/>
								</div>
							</div>
							<div><h4 class="font-sans text-xs uppercase tracking-widest text-gallery-800">Lighting</h4>
								<p class="font-serif text-sm italic text-gallery-500 mt-1">Avoid Direct UV</p></div>
						</div>
						<div class="flex flex-col items-center text-center space-y-3 group">
							<div
									class="relative w-16 h-16 flex items-center justify-center rounded-full border border-gallery-200 bg-gallery-50 text-gallery-400 group-hover:border-clay-300 group-hover:text-clay-500 transition-all duration-500">
								<svg
										xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-droplets" aria-hidden="true">
									<path
											d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"/>
									<path
											d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"/>
								</svg>
								<div class="absolute inset-0 flex items-center justify-center pointer-events-none">
									<div
											class="w-8 h-[1px] bg-gallery-400/50 rotate-45 group-hover:bg-clay-500/50 transition-colors"/>
								</div>
							</div>
							<div><h4 class="font-sans text-xs uppercase tracking-widest text-gallery-800">Humidity</h4>
								<p class="font-serif text-sm italic text-gallery-500 mt-1">Keep Dry</p></div>
						</div>
					</div>
				</div>
			</section>
			<section class="w-full py-24 bg-gallery-100">
				<div class="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div class="order-2 md:order-1"><h3 class="font-serif text-3xl text-gallery-900 mb-4">Arriving Safely.</h3>
						<p class="font-sans text-gallery-600 leading-relaxed max-w-md mb-8">We treat the journey as part of the art.
							Every piece is custom-crated in architectural-grade plywood and secured with high-density foam, fully
							insured against the unpredictable.</p>
						<div class="flex items-center space-x-2 text-clay-600 font-sans text-xs uppercase tracking-widest">
							<svg
									xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
									stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
									class="lucide lucide-truck" aria-hidden="true">
								<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
								<path d="M15 18H9"/>
								<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
								<circle cx="17" cy="18" r="2"/>
								<circle cx="7" cy="18" r="2"/>
							</svg>
							<span>Global White Glove Tracked</span></div>
					</div>
					<div class="order-1 md:order-2 h-[400px] bg-gallery-200 overflow-hidden relative"><NuxtImg
							alt="Wooden Shipping Crate" class="w-full h-full object-cover filter sepia-[0.2] contrast-[0.9]"
							src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="100vw md:50vw"
                            loading="lazy"
                    />
						<div
								class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 font-mono text-xs text-gallery-900">
							CRATE ID: #SC-9921
						</div>
					</div>
				</div>
			</section>
			<section class="w-full py-32 bg-gallery-50 border-b border-gallery-200">
				<div class="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
					<div class="w-32 h-32 rounded-full overflow-hidden mb-8 border-2 border-gallery-100"><NuxtImg
							alt="Elara Vance Portrait" class="w-full h-full object-cover grayscale"
							src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&amp;w=400&amp;auto=format&amp;fit=crop"
                            format="webp"
                            sizes="128px"
                            loading="lazy"
                    />
					</div>
					<h3 class="font-serif text-2xl text-gallery-900 mb-2">Elara Vance</h3>
					<div class="h-8 mb-6 opacity-70">
						<svg
								viewBox="0 0 200 60" height="100%" class="fill-none stroke-gallery-800" stroke-width="2"
								aria-hidden="true">
							<path d="M10,40 Q30,10 50,40 T90,40 T130,30 Q150,10 160,40 L180,35"/>
						</svg>
					</div>
					<p class="font-sans text-gallery-600 leading-relaxed mb-8 max-w-lg">"My work is an attempt to give silence a
						physical weight. To make the invisible, tangible." Based in Copenhagen, Vance has been exploring the limits
						of cast bronze for over a decade.</p><a
						href="#"
						class="inline-flex items-center space-x-2 text-xs font-sans uppercase tracking-[0.2em] text-gallery-900 hover:text-clay-600 transition-colors border-b border-gallery-300 pb-1 hover:border-clay-600"><span>View all works by Vance</span>
					<svg
							xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-arrow-right" aria-hidden="true">
						<path d="M5 12h14"/>
						<path d="m12 5 7 7-7 7"/>
					</svg>
				</a></div>
			</section>
			<section class="w-full py-32 bg-gallery-50 border-b border-gallery-200">
				<div class="max-w-[1200px] mx-auto px-6 text-center"><span
						class="font-sans text-xs tracking-[0.2em] uppercase text-clay-500 mb-4 block">International</span>
					<h3 class="font-serif text-3xl md:text-4xl text-gallery-900 mb-4">Held in Private Collections</h3>
					<p class="font-sans text-gallery-600 leading-relaxed max-w-2xl mx-auto mb-16">Works by Elara Vance currently
						reside in private estates and corporate collections across 4 continents.</p>
					<div class="w-full max-w-4xl mx-auto relative opacity-60">
						<svg
								viewBox="0 0 1000 500" class="w-full h-auto fill-gallery-300"
								aria-label="Map showing global collection locations">
							<path d="M150,120 Q200,80 250,150 T200,350 T100,250 T150,120 Z"/>
							<path d="M450,100 Q550,50 600,150 T550,250 T450,200 Z"/>
							<path d="M650,100 Q850,80 900,200 T800,350 T650,250 Z"/>
							<circle cx="210" cy="160" r="4" class="fill-clay-500 animate-pulse-slow"/>
							<circle
									cx="170" cy="180" r="4" class="fill-clay-500 animate-pulse-slow"
									style="animation-delay: 0.5s;"/>
							<circle
									cx="480" cy="130" r="4" class="fill-clay-500 animate-pulse-slow"
									style="animation-delay: 1.2s;"/>
							<circle
									cx="510" cy="140" r="4" class="fill-clay-500 animate-pulse-slow"
									style="animation-delay: 0.8s;"/>
							<circle
									cx="820" cy="170" r="4" class="fill-clay-500 animate-pulse-slow"
									style="animation-delay: 1.5s;"/>
							<circle
									cx="850" cy="320" r="4" class="fill-clay-500 animate-pulse-slow"
									style="animation-delay: 2s;"/>
						</svg>
					</div>
				</div>
			</section>
			<section class="w-full bg-gallery-900 py-6 md:py-8 border-t border-gallery-800">
				<div
						class="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
					<div class="flex items-center space-x-6">
						<div class="hidden md:block w-px h-8 bg-gallery-700"/>
						<span class="font-serif text-lg md:text-xl text-gallery-100 italic">Unsure about the scale? Let us visualize it for you.</span>
					</div>
					<button
							class="flex items-center space-x-3 px-6 py-3 border border-gallery-600 rounded-sm hover:bg-gallery-800 transition-colors group">
						<svg
								xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
								stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
								class="lucide lucide-camera text-clay-300 group-hover:text-white transition-colors" aria-hidden="true">
							<path
									d="M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z"/>
							<circle cx="12" cy="13" r="3"/>
						</svg>
						<span
								class="font-sans text-xs uppercase tracking-widest text-gallery-300 group-hover:text-white transition-colors">Request Virtual Placement</span>
					</button>
				</div>
			</section>
		</article>

		<CuratedPairings/>

	</div>
</template>

<style scoped>

</style>