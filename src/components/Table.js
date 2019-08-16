//System
import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import MUIDataTable from "mui-datatables";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
    
} from '@material-ui/core/';
import {
    
} from '@material-ui/icons/';

const styles = theme => ({

})

class CustomTable extends React.Component {

    state = {
        num_selected : 0,
    }

    render() {
        const { classes, theme, title, columns, data, options, ...props } = this.props;

        this.options = {
            ...options,
            //responsive : matches ? 'stacked' : 'scroll',
        }

        return (
          <MUIDataTable title={title} data={data} columns={columns} options={this.options} />
        )
    }
}

export default withStyles(styles)(CustomTable)