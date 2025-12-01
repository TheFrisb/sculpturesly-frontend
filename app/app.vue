<script lang="ts">

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