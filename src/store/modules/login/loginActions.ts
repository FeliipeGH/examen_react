import {LoginAction, LoginState} from "./LoginTypes";

export const doLogin = (data: LoginState): LoginAction => ({
    type: "login",
    payload: data
});

export const logOut = (): LoginAction => ({
    type: "signOut"
});