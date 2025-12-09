import type {Category} from './category';

export type ProductStatus = 'DRAFT' | 'ARCHIVED' | 'PUBLISHED';

export interface Attribute {
    id: number;
    name: string;
    slug: string;
    choices: string[] | null;
}

export interface ProductType {
    id: number;
    name: string;
    allowed_attributes: Attribute[];
}

export interface ProductGalleryImage {
    id: number;
    image: string;
    alt_text: string;
    is_feature: boolean;
    variant: number | null;
}

export interface ProductVariant {
    id: number;
    sku: string;
    price: string;
    compare_at_price: string | null;
    stock_quantity: number;
    is_in_stock: boolean;
    image: string | null;
    attributes: Record<string, string>;
}

export interface ProductListItem {
    id: number;
    title: string;
    slug: string;
    status: ProductStatus;
    thumbnail: string;
    base_price: string;
    category_names: string[];
    created_at: string;
}

export interface ProductDetail {
    id: number;
    title: string;
    slug: string;
    status: ProductStatus;
    description: string;
    base_price: string;
    thumbnail: string;
    specifications: Record<string, never>;

    product_type: ProductType;
    categories: Category[];
    variants: ProductVariant[];
    gallery_images: ProductGalleryImage[];
}