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
    articles: Article[];
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
    "body"?: string | null;
};

type CommentList = {
    comments: MyComment[];
};

type MyComment = {
    "comment_id": number;
    "body": string;
    "article_id": number;
    "author": string;
    "votes": number;
    "created_at": string;
}

