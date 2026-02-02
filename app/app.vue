<script setup lang="ts">
    useSeoMeta({
        titleTemplate: '%s | Sculpturesly',
        description: 'Sculpturesly: Curated modern sculptures, statues, and artistic home decor. Elevate your space with timeless forms.',
        ogSiteName: 'Sculpturesly',
        twitterCard: 'summary_large_image',
    })

    useHead({
        script: [
            {
                type: 'application/ld+json',
                innerHTML: JSON.stringify(buildOrganizationJsonLd())
            }
        ]
    })
</script>

<template>
	<NuxtLayout>
		<NuxtRouteAnnouncer/>
		<NuxtPage/>
	</NuxtLayout>
</template>

<style>
html {
	scroll-behavior: smooth;
}

::selection {
	background-color: #D4CDC1;
	color: #23211F;
}

::-webkit-scrollbar {
	width: 6px;
}

::-webkit-scrollbar-track {
	background: #FDFCF8;
}

::-webkit-scrollbar-thumb {
	background: #D4CDC1;
}

::-webkit-scrollbar-thumb:hover {
	background: #947E74;
}
</style>