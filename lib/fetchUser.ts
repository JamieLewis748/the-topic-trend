import axios from 'axios';

const fetchUser = async (username: string) => {
try {
    const response = await axios.get(`https://nc-news-app-wdjy.onrender.com/api/users/${username}`);

    const data = response.data;
    return data.user;
} catch (error) {
    console.error("An error occurred while fetching user:", error);
}
};

export default fetchUser;
