import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import Pages from "./Pages/Pages";
import Store from "./Store/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Pages />
    </Provider>
  </React.StrictMode>
);
