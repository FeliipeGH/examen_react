import React from 'react';
import {AuthContainer} from "../../components/authContainer/AuthContainer";
import {Redirect, Route, Switch} from "react-router";
import {RouteConstants} from "../constants/RouteConstants";
import {LoginPage} from "../../modules/login/LoginPage";

export const AuthRoutes = () => {
    return (
        <AuthContainer>
            <Switch>
                <Route exact path={RouteConstants.LOGIN_PAGE} component={LoginPage}/>
                <Redirect to={RouteConstants.LOGIN_PAGE}/>
            </Switch>
        </AuthContainer>
    );
};