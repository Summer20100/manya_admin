import { FC } from "react";
import { useCategories } from "../../../store/categories";
import { usePopup } from "../../../store/popup";

const PopupUpdateCategory: FC = () => {
    const { updateCategory, category } = useCategories();
    const { isOpenHandler, addNamePopup } = usePopup();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        updateCategory({
            id: Number(formData.get("id")) || 0,
            title: (formData.get("title") as string) || '',
            description: (formData.get("description") as string) || '',
            img_URL: (formData.get("img_URL") as string) || '',
            img_title: (formData.get("img_title") as string) || '',
        });
        event.currentTarget.reset();
        addNamePopup('')
        isOpenHandler(false);
    };   

    console.log(category)

    return (
        <form className="form" onSubmit={onSubmit}>
            <input name="id" type="hidden" value={category?.id || 0} />
            <input
                className="input"
                name="title"
                type="text"
                placeholder="Название категории"
                defaultValue={category?.title || ""}
                required
            />
            <input
                className="input"
                name="description"
                type="text"
                placeholder="Описание"
                defaultValue={category?.description || ""}
            />
            <input
                className="input"
                name="img_URL"
                type="text"
                placeholder="URL-картинки"
                defaultValue={category?.img_URL || ""}
            />
            <input
                className="input"
                name="img_title"
                type="text"
                placeholder="Описание картинки"
                defaultValue={category?.img_title || ""}
            />
            <button className="button" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default PopupUpdateCategory;
