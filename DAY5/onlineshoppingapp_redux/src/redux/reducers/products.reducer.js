import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action) => {
      console.log("Within increment likes reducer !");
      // biz logic to update store
      return store;
    },
  },
});

export const { incrementLikes } = productSlice.actions;
export default productSlice.reducer;
