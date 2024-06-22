import { useContext, useEffect, useState} from "react"
import NewsContext from "../context/NewsContext"
const Pagination = () => {
    const {totalResults, status, page, setPage, fetchArticles} = useContext(NewsContext);
    const pageSize = 10;
    const pageCount = Math.ceil(totalResults / pageSize);
    useEffect(() => {
         fetchArticles();
    }, [page, fetchArticles]);
    const handlePage = (pg) => {
        setPage(pg);
    }
    const handleNextPage = () => {
        setPage((prevPage) => {
          return prevPage < pageCount ? prevPage + 1 : 1});
    }
    const handlePrevPage = () => {
         setPage(prevPage => prevPage > 1 ? prevPage - 1 : pageCount);
    }
    return (
         (status === "succeeded" &&  <div className="lg:w-[90vw] lg:max-w-[1140px] lg:mx-auto mt-[2rem] flex justify-center flex-wrap md:!ml-[250px] ml-[250px] lg:ml-[0] content-between">
            <button onClick={handlePrevPage} className="capitalize tracking-[2px] bg-blue-300 px-[0.75rem] py-[0.25rem] rounded-[4px] text-white mx-[0.5rem] mb-[0.5rem] lg:mb-[0] md:mb-[0]">prev</button>
            {Array.from({length:pageCount}, (_, index) => {
                  return <button key = {index} onClick={() => handlePage(index + 1)} className={`capitalize tracking-[2px] px-[0.75rem] py-[0.25rem] rounded-[4px] mb-[0.5rem] lg:mb-[0] md:mb-[0] text-white mx-[0.5rem] ${page == index + 1 ? "bg-green-400" : "bg-blue-300"}`}>{index + 1}</button>
            })}
            <button onClick={handleNextPage} className="capitalize tracking-[2px] bg-blue-300 px-[0.75rem] py-[0.25rem] rounded-[4px] text-white mx-[0.5rem] mb-[0.5rem] lg:mb-[0] md:mb-[0]">next</button>
       </div>)
    )
 }

export default Pagination;