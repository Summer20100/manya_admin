export interface IBaseOrder {
    client_phone: string;
    client_name: string;
    product_id: number;
    quantity: number;
    total_price: number;
    total_weight: number;
    adres?: string | null;
    comment?: string | null;
    is_active: boolean;
    date: string;
    created_at?: string | null;
    updated_at?: string | null;
}


export interface IOrder extends IBaseOrder {
    id: number;
}

export interface IOrderUpdate {
    id: number;
    client_phone: string,
    client_name: string,
    //client_id: number;
    product_id: number;
    quantity: number;
    total_price: number;
    total_weight: number;
    adres?: string | null;
    comment?: string | null;
    is_active: boolean;
    date: string;
    created_at?: string | null;
    updated_at?: string | null;
}
