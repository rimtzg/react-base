import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home  from "./pages/home";
import Login from "./pages/login";
import Table from "./pages/table";
import Tabs  from "./pages/tabs";
import Data  from "./pages/data";

import UserContext from "./contexts/UserContext";

class App extends React.Component {

    state = {
        session : {
            name : "Nombre"
        }
    }

    render(){
        return (
            <UserContext.Provider value={this.state.session}>
                <Router>
                  <Switch>
                    <Route path="/login"  component={Login} />
                    <Route exact path="/" component={Home} />
                    <Route path="/table"  component={Table} />
                    <Route path="/tabs"   component={Tabs} />
                    <Route path="/data"   component={Data} />
                  </Switch>
                </Router>
            </UserContext.Provider>
        )
    }
}

export default App;