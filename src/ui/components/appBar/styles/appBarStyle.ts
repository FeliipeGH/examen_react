import {Theme} from "@material-ui/core";
import {boxShadow, defaultFont, grayColor, transition} from "../../../../assets/styles/tss/globalStyles";

export const appBarStyle = (theme: Theme) => ({
    offset: {
        ...theme.mixins.toolbar,
    },
    appBar: {
        background: "#ffffff",
        color: "inherit",
        padding: "0.4rem"
    },
    toolBarContainer: {
        minHeight: "50px",
        alignItems: "center",
        justifyContent: "space-between",
        display: "flex",
        flexWrap: "nowrap"
    },
    imageContainer: {
        margin: "0 0.5rem",
        width: "3.2rem",
        padding: "rem",
        display: "grid",
        placeContent: "center"
    },
    collapse: {
        [theme.breakpoints.up("md")]: {
            display: "flex !important",
            MsFlexPreferredSize: "auto",
            flexBasis: "auto"
        },
        WebkitBoxFlex: "1",
        MsFlexPositive: "1",
        flexGrow: "1",
        WebkitBoxAlign: "center",
        MsFlexAlign: "center",
        alignItems: "center"
    },
    boxContent: {
        minWidth: "180px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap"
    },
    drawerPaper: {
        border: "none",
        bottom: "0",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        width: 260,
        ...boxShadow,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "0",
        left: "auto",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        ...transition
    },
    closeButtonDrawer: {
        position: "absolute",
        right: "8px",
        top: "9px",
        zIndex: "1"
    },
    appResponsive: {
        margin: "20px 10px",
        marginTop: "0px"
    },
    branding: {
        ...defaultFont,
        color: grayColor[15],
        fontWeight: "600",
        fontSize: "1.125rem",
        textAlign: "left"
    },
    subBrandinTitle: {
        ...defaultFont,
        fontSize: "0.75rem",
        textAlign: "left"
    }
});