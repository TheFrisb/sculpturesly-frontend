<script setup lang="ts">

</script>

<template>
	<div class="w-full bg-[#F9F8F6] min-h-screen">
		<section class="pt-40 pb-24 px-6 border-b border-gallery-200 bg-[#F9F8F6]">
			<div
					class="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left">
				<div><h1 class="font-serif text-5xl md:text-6xl text-gallery-900 mb-4 tracking-tight">Terms of Service.</h1>
					<p class="font-sans text-xs uppercase tracking-[0.2em] text-gallery-500">Governing the acquisition and use
						of Sculpturesly forms</p></div>
				<button
						class="mt-8 md:mt-0 flex items-center space-x-3 px-6 py-3 border border-gallery-300 hover:border-gallery-800 transition-colors group">
						<span
								class="font-sans text-xs uppercase tracking-widest text-gallery-600 group-hover:text-gallery-900 transition-colors">Download Conditions (PDF)</span>
					<svg
							xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
							stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
							class="lucide lucide-download text-gallery-400 group-hover:text-gallery-900 transition-colors"
							aria-hidden="true">
						<path d="M12 15V3"/>
						<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
						<path d="m7 10 5 5 5-5"/>
					</svg>
				</button>
			</div>
		</section>
		<div class="max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row gap-16 lg:gap-32">
			<aside class="hidden md:block w-64 flex-shrink-0 relative">
				<div class="sticky top-32 space-y-6">
					<nav class="flex flex-col space-y-2">
						<button
								class="text-left font-sans text-sm py-2 pl-4 border-l-2 transition-all duration-300 border-clay-500 text-gallery-900 font-medium">
							1. Conditions of Sale
						</button>
						<button
								class="text-left font-sans text-sm py-2 pl-4 border-l-2 transition-all duration-300 border-transparent text-gallery-400 hover:text-gallery-600">
							2. Intellectual Property
						</button>
						<button
								class="text-left font-sans text-sm py-2 pl-4 border-l-2 transition-all duration-300 border-transparent text-gallery-400 hover:text-gallery-600">
							3. Liability &amp; Risk
						</button>
						<button
								class="text-left font-sans text-sm py-2 pl-4 border-l-2 transition-all duration-300 border-transparent text-gallery-400 hover:text-gallery-600">
							4. Governing Law
						</button>
					</nav>
				</div>
			</aside>
			<div class="flex-1 max-w-[650px]">
				<div id="conditions" class="mb-24"><h2
						class="font-serif text-3xl text-gallery-900 mb-8 border-b border-gallery-200 pb-4">Article 1: Conditions
					of Sale</h2>
					<div class="font-sans text-gallery-800 leading-loose space-y-8 text-sm md:text-base">
						<div><span class="font-bold text-gallery-900 mr-2">1.1 Acceptance.</span>By placing an order on
							Sculpturesly, you acknowledge that you are entering into a binding contract to purchase art. You confirm
							that you have sufficient funds and the legal capacity to enter into such a contract.
						</div>
						<div><span class="font-bold text-gallery-900 mr-2">1.2 Pricing &amp; Currency.</span>All prices are listed
							in USD. While we strive for accuracy, Sculpturesly reserves the right to correct pricing errors. In such
							an event, you will be notified and given the option to proceed or cancel.
						</div>
						<div><span class="font-bold text-gallery-900 mr-2">1.3 Returns.</span>Our return policy allows for a
							14-day inspection period. <a
									href="#"
									class="underline decoration-clay-500 underline-offset-4 text-gallery-900 hover:text-clay-600">See
								Return Policy</a> for detailed conditions regarding the Sanctuary Trial.
						</div>
					</div>
				</div>
				<div id="ip" class="mb-24"><h2
						class="font-serif text-3xl text-gallery-900 mb-8 border-b border-gallery-200 pb-4">Article 2: Intellectual
					Property</h2>
					<div class="font-sans text-gallery-800 leading-loose space-y-8 text-sm md:text-base">
						<div><span class="font-bold text-gallery-900 mr-2">2.1 Copyright.</span>The purchase of a physical
							sculpture does not transfer copyright or reproduction rights. The artist retains all intellectual
							property rights to the image and design of the work.
						</div>
						<div><span class="font-bold text-gallery-900 mr-2">2.2 Commercial Use.</span>You may not reproduce the
							work for commercial purposes (e.g., merchandise, marketing materials) without express written consent
							from the Sculpturesly Studio and the artist.
						</div>
					</div>
				</div>
				<div id="liability" class="mb-24"><h2
						class="font-serif text-3xl text-gallery-900 mb-8 border-b border-gallery-200 pb-4">Article 3:
					Liability</h2>
					<div class="font-sans text-gallery-800 leading-loose space-y-8 text-sm md:text-base">
						<div><span class="font-bold text-gallery-900 mr-2">3.1 Risk of Loss.</span>Risk of loss transfers to you
							upon delivery by our white-glove carrier. Sculpturesly insures all shipments up to the point of signed
							receipt.
						</div>
						<div><span class="font-bold text-gallery-900 mr-2">3.2 Installation.</span>Sculpturesly is not liable for
							damages resulting from improper installation or mounting of wall-relief works. We recommend professional
							installation for all pieces exceeding 10kg.
						</div>
					</div>
				</div>
				<div id="governing" class="mb-24"><h2
						class="font-serif text-3xl text-gallery-900 mb-8 border-b border-gallery-200 pb-4">Article 4: Governing
					Law</h2>
					<div class="font-sans text-gallery-800 leading-loose space-y-8 text-sm md:text-base">
						<div><span class="font-bold text-gallery-900 mr-2">4.1 Jurisdiction.</span>These Terms of Service and any
							separate agreements whereby we provide you Services shall be governed by and construed in accordance
							with the laws of the State of New York.
						</div>
					</div>
				</div>
				<div class="bg-gallery-100 p-8 border-l-4 border-gallery-300"><h4
						class="font-serif text-lg text-gallery-900 mb-2">Changes to Terms</h4>
					<p class="font-sans text-sm text-gallery-500">Sculpturesly reserves the right to update these terms at any
						time to reflect changes in our services or legal requirements.<br><br><span
								class="uppercase tracking-widest text-xs">Last Modification: November 29, 2025</span></p></div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>