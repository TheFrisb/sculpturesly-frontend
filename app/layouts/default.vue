<script setup lang="ts">
import DefaultHeader from "~/components/layout/DefaultHeader.vue";
import DefaultFooter from "~/components/layout/DefaultFooter.server.vue";
const {fetchCart} = useCart();

onMounted(() => {
	fetchCart();
});
</script>

<template>
	<div class="bg-gallery-50 text-gallery-800 antialiased overflow-x-hidden">
		<div
				class="relative min-h-screen w-full bg-gallery-50 text-gallery-800 selection:bg-clay-300 selection:text-gallery-900">

			<div class="fixed inset-0 pointer-events-none z-50 opacity-[0.03] mix-blend-multiply">
				<svg width="100%" height="100%">
					<filter id="noiseFilter">
						<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch"/>
					</filter>
					<rect width="100%" height="100%" filter="url(#noiseFilter)"/>
				</svg>
			</div>

			<DefaultHeader/>
			<div class="relative z-10">
				<slot/>
			</div>
			<DefaultFooter/>
		</div>
	</div>
</template>

<style scoped>

</style>