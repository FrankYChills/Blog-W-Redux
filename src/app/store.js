import { configureStore } from "@reduxjs/toolkit";
// get all reducers here
// import counterReducer from "../features/counter/counterSlice";
import { apiSlice } from "../features/api/apiSlice";
import userReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    // all the reducers(state) inside reducer will be available to all the components
    // counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
