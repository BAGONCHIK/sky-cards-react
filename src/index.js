import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles/fonts.css";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./models/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
