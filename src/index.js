import React from "react";
import App from "./App";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { history, store } from "./store";
import { ConnectedRouter } from "connected-react-router";
import { Route, Switch } from "react-router";
import Home from "components/Home";
import { Form } from "components/Form";
Modal.setAppElement("#root");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/posts" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/posts/add" component={Form} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
