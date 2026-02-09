/**
 * Filter-related TypeScript types
 */

/**
 * Dimension size preset returned from the API
 */
export interface DimensionPreset {
    slug: string;
    label: string;
    count: number;
}

/**
 * Product filter state for managing active filters
 */
export interface ProductFilterState {
    dimensionSize: string | null;
    // Extend with future filters (price range, material, etc.)
}
