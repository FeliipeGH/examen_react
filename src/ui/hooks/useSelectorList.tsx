import {useGetToken} from "./useGetToken";
import React, {ChangeEvent, useEffect, useState} from "react";
import {useIsMounted} from "./useIsMounted";
import {MaterialSelect} from "../components/selects/MaterialSelect";
import {objectIsEmpty} from "../helpers/objectIsEmpty";
import {Theme, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {defaultFont} from "../../assets/styles/tss/globalStyles";


const selectorClasses = (theme: Theme) => ({
    errorText: {
        ...defaultFont,
        fontSize: "12px",
        color: "red",
        textAlign: "left"
    },
});

type SelectorReturn = {
    selectComponent(): JSX.Element,
    objectSelect: Object,
    handleCheckIsCorrect: () => boolean,
    setObjectToSelect: (object: Object) => void
    disableSelect: () => void,
    enableSelect: () => void,
    listData: Array<any>,
};

type UseSelectorListProps = (list: Array<any>, subKey: string, name: string, id: string,
                             title: string) => SelectorReturn;
// @ts-ignore
const useStyles = makeStyles(selectorClasses);
export const useSelectorList: UseSelectorListProps = (list, subKey,
                                                      name, id, title) => {
    const token = useGetToken();
    const isMounted = useIsMounted();
    const classes = useStyles();
    const [listData, setListData] = useState<Array<any>>([]);
    const [objectSelect, setObjectSelect] = useState({});
    const [checkIsCorrect, setCheckIsCorrect] = useState(true);
    const [enable, setEnable] = useState(true);

    const onInit = () => {
        if (isMounted.current) setListData([...list]);
    };

    const disableSelect = () => {
        if (isMounted.current) setEnable(false);
    };
    const enableSelect = () => {
        if (isMounted.current) setEnable(true);
    };

    useEffect(onInit, [isMounted, token, list]);

    const handleSelectChange = (e: ChangeEvent<{ name?: string | undefined; value: unknown; }>) => {
        const idFromSelect = e.target.value;
        const objectId = parseInt(idFromSelect as string);
        const objectFounded = listData.find(e => e[id] === objectId);
        if (objectFounded && isMounted.current) {
            setObjectSelect({...objectFounded});
            if (!checkIsCorrect) {
                if (isMounted.current) setCheckIsCorrect(true);
            }
        }
    };

    const setObjectToSelect = (object: Object) => {
        if (isMounted.current) setObjectSelect(object);
    };

    const selectComponent = () => {

        return (
            <>
                <MaterialSelect
                    title={title}
                    value={objectSelect[id] ?? ""}
                    onChange={handleSelectChange}
                    name={name}
                    id={id}
                    list={listData}
                    subKey={subKey}
                    hasError={!checkIsCorrect}
                    enable={enable}
                />
                {
                    !checkIsCorrect && (
                        <Typography className={classes.errorText}>
                            {title}
                        </Typography>
                    )
                }
            </>
        );
    };

    const handleCheckIsCorrect = () => {
        if (objectIsEmpty(objectSelect)) {
            if (isMounted.current) setCheckIsCorrect(false);
            return false;
        }
        return true;
    };

    return {
        selectComponent,
        objectSelect,
        handleCheckIsCorrect,
        setObjectToSelect,
        disableSelect,
        listData,
        enableSelect
    }
};