import { FC, useState, useEffect } from "react";
import Page from "./components/Parth/Parth";
import { usePages } from "../../src/store/pages";
import { usePopup } from "../../src/store/popup";
import { useProducts } from "../store/products";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Popup from "./components/Popup/Popup";

const MainPage: FC = () => {
  const { namePage, namePageRu } = usePages();
  const { isOpen, isOpenHandler, addNamePopup } = usePopup();
  const { message, error } = useProducts();

  const [namePopup, setNamePopup] = useState<string>('');
  const [namePopupRu, setNamePopupRu] = useState<string>('');

  useEffect(() => {
    if (namePage === "Products") {
      setNamePopup("AddProduct");
      setNamePopupRu("Добавить продукт")
    } else if(namePage === "Categories") {
      setNamePopup("AddCategory");
      setNamePopupRu("Добавить категорию")
    } else if (namePage === "Orders") {
      setNamePopup("AddOrder");
      setNamePopupRu("Добавить заказ")
    } else if (namePage === "Clients") {
      setNamePopup("AddClient");
      setNamePopupRu("Добавить клиента")
    }
  }, [namePage]);

  console.log(message)
  console.log(error)

  return (
    <>
      <Page />
      <p>{message}</p>
      <h1>{namePageRu}</h1>
      <button
        onClick={() => {
          isOpenHandler(true);
          addNamePopup(namePopup, namePopupRu);
        }}
      >
        Добавить в раздел "{namePageRu}"
      </button>
      { isOpen && <Popup /> }
      { namePage === "Categories" && <Categories /> }
      { namePage === "Products" && <Products /> }
    </>
  );
};

export default MainPage;
