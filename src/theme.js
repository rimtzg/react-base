import { createMuiTheme } from "@material-ui/core";

let theme = createMuiTheme({
    typography: {
        h5: {
            fontWeight: 500,
            fontSize: 26,
            letterSpacing: 0.5,
        },
    },
    palette: {
        primary : {
            light: '#63ccff',
            main: '#1F96F3',
            dark: '#006db3',
        },
        secondary : {
            main : '#FF5252',
        },
        background: {
            default: '#F5F5F5'
        },
    },
    shape: {
        borderRadius: 8,
    },
});

theme = {
    ...theme,
    overrides: {
        MuiAppbar : {
            root : {
                backgroundColor : theme.palette.primary.main,
            },
        },
        MuiDrawer: {
            paper: {
                backgroundColor: '#18202c',
            },
        },
        MuiButton: {
            label: {
                textTransform: 'none',
            },
            contained: {
                boxShadow: 'none',
                '&:active': {
                    boxShadow: 'none',
                },
            },
        },
        MuiTabs: {
            root: {
                marginLeft: theme.spacing(1),
                color : theme.palette.common.white,
            },
            indicator: {
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.common.white,
            },
        },
        MuiTab: {
            root: {
                textTransform: 'none',
                margin: '0 16px',
                minWidth: 0,
                padding: 0,
                [theme.breakpoints.up('md')]: {
                    padding: 0,
                    minWidth: 0,
                },
            },
        },
        MuiIconButton: {
            root: {
                padding: theme.spacing(1),
            },
        },
        MuiTooltip: {
            tooltip: {
                borderRadius: 4,
            },
        },
        MuiDivider: {
            root: {
                backgroundColor: '#404854',
            },
        },
        MuiListItemText: {
            primary: {
                fontWeight: theme.typography.fontWeightMedium,
            },
        },
        MuiListItemIcon: {
            root: {
                color: 'inherit',
                marginRight: 0,
                '& svg': {
                    fontSize: 20,
                },
            },
        },
        MuiAvatar: {
            root: {
                width: 32,
                height: 32,
            },
        },
        MuiContainer : {
            root : {
                padding : theme.spacing(3),
                [theme.breakpoints.down('sm')] : {
                    padding : theme.spacing(2),
                },
                [theme.breakpoints.down('xs')] : {
                    padding : theme.spacing(1),
                },
            },
        },
    },
    props: {
        MuiTab: {
            disableRipple: true,
        },
    },
    mixins: {
        ...theme.mixins,
        toolbar: {
            minHeight: theme.spacing(7),
        },
    },
};

export default theme;