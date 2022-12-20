import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "frankyWO" },
  { id: "1", name: "karanWO" },
  { id: "2", name: "sophieWO" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

//export current state
export default usersSlice.reducer;
