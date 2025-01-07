import { FC, useEffect } from "react";
import { useProducts } from "../../../store/products";
import Product from "./Product";


const Products: FC = () => {
    const { products, getProducts } = useProducts();
    
    useEffect(() => {
        getProducts()
    }, [getProducts])
  
    return (
        <div className="catgories">
            {
                products.map((product, ind) => 
                    <Product {...product} key={product.id || ind}/>
                )
            }
        </div>
    );
}

export default Products;