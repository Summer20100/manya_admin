import { FC, useEffect } from "react";
import { useCategoties } from "../../../store/categories";
import Category from "./Category";



const Categories: FC = () => {
    const { categories, getCategories } = useCategoties();
    useEffect(() => {
      getCategories()
    }, [getCategories])
  
    console.log(categories)
    return (
        <nav>
            {
                categories.map((category, ind) => <Category {...category} key={category.id || ind}/>)
            }
        </nav>
    );
}

export default Categories;