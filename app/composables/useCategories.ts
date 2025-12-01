import type {CategoryTree} from '~/types/Category'

export const useCategories = () => {
    const categories = useState<CategoryTree[]>('categories-tree', () => [
        {
            id: 1,
            title: 'By Form',
            slug: 'form',
            image: null,
            children: [
                {id: 11, title: 'Abstract', slug: 'abstract', image: null, children: []},
                {id: 12, title: 'Figurative', slug: 'figurative', image: null, children: []},
                {id: 13, title: 'Fauna', slug: 'fauna', image: null, children: []},
                {id: 14, title: 'Objects', slug: 'objects', image: null, children: []},
            ]
        },
        {
            id: 2,
            title: 'By Space',
            slug: 'space',
            image: null,
            children: [
                {id: 21, title: 'Plinth & Tabletop', slug: 'plinth-tabletop', image: null, children: []},
                {id: 22, title: 'Relief & Wall', slug: 'relief-wall', image: null, children: []},
                {id: 23, title: 'Garden & Estate', slug: 'garden-estate', image: null, children: []},
            ]
        },
        {
            id: 3,
            title: 'Curated Sets',
            slug: 'curated',
            image: null,
            children: [
                {id: 31, title: 'New Arrivals', slug: 'new-arrivals', image: null, children: []},
                {id: 32, title: 'The Minimalist Edit', slug: 'minimalist-edit', image: null, children: []},
            ]
        }
    ]);

    return {
        categories
    };
};