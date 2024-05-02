import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    deletePost: (store, action) => {
      console.log("Within deletePost reducer !");
      // biz logic to update store
      return store;
    },
  },
});

export const { deletePost } = postsSlice.actions;
export default postsSlice.reducer;
