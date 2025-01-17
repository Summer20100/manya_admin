import { FC, useEffect } from "react";
import { IOrder } from "../../../models/IOrder";
import { useProducts } from "../../../store/products";
import { useClients } from "../../../store/clients";
import { usePopup } from "../../../store/popup";

interface OrderProps extends IOrder {
    index: number;
}

const Order: FC<OrderProps> = ({
    id,
    client_id,
    product_id,
    quantity,
    total_price,
    total_weight,
    adres,
    comment,
    is_active,
    date,
    /* created_at,
    updated_at, */
    index
}) => {
   
    const { isOpenHandler, addNamePopup } = usePopup();
    const { getProductById, product } = useProducts();
    const { getClientById, client } = useClients();


/*     useEffect(() => {
        const fetchData = () => {
          try {
            getProductById(product_id);
            getClientById(client_id);
          } catch (error) {
            console.error('Ошибка данных:', error);
          }
        };
        fetchData();
      }, [product_id, client_id, getProductById, getClientById]); */


    useEffect(() => {
        getProductById(product_id);
        getClientById(client_id)
    }, [product_id, client_id, getProductById, getClientById])


    function formatDate(date: Date) {
        const dateObj = new Date(date);
        const day = String(dateObj.getDate()).padStart(2, '0');
        const month = String(dateObj.getMonth() + 1).padStart(2, '0');
        const year = dateObj.getFullYear();
        return `${day}.${month}.${year}`;
    }

    return (
        <tr key={id}>
            <td>{index + 1}</td>
            <td>{  client?.phone  }</td>

            <td>{ product?.title }</td>
            <td>{ quantity }</td>
            <td>{ total_price }</td>
            <td>{ total_weight }</td>
            <td>{ adres }</td>
            <td>{ comment }</td>
            <td>{is_active ? "Нет" : "Да"}</td>

            <td>{ formatDate(date) }</td>
            {/* <td>{ created_at }</td>
            <td>{ updated_at }</td> */}
            
            <td>
                <button
                    className="edit-button"
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("UpdateOrder", "Обновить заказ");
                        getProductById(id);
                    }}
                >
                ✏️
                </button>
                <button
                    className="delete-button"
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("RemoveOrder", "Удалить заказ");
                        getProductById(id);
                    }}
                >
                ✕
                </button>
            </td>
        </tr>
    );
}

export default Order;