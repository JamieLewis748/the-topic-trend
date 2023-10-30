type Topic =
    | "coding"
    | "football"
    | "cooking"
    | "business"
    | "entertainment"
    | "general"
    | "health"
    | "science"
    | "sports"
    | "technology";

type NewsResponse = {
    data: Article[];
};

type Article = {
    "article_id": number;
    "title": string;
    "topic": string;
    "author": string;
    "created_at": string;
    "votes": number;
    "article_img_url": string;
    "comment_count": number;
}
