import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// store is a global state container
import { store } from "./app/store";
import { Provider } from "react-redux";

//get users immediately as app loads
import { fetchUsers } from "./features/users/usersSlice";
// store can dispatch any function related to state of reducers(whose slice is defined in store)
store.dispatch(fetchUsers());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* make available store to all components via provider */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);
