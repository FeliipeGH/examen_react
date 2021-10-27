import {Theme} from "@material-ui/core";
import {hideElement} from "../../../../assets/styles/tss/globalStyles";

export const sideElementStyles = (theme: Theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        margin: "0.2rem 0",
    },
    nested: {
        paddingLeft: theme.spacing(1.5),
    },
    icon: {
        color: "black"
    },
    iconExpandMore: {
        transition: "all 200ms linear",
        transform: "rotate(180deg)",
    },
    iconExpandLess: {
        transition: "all 200ms linear",
        transform: "rotate(0deg)",
    },
    hideContent: {
        [theme.breakpoints.up("md")]: {
            ...hideElement
        },
    },
    contentList: {
        flexWrap: "nowrap",
        whiteSpace: "nowrap",
    },
    container: {
        margin: "0.3rem 0.75rem 0.3rem 0.35rem",
    },
    listItemContent: {
        borderRadius: "4px",
    },
    nestedCollapseItem: {
        paddingLeft: theme.spacing(2.3),
    }
});