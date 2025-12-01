export type CartStatus = 'ABANDONED' | 'ACTIVE';

export interface CartVariant {
    id: number;
    sku: string;
    product_title: string;
    product_slug: string;
    price: string;
    image: string | null;
    attributes: Record<string, string>;
}

export interface CartItem {
    id: number;
    variant: CartVariant;
    quantity: number;
    total_price: string;
}

export interface Cart {
    id: number;
    session_key: string;
    status: CartStatus;
    items: CartItem[];
    total_price: string;
    total_items: number;
}

export interface AddToCartPayload {
    product_variant_id: number;
    quantity: number;
}

export interface UpdateCartItemPayload {
    quantity: number;
}