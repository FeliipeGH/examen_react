import React, {MouseEventHandler} from "react";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import {FieldError} from "react-hook-form";

export interface AdornmentInterface {
    error: FieldError | undefined | null | string,
    inputId: string,
    handleClickShowPassword: MouseEventHandler<HTMLButtonElement>,
    handleMouseDownPassword: any,
    hideText: boolean,
    type?: string,
    icon?: OverridableComponent<SvgIconTypeMap>
}