import {LoginModel, LoginResponse} from "../models/LoginModel";

export interface LoginRepository {
    requestLogin: (login: LoginModel) => Promise<LoginResponse>;
}