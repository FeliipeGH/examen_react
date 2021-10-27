import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {loginReducer} from "./modules/login/LoginReducer";

const composeEnhancers = (typeof window !== 'undefined'
    && window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;

const reducers = combineReducers({
    loginReducer: loginReducer,
});

export type RootState = ReturnType<typeof reducers>

export const mainStore = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);