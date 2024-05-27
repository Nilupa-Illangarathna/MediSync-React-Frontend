import {colors} from "./utils";

export const themeOptions = {
    typography: {
        fontFamily: `"Poppins", "Helvetica", "Arial", sans-serif`,
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
    },
    palette: {
        type: 'light',
        primary: {
            main: colors.primary,
        },
        secondary: {
            main: '#f50057',
        },
        background: {
            paper: 'white',
        },
    },
    overrides: {
        MuiButton: {
            contained: {
                boxShadow: 'none',
            },
            outlined: {
                boxShadow: 'none',
            },
            text: {
                paddingX: 8,
                paddingY: 3,
            }
        },
    },
};