import {useSelector} from "react-redux";
import {RootState} from "../../store/mainStore";

export const useGetToken = () => {
    const {token} = useSelector((state: RootState) => state.loginReducer);
    return token;
}