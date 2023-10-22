import { apiInstance } from '../../apiConfiguration';
import { AxiosResponse } from 'axios';
import { ResponseInterface } from '../../responseInterface';

export interface PlatformInterface {
    name: string;
    slug: string;
    background_image: string;
    top_3_games: [];
}
export async function getAllPlatforms(): Promise<
    AxiosResponse<ResponseInterface<PlatformInterface>>
> {
    const response = await apiInstance('/platform', {
        method: 'get',
    });

    return response;
}
