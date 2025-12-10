<script setup lang="ts">
const url = useRequestURL();

useSeoMeta(buildSeoMeta(() => ({
	title: 'Privacy Policy - Data Protection & Security | Sculpturesly',
	description: 'At Sculpturesly, your privacy is paramount. Read our policy to understand how we protect your personal data, handle cookies, and secure your payment information.',
	url: url.href,
})))
</script>

<template>
	<div class="w-full bg-[#F9F8F6] min-h-screen">
		<section class="pt-40 pb-24 text-center px-6 border-b border-gallery-200"><h1
				class="font-serif text-5xl md:text-6xl text-gallery-900 mb-6 tracking-tight">Privacy &amp; Data
			Protection.</h1>
			<p class="font-sans text-xs uppercase tracking-[0.2em] text-gallery-500">Last Updated: November 29, 2025</p>
		</section>
		<div class="max-w-[1400px] mx-auto px-6 md:px-12 py-24 flex flex-col md:flex-row gap-16 lg:gap-32">
			<aside class="hidden md:block w-64 flex-shrink-0 relative">
				<div class="sticky top-32 space-y-6">
					<nav class="flex flex-col space-y-4">
						<button
								class="text-left font-sans text-sm transition-colors duration-300 text-clay-500 font-medium translate-x-1">
							1. Data Collection
						</button>
						<button
								class="text-left font-sans text-sm transition-colors duration-300 text-gallery-400 hover:text-gallery-800">
							2. Usage
						</button>
						<button
								class="text-left font-sans text-sm transition-colors duration-300 text-gallery-400 hover:text-gallery-800">
							3. Cookies &amp; Tracking
						</button>
						<button
								class="text-left font-sans text-sm transition-colors duration-300 text-gallery-400 hover:text-gallery-800">
							4. Your Rights
						</button>
						<button
								class="text-left font-sans text-sm transition-colors duration-300 text-gallery-400 hover:text-gallery-800">
							5. Contact
						</button>
					</nav>
				</div>
			</aside>
			<div class="flex-1 max-w-2xl">
				<div id="collection" class="mb-20"><h2 class="font-serif text-2xl text-gallery-900 mb-6">1. Data
					Collection</h2>
					<div class="font-sans text-gallery-600 leading-relaxed space-y-6 text-sm md:text-base"><p>At Sculpturesly,
						we treat your personal information with the same care and discretion as the artworks we curate. We collect
						only the data necessary to provide you with a seamless acquisition experience and to ensure the safe
						delivery of high-value items.</p>
						<p>Information collected includes personal identification (Name, Address), contact details (Email, Phone),
							and transactional data required for secure processing. We do not store full credit card numbers on our
							servers; all payments are tokenized via our secure banking partners.</p></div>
					<div class="w-full h-px bg-gallery-200 mt-20"/>
				</div>
				<div id="usage" class="mb-20"><h2 class="font-serif text-2xl text-gallery-900 mb-6">2. Usage</h2>
					<div class="font-sans text-gallery-600 leading-relaxed space-y-6 text-sm md:text-base"><p>Your data serves
						three primary purposes: Authentication, Logistics, and Curation.</p>
						<ul class="list-disc pl-5 space-y-2">
							<li>To process and insure your acquisitions during transit.</li>
							<li>To verify identity for high-value transactions (Anti-Money Laundering compliance).</li>
							<li>To tailor our curatorial recommendations to your collection history (if opted in).</li>
						</ul>
						<p>We never sell your data to third-party advertisers. Your privacy is paramount to our relationship.</p>
					</div>
					<div class="w-full h-px bg-gallery-200 mt-20"/>
				</div>
				<div id="cookies" class="mb-20"><h2 class="font-serif text-2xl text-gallery-900 mb-6">3. Cookies &amp;
					Tracking</h2>
					<div class="font-sans text-gallery-600 leading-relaxed space-y-6 text-sm md:text-base"><p>We use essential
						cookies to maintain your shopping bag session and preference cookies to remember your region and currency
						settings.</p>
						<p>Analytics cookies are used anonymously to help us understand how collectors navigate our digital
							gallery, allowing us to refine the experience. You may opt-out of non-essential cookies via your browser
							settings at any time.</p></div>
					<div class="w-full h-px bg-gallery-200 mt-20"/>
				</div>
				<div id="rights" class="mb-20"><h2 class="font-serif text-2xl text-gallery-900 mb-6">4. Your Rights</h2>
					<div class="font-sans text-gallery-600 leading-relaxed space-y-6 text-sm md:text-base"><p>Under GDPR and
						CCPA, you have the right to request access to the personal data we hold about you, to request corrections,
						or to request the complete erasure of your data ("Right to be Forgotten"), provided it does not conflict
						with legal record-keeping requirements for tax and provenance.</p></div>
					<div class="w-full h-px bg-gallery-200 mt-20"/>
				</div>
				<div id="contact" class="mb-20"><h2 class="font-serif text-2xl text-gallery-900 mb-6">5. Contact</h2>
					<div class="font-sans text-gallery-600 leading-relaxed space-y-6 text-sm md:text-base"><p>For any inquiries
						regarding your privacy or to exercise your rights, please contact our dedicated team.</p>
						<div
								class="mt-12 border border-gallery-300 p-8 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
							<div
									class="w-12 h-12 flex items-center justify-center bg-gallery-200 rounded-full text-gallery-600 flex-shrink-0">
								<svg
										xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
										stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"
										class="lucide lucide-mail" aria-hidden="true">
									<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
									<rect x="2" y="4" width="20" height="16" rx="2"/>
								</svg>
							</div>
							<div><h4 class="font-serif text-lg text-gallery-900">Have specific questions about your data?</h4>
								<p class="font-sans text-sm text-gallery-500 mb-4">Our Data Protection Officer is available for direct
									consultation.</p><a
										href="mailto:privacy@sculpturesly.com"
										class="text-clay-600 hover:text-clay-800 font-sans text-sm uppercase tracking-widest border-b border-clay-400 pb-1 transition-colors">Contact
									our Data Protection Officer</a></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>

</style>