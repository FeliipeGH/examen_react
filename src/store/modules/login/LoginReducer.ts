import {loginInitialState} from "./InitialState";
import {LoginAction, LoginState} from "./LoginTypes";

export const loginReducer = (state = loginInitialState, action: LoginAction): LoginState => {
    switch (action.type) {
        case "login": {
            return {
                ...state,
                ...action.payload
            };
        }
        case "signOut": {
            return {
                ...loginInitialState
            }
        }
        default: {
            return state;
        }
    }
};