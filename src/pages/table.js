import { table_options } from '../config.js'

import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {
    Grid,
    Fab,
    TextField,
    FormControlLabel,
    Checkbox,
} from '@material-ui/core/';
import {
    Add as AddIcon,
} from '@material-ui/icons/';

//import Layout from '../components/Layout';
import Dialog from '../components/Dialog';
import Table from '../components/Table';

import { getToken, setToken, getData } from '../functions.js';

import AppLayout from '../components/AppLayout';

const title = 'Tablas'

const example_data = [
  {
    "active": true, 
    "id": "5d2ccf53f70d0305c1887fab", 
    "name": "prueba con nombre largo"
  }, 
  {
    "active": true, 
    "id": "5d2d01d5f70d0305c1887fac", 
    "name": "nuevo editado"
  }, 
  {
    "active": true, 
    "id": "5d2d01daf70d0305c1887fad", 
    "name": "nuevo 2"
  }, 
  {
    "active": false, 
    "id": "5d2d01def70d0305c1887fae", 
    "name": "prueba"
  }, 
  {
    "active": false, 
    "id": "5d2d01e2f70d0305c1887faf", 
    "name": "prueba 2"
  }, 
  {
    "active": false, 
    "id": "5d2d01e6f70d0305c1887fb0", 
    "name": "super mart"
  }, 
  {
    "active": false, 
    "id": "5d2d01ebf70d0305c1887fb1", 
    "name": "super conviene"
  }, 
  {
    "active": false, 
    "id": "5d2d01f2f70d0305c1887fb2", 
    "name": "super farmacia"
  }, 
  {
    "active": false, 
    "id": "5d2d01f8f70d0305c1887fb3", 
    "name": "super papeleria"
  }, 
  {
    "active": true, 
    "id": "5d2d1c13f70d0328af5ab274", 
    "name": "te de tito"
  }, 
  {
    "active": true, 
    "id": "5d2d1c1ff70d0328af5ab275", 
    "name": "z de zaul"
  }, 
  {
    "active": true, 
    "id": "5d2e1d79f70d03312d10d58b", 
    "name": "mas negocios"
  }, 
  {
    "active": false, 
    "id": "5d2e1d83f70d03312d10d58c", 
    "name": "muchas mas pruebas"
  }, 
  {
    "active": true, 
    "id": "5d2e1d89f70d03312d10d58d", 
    "name": "pruebas activas"
  }, 
  {
    "active": true, 
    "id": "5d2e1d8ff70d03312d10d58e", 
    "name": "pruebas activas 2"
  }, 
  {
    "active": true, 
    "id": "5d2e1d95f70d03312d10d58f", 
    "name": "pruebas activas 3"
  }, 
  {
    "active": false, 
    "id": "5d2e1d9ff70d03312d10d590", 
    "name": "negocios inactivos"
  }, 
  {
    "active": false, 
    "id": "5d2e1da5f70d03312d10d591", 
    "name": "negocio inactivo 2"
  }, 
  {
    "active": false, 
    "id": "5d2e1daaf70d03312d10d592", 
    "name": "negocio inactivo 3"
  }, 
  {
    "active": false, 
    "id": "5d2e1db0f70d03312d10d593", 
    "name": "super prueba"
  }, 
  {
    "active": true, 
    "id": "5d2e1db6f70d03312d10d594", 
    "name": "super prueba 2"
  }, 
  {
    "active": false, 
    "id": "5d2e1dbbf70d03312d10d595", 
    "name": "super prueba inactiva"
  }, 
  {
    "active": true, 
    "id": "5d2e1dc0f70d03312d10d596", 
    "name": "super prueba activa"
  }, 
  {
    "active": false, 
    "id": "5d352b0cf70d03312d10d597", 
    "name": "a de negocio"
  }, 
  {
    "active": true, 
    "id": "5d352b16f70d03312d10d598", 
    "name": "b de prueba"
  }, 
  {
    "active": false, 
    "id": "5d41e7423b7750001b6932a5", 
    "name": "mas negocios 1"
  }, 
  {
    "active": false, 
    "id": "5d41e74a3b7750001b6932a6", 
    "name": "mas negocios 2"
  }, 
  {
    "active": false, 
    "id": "5d41e74f3b77500018578ea5", 
    "name": "mas negocios 3"
  }, 
  {
    "active": false, 
    "id": "5d41e7583b77500018578ea6", 
    "name": "mas negocios 4"
  }, 
  {
    "active": false, 
    "id": "5d41e75d3b7750001b6932a7", 
    "name": "mas negocios 5"
  }, 
  {
    "active": false, 
    "id": "5d41e7623b77500018578ea7", 
    "name": "mas negocios 6"
  }, 
  {
    "active": false, 
    "id": "5d41e7673b7750001b6932a8", 
    "name": "mas negocios 7"
  }, 
  {
    "active": false, 
    "id": "5d41e76c3b7750001b6932a9", 
    "name": "mas negocios 8"
  }, 
  {
    "active": false, 
    "id": "5d41e7713b7750001b6932aa", 
    "name": "mas negocios 9"
  }, 
  {
    "active": false, 
    "id": "5d41e7773b7750001b6932ab", 
    "name": "mas negocios 9"
  }, 
  {
    "active": false, 
    "id": "5d41e77b3b77500018578ea8", 
    "name": "mas negocios 10"
  }
]


const columns = [
    {
        name: "id",
        label: "ID",
        options: {
            filter: false,
            display: false,
            viewColumns : false,
        }
    },
    {
        name: "name",
        label: "Nombre",
        options: {
            filter : false,
            sort : true,
            sortDirection : 'asc',
        }
    },
    {
        name: "active",
        label: "Estado",
        options: {
            filter: true,
            sort : false,
            searchable : false,
            customBodyRender: (value, tableMeta, updateValue) => {
                if(value){
                    return 'Activo'
                }else{
                    return 'Inactivo'
                }
            }
        }
    },
];

const styles = theme => ({
    fab : {
        position : 'fixed',
        bottom   : theme.spacing(2),
        right    : theme.spacing(2),
        color    : theme.palette.common.white,
    },
    table : {
        //marginBottom : theme.spacing(3),
    },
})

class Home extends Component {

    constructor() {
        super();
        this.input_name = React.createRef();
    }

    state = {
        open  : false,
        data  : [],
        input_name   : "",
        input_active : false,
    }

    options = {
        ...table_options,
        selectableRows : 'single',
        onRowClick : (rowData, rowMeta) => {
            this.setState(state => ({ open : true }))

            let active = false
            if(rowData[2] == 'Activo'){
                active = true
            }

            this.setState(state => ({ input_name   : rowData[1] }))
            this.setState(state => ({ input_active : active     }))
        }
    }

    handleNameChange = (event) => {
        this.setState({ input_name : event.target.value })
    }

    handleActiveChange = (event, checked) => {
        this.setState({ input_active : checked })
    }

    saveDialog = () => {
        //console.log(this.input_name.current.value)

        //this.input_name.current.value = "ASDFGHJKL"

        //console.log()
        /*
        let data = {

        }

        setData('/business/', data)
        */
    }

    closeDialog = () => {
        this.setState(state => ({ open : false }))
    }

    addBusiness = () => {
        this.setState(state => ({ open : true }))
    }

    async componentWillMount() {
        let token = getToken()

        if(token == undefined){
            this.props.history.push('/login')
        }

        //let data = await getData(token, '/business/')

        this.setState(state => ({ data : example_data }))
    }

    render(){
        const { classes, history } = this.props;

        return (
            <AppLayout title={title} >
              <Dialog open={this.state.open} save={this.saveDialog} close={this.closeDialog} title="Nuevo negocio" text="Indica el nombre del nuevo negocio y si esta activo">
                <TextField variant="outlined" margin="normal" required fullWidth id="name"  label="Nombre"  name="name"  autoComplete="name" autoFocus value={this.state.input_name} onChange={this.handleNameChange} />
                <FormControlLabel control={<Checkbox value="active" color="primary" checked={this.state.input_active} onChange={this.handleActiveChange} />} label="Activo" />
              </Dialog>
              <Table title="Titulo de la tabla" data={this.state.data} columns={columns} options={this.options} />
              <Fab aria-label="Nuevo" className={classes.fab} color='secondary' onClick={this.addBusiness} >
                <AddIcon  />
              </Fab>
            </AppLayout>
        )
    }
}

export default withStyles(styles)(Home);