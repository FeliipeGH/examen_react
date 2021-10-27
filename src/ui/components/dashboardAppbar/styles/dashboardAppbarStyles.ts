import {Theme} from "@material-ui/core";
import {defaultFont, drawerMiniWidth, drawerWidth, transition} from "../../../../assets/styles/tss/globalStyles";

export const dashboardAppbarStyles = (theme: Theme) => ({
    root: {
        flexGrow: 1,
        boxShadow: "black 0 4px 6px -6px",
    },
    menuButton: {
        marginRight: theme.spacing(2),
        transitionProperty: "top, bottom, width",
        transitionDuration: ".2s, .2s, .35s",
        transitionTimingFunction: "linear, linear, ease",
        ...transition,
    },
    title: {
        flexGrow: 1,
        ...defaultFont,
    },
    appBar: {
        background: "#fff",
        transition: "all 300ms ease 0s",
        color: "inherit",
        boxShadow: "0 4px 6px -6px black",
        borderBottom: "0",
        marginBottom: "0",
    },
    toolbarContent: {
        transition: "all 300ms ease 0s",
        [theme.breakpoints.up("md")]: {
            left: `${drawerWidth}px`,
        },
    },
    toolbarMiniMenuContent: {
        [theme.breakpoints.up("md")]: {
            left: `${drawerMiniWidth}px`,
        }
    }
});