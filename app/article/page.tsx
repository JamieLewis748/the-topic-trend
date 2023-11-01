
import { notFound } from "next/navigation"

type Props = {
    searchParams?: Article
}

function ArticlePage({ searchParams }: Props) {
    if ((searchParams && Object.entries(searchParams).length === 0) ||
        !searchParams) {
        return notFound()
    }

    const article: Article = searchParams
    
    return (
        <article>
            <section>
                {article.article_img_url && (
                    <img
                        className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
                        src={article.article_img_url}
                    alt={article.title} />
                )}
                <div className="px-10">
                    <h1 className="headerTitle px-0 no-underline pb-2">
                        {article.title}
                    </h1>

                    <div className="flex divide-x-2 space-x-4">
                        <h2 className="font-bold">By: {article.author}</h2>
                        <p className="pl-4">{new Date(article.created_at).toLocaleDateString()} {new Date(article.created_at).toLocaleTimeString()}</p>
                    </div>
                </div>
            </section>
        </article>
  )
}

export default ArticlePage