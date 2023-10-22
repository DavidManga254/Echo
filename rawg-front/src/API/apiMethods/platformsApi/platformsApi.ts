import { apiInstance } from '../../apiConfiguration';
import { AxiosResponse } from 'axios';
import { ResponseInterface } from '../../responseInterface';
import { GamesInterface, SingleGameInterface } from '../gamesApi/gamesApi';

export interface PlatformInterface {
    name: string;
    slug: string;
    background_image: string;
    top_3_games: {
        name: string;
        released: string;
        pivot: {};
    }[];
}
export async function getAllPlatforms(): Promise<
    AxiosResponse<ResponseInterface<PlatformInterface[]>>
> {
    const response = await apiInstance('/platform', {
        method: 'get',
    });

    return response;
}

export async function getGamesByPlatform(
    platformSlug: string,
    page: number,
): Promise<AxiosResponse<ResponseInterface<GamesInterface>>> {
    const response = await apiInstance(`/platform/${platformSlug}`, {
        method: 'get',
        params: {
            page: page,
        },
    });

    return response;
}

export async function getMoreGamesbyPlatform(
    next: string,
): Promise<AxiosResponse<ResponseInterface<GamesInterface>>> {
    const response = apiInstance(next, {
        method: 'get',
    });

    return response;
}
