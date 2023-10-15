import { ResponseInterface } from '../../responseInterface';
import { apiInstance } from '../../apiConfiguration';
import { AxiosResponse } from 'axios';
export interface SingleGameInterface {
    background_image: string;
    name: string;
    rating: string;
    released: string;
    slug: string;
}

export interface GameDetailsInterface {
    name: string;
    slug: string;
    playtime: number;
    released: string;
    background_image: string;
    rating: string;
    screenshots: { image: string }[];
    stores: { name: string; slug: string }[];
    platforms: { name: string; slug: string }[];
    genre: { name: string; slug: string }[];
}

export interface GamesInterface {
    next: string;
    data: SingleGameInterface[];
}

export async function getGames(
    page: number,
): Promise<AxiosResponse<ResponseInterface<GamesInterface>>> {
    const response = apiInstance('/games', {
        method: 'get',
        params: {
            page: page,
        },
    });

    return response;
}

export async function getMoreGames(
    next: string,
): Promise<AxiosResponse<ResponseInterface<GamesInterface>>> {
    const response = apiInstance(`/${next}`, {
        method: 'get',
    });

    return response;
}

export async function getGameDetails(
    slug: string,
): Promise<AxiosResponse<ResponseInterface<GameDetailsInterface>>> {
    const response = apiInstance(`/games/info/${slug}`, {
        method: 'get',
    });

    return response;
}
