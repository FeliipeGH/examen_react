import {useEffect, useState} from "react";
import {useIsMounted} from "./useIsMounted";
import {ResultListData} from "../interfaces/RequestFunction";
import {useGetToken} from "./useGetToken";
import {CRUDService} from "../interfaces/CRUDService";

export const useRequestListData = (service: CRUDService, handleCustomList?: (list: Array<any>) => void, useToken: boolean = true) => {
    const [loading, setLoading] = useState(false);
    const [listData, setListData] = useState<Array<any>>([]);
    const isMounted = useIsMounted();
    const token = useGetToken();

    const init = () => {
        if (isMounted.current) setLoading(true);
        if (token && useToken) {
            service.requestList(token).then((result: ResultListData) => {
                if (result.resolved && isMounted.current && result.list) {
                    if (handleCustomList) {
                        handleCustomList(result.list);
                    } else {
                        setListData([...result.list]);
                    }

                }
                if (isMounted.current) setLoading(false);
            });
        } else {
            if (!useToken) {
                service.requestList().then((result: ResultListData) => {
                    if (result.resolved && isMounted.current && result.list) {
                        if (handleCustomList) {
                            handleCustomList(result.list);
                        } else {
                            setListData([...result.list]);
                        }
                    }
                    if (isMounted.current) setLoading(false);
                });
            }
        }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(init, []);

    const onDeleteElement = (index: number) => {
        if (!handleCustomList) {
            let newList = [...listData];
            newList.splice(index, 1);
            if (isMounted.current) {
                setListData([...newList]);
            }
        }
    };

    return {
        listData,
        loading,
        onDeleteElement,
    };
};