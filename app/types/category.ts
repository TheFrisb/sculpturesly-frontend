interface CategoryBase {
    id: number;
    title: string;
    slug: string;
    image: string | null;
}

export interface Category extends CategoryBase {
    description: string;
    parent: number | null;
}

export interface CategoryTree extends CategoryBase {
    children: CategoryTree[];
}