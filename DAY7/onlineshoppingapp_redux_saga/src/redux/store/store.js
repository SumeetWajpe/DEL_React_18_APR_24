import { configureStore } from "@reduxjs/toolkit";
import products from "../reducers/products.reducer";
import posts from "../reducers/posts.reducer";
import cart from "../reducers/cart.reducer";
import mySaga from "../saga/saga";
import createSagaMiddleware from "redux-saga";

const reducer = { products, posts, cart };

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

// then run the saga
sagaMiddleware.run(mySaga);
export default store;
