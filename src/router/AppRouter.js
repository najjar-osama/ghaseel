import React from "react";
import { Router, Route, Switch } from "react-router-dom";
//import { AnimatedSwitch } from "react-router-transition";
import { createBrowserHistory } from "history";
//import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "../components/HomePage";
import LoginPage from "../components/LoginPage";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route path="/" exact={true} component={LoginPage} />
      <Route path="/home" component={HomePage} />
      <Route component={() => <div>Not found</div>} />
    </Switch>
  </Router>
);

export default AppRouter;
