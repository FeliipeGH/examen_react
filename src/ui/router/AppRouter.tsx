import React, {useEffect, useState} from 'react';
import {HashRouter} from "react-router-dom";
import {Redirect, Switch} from "react-router";
import {useIsMounted} from "../hooks/useIsMounted";
import {RootState} from "../../store/mainStore";
import {useDispatch, useSelector} from "react-redux";
import {checkAuth, getUserDataFromLocalStorage} from "../helpers/checkAuth";
import {LoginState} from "../../store/modules/login/LoginTypes";
import {doLogin, logOut} from "../../store/modules/login/loginActions";
import {CircularProgressIndicator} from "../components/CircularProgressIndicator";
import {AuthRoutesContainer} from "./auth/AuthRoutesContainer";
import {AuthRoutes} from "./auth/AuthRoutes";
import {RouteConstants} from "./constants/RouteConstants";
import {DashboardRoutesContainer} from "./dashboard/DashboardRoutesContainer";
import {DashboardRoutes} from "./dashboard/DashboardRoutes";

export const AppRouter = () => {
    const isMounted = useIsMounted();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [checking, setChecking] = useState(true);
    const userData = useSelector((state: RootState) => state.loginReducer);
    const dispatch = useDispatch();
    const isAuth = checkAuth();

    const onInit = () => {
        if (isMounted.current) setChecking(true);
        const emptyUserData = userData.authorities === null &&
            userData.userName === null && userData.expiration
            === null && userData.token === null;
        if (isAuth && emptyUserData) {
            const userLocalData = JSON.parse(getUserDataFromLocalStorage()) as LoginState;
            dispatch(doLogin(userLocalData));
        }
        if (!isAuth && !emptyUserData) {
            dispatch(logOut());
        }
        if (isMounted.current) {
            setChecking(false);
            setIsAuthenticated(isAuth);
        }
    };

    useEffect(onInit, [userData, dispatch, isMounted, isAuth]);

    if (checking) {
        return (
            <CircularProgressIndicator/>
        );
    }

    return (
        <HashRouter >
            <Switch>
                <AuthRoutesContainer path={RouteConstants.AUTH_PAGE} component={AuthRoutes}
                                     isAuthenticated={isAuthenticated}/>
                <DashboardRoutesContainer path={RouteConstants.DASHBOARD_ROOT} component={DashboardRoutes}
                                          isAuthenticated={isAuthenticated}/>
                <Redirect to={RouteConstants.AUTH_PAGE}/>
            </Switch>
        </HashRouter>
    );
};