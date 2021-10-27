import {Theme} from "@material-ui/core";

export const adornmentStyles = (theme: Theme) => ({
    adornmentFirst: {
        marginRight: "0.5rem",
        "--tw-text-opacity:": "1",
        color: "rgba(59, 130, 246, var(--tw-text-opacity))"
    },
    adornmentSecond: {
        marginRight: "0.25rem",
    },
    errorTextColor: {
        "--tw-text-opacity:": "1",
        color: " rgba(239, 68, 68, var(--tw-text-opacity))"
    },
    iconButton: {
        margin: 0,
        padding: 0,
    }
});