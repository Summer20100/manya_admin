import { FC } from "react";
import { useCategories } from "../../../store/categories";
import { usePopup } from "../../../store/popup";

const PopupDeleteCategory: FC = () => {
    const { removeCategory, category } = useCategories();
    const { isOpenHandler } = usePopup();
    const handleDelete = () => {
        if (category) {
            removeCategory(category.id);
            isOpenHandler(false);
        }
    };

    return (
        <>
            <div>Хотите удалить категорию?</div>
            <button className="delete-button" onClick={() => handleDelete()}>
                Да, хочу
            </button>
        </>
    );
};

export default PopupDeleteCategory;
