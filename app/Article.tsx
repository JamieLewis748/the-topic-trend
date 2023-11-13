import React from 'react';
import ReadMoreButton from './ReadMoreButton';
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";


type Props = {
    article: Article;
};

function Article({ article }: Props) {

    return (
        <article className="bg-slate-200 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
            {article.article_img_url && (
                <img
                    src={article.article_img_url}
                    alt={article.title}
                    className="h-56 w-full object-cover rounded-t-lg shadow-md"
                />
            )}
            <div className="flex-1 flex flex-col">
                <div className="flex-1 flex flex-col p-5">
                    <h2 className="font-bold font-serif">{article.title}</h2>
                    <section className="mt-2 flex-1">
                        <p className="text-xs line-clamp-6"></p>
                    </section>
                    <footer className="text-xs flex space-x-1 items-center pt-5 italic text-gray-400">
                        <div className="flex items-center">
                            <ChatBubbleLeftIcon className="h-5" />
                            <p className="ml-1">{article.comment_count}</p>
                        </div>
                        <div className="flex-grow text-right">
                            <p>
                                {new Date(article.created_at).toLocaleDateString()}{' '}
                                {new Date(article.created_at).toLocaleTimeString()}
                            </p>
                        </div>
                    </footer>

                </div>
                <ReadMoreButton article={article} />
            </div>
        </article>
    );
}

export default Article;;