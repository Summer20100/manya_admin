import { FC } from "react";
// import { useProducts } from "../../../../store/products";
import { usePopup } from "../../../../store/popup";

const PopupAddProduct: FC = () => {
    // const { addProduct } = useProducts();
    const { isOpenHandler, addNamePopup } = usePopup();

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newProduct = {
            title: formData.get("title") as string,
            description: formData.get("description") as string,
            img_URL: formData.get("img_URL") as string,
            img_title: formData.get("img_title") as string,
            price_for_itm: parseFloat(formData.get("price_for_itm") as string),
            weight_for_itm: parseFloat(formData.get("weight_for_itm") as string),
            is_active: formData.get("is_active") === "off",
            category_id: Number(formData.get("category_id")),
        };
        // addProduct({
        //     title: formData.get("title") as string,
        //     description: formData.get("description") as string,
        //     img_URL: formData.get("img_URL") as string,
        //     img_title: formData.get("img_title") as string,
        //     price_for_itm: formData.get("price_for_itm") as number,
        //     weight_for_itm: formData.get("weight_for_itm") as number,
        //     is_active: formData.get("is_active") as boolean,
        //     category_id: formData.get("weight_for_itm") as number,
        // });

        if (isNaN(newProduct.price_for_itm) || isNaN(newProduct.weight_for_itm)) {
            console.error("Цена или вес должны быть в формате 00.00");
            return;
        };

        console.log(newProduct)

        addNamePopup('', '')
        isOpenHandler(false);
      };

      const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (Number(event.target.value) < 0) {
            event.target.value = "0";
        }
    };

      return (
        <form className="form" onSubmit={onSubmit}>
            <input
                className="input"
                name="title"
                type="text"
                placeholder="Название продукта"
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
            <input
                className="input"
                name="price_for_itm"
                type="number"
                placeholder="Цена продукта"
                min={0}
                onInput={handleInput}
            />
            <input
                className="input"
                name="weight_for_itm"
                type="number"
                placeholder="Вес продукта"
                min={0}
                onInput={handleInput}
            />
            <label className="input" style={{ backgroundColor: "white", textAlign: "left" }}>
                <input
                    
                    name="is_active"
                    type="checkbox"
                />
                <span style={{ marginLeft: "10px" }}>В продажу</span>
            </label>
            <input
                className="input"
                name="category_id"
                type="number"
                placeholder="Категория"
            />
            <button className="button" type="submit">
                Отправить
            </button>
        </form>
    );
};

export default PopupAddProduct;
