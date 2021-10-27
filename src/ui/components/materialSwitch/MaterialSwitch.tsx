import React from 'react';
import {FormControlLabel, Switch} from "@material-ui/core";
import {MaterialSwitchInterface} from "./interfaces/MaterialSwitchInterface";
import {makeStyles} from "@material-ui/core/styles";
import {materialSwitchStyles} from "./styles/materialSwitchStyles";

// @ts-ignore
const useStyles = makeStyles(materialSwitchStyles);
export const MaterialSwitch = ({onChange, label, checked, name, color = "primary"}: MaterialSwitchInterface) => {
    const classes = useStyles();

    return (
        <FormControlLabel
            control={
                <Switch
                    checked={checked}
                    onChange={onChange}
                    name={name}
                    color={color}
                />
            }
            className={classes.formLabel}
            label={label}
        />
    );
};
