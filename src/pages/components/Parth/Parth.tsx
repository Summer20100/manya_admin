import { FC, useState } from "react";
import { usePages } from "../../../store/pages"

const Page: FC = () => {
    const { addNamePage } = usePages();
    const [activeButton, setActiveButton] = useState<string | null>(null);

    const handleButtonClick = (key: string, name: string) => {
        setActiveButton(key);
        addNamePage(key, name);
    };
    
    return (
        <nav>
            <div
                className={`nav-category ${activeButton === 'Categories' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Categories', 'Категории')}
            >
                Категории
            </div>
            <div
                className={`nav-category ${activeButton === 'Products' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Products', 'Продукты')}
            >
                <span>Продукты</span>
            </div>
            <div
                className={`nav-category ${activeButton === 'Clients' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Clients', 'Клиенты')}
            >
                Клиенты
            </div>
            <div
                className={`nav-category ${activeButton === 'Orders' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Orders', 'Заказы')}
            >
                Заказы
            </div>
            {/* <div
                className={`nav-category ${activeButton === 'Photos' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Photos', 'Фотографии')}
            >
                Фотографии
            </div> */}
        </nav>
    );
}

export default Page;