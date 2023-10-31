import axios from 'axios';

const fetchNews = async () => {
try {
    const response = await axios.get("https://nc-news-app-wdjy.onrender.com/api/articles");

    const data = response.data;
    return data;
} catch (error) {
    console.error("An error occurred while fetching news:", error);
}
};

export default fetchNews;





