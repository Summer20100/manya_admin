import { FC } from "react";
import { IProduct } from "../../../models/IProduct";
import { useProducts } from "../../../store/products";
import { usePopup } from "../../../store/popup";

const Product: FC<IProduct> = (product) => {
    const { 
        id,
        title,
        description,
        img_URL,
        img_title
    } = product;
    
    const { isOpenHandler, addNamePopup } = usePopup();
    const { getProductById } = useProducts();
    const img_URL_no_photo = "/img/no_photo.jpg";

    return (
        <div className="category">
            <div className="title">{title}</div>
            <button 
                className="delete-button" 
                onClick={() => {
                    isOpenHandler(true);
                    console.log("Before addNamePopup");
                    addNamePopup("RemoveProduct", "Удалить продукт");
                    console.log("After addNamePopup");
                    getProductById(id);
                    }}>
                ✕
            </button>
            { img_URL && img_URL.trim() ? (
                <div 
                    className="img" 
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("UpdateProduct", "Обновить продукт");
                        getProductById(id)
                }}>
                    <img 
                        src={img_URL === '' ? img_URL_no_photo : img_URL} 
                        alt={img_title || "Изображение категории"} 
                        title={img_title || "Изображение категории"} 
                    />
                </div>
            ) : (
                <div 
                    className="img" 
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("UpdateProduct", "Обновить продукт");
                        getProductById(id)
                }}>
                    <img 
                        src={img_URL_no_photo} 
                        alt={img_title || "Изображение отсутствует"} 
                        title={img_title || "Изображение отсутствует"} 
                    />
                </div>
            )}

            <div className="description">{description}</div>
        </div>
    );
}

export default Product;