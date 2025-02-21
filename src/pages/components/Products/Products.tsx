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
        <>
            { products.length > 0
                ?
                <div className="table">
                    {groupedByCategory.map((table) => (
                        <div key={table.title_categories}>
                            <h3>{table.title_categories} : {table.items.length} поз.</h3>
                            <table className="table-products">
                                <thead>
                                    <tr>
                                        <th className="number">№</th>
                                        <th style={{ width: "3rem" }}>Картинка</th>
                                        <th>Название</th>
                                        <th style={{ width: "10rem" }}>Описание</th>
                                        <th style={{ width: "3rem" }}>Цена (₽)</th>
                                        <th style={{ width: "3rem" }}>Вес (г)</th>
                                        <th style={{ width: "5rem" }}>Категория</th>
                                        <th style={{ width: "5rem" }}>В продаже</th>
                                        <th className="actions">Действия</th>
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
                :
                <h3>Нет пока ничего</h3>
            }
        </>
        
    );
};

export default Products;
