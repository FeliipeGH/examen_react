import {Theme} from "@material-ui/core";
import {red} from "@material-ui/core/colors";
import {dialogTitle} from "../../../../assets/styles/tss/globalStyles";

export const generalDialogsStyles = (theme: Theme) => ({
    modalRoot: {
        overflow: "auto",
        display: "block"
    },
    superLargestModal: {
        maxWidth: "1800px",
        width: "100%",
        "& $modalHeader": {
            paddingTop: "0"
        },
        "& $modalTitle": {
            textAlign: "center",
            width: "100%",
            marginTop: "0.625rem"
        },
        "& $modalBody": {
            paddingBottom: "0",
            paddingTop: "0"
        }
    },
    largestModal: {
        maxWidth: "1200px",
        width: "100%",
        "& $modalHeader": {
            paddingTop: "0"
        },
        "& $modalTitle": {
            textAlign: "center",
            width: "100%",
            marginTop: "0.625rem"
        },
        "& $modalBody": {
            paddingBottom: "0",
            paddingTop: "0"
        }
    },
    modal: {
        [theme.breakpoints.up("sm")]: {
            maxWidth: "500px",
            margin: "auto"
        },
        borderRadius: "6px",
        overflow: "visible",
        width: "100%",
        marginTop: "130px !important"
    },
    modalCard: {
        padding: "20px 0",
        margin: "0"
    },
    modalHeader: {
        borderBottom: "none",
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "0",
        paddingLeft: "24px",
        minHeight: "16.43px"
    },
    iconClose: {
        color: red[500],
        position: "absolute",
        top: "-7px",
        right: "0",
    },
    modalTitle: {
        ...dialogTitle,
        fontSize: "1.5rem",
        marginTop: "0",
        lineHeight: "2rem",
        marginBottom: "3px",
        minHeight: "auto",
        "& a": {
            ...dialogTitle,
            marginTop: ".625rem",
            marginBottom: "0.75rem",
            minHeight: "auto",
        },
    },
    modalBody: {
        paddingTop: "24px",
        paddingRight: "24px",
        paddingBottom: "16px",
        paddingLeft: "24px",
        position: "relative",
        overflow: "visible"
    },
    titleContainer: {
        position: "relative"
    },
});