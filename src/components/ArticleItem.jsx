import {Link} from "react-router-dom";
const ArticleItem = ({article}) => {
    return(
       <div className="bg-white shadow-[#000] shadow p-[1rem] rounded-[4px] w-[100%] h-[500px] grid grid-rows-[auto,1fr,auto,auto]">
           <h2 className="font-bold capitalize mb-[1rem] text-ellipsis">{article.title || "No title available"}</h2>
            <img className ="mb-[0.5rem] w-[100%] h-[200px] object-contain" src={article.urlToImage || "https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"} alt = {article.title || "No title available"}/>
           <p className="text-ellipsis capitalize overflow-hidden h-[100%] w-[100%] text-justify text-[0.875rem]">{article.content || "No content available"}</p>
           <Link className="bg-green-400 px-[0.75rem] py-[0.25rem] mt-[0.8rem] inline-block !w-[auto] rounded-[4px] text-white tracking-[2px] shadow-[#ccc] shadow" to={`article/${article.publishedAt}`}>
              Read More
           </Link>
       </div>
   )
}

export default ArticleItem;