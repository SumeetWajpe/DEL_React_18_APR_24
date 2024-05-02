import axios from "axios";
import { call, put, retry, takeEvery } from "redux-saga/effects";
import { loadAllProducts } from "../reducers/products.reducer";

function fetchProductsFromServer() {
  return axios.get("http://localhost:3500/products");
}

function* fetchProducts() {
  try {
    const res = yield call(fetchProductsFromServer);
    yield put(loadAllProducts(res.data));
  } catch (error) {
    // put(HandleError(error.message)) // Handle Error would be a reducer
  }
}

function* fetchProductsWithRetry() {
  try {
    const SECOND = 1000;
    const res = yield retry(3, 10 * SECOND, fetchProductsFromServer);
    yield put(loadAllProducts(res.data));
  } catch (error) {}
}

function* mySaga() {
  //   yield takeEvery("PRODUCTS_FETCH_REQUESTED_ASYNC", fetchProducts);
  yield takeEvery("PRODUCTS_FETCH_REQUESTED_ASYNC", fetchProductsWithRetry);
}

export default mySaga;
