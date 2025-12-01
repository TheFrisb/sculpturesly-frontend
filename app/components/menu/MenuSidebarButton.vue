<script setup lang="ts">
	const {toggle, isOpen} = useMobileMenu();
</script>

<template>
	<button
			class="focus:outline-none hover:text-clay-500 transition-colors"
			aria-label="Toggle Menu"
			:aria-expanded="isOpen"
			@click="toggle"
	>
		<LucideX v-if="isOpen" :size="24"/>
		<LucideMenu v-else :size="24"/>
	</button>
</template>

