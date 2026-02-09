/**
 * Format dimension values with cm and proper separators
 * Replaces x or X with × and adds cm at the end if missing
 */
export const formatAttributeValue = (key: string, value: string | number | null | undefined): string => {
    if (value === null || value === undefined) return '';
    const strValue = String(value);
    const lowerKey = key.toLowerCase();

    // Check if it's a dimension-related key
    const dimensionKeywords = ['dimension', 'size', 'width', 'height', 'depth', 'length', 'diameter', 'thickness'];
    if (dimensionKeywords.some(keyword => lowerKey.includes(keyword))) {
        // Replace x or X with × (U+00D7)
        const formatted = strValue.replace(/\s*[xX]\s*/g, ' × ');
        // Add cm if not present
        if (!formatted.toLowerCase().includes('cm')) {
            return `${formatted} cm`;
        }
        return formatted;
    }
    return strValue;
};

/**
 * Format currency values to EUR with German locale
 */
export const formatCurrency = (value: number | string): string => {
    const numValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numValue)) {
        return '€0,00';
    }

    // Format number according to German locale (1.000,00) but without currency symbol
    const formattedNumber = new Intl.NumberFormat('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(numValue);

    return `€${formattedNumber}`;
};
