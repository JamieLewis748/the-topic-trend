import Newslist from "@/app/Newslist";
import fetchNews from "@/lib/fetchNews";
import { notFound } from "next/navigation";

type Props = {
    params: {topic: Topic}
}

async function Topic({params: {topic}}: Props) {
const news: NewsResponse = await fetchNews(topic)

if (!news || news.articles.length === 0) {
    return notFound();
  }

return (
    <div>
        <h1 className="headerTitle">{topic}</h1>
        <Newslist news={news} />
    </div>
)
}

export default Topic