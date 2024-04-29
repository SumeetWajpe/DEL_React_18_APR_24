import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};
createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action) => {
      console.log("Within increment likes reducer !");
      return store;
    },
  },
});
