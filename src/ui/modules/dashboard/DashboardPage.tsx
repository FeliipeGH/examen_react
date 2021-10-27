import React from 'react';
import {Grid} from "@material-ui/core";
import {DashboardItem} from "./localComponents/DashboardItem";
import {RouteConstants} from "../../router/constants/RouteConstants";
import PeopleIcon from '@material-ui/icons/People';
import ImageIcon from '@material-ui/icons/Image';

export const DashboardPage = () => {
    return (
        <Grid container spacing={4}>
            <DashboardItem url={RouteConstants.EMPLOYEES_PAGE}
                           title="Empleados" subTitle="Gestión de empleados"
                           icon={PeopleIcon}
            />
            <DashboardItem url={RouteConstants.UPLOAD_PAGE}
                           title="Imágenes" subTitle="Subir imágenes"
                           icon={ImageIcon} color="rose"
            />
        </Grid>
    );
};