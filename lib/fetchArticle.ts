import axios from 'axios';

const fetchArticle = async (articleId: number) => {
try {
    const response = await axios.get(`https://nc-news-app-wdjy.onrender.com/api/articles/${articleId}`);

    const data = response.data;
    return data.article;
} catch (error) {
    console.error("An error occurred while fetching article:", error);
}
};

export default fetchArticle;





