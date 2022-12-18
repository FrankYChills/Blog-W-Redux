import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// store is a global state container
import { store } from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* make available store to all components via provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
