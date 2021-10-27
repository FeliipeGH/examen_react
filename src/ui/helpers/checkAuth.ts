import {LoginState} from "../../store/modules/login/LoginTypes";
import SecureLS from "secure-ls";

export const TIME_EXPIRATION_MS = 23 * 60 * 60 * 1000;
export const LOGIN_DATA = 'LoginData';

export const getUserDataFromLocalStorage = (): string => {
    const secureStorage = new SecureLS({encodingType: 'aes'});
    return secureStorage.get(LOGIN_DATA);
};

export const getTimeExpiration = (): number => {
    const date = new Date();
    return date.getTime() + TIME_EXPIRATION_MS;
};

export const saveUserDataInLocalStorage = (userData: LoginState) => {
    const secureStorage = new SecureLS({encodingType: 'aes'});
    secureStorage.set(LOGIN_DATA, JSON.stringify(userData));
};

export const removeUserDataFromLocalStorage = async () => {
    const secureStorage = new SecureLS({encodingType: 'aes'});
    await secureStorage.removeAll();
};

export const checkAuth = (): boolean => {
    let isAuth = true;
    try {
        const stringData = getUserDataFromLocalStorage();
        if (stringData === '') return false;
        const userData = JSON.parse(stringData) as LoginState;
        const {authorities, expiration, token, userName} = userData;
        if (token === null || expiration === null
            || authorities === null || userName === null) return false;
        const currentDate = new Date();
        try {
            const expireDate = new Date(expiration);
            isAuth = expireDate > currentDate;
            if (!isAuth) {
                localStorage.clear();
            }
        } catch (e) {
            localStorage.clear();
            isAuth = false;
        }
    } catch (e) {
        localStorage.clear();
        isAuth = false;
    }
    return isAuth;
};