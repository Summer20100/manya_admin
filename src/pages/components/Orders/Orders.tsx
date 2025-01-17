import { FC, useEffect } from "react";
import { useOrders } from "../../../store/orders";
import Order from "./Order";

const Orders: FC = () => {
    const { orders, getOrders } = useOrders();

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <div className="table">
            <table className="table-products">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Тел.клиента</th>
                        <th>Название продукта</th>
                        <th>Кол-во</th>
                        <th>Цена заказа (₽)</th>
                        <th>Вес заказа (г)</th>
                        <th>Адрес</th>
                        <th>Комментарии</th>
                        <th>Отработан</th>
                        <th>Дата доставки</th>
                        {/* <th>Создан</th>
                        <th>Обновлён</th> */}
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((orders, index) => (
                        <Order {...orders} key={orders.id} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Orders;
