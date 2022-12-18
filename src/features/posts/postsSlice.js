import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning redux toolkit",
    content:
      "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces",
  },
  {
    id: "2",
    title: "React Redux",
    content:
      "React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. ",
  },
];

const postsSlice = createSlice({
  // all the data below can be accessed through postSlice.reducer
  name: "posts",
  initialState,
  reducers: {},
});

// export a function that gets data from reducer
// this function can be implemented in postsListComponent to get posts but we are doing it here caue if any time any change happen on the data we can implement that on this file instead of each and every component.
export const selectAllPosts = (state) => state.posts;

export default postsSlice.reducer;
