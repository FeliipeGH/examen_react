import {RouteConstants} from "../../constants/RouteConstants";
import PeopleIcon from '@material-ui/icons/People';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PermMediaIcon from '@material-ui/icons/PermMedia';

export const dashboardModuleList = [
    {
        title: "Dashboard",
        icon: DashboardIcon,
        url: RouteConstants.DASHBOARD_MAIN,
    },
    {
        title: "Empleados",
        icon: PeopleIcon,
        url: RouteConstants.EMPLOYEES_PAGE,
    },
    {
        title: "Subir imágenes",
        icon: PermMediaIcon,
        url: RouteConstants.UPLOAD_PAGE,
    },
];