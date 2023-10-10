import axios, { AxiosError, AxiosResponse } from 'axios';

const apiInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

apiInstance.interceptors.response.use(
    function (response: AxiosResponse) {
        return response;
    },
    function (error: AxiosError) {
        return error;
    },
);

export { apiInstance };
