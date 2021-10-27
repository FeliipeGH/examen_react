import {createRowFunction} from "./ProcessFunctionTypes";

export interface ColumnTable {
    Header: string,
    accessor: string,
}

export interface MaterialTableInterface {
    columns: Array<ColumnTable>,
    data: Array<any>,
    createObjectRow: createRowFunction,
    loading: boolean,
    removeLastColumn?: boolean,
}