
import fetchArticle from "@/lib/fetchArticle";
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article
}

async function ArticlePage({ searchParams }: Props) {
    if ((searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams) {
        return notFound()
    }

    const article: Article = searchParams

    const { article_id } = article
    const articleById = await fetchArticle(article_id)

    
    return (
        <article>
            <section className="flex flex-col lg:flex-row pb-24 px-0 lg:px-10">
                {articleById.article_img_url && (
                    <img
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
                        src={articleById.article_img_url}
                    alt={articleById.title} />
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">
                        {articleById.title}
                    </h1>

                    <div className="flex divide-x-2 space-x-4 ">
                        <h2 className="font-bold">By: {articleById.author}</h2>
                        <p className="pl-4">{new Date(articleById.created_at).toLocaleDateString()} {new Date(articleById.created_at).toLocaleTimeString()}</p>
                    </div>
                    <p className="pt-4 pb-20">{articleById.body}</p>
                </div>
            </section>
            {/*add comments section*/}
            {/*add votes section*/}
        </article>
  )
}

export default ArticlePage