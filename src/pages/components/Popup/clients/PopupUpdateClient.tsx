import { FC, useEffect, useState } from "react";
import { useClients } from "../../../../store/clients";
import { usePopup } from "../../../../store/popup";

const PopupUpdateClient: FC = () => {
    const { updateClient, client } = useClients();
    const { isOpenHandler, addNamePopup } = usePopup();


    const [formState, setFormState] = useState({
        id: client?.id || 0,
        name: client?.name || "",
        phone: client?.phone || "",
    });

    useEffect(() => {
        setFormState({
            id: client?.id || 0,
            name: client?.name || "",
            phone: client?.phone || "",
        });
    }, [client]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateClient(formState);
        event.currentTarget.reset();
        addNamePopup('', '');
        isOpenHandler(false);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                className="input"
                name="name"
                type="text"
                placeholder="Имя клиента"
                onChange={onChange}
                value={formState.name}
                required
            />
            <input
                className="input"
                name="phone"
                type="tel"
                /* value={value}
                onChange={handleChange} */
                value={formState.phone}
                maxLength={16}
                placeholder="+7(XXX)XXX-XX-XX"
                onChange={onChange}
                required
                style={{ fontFamily: "monospace" }}
            />
            <button className="button" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default PopupUpdateClient;
