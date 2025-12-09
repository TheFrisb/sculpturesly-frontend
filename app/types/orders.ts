// --- WRITE/INPUT INTERFACES (Existing) ---
export interface OrderAddress {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    address_line_1: string;
    address_line_2?: string;
    city: string;
    state: string;
    postal_code: string;
    country: string; // Input: "US"
}

export interface OrderCreatePayload {
    email: string;
    shipping_address: OrderAddress;
    billing_address?: OrderAddress | null;
}

export interface CountryObject {
    code: string;
    name: string;
}

export interface OrderReadAddress extends Omit<OrderAddress, 'country'> {
    id: number;
    country: CountryObject;
}

export interface OrderItem {
    id: number;
    product_sku: string;
    product_name: string;
    attributes: Record<string, any>;
    quantity: number;
    unit_price: string;
    total_price: string;
}

export interface OrderRead {
    id: number;
    order_number: string;
    status: string;
    status_display: string;
    email: string;
    total_amount: string;
    created_at: string;
    shipping_address: OrderReadAddress;
    billing_address: OrderReadAddress | null;
    items: OrderItem[];
    is_paid: boolean;
}