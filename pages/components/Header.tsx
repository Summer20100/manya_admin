import { FC } from "react";
import Categories from "./Categories/Categories"



const Header: FC = () => {

    return (
        <div>
            <h1>Header</h1>
            <Categories />
        </div>
    );
}

export default Header;