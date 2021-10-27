import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import React from "react";

export interface CardContainerInterface {
    showButton?: boolean,
    title?: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    children?: React.ReactNode,
    color?: "primary" | "warning" | "success" | "danger" | "info" | "rose",
    onClick?: string,
    onClickFunc?: () => void,
    onClickIsLink?: boolean,
}