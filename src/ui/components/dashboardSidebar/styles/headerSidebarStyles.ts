import {Theme} from "@material-ui/core";
import {defaultFont, hideElement} from "../../../../assets/styles/tss/globalStyles";

export const headerSidebarStyles = (theme: Theme) => ({
    logoContainer: {
        padding: "15px 0",
        display: "flex",
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
        alignItems: "center",
        position: "relative",
    },
    logoImgContent: {
        textAlign: "center",
        display: "inline-block",
        width: "1.8rem",
        minWidth: "1.8rem",
        maxHeight: "1.8rem",
        margin: "0.5rem 0.8rem 0 1.5rem",
    },
    logoTitle: {
        ...defaultFont,
        transition: "all 200ms linear",
        display: "inline",
        transform: "translate3d(0, 0, 0)",
        textTransform: "uppercase",
        fontWeight: "400",
        opacity: "1",
        fontSize: "1.3rem",
        overflow: "hidden",
        marginTop: "2px",
        textOverflow: "ellipsis",
    },
    logoTitleMini: {
        [theme.breakpoints.up("md")]: {
            ...hideElement
        },
    }
});