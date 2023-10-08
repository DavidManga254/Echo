import axios from 'axios';

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'x-API_KEY': import.meta.env.VITE_API_KEY,
    },
});

export { apiInstance };
