import {useHistory, useLocation} from "react-router-dom";
import queryString from "query-string";
import {useEffect, useState} from "react";
import {useGetToken} from "./useGetToken";
import {useIsMounted} from "./useIsMounted";
import {UseFormSetValue} from "react-hook-form/dist/types/form";
import {ERROR_TITLE, showGenericAlert} from "../components/alerts/Alerts";
import {CRUDService} from "../interfaces/CRUDService";

type UseRequestDataFromObjectProps =
    (service: CRUDService, setValue: UseFormSetValue<any>, objectAttributes: Array<string>,
     routeIfFails: string, handleOtherValues?: (object?: Object) => void, somethingLoading?: boolean) => void | boolean;

export const useRequestDataFromObject: UseRequestDataFromObjectProps = (service, setValue,
                                                                        objectAttributes, routeIfFails, handleOtherValues,
                                                                        somethingLoading = false) => {
    const location = useLocation();
    const isMounted = useIsMounted();
    const {q = ''} = queryString.parse(location.search);
    const token = useGetToken();
    const history = useHistory();
    const [loading, setLoading] = useState(true);

    const requestData = () => {
        if (q !== '' && token) {
            try {
                if (!somethingLoading) {
                    service.getById(parseInt(q as string), token).then((result) => {
                        if (isMounted.current) setLoading(false);
                        if (result && isMounted.current) {
                            for (let i = 0; i < objectAttributes.length; i++) {
                                setValue(objectAttributes[i], result[objectAttributes[i]]);
                            }
                            if (handleOtherValues) handleOtherValues(result);
                        }
                    });
                }
            } catch (e) {
                if (isMounted.current && loading) setLoading(false);
                showGenericAlert("No se pudo reconocer el identificador, consulta al administrador", ERROR_TITLE,
                    "error").then();
                history.push(routeIfFails);
            }
        } else {
            if (isMounted.current) setLoading(false);
        }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(requestData, [somethingLoading,]);

    return loading;
};