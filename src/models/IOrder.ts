export interface IBaseOrder {
    client_id: number,
    product_id: number,
    quantity: number,
    total_price: number,
    total_weight: number,
    adres: string,
    comment?: string | '',
    is_active: boolean,
    date: Date,
    created_at?: Date | null,
    updated_at?: Date | null,
}

export interface IOrder extends IBaseOrder {
    id: number;
}
