import { FC } from "react";
import { IProduct } from "../../../models/IProduct";
import { useProducts } from "../../../store/products";
import { useCategories } from "../../../store/categories";
import { usePopup } from "../../../store/popup";

interface ProductProps extends IProduct {
    index: number;
}

const Product: FC<ProductProps> = ({
    id,
    title,
    description,
    img_URL,
    img_title,
    price_for_itm,
    weight_for_itm,
    is_active,
    category_id,
    index
}) => {
   
    const { isOpenHandler, addNamePopup } = usePopup();
    const { getProductById } = useProducts();
    const { categories } = useCategories();

    const img_URL_no_photo = "/img/no_photo.jpg";

    const titleCategories = (id: number | null | undefined) => {
        if (!id) return "Нет";
        const category = categories.find(itm => itm.id === id);
        return category ? category.title : "Неизвестная категория";
    };

    return (
        <tr key={id}>
            <td>{index + 1}</td>
            <td>
                {img_URL && img_URL.trim() ? (
                    <div className="img">
                        <img
                            src={img_URL === "" ? img_URL_no_photo : img_URL}
                            alt={img_title || "Изображение категории"}
                            title={img_title || "Изображение категории"}
                        />
                    </div>
                ) : (
                    <div className="img">
                        <img
                            src={img_URL_no_photo}
                            alt={img_title || "Изображение отсутствует"}
                            title={img_title || "Изображение отсутствует"}
                        />
                    </div>
                )}
            </td>

            <td>{title}</td>
            <td>{description}</td>
            <td>{price_for_itm}</td>
            <td>{weight_for_itm}</td>
            <td>{titleCategories(category_id)}</td>
            <td>{is_active ? "Да" : "Нет"}</td>
            <td>
                <button
                    className="edit-button"
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("UpdateProduct", "Обновить продукт");
                        getProductById(id);
                    }}
                >
                ✏️
                </button>
                <button
                    className="delete-button"
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("RemoveProduct", "Удалить продукт");
                        getProductById(id);
                    }}
                >
                ✕
                </button>
            </td>
        </tr>
    );
}

export default Product;