import { table_options } from '../config.js'

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import {
    Grid,
    Fab,
} from '@material-ui/core/';
import {
    Add as AddIcon,
} from '@material-ui/icons/';

//import Layout from '../components/Layout';

import { getToken, getData } from '../functions.js';

import AppLayout from '../components/AppLayout';

const title = "Pestañas"

const subsections = [
    { id : 0, name : 'Pestaña 1', url : '/tabs' },
    { id : 1, name : 'Pestaña 2', url : '/tabs' },
    { id : 1, name : 'Pestaña 3', url : '/tabs' },
]

const columns = [
    {
        name: "id",
        label: "ID",
        options: {
            filter: false,
            display: false,
        }
    },
    {
        name: "name",
        label: "Nombre",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "username",
        label: "Usuario",
        options: {
            filter: false,
            sort: true,
        }
    },
    {
        name: "group",
        label: "Grupo",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "active",
        label: "Estado",
        options: {
            filter: true,
            sort: true,
            customBodyRender: (value, tableMeta, updateValue) => {
                if(value){
                    return 'Activa'
                }else{
                    return 'Inactiva'
                }
            }
        }
    },
]

const styles = theme => ({
    fab : {
        position : 'fixed',
        bottom   : theme.spacing(3),
        right    : theme.spacing(3),
        color    : theme.palette.common.white,
    },
    table : {
        marginBottom : theme.spacing(3),
    },
})

class Users extends Component {

    state = {
        data : [],
    }

    async componentWillMount() {
        let token = getToken()

        if(token == undefined){
            this.props.history.push('/login')
        }

        let data = await getData(token, '/users/')

        this.setState(state => ({ data : data }))
    }

    render(){
        const { classes, history } = this.props;

        return (
            <AppLayout title={title} tabs={subsections} tab={0} >
              Pestañas
            </AppLayout>
        )
    }
}

export default withStyles(styles)(Users);