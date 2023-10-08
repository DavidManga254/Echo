export interface ResponseInterface<T> {
    status: string;
    message: string;
    errorMessage: string;
    data: T;
}
