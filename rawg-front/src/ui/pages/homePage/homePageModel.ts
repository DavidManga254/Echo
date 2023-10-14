import { useApiManager } from '../../../API/apiManager';
import { SingleGameInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import axios from 'axios';

interface GamePageInterface {
    responseCode: number;
    next: string;
    games: SingleGameInterface[];
}
export async function getAllGames(page: number): Promise<GamePageInterface> {
    const getGames = useApiManager().getGames;

    const response = await getGames(page);

    return {
        responseCode: response.status,
        games: axios.isAxiosError(response) ? [] : response.data.data.data,
        next: axios.isAxiosError(response) ? '' : response.data.data.next,
    };
}

export async function getNextPage(next: string): Promise<GamePageInterface> {
    const getGames = useApiManager().getMoreGames;

    const response = await getGames(next);

    return {
        responseCode: response.status,
        games: axios.isAxiosError(response) ? [] : response.data.data.data,
        next: axios.isAxiosError(response) ? '' : response.data.data.next,
    };
}
