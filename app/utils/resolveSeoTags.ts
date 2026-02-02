import type { UseSeoMetaInput } from '@unhead/schema'
import type { SeoTags } from '~/types/seo'

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

        'product:price:currency': () => opts().price?.currency,
        'product:availability': () => opts().availability,
    }
}

// --- JSON-LD Structured Data Builders ---

export const buildOrganizationJsonLd = () => {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Sculpturesly',
        url: 'https://sculpturesly.com',
        logo: 'https://sculpturesly.com/logo.png', // Replace with actual logo URL
        sameAs: [
            'https://instagram.com/sculpturesly',
            'https://facebook.com/sculpturesly'
        ]
    }
}

export const buildProductJsonLd = (product: any, url: string) => {
    if (!product) return null;

    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: product.title,
        description: product.description,
        image: product.thumbnail,
        sku: product.variants?.[0]?.sku || product.id,
        offers: {
            '@type': 'Offer',
            url: url,
            priceCurrency: 'USD',
            price: product.base_price,
            availability: product.status === 'PUBLISHED' ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
            itemCondition: 'https://schema.org/NewCondition',
            priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
            hasMerchantReturnPolicy: {
                '@type': 'MerchantReturnPolicy',
                applicableCountry: 'US',
                returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
                merchantReturnDays: 30,
                returnMethod: 'https://schema.org/ReturnByMail',
                returnFees: 'https://schema.org/FreeReturn'
            },
            shippingDetails: {
                '@type': 'OfferShippingDetails',
                shippingRate: {
                    '@type': 'MonetaryAmount',
                    value: 0,
                    currency: 'USD'
                },
                shippingDestination: {
                    '@type': 'DefinedRegion',
                    addressCountry: 'US'
                },
                deliveryTime: {
                    '@type': 'ShippingDeliveryTime',
                    handlingTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 1,
                        maxValue: 3,
                        unitCode: 'd'
                    },
                    transitTime: {
                        '@type': 'QuantitativeValue',
                        minValue: 3,
                        maxValue: 7,
                        unitCode: 'd'
                    }
                }
            }
        }
    }
}

export const buildBreadcrumbJsonLd = (items: { name: string; item: string }[]) => {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.item
        }))
    }
}