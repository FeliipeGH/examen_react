export interface ResultListData {
    list?: Array<any>,
    resolved: boolean,
}

export type RequestListTokenFunction = (token?: string | null, id?: number) => Promise<ResultListData>;