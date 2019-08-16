import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Table from "./pages/table";
import Tabs from "./pages/tabs";

class App extends Component {

    render(){
        return (
            <Router>
              <Switch>
                <Route path="/login"  component={Login} />
                <Route exact path="/" component={Home} />
                <Route path="/table"  component={Table} />
                <Route path="/tabs"   component={Tabs} />
              </Switch>
            </Router>
        )
    }
}

export default App;