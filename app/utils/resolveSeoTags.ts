import type {UseSeoMetaInput} from '@unhead/schema'

export interface SeoBuilderOptions {
    title?: string
    description?: string
    imageUrl?: string
    url?: string
    robots?: string
    siteName?: string

    // Optional overrides if you want social tags to differ from main tags
    ogTitle?: string
    twitterTitle?: string

    // E-commerce specific (optional)
    price?: {
        amount: string | number
        currency: string
    }
    availability?: 'instock' | 'oos'
}

export const resolveSeoTags = (source: () => SeoTags | undefined | null): UseSeoMetaInput => {
    return {
        title: () => source()?.title,
        description: () => source()?.description,
        canonical: () => source()?.canonical,

        ogTitle: () => source()?.ogTitle,
        ogDescription: () => source()?.ogDescription,
        ogImage: () => source()?.ogImage,
        ogUrl: () => source()?.ogUrl,
        ogType: () => source()?.ogType,
        ogSiteName: () => source()?.ogSiteName,

        twitterCard: () => source()?.twitterCard as any,
        twitterTitle: () => source()?.twitterTitle,
        twitterDescription: () => source()?.twitterDescription,
        twitterImage: () => source()?.twitterImage,

        robots: () => source()?.robots,

        'product:price:amount': () => source()?.price?.amount,
        'product:price:currency': () => source()?.price?.currency,
    }
}

export const buildSeoMeta = (options: () => SeoBuilderOptions): UseSeoMetaInput => {
    const opts = options

    return {
        title: () => opts().title,
        description: () => opts().description,

        canonical: () => opts().url,

        ogTitle: () => opts().ogTitle || opts().title,
        ogDescription: () => opts().description,
        ogImage: () => opts().imageUrl,
        ogUrl: () => opts().url,
        ogType: () => (opts().price ? 'product' : 'website'),
        ogSiteName: () => opts().siteName || 'Sculpturesly',

        twitterCard: () => opts().imageUrl ? 'summary_large_image' : 'summary',
        twitterTitle: () => opts().twitterTitle || opts().title,
        twitterDescription: () => opts().description,
        twitterImage: () => opts().imageUrl,

        robots: () => opts().robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',

        'product:price:amount': () => opts().price?.amount,
        'product:price:currency': () => opts().price?.currency,
        'product:availability': () => opts().availability,
    }
}