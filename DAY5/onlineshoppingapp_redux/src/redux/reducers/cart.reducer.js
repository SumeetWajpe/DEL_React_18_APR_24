import { createSlice } from "@reduxjs/toolkit";

const initialState = { products: [], loading: true, error: "" };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (store, action) => {
      store.products.push(action.payload);
      store.loading = false;
      store.error = "";
      return store;
    },
    deleteProductFromCart: (store, action) => {
      // biz logic
      let id = action.payload;
      store.products = store.products.filter(p => p.id !== id);
      store.loading = false;
      store.error = "";
      return store;
    },
  },
});

export const { addProductToCart, deleteProductFromCart } = cartSlice.actions;
export default cartSlice.reducer;
