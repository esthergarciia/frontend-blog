import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import {NavigationBar} from "./components/NavigationBar";

export function Routes(): JSX.Element {
  return <Router>
    <Switch>
      <Route exact path={"/"}><NavigationBar/></Route>
    </Switch>
  </Router>;
}

