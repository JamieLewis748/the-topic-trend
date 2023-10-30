import axios from 'axios';


const fetchNews = async (
    topic?: Topic | string,
) => {

    return axios
    .get("https://nc-news-app-wdjy.onrender.com/api/articles", { params: { topic} })
    .then(({ data }) => {
        return data;
        console.log("🚀 ~ data:", data);
    });


};

export default fetchNews