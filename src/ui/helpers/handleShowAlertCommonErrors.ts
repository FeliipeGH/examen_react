import {HttpErrors} from "../../core/constants/HttpErrors";
import {ERROR_TITLE, GENERAL_ERROR_TEXT, showGenericAlert} from "../components/alerts/Alerts";

export const handleCommonCRUDErrors = async (error: Error) => {
    const {message} = error;
    let messageText: string;
    switch (message) {
        case HttpErrors.CONFLICT:
            messageText = "Ya se encuentra registrado";
            break;
        default:
            messageText = GENERAL_ERROR_TEXT;
    }
    await showGenericAlert(messageText, ERROR_TITLE, "error");
};