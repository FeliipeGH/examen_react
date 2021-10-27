import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import {onClickFunction} from "./CollapseListItemInterface";

export interface CollapseElement {
    icon: OverridableComponent<SvgIconTypeMap>,
    title: string,
    onClick?: onClickFunction | null,
    url?: string | null | undefined,
}