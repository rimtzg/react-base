//System
import React from 'react';

//Material core
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const styles = theme => ({

})

class CustomDialog extends React.Component {

    render() {
        const { classes, ...props } = this.props;

        return (
            <Dialog open={props.open} onClose={props.close} aria-labelledby="form-dialog-title" >
              <DialogTitle id="form-dialog-title">
                {props.title}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {props.text}
                </DialogContentText>
                {props.children}
              </DialogContent>
              <DialogActions>
                <Button onClick={props.close} color="primary">
                  Cancelar
                </Button>
                <Button onClick={props.save} color="primary">
                  Guardar
                </Button>
              </DialogActions>
            </Dialog>
        )
    }
}

export default withStyles(styles)(CustomDialog)