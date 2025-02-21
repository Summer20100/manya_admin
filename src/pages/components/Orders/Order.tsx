import { FC, useEffect, useState } from "react";
import { IOrder } from "../../../models/IOrder";
import { useProducts } from "../../../store/products";
import { useClients } from "../../../store/clients";
import { usePopup } from "../../../store/popup";
import { useOrders } from "../../../store/orders";
//import { IClient } from "../../../models/IClient";
import { IProduct } from "../../../models/IProduct";

interface OrderProps extends IOrder {
    index: number;
}

const Order: FC<OrderProps> = ({
    id,
    //client_id,
    client_phone,
    //client_name,
    product_id,
    quantity,
    total_price,
    total_weight,
    adres,
    comment,
    is_active,
    date,
    //created_at,
    //updated_at,
    index
}) => {
   
    const { isOpenHandler, addNamePopup } = usePopup();
    const { products } = useProducts();
    const { clients } = useClients();
    const { getOrderById } = useOrders();

    //const [client, setClient] = useState<IClient | undefined>();
    const [product, setProduct] = useState<IProduct | undefined>();  

    useEffect(() => {
        const product = products.find(p => product_id === p.id);
        //setClient(client);
        setProduct(product);
    }, [product_id, clients, products]); 

    const formattedDate = new Date(date).toLocaleDateString("ru-RU");

    return (
        <tr key={id}>
            <td>{index + 1}</td>
            <td>{  client_phone  }</td>

            <td>{ product?.title }</td>
            <td>{ quantity }</td>
            <td>{ total_price }</td>
            <td>{ total_weight }</td>
            <td>{ adres }</td>
            <td>{ comment }</td>
            <td>{is_active ? "Да" : "Нет"}</td>

            <td>{ formattedDate }</td>
            {/* <td>{ created_at }</td>
            <td>{ updated_at }</td> */}
            
            <td>
                <button
                    className="edit-button"
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("UpdateOrder", "Обновить заказ");
                        getOrderById(id);
                    }}
                >
                ✏️
                </button>
                <button
                    className="delete-button"
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("RemoveOrder", "Удалить заказ");
                        getOrderById(id);
                    }}
                >
                ✕
                </button>
            </td>
        </tr>
    );
}

export default Order;