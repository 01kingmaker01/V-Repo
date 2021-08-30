import React from "react";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { store } from "./store";
import App from "App";
import { Departments } from "components/Departments";
Modal.setAppElement("#root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
