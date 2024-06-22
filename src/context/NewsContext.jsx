import React, {createContext, useState, useEffect, useCallback} from "react";

const API_KEY = "4ff4d5da766744fb859c07fdcdb2b7ad";
const BASE_URL = "https://newsapi.org/v2/top-headlines";
const NewsContext = createContext();
export const NewsProvider = ({children}) => {
    const [articles, setArticles] = useState([]);
    const [status, setStatus] = useState("idle");
    const [error, setError] = useState(null);
    const [category, setCategory] = useState("business");
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const fetchArticles = useCallback(async () => {
         setStatus("loading");
         try {
              const response = await fetch(`${BASE_URL}?category=${category}&page=${page}&country=in&pageSize=10&apiKey=${API_KEY}`);
              const data = await response.json();
              if(response.ok){
                 setArticles(data.articles);
                 setTotalResults(data.totalResults);
                 setStatus("succeeded");
              }
              else{
                  throw new Error(data.message);
              }
         } catch (error) {
             setError(error.message);
             setStatus("failed");
         }
    }, [category, page]);
    useEffect(() => {
         fetchArticles();
    }, [fetchArticles]);
    return(
         <NewsContext.Provider
         value = {
              {articles, setArticles, status, error, category, setCategory, page, setPage, totalResults, fetchArticles}
         }
         >
               {children}
         </NewsContext.Provider>
    )
}

export default NewsContext;
