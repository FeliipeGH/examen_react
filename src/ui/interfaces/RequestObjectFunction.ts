export type RequestObjectFunction = (id: number, token: string) => Promise<Object | null | undefined>;
export type RequestDeleteFunction = (id: number, token?: string | null) => Promise<boolean>;