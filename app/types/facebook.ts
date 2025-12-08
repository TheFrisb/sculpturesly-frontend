export interface FacebookBrowserPayload {
    content_name?: string;
    content_ids?: string[];
    content_type?: 'product' | 'product_group';
    value?: number;
    currency?: string;
    content_category?: string;
    content_sku?: string;
    num_items?: number;
    order_id?: string;

    [key: string]: any;
}

export interface ApiViewContentPayload {
    product_slug: string;
    variant_sku?: string | null;
}

export interface ApiAddToCartPayload {
    variant_sku: string;
    quantity: number;
}

export interface ApiPurchasePayload {
    order_number: string;
}

export type FacebookApiPayload =
    | ApiViewContentPayload
    | ApiAddToCartPayload
    | ApiPurchasePayload
    | Record<string, never>;