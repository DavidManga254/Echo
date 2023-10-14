export interface PageResponseInterface<T = void> {
    responseCode: number;
    data: T | null;
}
