import React from 'react';
import {Button, makeStyles, Theme} from "@material-ui/core";
import {submitButton} from "../../../assets/styles/tss/globalStyles";

const buttonStyles = (theme: Theme) => ({
    submitButton
});

type SubmitButtonProps = {
    title?: string,
    type?: "submit" | "button" | "reset",
    onClick?: () => any,
    color?: "primary" | "secondary" | "default" | "inherit",
    className?: string,
    variant?: "contained" | "text" | "outlined"
};

// @ts-ignore
const useStyles = makeStyles(buttonStyles);
export const MaterialButton = ({
                                   title = "Guardar",
                                   type = "submit",
                                   onClick,
                                   color = "primary",
                                   className = "",
                                   variant = "contained"
                               }: SubmitButtonProps) => {
    const classes = useStyles();
    return (
        <Button type={type} color={color} variant={variant} className={classes.submitButton + " " + className}
                onClick={onClick}>
            {title}
        </Button>
    );
};