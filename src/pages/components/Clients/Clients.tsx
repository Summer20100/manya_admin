import { FC, useEffect } from "react";
import { useClients } from "../../../store/clients";
import Client from "./Client";

const Clients: FC = () => {
    const { clients, getClients } = useClients();

    useEffect(() => {
        getClients();
    }, [getClients]);

    return (
        <div className="table">
            <table className="table-products">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Номер телефона</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <Client {...client} key={client.id} index={index} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Clients;
