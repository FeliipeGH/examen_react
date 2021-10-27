import React from "react";

export interface ObjectRow {
    actions?: React.ReactNode,

    [otherOptions: string]: unknown;
}

export type createRowFunction = (simpleObj: Object, index: number) => ObjectRow;