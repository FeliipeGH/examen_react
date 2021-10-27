import React from 'react';
import {Box, CircularProgress} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {materialTableStyles} from "./table/styles/MaterialTableStyles";

// @ts-ignore
const useStyles = makeStyles(materialTableStyles);
export const CircularProgressIndicator = () => {
    const classes = useStyles();
    return (
        <Box className={classes.circularProgressContent}>
            <CircularProgress color="primary" size="2.5rem"/>
        </Box>
    );
};

