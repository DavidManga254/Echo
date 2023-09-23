import { apiInstance } from './apiConfiguration';

const useRawgApiManager = () => {
    const api = apiInstance;

    async function getAllGames() {
        let response = await api.get('games');

        return response;
    }

    return {
        getAllGames,
    };
};

export { useRawgApiManager };
