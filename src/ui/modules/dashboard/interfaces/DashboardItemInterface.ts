import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";

export interface DashboardItemInterface {
    url: string,
    title: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    subTitle: string,
    hint?: string,
    color?: "primary" | "warning" | "success" | "danger" | "info" | "rose",
}