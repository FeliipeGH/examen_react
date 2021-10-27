import {Theme} from "@material-ui/core";
import {ColorList} from "../../../theme/ColorList";
import {defaultFont, grayColor} from "../../../../assets/styles/tss/globalStyles";

export const appBarLinksStyle = (theme: Theme) => ({
    list: {
        [theme.breakpoints.up("md")]: {
            WebkitBoxAlign: "center",
            MsFlexAlign: "center",
            alignItems: "center",
            WebkitBoxOrient: "horizontal",
            WebkitBoxDirection: "normal",
            MsFlexDirection: "row",
            flexDirection: "row"
        },
        [theme.breakpoints.down("sm")]: {
            display: "block"
        },
        marginTop: "0px",
        display: "flex",
        paddingLeft: "0",
        marginBottom: "0",
        listStyle: "none",
        padding: "0"
    },
    mlAuto: {
        marginLeft: "auto"
    },
    listItem: {
        float: "left",
        color: "inherit",
        position: "relative",
        display: "block",
        width: "auto",
        margin: "0",
        padding: "0",
        [theme.breakpoints.down("sm")]: {
            "& ul": {
                maxHeight: "400px",
                overflow: "scroll"
            },
            width: "100%",
            "&:not(:last-child)": {
                "&:after": {
                    width: "calc(100% - 30px)",
                    content: '""',
                    display: "block",
                    height: "1px",
                    marginLeft: "15px",
                    backgroundColor: "#e5e5e5"
                }
            }
        }
    },
    listItemText: {
        padding: "0 !important"
    },
    navLink: {
        color: grayColor[15],
        ...defaultFont,
        position: "relative",
        padding: "0.9375rem",
        opacity: "0.95!important",
        fontWeight: "400",
        fontSize: "12px",
        textTransform: "uppercase",
        lineHeight: "20px",
        textDecoration: "none",
        margin: "0px",
        display: "inline-flex",
        "&:hover,&:focus": {
            color: "inherit"
        },
        "& .fab,& .far,& .fal,& .fas,& .material-icons": {
            position: "relative",
            top: "2px",
            marginTop: "-4px",
            marginRight: "4px",
            marginBottom: "0px",
            fontSize: "1.25rem"
        },
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 30px)",
            marginLeft: "15px",
            marginBottom: "8px",
            marginTop: "8px",
            textAlign: "left",
            "& > span:first-child": {
                justifyContent: "flex-start"
            }
        },
        "& svg": {
            marginRight: "3px",
            width: "20px",
            height: "20px"
        },
    },
    navLinkHover: {
        "&:hover": {
            opacity: "1!important",
            transition: "all 0.3s ease-in-out"
        },
        "&:before": {
            content: "\"\"",
            position: "absolute",
            width: "90%",
            height: "2px",
            top: "66.8%",
            left: "5%",
            backgroundColor: ColorList.primaryLight,
            visibility: "hidden",
            transform: "scaleX(0)",
            transition: "all 0.3s ease-in-out"
        }, "&:hover:before": {
            visibility: "visible",
            transform: "scaleX(1)"
        }
    },
    navLinkSelected: {
        fontWeight: "bold!important",
        opacity: "1!important",
        "&:before": {
            content: "\"\"",
            position: "absolute",
            width: "90%",
            height: "2px",
            top: "66.8%",
            left: "5%",
            backgroundColor: ColorList.primaryLight,
            visibility: "visible",
            transform: "scaleX(1)",
            transition: "all 0.3s ease-in-out"
        }
    }
});