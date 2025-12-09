import type {CategoryTree} from '~/types/category'

export const useCategories = () => {
    const {data: categories, error} = useAPI<CategoryTree[]>('/api/products/categories/', {
        key: 'categories-data',
        lazy: true,
        default: () => []
    });

    return {
        categories,
        error
    };
};