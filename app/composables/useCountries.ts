import type {Country} from "~/types/country";

export const useCountries = () => {
    const countries = useState<Country[]>('eu-countries-list', () => []);
    const loading = useState<boolean>('eu-countries-loading', () => false);

    const fetchCountries = async () => {
        if (countries.value.length > 0) return;

        loading.value = true;
        try {
            const {data} = await useAPI<Country[]>('/api/common/supported-countries/');

            if (data.value) {
                countries.value = data.value;
            }
        } catch (e) {
            console.error('Failed to fetch countries', e);
        } finally {
            loading.value = false;
        }
    };
    const isValidCountryCode = (code: string): boolean => {
        if (!code) return false;
        return countries.value.some(c => c.code.toUpperCase() === code.toUpperCase());
    };

    const isValidCountryName = (name: string): boolean => {
        if (!name) return false;
        return countries.value.some(c => c.name.toLowerCase() === name.trim().toLowerCase());
    };

    const getCountryByCode = (code: string): Country | undefined => {
        return countries.value.find(c => c.code.toUpperCase() === code.toUpperCase());
    };

    return {
        countries,
        loading,
        fetchCountries,
        isValidCountryCode,
        isValidCountryName,
        getCountryByCode
    };
};