import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Tabs, Tab } from "@material-ui/core";

//import Layout from '../components/Layout';
import { getToken, setToken } from '../functions.js';

const styles = theme => ({
    toolbar : {
        backgroundColor : theme.palette.primary.main
    }
})

class TabsHeader extends Component {

    componentWillMount() {

    }

    render(){
        const { classes, history, tabs, tab } = this.props;

        return (
            <Toolbar className={classes.toolbar} >
              <Tabs value={ tab ? tab : 0 }>
                {tabs.map(({ id, name, url }) => (
                  <Tab label={name} component={Link} to={url} />
                ))}
              </Tabs>
            </Toolbar>
        )
    }
}

export default withStyles(styles)(TabsHeader);