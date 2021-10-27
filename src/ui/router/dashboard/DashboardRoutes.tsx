import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import {DashboardContainer} from "../../components/dashboard/DashboardContainer";
import {RouteConstants} from "../constants/RouteConstants";
import {DashboardPage} from "../../modules/dashboard/DashboardPage";
import {EmployeesPage} from "../../modules/employees/EmployeesPage";
import {UploadPage} from "../../modules/upload/UploadPage";
import {dashboardModuleList} from "./helpers/dashboardModuleList";

export const DashboardRoutes = () => {
    return (
        <DashboardContainer moduleList={dashboardModuleList}>
            <Switch>
                <Route exact path={RouteConstants.DASHBOARD_MAIN} component={DashboardPage}/>
                <Route exact path={RouteConstants.EMPLOYEES_PAGE} component={EmployeesPage}/>
                <Route exact path={RouteConstants.UPLOAD_PAGE} component={UploadPage}/>
                <Redirect to={RouteConstants.EMPLOYEES_PAGE}/>
            </Switch>
        </DashboardContainer>
    );
};