import {Theme} from "@material-ui/core";
import {
    dangerCardHeader,
    defaultFont,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    successCardHeader,
    warningCardHeader
} from "../../../../assets/styles/tss/globalStyles";

export const dashboardItemStyle = (theme: Theme) => ({
    gridContent: {
        transition: "all 300ms ease 0s",
    },
    content: {
        "--tw-translate-x": "0",
        "--tw-translate-y": "0",
        "--tw-rotate": "0",
        "--tw-skew-x": "0",
        "--tw-skew-y": "0",
        "--tw-scale-x": "1",
        "--tw-scale-y": "1",
        transition: "all 300ms ease 0s",
        transform: "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));",
        "&:hover": {
            "--tw-scale-x": "1.02",
            "--tw-scale-y": "1.02",
            transition: "all 300ms ease 0s",
        },
        ...defaultFont,
        color: "inherit",
        minHeight: "8rem",
        position: "relative",
    },
    cardIcon: {
        position: "absolute",
        top: "-1.2rem",
        left: "1rem",
        color: "white",
        /*background: "linear-gradient(90deg, " + ColorList.primaryDark + ", " + ColorList.primaryLight + ")",*/
        display: "grid",
        placeContent: "center",
        height: "5rem",
        width: "5rem",
        borderRadius: "3.5px",
        boxShadow: '0 4px 6px -6px black',
        zIndex: "10",
    },
    cardContent: {
        zIndex: "1",
        minHeight: "8rem",
        position: "relative",
        padding: "0.75rem"
    },
    hintTitle: {
        ...defaultFont,
        fontSize: "0.875rem",
        color: "#999999"
    },
    title: {
        ...defaultFont,
        color: "#111",
        fontSize: "20px"
    },
    footer: {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        margin: "0 1rem 0.25rem",
    },
    footerIcon: {
        marginLeft: "0.15rem",
        color: "#999999"
    },
    footTitle: {
        ...defaultFont,
        fontSize: "0.75rem",
        color: "#999999",
        display: "inline-block"
    },
    primary: {
        ...primaryCardHeader
    },
    warning: {
        ...warningCardHeader
    },
    success: {
        ...successCardHeader,
    },
    danger: {
        ...dangerCardHeader,
    },
    info: {
        ...infoCardHeader,
    },
    rose: {
        ...roseCardHeader,
    }
});