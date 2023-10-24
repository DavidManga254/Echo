import { useApiManager } from '../../../API/apiManager';
import { SingleGameInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import axios from 'axios';
interface GamePageInterface {
    responseCode: number;
    next: string;
    games: SingleGameInterface[];
}
export async function getAllGamesByPlatform(
    platformSlug: string,
    page: number,
): Promise<GamePageInterface> {
    const getGames = useApiManager().getGamesByPlatform;

    const response = await getGames(platformSlug, page);

    return {
        responseCode: response.status,
        games: axios.isAxiosError(response) ? [] : response.data.data.data,
        next: axios.isAxiosError(response) ? '' : response.data.data.next,
    };
}

export async function getNextPageByPlatform(next: string): Promise<GamePageInterface> {
    const getGames = useApiManager().getMoreGamesbyPlatform;

    const response = await getGames(next);

    return {
        responseCode: response.status,
        games: axios.isAxiosError(response) ? [] : response.data.data.data,
        next: axios.isAxiosError(response) ? '' : response.data.data.next,
    };
}
