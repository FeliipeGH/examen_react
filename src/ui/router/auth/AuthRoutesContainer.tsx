import React from 'react';
import {Redirect, Route} from "react-router";
import {ComponentsRouteProps, RouteContainerInterface} from "../interfaces/RouteContainerInterface";
import {RouteConstants} from "../constants/RouteConstants";

export const AuthRoutesContainer = ({component: Component, isAuthenticated, ...rest}: RouteContainerInterface) => {
    if (!Component) return null;
    return (
        <Route {...rest} component={(props: ComponentsRouteProps) => !isAuthenticated ?
            <Component {...props}/> : <Redirect to={RouteConstants.EMPLOYEES_PAGE}/>}
        />
    );
};