import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = []; // {products:[],loading:true,error:""}
export const fetchAllProducts = createAsyncThunk(
  "users/fetchAllProducts",
  async () => {
    const response = await axios.get("http://localhost:3500/products");
    return response.data;
  },
);
const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    incrementLikes: (store, action) => {
      console.log("Within increment likes reducer !");
      // biz logic to update store
      const id = action.payload;
      let index = store.findIndex(p => p.id == id);
      store[index].likes++; // immer handles store immutability
      return store;

      // writting own logic for immutability
      // return [
      //   ...store.slice(0, index),
      //   { ...store[index], likes: store[index].likes + 1 },
      //   ...store.slice(index + 1),
      // ];
    },
    deleteAProduct: (store, action) => {
      return store.filter(p => p.id != action.payload);
    },
    addNewProduct: (store, action) => {
      store.push(action.payload);
      return store;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (store, { payload }) => {
      store = payload;
      return store;
    });
  },
});

export const { incrementLikes, addNewProduct, deleteAProduct } =
  productSlice.actions;
export default productSlice.reducer;
