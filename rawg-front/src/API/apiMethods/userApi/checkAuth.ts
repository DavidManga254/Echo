import { AxiosResponse } from 'axios';
import { apiInstance } from '../../apiConfiguration';
import { ResponseInterface } from '../../responseInterface';

export async function getLoginStatus(): Promise<AxiosResponse<ResponseInterface>> {
    const response = await apiInstance('/checkAuth', {
        method: 'get',
    });

    return response;
}
