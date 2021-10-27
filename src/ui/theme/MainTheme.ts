import {createTheme} from '@material-ui/core/styles';
import {ColorList} from "./ColorList";

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: ColorList.primaryMain,
            light: ColorList.primaryLight,
            dark: ColorList.primaryDark,
            contrastText: ColorList.primaryContrastText,
        },
        secondary: {
            main: ColorList.secondaryMain,
            light: ColorList.secondaryLight,
            dark: ColorList.secondaryDark,
            contrastText: ColorList.secondaryContrastText,
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
});