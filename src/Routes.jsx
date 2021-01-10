import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Calculate from "./components/Calculate";
import UserArea from "./components/UserArea";
import Orders from "./components/Orders";
import BaseMap from "./components/BaseMap";

export default () => {
  return (
    <React.Fragment>
      <Router>
        <Grid container>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Map">
              <BaseMap />
            </Route>
            <Route exact path="/Calculate">
              <Calculate />
            </Route>
            <Route exact path="/OrdersAll">
              <Orders all={true} />
            </Route>
            <Route exact path="/UserArea">
              <UserArea />
            </Route>
            <Route exact path="/Orders">
              <Orders all={false} />
            </Route>
          </Switch>
        </Grid>
      </Router>
    </React.Fragment>
  );
};
