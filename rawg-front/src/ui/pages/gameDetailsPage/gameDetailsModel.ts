import { useApiManager } from '../../../API/apiManager';
import { GameDetailsInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import axios from 'axios';

interface GameDetailsResponseInterface<T> {
    responseCode: number;
    gameDetails: T | null;
}
export async function getGameDetails(
    slug: string,
): Promise<GameDetailsResponseInterface<GameDetailsInterface>> {
    const getGameInfo = useApiManager().getGameDetails;

    const response = await getGameInfo(slug);

    return {
        responseCode: response.status,
        gameDetails: axios.isAxiosError(response) ? null : response.data.data,
    };
}
