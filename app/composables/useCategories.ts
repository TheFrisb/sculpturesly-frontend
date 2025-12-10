import type {Category, CategoryTree} from '~/types/category'

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

export const useCategory = (slug: string | Ref<string>) => {
    // usage: const { data: category } = await useCategory(route.params.slug)

    return useAPI<Category>(() => `/api/products/categories/${unref(slug)}/`, {
        key: `category-${unref(slug)}`,
        watch: [toRef(slug)]
    });
};