import type {ProductDetail, ProductListItem} from '~/types/Product'

interface ProductFetchOptions {
    page?: number
    page_size?: number
    search?: string
    ordering?: string
    'categories__slug'?: string
    'collections__slug'?: string
}

interface ProductListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: ProductListItem[];
}

export const useProducts = () => {
    const fetchProducts = async (params: ProductFetchOptions = {}) => {
        return useAPI<ProductListResponse>('/api/products/', {
            key: `products-list-${JSON.stringify(params)}`,
            query: params,
        })
    }

    const fetchProduct = async (slug: string) => {
        return useAPI<ProductDetail>(`/api/products/${slug}/`, {
            key: `product-detail-${slug}`,
        })
    }

    return {
        fetchProducts,
        fetchProduct
    }
}