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
            <button
                className={`nav-category ${activeButton === 'Categories' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Categories', 'Категории')}
            >
                Категории
            </button>
            <button
                className={`nav-category ${activeButton === 'Products' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Products', 'Продукты')}
            >
                Продукты
            </button>
            <button
                className={`nav-category ${activeButton === 'Clients' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Clients', 'Клиенты')}
            >
                Клиенты
            </button>
            <button
                className={`nav-category ${activeButton === 'Orders' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Orders', 'Заказы')}
            >
                Заказы
            </button>
            <button
                className={`nav-category ${activeButton === 'Photos' ? 'active' : ''}`}
                onClick={() => handleButtonClick('Photos', 'Фотографии')}
            >
                Фотографии
            </button>
        </nav>
    );
}

export default Page;