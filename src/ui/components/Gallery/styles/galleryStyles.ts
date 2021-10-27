import {Theme} from "@material-ui/core";
import {grayColor} from "../../../../assets/styles/tss/globalStyles";

export const galleryStyles = (theme: Theme) => ({
    galleryContainer: {
        width: "100%",
        height: "100%",
    },
    gallerySkeletonContainer: {
        height: "100%",
        background: grayColor[11],
        borderRadius: "0.25rem",
        display: "grid",
        placeContent: "center"
    },
    imageIcon: {
        "--tw-text-opacity": "1",
        color: "rgba(156, 163, 175, var(--tw-text-opacity))",
        fontSize: "6rem"
    },
    arrow: {
        color: "white",
        fontSize: "5rem",
        background: "rgba(111, 111, 111, 0.4)",
        borderRadius: "100%",
    },
    imageGallery: {
        display: "flex",
        justifyContent: "center",
        borderRadius: "0.5rem"
    }
});
