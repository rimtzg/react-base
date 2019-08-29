import { url_server } from '../config.js'

import { setToken } from '../functions.js'

import React, { Component } from "react";
import {
    Container,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Link,
    Grid,
    Box,
    Typography,
    Card,
    CardContent,
} from '@material-ui/core/';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { makeStyles, withStyles } from '@material-ui/core/styles';

import AppLayout from '../components/AppLayout';
import UserContext from '../contexts/UserContext';

const styles = theme => ({
    paper: {
        //marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
})

const test = {
    account : 'rOA4cb8eHlNusVRM8baC',
    username : 'rimtzg',
    password : 'xinuocs2',
}

function Login(props) {
    const { classes } = props;

    const user = React.useContext(UserContext);

    let login = async (e) => {
        e.preventDefault();
        //console.log('DO LOGIN: ' + global.server + ':' + global.port + '/token')
        try {
            const response = await fetch(url_server + '/token', {
                method  : 'get', 
                headers : new Headers({
                    'Content-Type': 'application/json',
                    'Account' : test.account,
                    'Username' : test.username,
                    'Password' : test.password,
                }),
                // body: 'A=1&B=2'
            })

            const data = await response.json()

            if(data.token){
                user.token = data.token

                props.history.push('/')
            }

        } catch(error) {
            console.log("Error fetching data", error)
        }
    }

    return (
        <AppLayout header={false} drawer={false} >
          <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '75vh' }} >
          <Grid item xs={12} sm={8} md={6} lg={4} xl={2} >
            <Card className={classes.card}>
              <CardContent>
                <Typography component="h1" variant="h5">
                  Inicia sesion
                </Typography>
                <form className={classes.form} onSubmit={login} noValidate>
                  <TextField variant="outlined" margin="normal" required fullWidth id="account"  label="Cuenta"  name="account"  autoComplete="account" autoFocus />
                  <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Usuario" name="username" autoComplete="email" />
                  <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" />
                  <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Mantener sesion abierta" />
                  <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                    Iniciar sesion
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </AppLayout>
    )
}

/*
class Login extends Component {

    login = async (e) => {
        e.preventDefault();
        //console.log('DO LOGIN: ' + global.server + ':' + global.port + '/token')
        try {
            const response = await fetch(url_server + '/token', {
                method  : 'get', 
                headers : new Headers({
                    'Content-Type': 'application/json',
                    'Account' : test.account,
                    'Username' : test.username,
                    'Password' : test.password,
                }),
                // body: 'A=1&B=2'
            })

            const data = await response.json()

            if(data.token){
                setToken(data.token)

                this.props.history.push('/')
            }

        } catch(error) {
            console.log("Error fetching data", error)
        }
    }

    render(){
        const { classes } = this.props;

        return (
            <AppLayout header={false} drawer={false} >
              <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '75vh' }} >
              <Grid item xs={12} sm={8} md={6} lg={4} xl={2} >
                <Card className={classes.card}>
                  <CardContent>
                    <Typography component="h1" variant="h5">
                      Inicia sesion
                    </Typography>
                    <form className={classes.form} onSubmit={this.login} noValidate>
                      <TextField variant="outlined" margin="normal" required fullWidth id="account"  label="Cuenta"  name="account"  autoComplete="account" autoFocus />
                      <TextField variant="outlined" margin="normal" required fullWidth id="username" label="Usuario" name="username" autoComplete="email" />
                      <TextField variant="outlined" margin="normal" required fullWidth name="password" label="Contraseña" type="password" id="password" autoComplete="current-password" />
                      <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Mantener sesion abierta" />
                      <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                        Iniciar sesion
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                          </Link>
                        </Grid>
                      </Grid>
                    </form>
                  </CardContent>
                </Card>
                </Grid>
              </Grid>
            </AppLayout>
        );
    }
}
*/

export default withStyles(styles)(Login);