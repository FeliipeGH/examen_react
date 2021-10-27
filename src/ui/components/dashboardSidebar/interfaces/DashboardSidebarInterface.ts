import {ModuleElementSideInterface} from "../../dashboard/interfaces/ModuleElementSideInterface";

export interface DashboardSidebarInterface {
    open: boolean,
    handleOpen: () => void,
    isOpenMenuMini: boolean,
    moduleList: Array<ModuleElementSideInterface>,
}