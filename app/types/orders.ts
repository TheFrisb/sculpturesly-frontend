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
    country: string;
}

export interface OrderCreatePayload {
    email: string;
    shipping_address: OrderAddress;
    billing_address?: OrderAddress | null;
}