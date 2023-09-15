import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from './routes/router';
import store from "./store/store";
import PopupProvider from "../features/Popups/Popups.provider";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </Provider>
  </React.StrictMode>
);
