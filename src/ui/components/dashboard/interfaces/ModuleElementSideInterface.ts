import {OverridableComponent} from "@material-ui/core/OverridableComponent";
import {SvgIconTypeMap} from "@material-ui/core";
import {CollapseElement} from "../../dashboardSidebar/interfaces/CollapseElement";

export interface ModuleElementSideInterface {
    title: string,
    icon: OverridableComponent<SvgIconTypeMap>,
    url?: string | null,
    collapseList?: Array<CollapseElement>,
}