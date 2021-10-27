import {Theme} from "@material-ui/core";
import {ColorList} from "../../../theme/ColorList";
import {defaultFont, grayColor} from "../../../../assets/styles/tss/globalStyles";

export const authFooterStyles = (theme: Theme) => ({
    socialMediaLink: {
        ...defaultFont,
        fontWeight: "400",
        margin: "0.25rem 0",
        display: "inline-flex",
        alignItems: "center",
        color: grayColor[1],
        textDecoration: "none",
        "&:hover": {
            color: ColorList.secondaryMain,
        }
    },
    socialFeed: {
        "& p": {
            display: "table-cell",
            verticalAlign: "top",
            overflow: "hidden",
            paddingBottom: "10px",
            maxWidth: 300
        },
        "& i": {
            fontSize: "20px",
            display: "table-cell",
            paddingRight: "10px"
        }
    },


    socialMedia: {
        margin: "1rem 0",
        display: "inline-flex",
        alignItems: "center",
        color: grayColor[1],
        textDecoration: "none",
    },
    footerTitle: {
        ...defaultFont,
        lineHeight: "1.75rem",
        fontSize: "1.15rem",
        color: grayColor[1],
        fontWeight: "600"
    },
    fontSubtitle: {
        ...defaultFont,
        fontSize: "1rem",
        lineHeight: "1.5rem",
        textAlign: "justify"
    },
    footerBody: {
        ...defaultFont,
        fontSize: "0.875rem"
    }
});