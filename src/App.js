import React from "react";
import { history } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import { Form } from "components/Form";
import Home from "components/Home";

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/add" component={Form} />
        </Switch>
      </>
    </ConnectedRouter>
  );
};

export default App;
