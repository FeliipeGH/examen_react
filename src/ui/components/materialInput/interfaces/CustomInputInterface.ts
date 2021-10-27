import {MaterialInputInterface} from "./MaterialInputInterface";
import React from "react";

export interface CustomInputInterface extends MaterialInputInterface {
    value?: string,
    error: boolean,
    formControlProps: Object,
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
}