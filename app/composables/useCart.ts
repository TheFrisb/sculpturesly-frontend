import type {AddToCartPayload, Cart, CartItem, UpdateCartItemPayload} from '~/types/Cart';

export const useCart = () => {
    const cart = useState<Cart | null>('cart-state', () => null);
    const loading = useState<boolean>('cart-loading', () => false);
    const isCartOpen = useState<boolean>('cart-open', () => false);

    const _mockInitCart = (): Cart => ({
        id: 1,
        session_key: 'mock-session-uuid',
        status: 'ACTIVE',
        items: [],
        total_price: '0.00',
        total_items: 0
    });

    const _recalculateMockTotals = (c: Cart) => {
        let count = 0;
        let price = 0;
        c.items.forEach(item => {
            count += item.quantity;
            price += parseFloat(item.variant.price) * item.quantity;
        });
        c.total_items = count;
        c.total_price = price.toFixed(2);
    };

    const _initMockCart = () => {
        const mockItems: CartItem[] = [
            {
                id: 101,
                quantity: 1,
                total_price: '450.00',
                variant: {
                    id: 1,
                    sku: 'SCULPT-001',
                    product_title: 'The Silent Void',
                    product_slug: 'the-silent-void',
                    price: '450.00',
                    image: 'https://picsum.photos/200',
                    attributes: {Material: 'Marble'}
                }
            },
            {
                id: 102,
                quantity: 2,
                total_price: '240.00',
                variant: {
                    id: 2,
                    sku: 'VASE-004',
                    product_title: 'Earthen Vessel',
                    product_slug: 'earthen-vessel',
                    price: '120.00',
                    image: 'https://picsum.photos/200',
                    attributes: {Color: 'Terracotta'}
                }
            }
        ];

        cart.value = {
            id: 1,
            session_key: 'mock-session-populated',
            status: 'ACTIVE',
            items: mockItems,
            total_items: 3,
            total_price: '690.00'
        };
    };

    const openCart = () => isCartOpen.value = true;
    const closeCart = () => isCartOpen.value = false;
    const toggleCart = () => isCartOpen.value = !isCartOpen.value;

    const fetchCart = async () => {
        loading.value = true;
        try {
            await new Promise(resolve => setTimeout(resolve, 500));
            if (!cart.value) {
                cart.value = _mockInitCart();
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
            await new Promise(resolve => setTimeout(resolve, 300));
            if (!cart.value) cart.value = _mockInitCart();

            const existingItem = cart.value.items.find(i => i.variant.id === payload.product_variant_id);

            if (existingItem) {
                existingItem.quantity += payload.quantity;
                existingItem.total_price = (parseFloat(existingItem.variant.price) * existingItem.quantity).toFixed(2);
            } else {
                const mockPrice = (Math.random() * 100 + 50).toFixed(2);
                const newItem: CartItem = {
                    id: Math.floor(Math.random() * 10000),
                    quantity: payload.quantity,
                    total_price: (parseFloat(mockPrice) * payload.quantity).toFixed(2),
                    variant: {
                        id: payload.product_variant_id,
                        sku: `SKU-${payload.product_variant_id}`,
                        product_title: 'Mock Sculpture Title',
                        product_slug: 'mock-sculpture-title',
                        price: mockPrice,
                        image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=200&auto=format&fit=crop',
                        attributes: {Material: 'Bronze'}
                    }
                };
                cart.value.items.push(newItem);
            }
            _recalculateMockTotals(cart.value);

        } catch (e) {
            console.error('Failed to add to cart', e);
        } finally {
            loading.value = false;
        }
    };

    const updateItemQuantity = async (itemId: number, payload: UpdateCartItemPayload) => {
        loading.value = true;
        try {
            await new Promise(resolve => setTimeout(resolve, 200));
            if (cart.value) {
                const item = cart.value.items.find(i => i.id === itemId);
                if (item) {
                    item.quantity = payload.quantity;
                    item.total_price = (parseFloat(item.variant.price) * item.quantity).toFixed(2);
                    _recalculateMockTotals(cart.value);
                }
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
            if (cart.value) {
                cart.value.items = cart.value.items.filter(i => i.id !== itemId);
                _recalculateMockTotals(cart.value);
            }

        } catch (e) {
            console.error('Failed to remove item', e);
        } finally {
            loading.value = false;
        }
    };

    const clearCart = () => {
        if (cart.value) {
            cart.value.items = [];
            cart.value.total_items = 0;
            cart.value.total_price = '0.00';
        }
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
        clearCart,
        _initMockCart,
        _mockInitCart
    };
};