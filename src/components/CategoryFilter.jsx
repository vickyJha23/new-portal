import { useContext } from "react";
import NewsContext from "../context/NewsContext"
const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryFilter = () => {
     const {setCategory, setPage} = useContext(NewsContext);
     const handleCategoryChange = (category) => {
           setCategory(category);
           setPage(1);
     }
     return (
          <div className="lg:bg-slate-950 bg-[#f1f1f1] lg:h-[2rem] h-[100%] overflow-hidden fixed lg:w-[100%] top-[3rem] w-[250px]">
               <div className="lg:w-[90vw] lg:max-w-[1140px] lg:mx-auto h-[100%] flex flex-col lg:flex-row lg:justify-center mt-[2rem] lg:mt-[0]">
                     {categories.map((category, index) => { 
                         return(<button onClick={ () => handleCategoryChange(category)} key = {index} className="lg:h-[100%] lg:border-r-[1px] lg:border-[#333] text-[#818181] lg:text-center cursor-pointer hover:text-[#000] duration-200 ease-linear  text-left px-[1.5rem] py-[1rem] lg:px-[0.75rem] lg:py-[0.25rem] tracking-[2px] capitalize lg:text-white  lg:hover:text-green-400">{category}</button>)})}
               </div>
          </div> 
     ) 
}

export default CategoryFilter;