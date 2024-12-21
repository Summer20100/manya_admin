import { FC } from "react";
import Page from "./components/Parth/Parth"
import { usePages } from "../../src/store/pages"


const MainPage: FC = () => {
  const { namePage } = usePages();
  return (
    <>
      <Page />
      <h1>{ namePage }</h1>
    </>
  );
};

export default MainPage;
