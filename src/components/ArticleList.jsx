import ArticleItem from "./ArticleItem";
const ArticleList = ({articles}) => {
   return (
     <div className="ml-[250px] mt-[3rem] md:grid-cols-2 lg:w-[90vw] lg:max-w-[1140px] lg:mx-auto lg:mt-[6.7rem] grid lg:grid-cols-3 lg:gap-[1.5rem] gap-[1.5rem] px-[1rem] lg:px-[0]">
       {articles.map((article, index) => (<ArticleItem key = {index} article = {article}/>))}
    </div>
   )
}

export default ArticleList;