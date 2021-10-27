import {blue, red} from "@material-ui/core/colors";
import {Theme} from "@material-ui/core";

export const editDeleteBtnStyles = (theme: Theme) => ({
    content: {
        textAlign: "right"
    },
    iconEdit: {
        color: blue[700]
    },
    iconDelete: {
        color: red[500]
    }
});
