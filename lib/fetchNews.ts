import axios from 'axios';

const fetchNews = async (
    topic?: string
    ) => {
    try {
        const apiUrl = "https://nc-news-app-wdjy.onrender.com/api/articles";
        const params = { topic }; 

        const response = await axios.get(apiUrl, { params });
        const data = response.data;
        
        return data;
} catch (error) {
    console.error("An error occurred while fetching news:", error);
}
};

export default fetchNews;





