import { FC } from "react";
import { usePages } from "../../../store/pages"

const Page: FC = () => {
    const { addNamePage } = usePages();
/*     const [namePage, setNamePage] = useState<string>('Categories'); */

    return (
        <nav>
            <button className="nav-category" onClick={() => addNamePage('Categories')}>Категории</button>
            <button className="nav-category" onClick={() => addNamePage('Products')}>Продукты</button>
            <button className="nav-category" onClick={() => addNamePage('Clients')}>Клиенты</button>
            <button className="nav-category" onClick={() => addNamePage('Orders')}>Заказы</button>
        </nav>
    );
}

export default Page;