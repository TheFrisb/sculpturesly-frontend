<script setup lang="ts">
	import SideCart from "~/components/sidecart/SideCart.vue";

	// Use the updated composable
	const {categories} = useCategories();
	const {cart, openCart} = useCart();

	const isCollectionOpen = ref(false);
	let hoverTimer: NodeJS.Timeout | null = null;

	const openMenu = () => {
		if (hoverTimer) clearTimeout(hoverTimer);
		isCollectionOpen.value = true;
	};

	const closeMenu = () => {
		hoverTimer = setTimeout(() => {
			isCollectionOpen.value = false;
		}, 200);
	};

	const forceCloseMenu = () => {
		if (hoverTimer) clearTimeout(hoverTimer);
		isCollectionOpen.value = false;
	};
</script>

<template>
	<header
			role="banner"
			aria-label="Main Navigation"
			class="fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-in-out border-b border-gallery-900/5 bg-transparent"
			@mouseleave="closeMenu"
	>
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
						to="/"
						class="font-serif text-3xl md:text-4xl font-medium tracking-tight text-gallery-900 block pt-1"
						aria-label="Sculpturesly Home"
						@click="forceCloseMenu"
				>
					Sculpturesly.
				</NuxtLink>
			</div>

			<nav
					class="hidden md:flex space-x-12 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-full items-center"
					aria-label="Desktop Navigation"
			>
				<div class="h-full flex items-center" @mouseenter="openMenu">
					<NuxtLink
							to="/category/all"
							class="font-sans text-xs tracking-[0.2em] text-gallery-600 hover:text-gallery-900 transition-colors duration-300 uppercase py-2 border-b-2 border-transparent"
							:class="{ 'border-clay-400 text-gallery-900': isCollectionOpen }"
							@click="forceCloseMenu"
					>
						Collection
					</NuxtLink>
				</div>
			</nav>

			<div class="flex items-center space-x-6 md:space-x-8 text-gallery-800 z-50">
				<button aria-label="Open Search" class="hidden md:block hover:text-clay-500 transition-colors duration-300">
					<LucideSearch :size="20"/>
				</button>
				<button
						:aria-label="`Shopping Bag, ${cart?.total_items || 0} items`"
						class="hover:text-clay-500 transition-colors duration-300 relative group"
						@click="openCart"
				>
					<LucideShoppingBag :size="22"/>
					<ClientOnly>
						<span
								v-if="cart && cart?.items.length > 0"
								class="absolute -top-2 -right-2 w-4 h-4 bg-clay-500 rounded-full flex items-center justify-center text-[9px] text-white font-sans"
						>
							{{ cart.items.length }}
						</span>
					</ClientOnly>
				</button>
			</div>
		</div>

		<ClientOnly>
			<div
					class="absolute top-full left-0 w-full bg-[#F9F8F6] border-b border-gallery-200 shadow-xl overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-top"
					:class="isCollectionOpen ? 'max-h-[85vh] opacity-100 translate-y-0 visible' : 'max-h-0 opacity-0 -translate-y-2 invisible'"
					role="region"
					aria-label="Collection Menu"
					@mouseenter="openMenu"
					@mouseleave="closeMenu"
			>
				<div class="max-w-[1600px] mx-auto px-6 md:px-12 py-12 overflow-y-auto max-h-[85vh] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-8 gap-y-12">

					<div
							v-for="(parent, index) in categories"
							:key="parent.id"
							class="flex flex-col space-y-6 animate-fade-in-up"
							:style="{ animationDelay: `${(index + 1) * 0.05}s` }"
					>
						<NuxtLink
								:to="`/category/${parent.slug}`"
								class="font-sans text-[10px] uppercase tracking-[0.25em] text-gallery-400"
								@click="forceCloseMenu"
						>
							{{ parent.title }}
						</NuxtLink>
						<ul class="flex flex-col space-y-4">
							<li v-for="child in parent.children" :key="child.id">
								<NuxtLink
										:to="`/category/${child.slug}`"
										class="font-serif text-lg text-gallery-800 hover:text-clay-600 transition-colors block"
										active-class="text-clay-600 pl-2 border-l-2 border-clay-400"
										@click="forceCloseMenu"
								>
									{{ child.title }}
								</NuxtLink>
							</li>
						</ul>
					</div>

				</div>
			</div>
		</ClientOnly>

		<ClientOnly>
			<MenuSidebarPanel/>
			<SideCart/>
		</ClientOnly>

	</header>
</template>