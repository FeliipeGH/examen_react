import React from "react";

export interface GeneralDialogInterface {
    openDialog: boolean,
    setOpenDialog: (value: boolean) => void,
    children: React.ReactNode,
    isLargest?: boolean,
    title: string,
    isSuperLargest?: boolean,
    onClose?: () => void;
}