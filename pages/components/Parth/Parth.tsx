import { FC } from "react";
import { usePages } from "../../../store/pages"

const Page: FC = () => {
    const { addNamePage } = usePages();
    return (
        <nav>
            <button 
                className="nav-category" 
                onClick={() => addNamePage('Categories', 'Категории')}>
            Категории</button>
            <button 
                className="nav-category" 
                onClick={() => addNamePage('Products', 'Продукты')}
            >Продукты</button>
            <button 
                className="nav-category" 
                onClick={() => addNamePage('Clients', 'Клиенты')}
            >Клиенты</button>
            <button 
                className="nav-category" 
                onClick={() => addNamePage('Orders', 'Заказы')}
            >Заказы</button>
        </nav>
    );
}

export default Page;