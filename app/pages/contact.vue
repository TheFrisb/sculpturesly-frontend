<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Contact Sculpturesly - Customer Support & Art Inquiries',
	description: 'Need help selecting the perfect piece? Have a question about shipping or custom orders? Contact the Sculpturesly team via email or phone for expert assistance.',
	url: url.href,
})))
</script>

<template>
	<div class="w-full bg-[#F9F8F6] min-h-screen pt-32 md:pt-0">
		<div class="flex flex-col md:flex-row min-h-screen">
			<div class="w-full md:w-[40%] bg-gallery-200 relative min-h-[50vh] md:min-h-screen overflow-hidden group"><NuxtImg
					alt="Minimalist Curator Desk"
					class="w-full h-full object-cover filter grayscale-[0.4] contrast-[0.95] transition-transform duration-[2s] group-hover:scale-105"
					src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"
                    format="webp"
                    sizes="100vw md:40vw"
                    loading="lazy"
            />
				<div class="absolute inset-0 bg-gallery-900/10 mix-blend-multiply"/>
				<div
						class="absolute bottom-0 left-0 w-full p-8 md:p-12 lg:p-16 bg-gradient-to-t from-black/60 to-transparent text-white">
					<span class="font-sans text-xs uppercase tracking-[0.2em] opacity-80 block mb-2">Monday — Friday, 9am — 6pm EST</span>
					<h1 class="font-serif text-3xl md:text-4xl mb-8">Curator Services.</h1>
					<div class="space-y-6">
						<div><a
								href="tel:+12125550199"
								class="font-serif text-3xl md:text-4xl lg:text-5xl hover:text-clay-300 transition-colors block leading-none">+1
							(212) 555-0199</a><span class="font-sans text-[10px] uppercase tracking-widest opacity-60 mt-2 block">Direct Line</span>
						</div>
						<div><a
								href="mailto:client.services@sculpturesly.com"
								class="font-sans text-sm md:text-base tracking-wide hover:text-clay-300 transition-colors border-b border-white/30 pb-1 hover:border-clay-300">client.services@sculpturesly.com</a>
						</div>
					</div>
				</div>
			</div>
			<div class="w-full md:w-[60%] px-8 md:px-16 lg:px-24 py-20 md:py-32 flex flex-col justify-center">
				<div class="max-w-xl w-full mx-auto"><h2 class="font-serif text-4xl text-gallery-900 mb-12">How can we assist
					with your collection?</h2>
					<form class="space-y-12">
						<div class="group relative"><input
								id="contact-name"
								class="peer w-full bg-transparent border-b border-gallery-300 py-4 text-lg text-gallery-900 focus:border-clay-500 focus:outline-none placeholder-transparent font-serif"
								placeholder="Your Name" type="text"><label
								for="contact-name"
								class="absolute left-0 -top-3.5 text-[10px] text-gallery-400 uppercase tracking-widest transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-xs peer-placeholder-shown:text-gallery-400 peer-focus:-top-3.5 peer-focus:text-[10px] peer-focus:text-clay-500">Your
							Name</label></div>
						<div class="group relative"><label
								class="block text-[10px] text-gallery-400 uppercase tracking-widest mb-2">Topic</label>
							<div class="relative"><select
									class="w-full bg-transparent border-b border-gallery-300 py-4 text-lg text-gallery-900 focus:border-clay-500 focus:outline-none font-serif appearance-none cursor-pointer hover:text-clay-600 transition-colors rounded-none">
								<option>Acquisition Inquiry</option>
								<option>Shipping &amp; Logistics</option>
								<option>Press &amp; Media</option>
								<option>General Inquiries</option>
							</select>
								<div class="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-gallery-400">
									<svg
											xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
											stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
											class="lucide lucide-arrow-right transform rotate-90" aria-hidden="true">
										<path d="M5 12h14"/>
										<path d="m12 5 7 7-7 7"/>
									</svg>
								</div>
							</div>
						</div>
						<div class="group relative pt-4"><label
								class="block text-[10px] text-gallery-400 uppercase tracking-widest mb-4">Message</label><textarea
								class="w-full bg-[linear-gradient(to_bottom,transparent_31px,#D4CDC1_32px)] bg-[length:100%_32px] border-none text-lg text-gallery-900 font-serif leading-[32px] focus:ring-0 focus:outline-none placeholder-gallery-300 resize-none min-h-[160px]"
								placeholder="Tell us about the space or the piece you are considering..."/></div>
						<div class="pt-8">
							<button
									type="button"
									class="inline-flex items-center space-x-4 border border-gallery-900 px-10 py-5 hover:bg-gallery-900 hover:text-white transition-all duration-300 group">
								<span class="font-sans text-xs uppercase tracking-[0.2em]">Request Consultation</span>
								<svg
										xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-arrow-right text-gallery-900 group-hover:text-white transition-colors"
										aria-hidden="true">
									<path d="M5 12h14"/>
									<path d="m12 5 7 7-7 7"/>
								</svg>
							</button>
						</div>
					</form>
					<div class="mt-24 pt-12 border-t border-gallery-200"><h3
							class="font-sans text-xs uppercase tracking-[0.2em] text-clay-500 mb-4">New York Studio</h3>
						<div class="flex flex-col md:flex-row md:items-baseline justify-between">
							<address class="font-serif text-xl text-gallery-900 not-italic mb-2 md:mb-0">122 Greene Street, SoHo, NY
								10012
							</address>
							<span
									class="font-sans text-[10px] uppercase tracking-widest text-gallery-400 border border-gallery-200 px-3 py-1 rounded-full">By Appointment Only</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>