import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import React from "react";
import {Control, FieldValues, RegisterOptions} from "react-hook-form";

export interface MaterialInputInterface {
    title: string,
    type?: string,
    inputId: string,
    inputProps?: Object,
    icon?: OverridableComponent<SvgIconTypeMap>
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
    autoComplete?: string,
    control?: Control<any>,
    rules?: Omit<RegisterOptions<FieldValues, any>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>,
    staticInput?: boolean,
    staticValue?: string,
    errorText?: string | null,
    enable?: boolean,
}