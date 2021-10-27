import {LoginRepository} from "../interfaces/LoginRepository";
import {LoginModel, LoginResponse} from "../models/LoginModel";
import {HttpErrors} from "../constants/HttpErrors";

const USER_NAME = "Felipe";
const PASSWORD = "Admin123";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9JzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ";

export class FakeLoginRepository implements LoginRepository {

    async requestLogin(login: LoginModel): Promise<LoginResponse> {
        const {userName, password} = login;
        // simulate api rest response time
        await new Promise(resolve => setTimeout(resolve, 1000));
        // fake validation
        if (userName === USER_NAME && password === PASSWORD) {
            return {name: "Felipe Guadarrama Herrera", token: TOKEN, userName: USER_NAME,};
        }
        throw new Error(HttpErrors.INCORRECT_CREDENTIALS);
    }
}