import { FC  } from "react";
import { useClients } from "../../../../store/clients";
import { usePopup } from "../../../../store/popup";


const PopupAddClient: FC = () => {
    const { addClient } = useClients();
    const { isOpenHandler, addNamePopup } = usePopup();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const name = formData.get("name")?.toString() || '';
        const phone = formData.get("phone")?.toString() || '';

        addClient({
            name,
            phone
        });

        addNamePopup('', '')
        isOpenHandler(false);
    };


    return (
        <form className="form" onSubmit={onSubmit}>
            <input
                className="input"
                name="name"
                type="text"
                placeholder="Имя клиента"
                required
            />
            <input
                className="input"
                name="phone"
                type="tel"
                /* value={value}
                onChange={handleChange} */
                maxLength={16}
                placeholder="+7(XXX)XXX-XX-XX"
                required
                style={{ fontFamily: "monospace" }}
            />
            <button className="button" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default PopupAddClient;
