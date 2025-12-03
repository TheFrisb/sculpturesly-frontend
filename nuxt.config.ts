// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/hints',
        '@nuxt/scripts',
        'nuxt-lucide-icons',
        'nuxt-keen-slider'
    ],

    css: ['./app/assets/css/tailwind.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    runtimeConfig: {
        public: {
            apiBase: '',
        },
    },
})