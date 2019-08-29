import { table_options } from '../config.js'

import React from "react";

import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";

import AppLayout from '../components/AppLayout';
import UserContext from '../contexts/UserContext';
import DataContext from '../contexts/data';

const title = 'Dynamic data'

const styles = theme => ({

})

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

function Data(props) {
    let user = React.useContext(UserContext);
    let data = React.useContext(DataContext);

    if(user.token == undefined){
        props.history.push('/login')
    }

    return (
        <AppLayout title={title} >
          <MUIDataTable title="Titulo de la tabla" data={data.data} columns={columns} options={table_options} />
        </AppLayout>
    )
}

export default withStyles(styles)(Data);