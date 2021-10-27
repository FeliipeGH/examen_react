import {ClassNameMap} from "@material-ui/core/styles/withStyles";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";

export type onClickFunction = () => void;

export interface CollapseListItemInterface {
    classes: ClassNameMap<any>,
    contentClass: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    title: string,
    url?: string | null,
    onClick?: onClickFunction | null,
}