import { FC } from "react";
import { ICategory } from "../../../models/ICategory";
import { useCategories } from "../../../store/categories";
import { usePopup } from "../../../store/popup";

const Category: FC<ICategory> = (category) => {
    const { id, title, description, img_URL, img_title } = category;
    const { isOpenHandler, addNamePopup } = usePopup();
    const { getCategoryById } = useCategories();
    const img_URL_no_photo = "/img/no_photo.jpg";


    return (
        <div className="category">
            <div className="title">{title}</div>
            <button 
                className="delete-button" 
                onClick={() => {
                    isOpenHandler(true);
                    addNamePopup("RemoveCategory");
                    getCategoryById(id)
                    }}>
                ✕
            </button>
            { img_URL && img_URL.trim() ? (
                <div 
                    className="img" 
                    onClick={() => {
                        isOpenHandler(true);
                        addNamePopup("UpdateCategory");
                        getCategoryById(id)
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
                        addNamePopup("UpdateCategory");
                        getCategoryById(id)
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

export default Category;