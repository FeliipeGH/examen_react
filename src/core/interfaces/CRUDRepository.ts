export interface CRUDRepository {
    requestList: (token?: string, id?: number) => Promise<Array<any>>;
    save: (object: any, token?: string) => Promise<void | any>;
    getById: (token: string, id?: number) => Promise<any | undefined>;
    deleteById: (token: string, id: number) => Promise<void>;
}