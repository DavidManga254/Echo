import { AxiosResponse } from 'axios';
import { apiInstance } from '../../apiConfiguration';
import { ResponseInterface } from '../../responseInterface';

export async function signUp(
    firstName: string,
    secondName: string,
    email: string,
    password: string,
): Promise<AxiosResponse<ResponseInterface<string>, any>> {
    const formData = new FormData();

    formData.append('firstname', firstName);
    formData.append('secondname', secondName);
    formData.append('email', email);
    formData.append('password', password);

    const response: AxiosResponse<ResponseInterface<string>, any> = await apiInstance('/signup', {
        method: 'post',
        data: formData,
    });
    return response;
}

export async function confirmEmail(
    email: string,
    token: string,
): Promise<AxiosResponse<ResponseInterface<[]>, any>> {
    const formData = new FormData();

    formData.append('email', email);

    const response: AxiosResponse<ResponseInterface<[]>, any> = await apiInstance(
        `/signup/confirmEmail/${token}`,
        {
            method: 'post',
            data: formData,
        },
    );

    return response;
}

interface loginInterface {
    apiToken: string;
}

export async function login(email: string, password: string): Promise<String> {
    const response: AxiosResponse<ResponseInterface<loginInterface>, any> = await apiInstance.get(
        `/login`,
        {
            method: 'post',
            data: {
                email: email,
                password: password,
            },
        },
    );

    return response.data.data.apiToken;
}
