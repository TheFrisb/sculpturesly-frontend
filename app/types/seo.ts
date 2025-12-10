export interface SeoTags {
    title: string;
    description: string;

    canonical: string;

    ogTitle: string;
    ogDescription: string;
    ogImage: string;
    ogUrl: string;
    ogType: string;
    ogSiteName: string;

    twitterCard: string;
    twitterTitle: string;
    twitterDescription: string;
    twitterImage: string;

    price?: {
        amount: string
        currency: string
    }

    robots: string;
}