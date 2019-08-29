import React from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles, withStyles } from '@material-ui/core/styles';

//import Layout from '../components/Layout';
import { getToken, setToken, getData } from '../functions.js';

import AppLayout from '../components/AppLayout';
//import UserContext from '../contexts/user';
//import DataContext from '../contexts/data';

import withSession from "../hocs/withSession";

const title = 'Inicio'

const styles = theme => ({

})

/*
function Home(props) {
    //const user = React.useContext(UserContext);

    //data.data = await getData(user.token, '/business/')

    if(props.session.token == undefined){
        props.history.push('/login')
    }

    return (
        <AppLayout title={title} >
          <h2>{props.session.name}</h2>
        </AppLayout>
    )
}
*/


class Home extends React.Component {

    componentWillMount() {
        const { setName } = this.props;

        setName("Otro")
    }

    render(){
        const { classes, history, session } = this.props;

        return (
            <AppLayout title={title} >
              <h2>{session.name}</h2>
            </AppLayout>
        )
    }
}

export default withSession(withStyles(styles)(Home));