import {ColorList} from "../../../ui/theme/ColorList";

const warningColor = [
    "#ff9800",
    "#ffa726",
    "#fb8c00",
    "#ffa21a",
    "#fcf8e3",
    "#faf2cc",
    "#ffe0b2",
    "#ffb74d"
];
const dangerColor = [
    "#f44336",
    "#ef5350",
    "#e53935",
    "#f55a4e",
    "#f2dede",
    "#ebcccc",
    "ef9a9a",
    "#ef5350"
];
const successColor = [
    "#4caf50",
    "#66bb6a",
    "#43a047",
    "#5cb860",
    "#dff0d8",
    "#d0e9c6",
    "#a5d6a7",
    "#66bb6a"
];
const infoColor = [
    "#00acc1",
    "#26c6da",
    "#00acc1",
    "#00d3ee",
    "#d9edf7",
    "#c4e3f3",
    "#b2ebf2",
    "#4dd0e1"
];
const roseColor = ["#e91e63", "#ec407a", "#d81b60", "#f8bbd0", "#f06292"];
const grayColor = [
    "#999",
    "#3C4858",
    "#eee",
    "#343434",
    "#585858",
    "#232323",
    "#ddd",
    "#6c757d",
    "#333",
    "#212121",
    "#777",
    "#D2D2D2",
    "#AAA",
    "#495057",
    "#e5e5e5",
    "#555",
    "#f9f9f9",
    "#ccc",
    "#444",
    "#f2f2f2",
    "#89229b",
    "#c0c1c2",
    "#9a9a9a",
    "#f5f5f5",
    "#505050",
    "#1f1f1f"
];
const whiteColor = "#FFF";
const blackColor = "#000";
const twitterColor = "#55acee";
const facebookColor = "#3b5998";
const googleColor = "#dd4b39";
const linkedinColor = "#0976b4";
const pinterestColor = "#cc2127";
const youtubeColor = "#e52d27";
const tumblrColor = "#35465c";
const behanceColor = "#1769ff";
const dribbbleColor = "#ea4c89";
const redditColor = "#ff4500";
const instagramColor = "#125688";

const hexToRgb = (input: any) => {
    input = input + "";
    input = input.replace("#", "");
    let hexRegex = /[0-9A-Fa-f]/g;
    if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
        throw new Error("input is not a valid hex color.");
    }
    if (input.length === 3) {
        let first = input[0];
        let second = input[1];
        let last = input[2];
        input = first + first + second + second + last + last;
    }
    input = input.toUpperCase(input);
    let first = input[0] + input[1];
    let second = input[2] + input[3];
    let last = input[4] + input[5];
    return (
        parseInt(first, 16) +
        ", " +
        parseInt(second, 16) +
        ", " +
        parseInt(last, 16)
    );
};

const boxShadow = {
    boxShadow:
        "0 10px 30px -12px rgba(" +
        hexToRgb(blackColor) +
        ", 0.42), 0 4px 25px 0px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.2)"
};

const hideElement = {
    opacity: "0",
    transform: "translate3d(-25px, 0, 0)",
};
const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const containerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
const container = {
    ...containerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    }
};
const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "300",
    lineHeight: "1.5em"
};
const circularProgressContent = {
    height: "65vh",
    display: "grid",
    placeContent: "center"
}

const dangerBoxShadow = {
    boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(dangerColor[0]) +
        ",.4)",
};

const infoBoxShadow = {
    boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(infoColor[0]) +
        ",.4)",
};

const dangerCardHeader = {
    background:
        "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")",
    ...dangerBoxShadow,
};

const infoCardHeader = {
    background:
        "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")",
    ...infoBoxShadow,
};
const primaryBoxShadow = {
    boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(ColorList.primaryMain) +
        ",.4)",
};

const roseBoxShadow = {
    boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(roseColor[0]) +
        ",.4)",
};

const primaryCardHeader = {
    background:
        "linear-gradient(60deg, " + ColorList.primaryMain + ", " + ColorList.primaryLight + ")",
    ...primaryBoxShadow,
};

const roseCardHeader = {
    background:
        "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")",
    ...roseBoxShadow,
};

const successBoxShadow = {
    boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(successColor[0]) +
        ",.4)",
};

const warningBoxShadow = {
    boxShadow:
        "0 4px 20px 0 rgba(" +
        hexToRgb(blackColor) +
        ",.14), 0 7px 10px -5px rgba(" +
        hexToRgb(warningColor[0]) +
        ",.4)",
};

const warningCardHeader = {
    background:
        "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")",
    ...warningBoxShadow,
};

const successCardHeader = {
    background:
        "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")",
    ...successBoxShadow,
};
const btnLink = {
    backgroundColor: "transparent",
    boxShadow: "none",
    marginTop: "5px",
    marginBottom: "5px"
};

const title = {
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: "700",
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const main = {
    background: whiteColor,
    position: "relative",
    zIndex: "3"
};

const mainRaised = {
    "@media (max-width: 576px)": {
        marginTop: "-30px"
    },
    "@media (max-width: 830px)": {
        marginLeft: "10px",
        marginRight: "10px"
    },
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(" +
        hexToRgb(blackColor) +
        ", 0.14), 0 6px 30px 5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.12), 0 8px 10px -5px rgba(" +
        hexToRgb(blackColor) +
        ", 0.2)"
};

const mlAuto = {
    marginLeft: "auto"
};

const mrAuto = {
    marginRight: "auto"
};

const description = {
    color: grayColor[0]
};

const drawerWidth = 260;
const drawerMiniWidth = 80;

const button = {
    ...defaultFont,
    fontSize: "0.75rem",
    fontWeight: "400",
    padding: "0.75rem 1.875rem"
};

const submitButton = {
    ...button,
    margin: "1.5rem 0 0.5rem"
};

const primaryColor = [
    ColorList.primaryMain,
    ColorList.primaryMain,
    ColorList.primaryMain,
    ColorList.primaryMain,
    ColorList.primaryMain,
    ColorList.primaryMain,
];

const dialogTitle = {
    color: grayColor[1],
    textDecoration: "none",
    fontWeight: "300",
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    "& small": {
        color: grayColor[0],
        fontSize: "65%",
        fontWeight: "400",
        lineHeight: "1",
    },
};

export {
    button,
    primaryColor,
    boxShadow,
    dialogTitle,
    hexToRgb,
    transition,
    containerFluid,
    container,
    warningColor,
    dangerColor,
    successColor,
    infoColor,
    roseColor,
    grayColor,
    whiteColor,
    blackColor,
    twitterColor,
    facebookColor,
    googleColor,
    linkedinColor,
    pinterestColor,
    youtubeColor,
    tumblrColor,
    behanceColor,
    dribbbleColor,
    redditColor,
    instagramColor,
    defaultFont,
    dangerBoxShadow,
    infoBoxShadow,
    dangerCardHeader,
    infoCardHeader,
    primaryBoxShadow,
    roseBoxShadow,
    primaryCardHeader,
    roseCardHeader,
    successBoxShadow,
    warningBoxShadow,
    warningCardHeader,
    successCardHeader,
    btnLink,
    title,
    submitButton,
    main,
    mainRaised,
    mrAuto,
    mlAuto,
    description,
    hideElement,
    drawerWidth,
    drawerMiniWidth,
    circularProgressContent
};