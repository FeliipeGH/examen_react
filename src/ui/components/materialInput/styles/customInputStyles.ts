import {Theme} from "@material-ui/core";
import {dangerColor, defaultFont, grayColor, successColor, whiteColor} from "../../../../assets/styles/tss/globalStyles";
import {ColorList} from "../../../theme/ColorList";

export const customInputStyles = (theme: Theme) => ({
    errorStyle: {
        fontSize: "0.75rem",
        lineHeight: "rem",
        "--tw-text-opacity": "1",
        color: "rgba(239, 68, 68, var(--tw-text-opacity))"
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: "0 0 17px 0",
        paddingTop: "27px",
        position: "relative",
        "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
            color: grayColor[13]
        }
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
    labelRootError: {
        color: dangerColor[0] + " !important",
    },
    labelRootSuccess: {
        color: successColor[0] + " !important"
    },
    underlineError: {
        "&:after": {
            borderBottomColor: dangerColor[0]
        }
    },
    underlineSuccess: {
        "&:after": {
            borderBottomColor: successColor[0]
        }
    },
    underline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottomColor: grayColor[11] + " !important",
            borderBottomWidth: "1px !important"
        },
        "&:after": {
            borderBottomColor: ColorList.primaryMain,
        }
    },
    whiteUnderline: {
        "&:hover:not($disabled):before,&:before": {
            borderBottomColor: whiteColor
        },
        "&:after": {
            borderBottomColor: whiteColor
        }
    },
    input: {
        color: grayColor[13],
        height: "unset",
        "&,&::placeholder": {
            fontSize: "14px",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontWeight: "400",
            lineHeight: "1.42857",
            opacity: "1"
        },
        "&::placeholder": {
            color: grayColor[12]
        }
    },
    whiteInput: {
        "&,&::placeholder": {
            color: whiteColor,
            opacity: "1"
        }
    },
    labelRoot: {
        ...defaultFont,
        color: grayColor[12] + " !important",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "1.42857",
        top: "10px",
        letterSpacing: "unset",
        "& + $underline": {
            marginTop: "0px"
        }
    },
    disabled: {
        "&:before": {
            backgroundColor: "transparent !important"
        }
    },
});