import {ChangeEvent, ReactNode} from "react";

export interface MaterialSelectInterface {
    title: string,
    value: string | number,
    onChange: (event: ChangeEvent<{ name?: string | undefined; value: unknown; }>, child: ReactNode) => void,
    name: string,
    id: string,
    list: Array<any>,
    subKey: string,
    multiple?: boolean,
    hasError?: boolean,
    enable?: boolean,
}