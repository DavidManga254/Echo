import { useApiManager } from '../../../API/apiManager';
import { SingleGameInterface } from '../../../API/apiMethods/gamesApi/gamesApi';
import { PageResponseInterface } from '../pageResponseInterface';

export async function searchGame(
    query: string,
): Promise<PageResponseInterface<SingleGameInterface[]>> {
    const search = useApiManager().searchGames;

    const response = await search(query);

    return {
        responseCode: response.status,
        data: response.data.data,
    };
}
