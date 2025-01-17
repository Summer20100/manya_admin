import { FC, useEffect } from "react";
import { useProducts } from "../../../store/products";
import { useCategories } from "../../../store/categories";
import Product from "./Product";

const Products: FC = () => {
    const { products, getProducts } = useProducts();
    const { categories } = useCategories();

    useEffect(() => {
        getProducts();
    }, [getProducts]);

    const titleCategories = (id: number | null | undefined): string => {
        if (id === null || id === undefined) return "Категория не указана";
        const category = categories.find(itm => itm.id === id);
        return category ? category.title : "Неизвестная категория";
    };

    const groupedByCategory = Object.values(
        products.reduce((acc, item) => {
            const key = titleCategories(item.category_id);
            if (!acc[key]) {
                acc[key] = {
                    title_categories: key,
                    items: []
                };
            }
            acc[key].items.push(item);
            return acc;
        }, {} as Record<string, { title_categories: string; items: typeof products }>)
    );

    groupedByCategory.sort((a, b) => {
        if (a.title_categories === "Категория не указана") return 1;
        if (b.title_categories === "Категория не указана") return -1;
        return 0;
    });

    return (
        <div className="table">
            {groupedByCategory.map((table) => (
                <div key={table.title_categories}>
                    <h3>{table.title_categories} : {table.items.length} поз.</h3>
                    <table className="table-products">
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>Картинка</th>
                                <th>Название</th>
                                <th>Описание</th>
                                <th>Цена (₽)</th>
                                <th>Вес (г)</th>
                                <th>Категория</th>
                                <th>Статус</th>
                                <th>Действия</th>
                            </tr>
                        </thead>
                        <tbody>
                            {table.items.map((product, index) => (
                                <Product {...product} key={product.id} index={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
};

export default Products;
