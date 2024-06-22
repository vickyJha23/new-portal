import {useContext } from "react";
import { useParams } from "react-router-dom";
import NewsContext from "../context/NewsContext";
const ArticleDetail = () => {
    const {id} = useParams();
    const {articles} = useContext(NewsContext);
    console.log(articles);
    const article = articles.find((article) => {
        console.log(article.publishedAt === id);
        return article.publishedAt === id;
    })
    return (
        <div className="lg:w-[90vw] lg:max-w-[1140px] lg:mx-auto mt-[5rem]">
           {article ? (
             <div className="bg-white shadow-[#ccc] shadow p-[1rem] rounded-[4px]">
             <h1 className="mb-[0.5rem] text-[2.25rem] capitalize tracking-[2px] font-bold">{article?.title || "No title available"}</h1>
             <img className="text-center mb-[1rem] w-[100%] h-auto" src={article.urlToImage || "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} alt={article.title || "No title available"} />
             <p className="text-[1.5rem] tracking-[2px]">{article.description || "No title available"}</p>  
       </div>
           ): ( <div className="bg-white shadow-[#ccc] shadow p-[1rem] rounded-[4px]">
            <h1 className="mb-[0.5rem] text-[2.25rem] capitalize tracking-[2px] font-bold">No article found !</h1>  
      </div>)}
        </div>
    )
    
    
};

export default ArticleDetail; 