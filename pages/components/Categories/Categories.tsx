import { FC, useEffect } from "react";
import { useCategories } from "../../../store/categories";
import Category from "./Category";



const Categories: FC = () => {
    const { categories, getCategories } = useCategories();
    
    useEffect(() => {
      getCategories()
    }, [getCategories])
  
    return (
        <div className="catgories">
            {
                categories.map((category, ind) => <Category {...category} key={category.id || ind}/>)
            }
        </div>
    );
}

export default Categories;