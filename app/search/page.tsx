import fetchNews from "@/lib/fetchNews";
import Newslist from "../Newslist";
import { notFound } from "next/navigation";


type Props = {
    searchParams?: { term: string}
};



async function SearchPage({searchParams}: Props) {

        if (!searchParams || !searchParams.term) {
        return (
            <div>
                <p>Please enter a search term.</p>
            </div>
        );
        }
    
    const news: NewsResponse = await fetchNews()

    
    const filteredArticles = news.articles.filter((article) => {
        const articleTitle = article.title.toLowerCase();
        const lowerCaseKeyword = searchParams.term.toLowerCase();
    
        return articleTitle.includes(lowerCaseKeyword);
    });

    if (!filteredArticles.length) {
    return notFound();
}
    
    const filteredNews: NewsResponse = {
        articles: filteredArticles
    };

    return (
        <div>
            <h1 className="headerTitle">Search Results for: {searchParams?.term}
                
</h1>
            <Newslist news={filteredNews}/>
        </div>
    )
}

export default SearchPage