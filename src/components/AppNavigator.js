import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@material-ui/core/';

import {
    Home      as HomeIcon,
    Business  as BusinessIcon,
    Group     as GroupIcon,
    LocalShipping as SuppliersIcon,
    AccountBox as AccountBoxIcon,
    LocalGroceryStore as SaleIcon,
    ListAlt as ListIcon
} from '@material-ui/icons/';

import { withStyles } from '@material-ui/core/styles';

const categories = [
    {
        id: 'Examples',
        sections : [
            { id : 'Tables',    icon: <BusinessIcon />, url : '/table' },
            { id : 'Tabs',    icon: <GroupIcon />,  url : '/tabs' },
        ],
    },
    {
        id: 'Other category',
        sections: [
            { id: 'Dynamic data',    icon: <SaleIcon />, url : '/data' },
        ]
    },
];

const styles = theme => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
    navlink : {
        color : theme.palette.common.white,
        textDecoration: 'none',
    },
});

class AppNavigator extends Component {

    navigate = (link) => {
        const { history } = this.props;

        if(history.location.pathname != link){
            history.push(link)
        }
    }

    componentWillMount() {
        //const { history } = this.props;

        //console.log(history)
    }

    render(){
        const { classes, history, ...other } = this.props;

        return (
            <div>
              <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}>
                  React Web Base
                </ListItem>
                <ListItem button className={clsx(classes.item, classes.itemCategory, (window.location.pathname == '/') && classes.itemActiveItem)} component={Link} to="/" >
                  <ListItemIcon className={classes.itemIcon}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText classes={{ primary: classes.itemPrimary }}  >
                    Inicio
                  </ListItemText>
                </ListItem>
                {categories.map(({ id, sections }) => (
                  <React.Fragment key={id}>
                    <ListItem className={classes.categoryHeader}>
                      <ListItemText
                        classes={{
                          primary: classes.categoryHeaderPrimary,
                        }}
                      >
                        {id}
                      </ListItemText>
                    </ListItem>
                    {sections.map(({ id, icon, url }) => (
                      <ListItem
                        key={id}
                        button
                        className={clsx(classes.item, (window.location.pathname == url) && classes.itemActiveItem)}
                        component={Link} to={url}
                      >
                        <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                        <ListItemText
                          classes={{
                            primary: classes.itemPrimary,
                          }}
                        >
                          {id}
                        </ListItemText>
                      </ListItem>
                    ))}
                    <Divider className={classes.divider} />
                  </React.Fragment>
                ))}
              </List>
            </div>
        )
    }
}

export default withRouter(withStyles(styles)(AppNavigator));