import { FC, useEffect } from "react";
import { useCategories } from "../../../store/categories";
import Product from "./Product";


const Products: FC = () => {
    const { categories, getCategories } = useCategories();
    
    useEffect(() => {
      getCategories()
    }, [getCategories])
  
    return (
        <div className="catgories">
            {
                categories.map((category, ind) => <Product {...category} key={category.id || ind}/>)
            }
        </div>
    );
}

export default Products;