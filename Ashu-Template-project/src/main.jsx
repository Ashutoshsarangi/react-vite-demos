import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Store, persistor } from "./store/store";
import { router } from "./route/route";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <PersistGate persistor={persistor} loading={"Loading....."}>
        <RouterProvider router={router}></RouterProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
