import React, { Component } from "react";
import ReactDOM from "react-dom";
import Body from "./page/Body";
import Login from "./page/Login";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
/*HashRouter is used over BrowserRouter as HashRouter uses the Hash part of the URL to sync*/

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/manage" component={Body} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
