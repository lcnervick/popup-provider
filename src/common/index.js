import React from "react";
import ReactDOM from "react-dom/client";

import PopupProvider from "../features/Popups/Popups.provider";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <PopupProvider>
        <App />
      </PopupProvider>
  </React.StrictMode>
);
