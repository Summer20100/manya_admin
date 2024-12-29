import { FC } from "react";
import Page from "./components/Parth/Parth";
import { usePages } from "../../src/store/pages";
import { usePopup } from "../../src/store/popup";
import Categories from "./components/Categories/Categories";
import Popup from "./components/Popup/Popup";

const MainPage: FC = () => {
  const { namePage, namePageRu } = usePages();
  const { isOpen, isOpenHandler, addNamePopup } = usePopup();

  return (
    <>
      <Page />
      <h1>{namePageRu}</h1>
      <button
        onClick={() => {
          isOpenHandler(true);
          addNamePopup(namePage);
        }}
      >
        Добавить в раздел "{namePageRu}"
      </button>
      { isOpen && <Popup /> }
      {namePage === "Categories" && <Categories />}
    </>
  );
};

export default MainPage;
