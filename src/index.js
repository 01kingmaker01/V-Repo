import React from "react";
import App from "./App";
import Modal from "react-modal";
import { Provider } from "react-redux";
import { render } from "react-dom";
import { store } from "./store";
Modal.setAppElement("#root");
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
