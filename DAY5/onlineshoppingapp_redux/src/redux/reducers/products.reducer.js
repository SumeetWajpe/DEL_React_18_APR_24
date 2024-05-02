import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { products: [], loading: true, error: "" };
export const fetchAllProducts = createAsyncThunk(
  "users/fetchAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3500/products");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
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
      let index = store.products.findIndex(p => p.id == id);
      store.products[index].likes++; // immer handles store immutability
      return store;

      // writting own logic for immutability
      // return [
      //   ...store.slice(0, index),
      //   { ...store[index], likes: store[index].likes + 1 },
      //   ...store.slice(index + 1),
      // ];
    },
    deleteAProduct: (store, action) => {
      store.products = store.products.filter(p => p.id !== action.payload);
      return store;
    },
    addNewProduct: (store, action) => {
      store.products.push(action.payload);
      return store;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAllProducts.fulfilled, (store, { payload }) => {
      store.products = payload;
      store.error = "";
      store.loading = false;
      return store;
    });
    builder.addCase(fetchAllProducts.rejected, (store, { payload }) => {
      store.products = [];
      store.loading = false;
      store.error = payload;
      return store;
    });
  },
});

export const { incrementLikes, addNewProduct, deleteAProduct } =
  productSlice.actions;
export default productSlice.reducer;
