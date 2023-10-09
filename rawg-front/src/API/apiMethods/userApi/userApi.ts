import { AxiosResponse } from 'axios';
import { apiInstance } from '../../apiConfiguration';
import { ResponseInterface } from '../../responseInterface';

export async function signUp(
    firstName: string,
    secondName: string,
    email: string,
    password: string,
): Promise<String> {
    const response: AxiosResponse<ResponseInterface<String>, any> = await apiInstance.get(
        '/signup',
        {
            method: 'post',
            data: {
                firstname: firstName,
                secondname: secondName,
                email: email,
                password: password,
            },
        },
    );

    return response.data.data;
}

export async function confirmEmail(email: string, token: string): Promise<String> {
    const response: AxiosResponse<ResponseInterface<String>, any> = await apiInstance.get(
        `/signup/confirmEmail/${token}`,
        {
            method: 'post',
            data: {
                email: email,
            },
        },
    );

    return response.data.data;
}

interface loginInterface {
    apiToken: string;
}

export async function login(email: string, password: string): Promise<String> {
    const response: AxiosResponse<
        ResponseInterface<loginInterface>,
        any
    > = await apiInstance.get(`/login`, {
        method: 'post',
        data: {
            email: email,
            password: password,
        },
    });

    return response.data.data.apiToken;
}
