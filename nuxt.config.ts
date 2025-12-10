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

    scripts: {
        registry: {
            metaPixel: true,
        }
    },

    css: ['./app/assets/css/tailwind.css'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },

    runtimeConfig: {
        apiInternal: '',

        public: {
            scripts: {
                metaPixel: {
                    id: '', // NUXT_PUBLIC_SCRIPTS_META_PIXEL_ID
                },
            },
        },
    },

    nitro: {
        devProxy: {
            '/api': {
                target: 'http://127.0.0.1:8000/api',
                changeOrigin: true,
            }
        }
    }
})