import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import {
    AppBar,
    Avatar,
    Button,
    Grid,
    Hidden,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Tooltip,
    Typography,
    Menu,
    MenuItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/';
import {
    Help as HelpIcon,
    Menu as MenuIcon,
    Notifications as NotificationsIcon,
    Person as PersonIcon,
    ExitToApp as ExitIcon
} from '@material-ui/icons/';
import { withStyles } from '@material-ui/core/styles';

const menu = [
    { id : 'noti-menu', tooltip : 'Notificaciones', open : false, icon : <NotificationsIcon />, items : [
        { text : "Enlace",  icon : <HelpIcon />, url : '/' },
        { text : "Funcion", icon : <MenuIcon />, func : () => { window.alert('Click') } },
    ]},
    { id : 'user-menu', tooltip : 'Usuario',        open : false, icon : <PersonIcon />, items : [
        { text : "Salir", icon : <ExitIcon />, url : '/login' },
    ] },
]

const anchor_origin = { vertical: 'bottom', horizontal: 'left', }

const transform_origin = { vertical: 'top', horizontal: 'left', }

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = theme => ({
    title : {
        color : theme.palette.common.white,
    },
    secondaryBar: {
        zIndex: 0,
        width : '100%',
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
        //padding: 4,
        color : theme.palette.common.white,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

class AppHeader extends React.Component {

    constructor() {
        super();
    }

    state = {
        anchorEl : undefined,
        menu : [],
    }

    showMenu = (id, target) => {
        this.setState({ anchorEl : target })

        let menu = this.state.menu.map(item => (
              item.id===id? {...item, open : true}: item
        ))
        this.setState({ menu : menu });
    }

    hideMenu = (id) => {
        let menu = this.state.menu.map(item => (
              item.id===id? {...item, open : false}: item
        ))
        this.setState({ menu : menu });
    }

    componentWillMount() {
        this.setState({ menu : menu })
    }

    render(){
        const { classes, title } = this.props;

        return (
            <Grid className={classes.header} container spacing={1} alignItems="center">
              <Grid item xs>
                <Typography className={classes.title} variant="h6" component="h1">
                  {title}
                </Typography>
              </Grid>
              {this.state.menu.map(({ id, tooltip, icon, open, items }, index) => (
                <Grid item>
                  <Tooltip title={tooltip} >
                    <IconButton rootRef={id} aria-controls={id} className={classes.iconButtonAvatar} onClick={(event) => { this.showMenu(id, event.currentTarget) }}>
                      {icon}
                    </IconButton>
                  </Tooltip>
                  <Menu id={id} variant='menu' anchorEl={this.state.anchorEl} getContentAnchorEl={null} anchorOrigin={anchor_origin} transformOrigin={transform_origin} keepMounted open={open} onClose={() => { this.hideMenu(id) }} >
                    {items.map(({ text, type, url, func }, index) => (
                    <MenuItem component={url ? Link : null} to={url} onClick={func} >
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </MenuItem>
                    ))}
                  </Menu>
                </Grid>
              ))}
            </Grid>
        )
    }
}

export default withStyles(styles)(AppHeader);