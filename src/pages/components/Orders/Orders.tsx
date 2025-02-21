import { FC, useEffect } from "react";
import { useOrders } from "../../../store/orders";
import Order from "./Order";

const Orders: FC = () => {
    const { orders, getOrders } = useOrders();

    useEffect(() => {
        getOrders();
    }, [getOrders]);

    return (
        <>
            { orders.length > 0
                ?
                <div className="table">
                    <table className="table-products">
                        <thead>
                            <tr>
                                <th className="number">№</th>
                                <th style={{ width: "7rem" }}>Тел.клиента</th>
                                <th>Название продукта</th>
                                <th style={{ width: "3rem" }}>Кол-во</th>
                                <th style={{ width: "3rem" }}>Цена (₽)</th>
                                <th style={{ width: "3rem" }}>Вес (г)</th>
                                <th style={{ width: "10rem" }}>Адрес</th>
                                <th>Комментарии</th>
                                <th style={{ width: "3rem" }}>Отработан</th>
                                <th style={{ width: "4rem" }}>Дата</th>
                                {/* <th>Создан</th>
                                <th>Обновлён</th> */}
                                <th className="actions">Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((orders, index) => (
                                <Order {...orders} key={orders.id} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
                :
                <h3>Нет пока ничего</h3>
            }
        </>
    );
};

export default Orders;
