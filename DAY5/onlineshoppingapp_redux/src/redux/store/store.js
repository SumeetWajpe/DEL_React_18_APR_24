import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products.reducer";
import posts from "../reducers/posts.reducer";
const store = configureStore({ reducer: { products, posts } });
export default store;