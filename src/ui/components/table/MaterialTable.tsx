import React, {useEffect, useState} from 'react';
import {Box, CircularProgress, Typography} from "@material-ui/core";
import {MaterialTableInterface} from "./interfaces/MaterialTableInterface";
import ReactTable from "../extras/components/ReactTable";
import {useIsMounted} from "../../hooks/useIsMounted";
import {processTableList} from "./helpers/processTableList";
import {makeStyles} from "@material-ui/core/styles";
import {materialTableStyles} from "./styles/MaterialTableStyles";

// @ts-ignore
const useStyles = makeStyles(materialTableStyles);
export const MaterialTable = ({
                                  columns,
                                  data,
                                  createObjectRow,
                                  loading,
                                  removeLastColumn = false
                              }: MaterialTableInterface) => {
    const classes = useStyles();
    const [listData, setListData] = useState<Array<any>>([]);
    const isMounted = useIsMounted();

    const onInit = () => {
        if (isMounted.current) {
            setListData([...processTableList(data, createObjectRow)]);
        }
    };

    useEffect(onInit, [isMounted, loading, createObjectRow, data]);

    if (loading) {
        return (
            <Box className={classes.circularProgressContent}>
                <CircularProgress color="primary" size="2.5rem"/>
            </Box>
        );
    }

    return (
        <Box>
            {
                listData.length > 0 ? (
                    <ReactTable
                        columns={columns}
                        data={listData}
                        removeLastColumn={removeLastColumn}
                    />
                ) : (
                    <Typography className={classes.noElements}>
                        Sin elementos para mostrar
                    </Typography>
                )
            }
        </Box>
    );
};