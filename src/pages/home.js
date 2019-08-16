import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';

//import Layout from '../components/Layout';
import { getToken, setToken } from '../functions.js';

import AppLayout from '../components/AppLayout';

const title = 'Inicio'

const styles = theme => ({

})

class Home extends Component {

    componentWillMount() {
        let token = getToken()

        if(token == undefined){
            this.props.history.push('/login')
        }
    }

    render(){
        const { classes, history } = this.props;

        return (
            <AppLayout title={title} >
              <h2>Home</h2>
            </AppLayout>
        )
    }
}

export default withStyles(styles)(Home);