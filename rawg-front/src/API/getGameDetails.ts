import { apiInstance } from './apiConfiguration';

function getGameDetails(slug: string) {
    const response = apiInstance.get(`/${slug}`);

    return response;
}

export { getGameDetails };
