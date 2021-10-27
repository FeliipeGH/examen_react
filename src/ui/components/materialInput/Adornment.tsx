import {Box, InputAdornment} from '@material-ui/core';
import React from 'react';
import {AdornmentInterface} from "./interfaces/AdornmentInterface";
import IconButton from "@material-ui/core/IconButton";
import {red} from "@material-ui/core/colors";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {ColorList} from "../../theme/ColorList";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {makeStyles} from "@material-ui/core/styles";
import {adornmentStyles} from "./styles/adornmentStyles";

// @ts-ignore
const useStyles = makeStyles(adornmentStyles);
export const Adornment = ({
                              hideText,
                              handleClickShowPassword,
                              handleMouseDownPassword,
                              inputId,
                              type,
                              error,
                              icon: Icon = AccountCircleIcon
                          }: AdornmentInterface) => {

    const classes = useStyles();

    const contentWithError = classes.adornmentSecond + " " + classes.errorTextColor;
    const normalContent = classes.adornmentSecond;

    return (
        <InputAdornment position="end">
            {
                type === 'password' ? (
                    <Box className={(!!error ? contentWithError : normalContent)}>
                        <IconButton
                            aria-label={inputId}
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            className={classes.iconButton}
                        >
                            {
                                hideText ? (
                                    <Visibility style={{
                                        color: (!!error ? red[500] : ColorList.primaryLight)
                                    }}/>
                                ) : (
                                    <VisibilityOff
                                        style={{
                                            color: (!!error ? red[500] : ColorList.primaryLight)
                                        }}
                                    />
                                )
                            }
                        </IconButton>
                    </Box>
                ) : (
                    <Box className={classes.adornmentSecond}>
                        <Icon style={{
                            color: (!!error ? red[500] : ColorList.primaryLight)
                        }}/>
                    </Box>
                )
            }
        </InputAdornment>
    );
};