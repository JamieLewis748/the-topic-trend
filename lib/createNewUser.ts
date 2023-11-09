import axios from 'axios';

async function createNewUser(
    username: string,
    name: string,
    email: string,
    avatar_url: string
): Promise<void> {
    try {
    const response = await axios.post('https://nc-news-app-wdjy.onrender.com/api/users', {
        body: {
        username,
        name,
        email,
        avatar_url,
        },
    });

    if (response.status === 201) {
        console.log('User registered successfully:', response.data.newUser);
    } else {
        console.error('Registration failed:', response);
    }
    } catch (error) {
    console.error('Registration error:', error);
    }
}

export default createNewUser;