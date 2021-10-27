import {Theme} from "@material-ui/core";
import {drawerMiniWidth, drawerWidth, transition} from "../../../../assets/styles/tss/globalStyles";

export const dashboardStyles = (theme: Theme) => ({
    wrapper: {
        position: "relative",
        top: "0",
        minHeight: "100vh",
        backgroundColor: "#EEEEEE",
        "&:after": {
            display: "table",
            clear: "both",
            content: '" "',
        },
    },
    content: {
        padding: "2.5rem 0.8rem 0",
    },
    main: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
        overflow: "auto",
        position: "relative",
        float: "right",
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        ...transition,
        maxHeight: "100%",
        width: "100%",
        overflowScrolling: "touch",
    },
    mainSideBarMini: {
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerMiniWidth}px)`,
        }
    },
    mainContainer: {
        transition: "all 150ms ease 0s",
        padding: "30px 15px 0",

        [theme.breakpoints.up("md")]: {
            marginLeft: `${drawerWidth}px`,
        }
    },
    mainContainerMiniMenu: {
        [theme.breakpoints.up("md")]: {
            marginLeft: `${drawerMiniWidth}px`,
        }
    },
    container: {
        margin: "3.5rem 0.05rem 0",
        minHeight: "calc(100vh - 9.2rem)",
    }
});