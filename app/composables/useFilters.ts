import type { DimensionPreset } from '~/types/filters';

/**
 * Composable for fetching product filter options.
 * SSR-friendly with automatic reactivity.
 */
export function useFilters() {
    /**
     * Fetch dimension size presets with product counts.
     * Optionally filter by category slug.
     */
    const fetchDimensionPresets = (categorySlug?: string | null) => {
        const params: Record<string, string> = {};

        if (categorySlug && categorySlug !== 'all') {
            params['categories__slug'] = categorySlug;
        }

        return useAPI<DimensionPreset[]>('/api/products/filters/dimensions/', {
            query: params,
            key: `dimension-presets-${JSON.stringify(params)}`
        });
    };

    return {
        fetchDimensionPresets,
    };
}
