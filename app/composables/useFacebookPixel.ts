import {v4 as uuidv4} from 'uuid';
import type {ProductDetail} from "~/types/product";
import type {Cart} from "~/types/cart";
import type {FacebookApiPayload, FacebookBrowserPayload} from "~/types/facebook";

export const useFacebookPixel = () => {
    const {proxy} = useScriptMetaPixel();
    const config = useRuntimeConfig();

    const getCurrentUrl = () => import.meta.client ? window.location.href : '';
    const CURRENCY = 'EUR';

    /**
     * CORE HELPER: Fire and Forget
     */
    function fireEvent(
        eventName: string,
        browserPayload: FacebookBrowserPayload,
        apiEndpoint: string,
        apiPayload: FacebookApiPayload,
        explicitEventId?: string
    ) {
        const eventID = explicitEventId || uuidv4();

        if (proxy && proxy.fbq) {
            proxy.fbq('track', eventName, browserPayload, {eventID: eventID});
        }

        fetchWithDefaults(apiEndpoint, {
            method: 'POST',
            body: {
                ...apiPayload,
                event_id: eventID,
                url: getCurrentUrl()
            }
        }).catch(err => {
            if (import.meta.dev) console.error(`[CAPI Error] ${eventName}:`, err);
        });
    }

    function sendViewContentEvent(product: ProductDetail, variantSku?: string) {
        fireEvent(
            'ViewContent',
            {
                content_name: product.title,
                content_ids: [product.id.toString()],
                content_type: 'product',
                value: parseFloat(product.base_price),
                currency: CURRENCY,
                content_category: product.categories?.[0]?.title || '',
            },
            '/api/facebook/conversions/view-content/',
            {
                product_slug: product.slug,
                variant_sku: variantSku || null
            }
        );
    }

    function sendAddToCartEvent(product: ProductDetail, quantity: number = 1, variantSku: string) {
        fireEvent(
            'AddToCart',
            {
                content_name: product.title,
                content_ids: [product.id.toString()],
                content_type: 'product',
                value: parseFloat(product.base_price) * quantity,
                currency: CURRENCY,
                content_sku: variantSku,
            },
            '/api/facebook/conversions/add-to-cart/',
            {
                variant_sku: variantSku,
                quantity: quantity
            }
        );
    }

    function sendInitiateCheckoutEvent(cart: Cart) {
        const contentIds = cart.items.map(item => item.variant.id.toString());

        fireEvent(
            'InitiateCheckout',
            {
                content_ids: contentIds,
                content_type: 'product',
                num_items: cart.total_items,
                value: parseFloat(cart.total_price),
                currency: CURRENCY,
            },
            '/api/facebook/conversions/initiate-checkout/',
            {}
        );
    }

    function sendPurchaseEvent(cart: Cart, orderNumber: string) {
        const contentIds = cart.items.map(item => item.variant.id.toString());

        fireEvent(
            'Purchase',
            {
                content_ids: contentIds,
                content_type: 'product',
                value: parseFloat(cart.total_price),
                currency: CURRENCY,
                num_items: cart.total_items,
                order_id: orderNumber
            },
            '/api/facebook/conversions/purchase/',
            {
                order_number: orderNumber
            },
            orderNumber
        );
    }

    return {
        sendViewContentEvent,
        sendAddToCartEvent,
        sendInitiateCheckoutEvent,
        sendPurchaseEvent
    }
}