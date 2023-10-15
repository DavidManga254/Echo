import { useApiManager } from '../../../API/apiManager';
import { PageResponseInterface } from '../pageResponseInterface';
import axios from 'axios';

interface GameDetailsResponseInterface {
    responseCode: number;
    gameDetails: any;
}
export async function getGameDetails(slug: string): Promise<GameDetailsResponseInterface> {
    const getGameInfo = useApiManager().getGameDetails;

    const response = await getGameInfo(slug);

    return {
        responseCode: response.status,
        gameDetails: axios.isAxiosError(response) ? '' : response.data,
    };
}
