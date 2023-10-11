export interface ResponseInterface<T = void> {
    status: string;
    message: string;
    errorMessage: string;
    data: T;
}
