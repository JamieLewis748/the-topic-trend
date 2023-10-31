
import Article from "./Article";

type Props = {
    news: NewsResponse
}

function Newslist({ news }: Props) {
    return (
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10">{
            news.articles.map((article) => (
                <Article key={article.title} article={article} />
            ))}
        </main>
    )
}
export default Newslist