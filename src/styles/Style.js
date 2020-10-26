import { createMuiTheme, makeStyles } from "@material-ui/core";



export const theme = createMuiTheme({

    palette: {
        primary: {
            main: '#2a2a72',
            light: '#009ffd',
            dark: '#004e98',
            contrastText: '#eaf6ff',

        },
        secondary: {
            light: '#ffff3f',
            main: '#d4d700',
            dark: '#aacc00',
            contrastText: '#000000',

        },
        third : {
            dark: '#143601',
            main: '#1a4301',
            light: '#538d22',
            contrastText: '#fff',

        }

    },

});


export const useStyles = makeStyles(theme => ({

    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 2,
    },

}));

