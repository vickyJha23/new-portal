import CategoryFilter from "../components/CategoryFilter"
import NewsContext from "../context/NewsContext";
import { useContext, useEffect} from "react";
import ArticleList from "../components/ArticleList";
import Pagination from "../components/Pagination";
const Home = () => {
     const {articles, status, setCategory, error} = useContext(NewsContext);
     useEffect(()=> {
           setCategory("business");
     }, [location]);
     return (
        <div className = "md:grid-cols-1 lg:grid-cols-none lg:grid-rows-[auto,1fr] md:w-[100%]">
             <CategoryFilter />
             {status === "loading" && (<div className="w-[100vw] h-[100vh] grid place-items-center"><div className="w-[6rem] h-[6rem] border-[5px] border-t-green-400 rounded-[50%] animate-spin"></div></div>)}
             {status === "failed" && (<div className="lg:w-[100vw] h-[100vh] grid place-items-center ml-[250px] lg:ml-[0] md:px-[0.75rem]"><p className="text-[1.5rem] tracking-[2px]">Error: {error}</p></div>)}
             {status === "succeeded" && <ArticleList articles = {articles} />}
             <Pagination />  
        </div>
     )
}
export default Home
