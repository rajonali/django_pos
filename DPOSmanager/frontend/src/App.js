import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./containers/components/Header";
import Footer from "./containers/components/Footer";

import Products from "./containers/Products";
import Register from "./containers/Register";
import Login from "./containers/Login";
import Dashboard from "./containers/Dashboard";
import Transactions from "./containers/Transactions";
import Metrics from "./containers/Metrics";
import Settings from "./containers/Settings";

import { Provider } from "react-redux";
import store from "./store";
import { Route, Switch, BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/products" exact component={Products} />
            <Route path="/transactions" exact component={Transactions} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/metrics" exact component={Metrics} />
            <Route path="/settings" exact component={Settings} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
