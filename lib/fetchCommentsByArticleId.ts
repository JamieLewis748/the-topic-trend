
import axios from 'axios';

const fetchCommentsByArticleId = async (articleId: number) => {
try {
    const response = await axios.get(`https://nc-news-app-wdjy.onrender.com/api/articles/${articleId}/comments`);

    const data = response.data;
    return data.comments;
} catch (error) {
    console.error("An error occurred while fetching article:", error);
}
};

export default fetchCommentsByArticleId;

