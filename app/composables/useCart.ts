import type {AddToCartPayload, Cart, UpdateCartItemPayload} from '~/types/cart';

export const useCart = () => {
    const cart = useState<Cart | null>('cart-state', () => null);
    const loading = useState<boolean>('cart-loading', () => false);
    const isCartOpen = useState<boolean>('cart-open', () => false);

    const openCart = () => isCartOpen.value = true;
    const closeCart = () => isCartOpen.value = false;
    const toggleCart = () => isCartOpen.value = !isCartOpen.value;

    const fetchCart = async () => {
        loading.value = true;
        try {
            const {data, error} = await useAPI<Cart>('/api/carts/');
            if (data.value) {
                cart.value = data.value;
            }
        } catch (e) {
            console.error('Failed to fetch cart', e);
        } finally {
            loading.value = false;
        }
    };

    const addToCart = async (payload: AddToCartPayload) => {
        loading.value = true;
        try {
            const {data, error} = await useAPI<Cart>('/api/carts/items/', {
                method: 'POST',
                body: payload
            });

            if (data.value) {
                cart.value = data.value;
                openCart();
            }
        } catch (e) {
            console.error('Failed to add to cart', e);
        } finally {
            loading.value = false;
        }
    };

    const updateItemQuantity = async (itemId: number, payload: UpdateCartItemPayload) => {
        loading.value = true;
        try {
            const {data, error} = await useAPI<Cart>(`/api/carts/${itemId}/update/`, {
                method: 'PATCH',
                body: payload
            });

            if (data.value) {
                cart.value = data.value;
            }
        } catch (e) {
            console.error('Failed to update item', e);
        } finally {
            loading.value = false;
        }
    };

    const removeItem = async (itemId: number) => {
        loading.value = true;
        try {
            const {data, error} = await useAPI<Cart>(`/api/carts/${itemId}/remove/`, {
                method: 'DELETE'
            });

            if (data.value) {
                cart.value = data.value;
            }
        } catch (e) {
            console.error('Failed to remove item', e);
        } finally {
            loading.value = false;
        }
    };

    const clearCart = () => {
        cart.value = null;
    };

    return {
        cart,
        loading,
        isCartOpen,
        openCart,
        closeCart,
        toggleCart,
        fetchCart,
        addToCart,
        updateItemQuantity,
        removeItem,
        clearCart
    };
};