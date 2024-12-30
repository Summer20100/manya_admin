import { FC } from "react";
import { useCategories } from "../../../../store/categories";
import { usePopup } from "../../../../store/popup";

const PopupAddCategory: FC = () => {
    const { addCategory } = useCategories();
    const { isOpenHandler, addNamePopup } = usePopup();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        addCategory({
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            img_URL: formData.get("img_URL") as string,
            img_title: formData.get("img_title") as string,
        });
        addNamePopup('', '')
        isOpenHandler(false);
      };

    return (
        <>
            <form className="form" onSubmit={onSubmit}>
                <input
                    className="input"
                    name="title"
                    type="text"
                    placeholder="Название категории"
                    required
                />
                <input
                    className="input"
                    name="description"
                    type="text"
                    placeholder="Описание"
                />
                <input
                    className="input"
                    name="img_URL"
                    type="text"
                    placeholder="URL-картинки"
                />
                <input
                    className="input"
                    name="img_title"
                    type="text"
                    placeholder="Описание картинки"
                />
                <button className="button" type="submit">
                    Отправить
                </button>
            </form>
        </>
    );
};

export default PopupAddCategory;
