import { FC, useEffect, useState } from "react";
import { useCategories } from "../../../../store/categories";
import { usePopup } from "../../../../store/popup";

const PopupUpdateCategory: FC = () => {
    const { updateCategory, category } = useCategories();
    const { isOpenHandler, addNamePopup } = usePopup();
    const [formState, setFormState] = useState({
        id: category?.id || 0,
        title: category?.title || "",
        description: category?.description || "",
        img_URL: category?.img_URL || "",
        img_title: category?.img_title || "",
    });

    useEffect(() => {
        setFormState({
            id: category?.id || 0,
            title: category?.title || "",
            description: category?.description || "",
            img_URL: category?.img_URL || "",
            img_title: category?.img_title || "",
        });
    }, [category]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        updateCategory(formState);
        event.currentTarget.reset();
        addNamePopup('', '');
        isOpenHandler(false);
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <input name="id" type="hidden" value={formState.id} />
            <input
                className="input"
                name="title"
                type="text"
                placeholder="Название категории"
                value={formState.title}
                onChange={onChange}
                required
            />
            <input
                className="input"
                name="description"
                type="text"
                placeholder="Описание"
                value={formState.description}
                onChange={onChange}
            />
            <input
                className="input"
                name="img_URL"
                type="text"
                placeholder="URL-картинки"
                value={formState.img_URL}
                onChange={onChange}
            />
            <input
                className="input"
                name="img_title"
                type="text"
                placeholder="Описание картинки"
                value={formState.img_title}
                onChange={onChange}
            />
            <button className="button" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default PopupUpdateCategory;
