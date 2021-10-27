import {Theme} from "@material-ui/core";
import {defaultFont} from "../../../../assets/styles/tss/globalStyles";
import {ColorList} from "../../../theme/ColorList";

export const dashboardFooterStyles = (theme: Theme) => ({
    content: {
        /*padding: "0.5rem 0 0.8rem",*/
        width: "100%",
        height: "auto",
        margin: "0 auto",
        background: "#eee",
        overflow: "hidden",
    },
    left: {
        float: "left!important",
        display: "block",
        marginLeft: "-1rem",
    },
    right: {
        margin: "0",
        float: "right"
    },
    list: {
        marginBottom: "0",
        padding: "0",
        marginTop: "0"
    },
    inlineBlock: {
        display: "inline-block",
        padding: "0px",
        width: "auto"
    },
    socialMediaBottom: {
        ...defaultFont,
        fontWeight: "500",
        fontSize: "0.75rem",
        margin: "1.25rem",
        textTransform: "uppercase",
        color: "#000",
        display: "inline-flex",
        alignItems: "center",
        "&:hover": {
            color: ColorList.secondaryMain,
        }
    },
    copyRight: {
        ...defaultFont,
        fontSize: "0.875rem",
        margin: "1rem 0 1rem"
    },
    copyRightBy: {
        ...defaultFont,
        fontSize: "0.875rem",
        fontWeight: "600",
        color: "#111",
     /*   "&:hover": {
            color: ColorList.secondaryMain,
        }*/
    },
});