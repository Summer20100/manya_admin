import { FC } from "react";
import { ICategory } from "../../../models/ICategory";

const Category: FC<ICategory> = (category) => {
    const { id, title, description, img_URL, img_title } = category;
    console.log(id, title, description, img_URL, img_title)

    return (
        <div className="nav-category">
            <p>{title}</p>

            {/* {img_URL && img_URL.trim() ? (
                <img 
                    src={img_URL} 
                    alt={img_title || "Изображение категории"} 
                    title={img_title || "Изображение категории"} 
                />
            ) : (
                <p>Изображение отсутствует</p>
            )}
            <p>Описание: {description}</p> */}
        </div>
    );
}

export default Category;