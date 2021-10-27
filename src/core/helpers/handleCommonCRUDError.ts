import {HttpErrors} from "../constants/HttpErrors";

export const handleCommonCRUDError = (status: number) => {
    if (status !== 200) {
        if (status === 409) {
            throw new Error(HttpErrors.CONFLICT);
        } else {
            throw new Error(HttpErrors.SERVER_ERROR);
        }
    }
};