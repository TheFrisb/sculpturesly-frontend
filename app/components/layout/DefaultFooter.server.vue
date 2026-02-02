<script setup lang="ts">

</script>

<template>
	<footer class="w-full bg-[#F9F8F6] pt-24 pb-12 border-t border-gallery-200 mt-auto">
		<div class="max-w-[1600px] mx-auto px-6 md:px-12">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-24 mb-24">
				<div class="lg:col-span-4 flex flex-col items-start">
					<NuxtLink to="/" class="font-serif text-3xl text-gallery-900 mb-6 block">Sculpturesly.</NuxtLink>
					<p class="font-sans text-sm text-gallery-500 leading-relaxed max-w-sm mb-8">
						We connect collectors with exceptional forms. Honoring the hands that shape our world, one piece at a time.
					</p>
					<div class="flex space-x-6 text-gallery-400">
						<a href="#" class="hover:text-clay-500 transition-colors" aria-label="Instagram">
							<LucideInstagram :size="20"/>
						</a>
						<a href="#" class="hover:text-clay-500 transition-colors" aria-label="Pinterest">
							<svg
									width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
									stroke-linecap="round" stroke-linejoin="round">
								<line x1="12" y1="5" x2="12" y2="19"/>
								<line x1="5" y1="12" x2="19" y2="12"/>
							</svg>
						</a>
					</div>
				</div>
				<div class="lg:col-span-2">
					<h4 class="font-serif text-lg text-gallery-900 mb-6">Discover</h4>
					<ul class="space-y-4 font-sans text-sm text-gallery-500">
						<li>
							<NuxtLink to="/category/all" class="hover:text-clay-600 transition-colors">Collection</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/studio" class="hover:text-clay-600 transition-colors">The Studio</NuxtLink>
						</li>
						<!--						<li>-->
						<!--							<NuxtLink to="/journal" class="hover:text-clay-600 transition-colors">Journal</NuxtLink>-->
						<!--						</li>-->
						<!--						<li>-->
						<!--							<a href="#" class="hover:text-clay-600 transition-colors">Gift Cards</a>-->
						<!--						</li>-->
					</ul>
				</div>
				<div class="lg:col-span-3">
					<h4 class="font-serif text-lg text-gallery-900 mb-6">Client Services</h4>
					<ul class="space-y-4 font-sans text-sm text-gallery-500">
						<li>
							<NuxtLink to="/policy/shipping" class="hover:text-clay-600 transition-colors">Shipping &amp; White Glove
							</NuxtLink>
						</li>
						<li>
							<NuxtLink href="/policy/returns" class="hover:text-clay-600 transition-colors">Returns &amp; Assurance
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/trade" class="hover:text-clay-600 transition-colors">Trade Program</NuxtLink>
						</li>
						<li>
							<NuxtLink href="/contact" class="hover:text-clay-600 transition-colors">Contact Curator</NuxtLink>
						</li>
					</ul>
				</div>
				<div class="lg:col-span-3">
					<h4 class="font-serif text-lg text-gallery-900 mb-2">First Access.</h4>
					<p class="font-sans text-xs text-gallery-500 mb-6">Join for early access to new acquisitions.</p>
					<form
							class="flex items-center border-b border-gallery-300 pb-2 focus-within:border-clay-500 transition-colors group">
						<input
								placeholder="Email Address"
								aria-label="Email Address for Newsletter"
								class="bg-transparent border-none focus:ring-0 text-gallery-900 placeholder-gallery-400 w-full font-sans text-sm px-0"
								type="email">
						<button type="submit" class="text-gallery-400 group-hover:text-clay-600 transition-colors" aria-label="Subscribe">
							<LucideArrowRight :size="18"/>
						</button>
					</form>
				</div>
			</div>
			<div
					class="border-t border-gallery-200/60 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gallery-400 font-sans">
				<div class="mb-4 md:mb-0">© {{ new Date().getFullYear() }} Affluent AA Inc.</div>
				<div class="flex space-x-6 mb-4 md:mb-0">
					<NuxtLink href="/policy/privacy" class="hover:text-gallery-600 transition-colors">Privacy Policy</NuxtLink>
					<span>•</span>
					<NuxtLink href="/policy/terms" class="hover:text-gallery-600 transition-colors">Terms of Service</NuxtLink>
				</div>
				<div class="flex items-center space-x-3 grayscale opacity-50" aria-label="Accepted Payment Methods">
					<svg class="h-6 w-auto" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="visa-title">
                        <title id="visa-title">Visa</title>
						<rect x="1" y="1" width="36" height="22" rx="2" stroke="currentColor" stroke-width="1"/>
						<text
								x="6" y="16" font-family="sans-serif" font-size="10" fill="currentColor" font-weight="bold"
								letter-spacing="1">VISA
						</text>
					</svg>
					<svg class="h-6 w-auto" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="mc-title">
                        <title id="mc-title">Mastercard</title>
						<circle cx="13" cy="12" r="7" stroke="currentColor" stroke-width="1"/>
						<circle cx="25" cy="12" r="7" stroke="currentColor" stroke-width="1"/>
					</svg>
					<svg class="h-6 w-auto" viewBox="0 0 38 24" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="amex-title">
                        <title id="amex-title">American Express</title>
						<rect x="1" y="1" width="36" height="22" rx="2" stroke="currentColor" stroke-width="1"/>
						<text x="5" y="16" font-family="serif" font-size="9" fill="currentColor" font-weight="bold">AMEX</text>
					</svg>
				</div>
			</div>
		</div>
	</footer>
</template>
