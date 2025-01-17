export interface IBaseClient {
    name: string,
    phone: string,
}

export interface IClient extends IBaseClient {
    id: number;
}
