import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { loadAllProducts } from "../reducers/products.reducer";

function fetchProductsFromServer() {
  return axios.get("http://localhost:3500/products");
}

function* fetchProducts() {
  const res = yield call(fetchProductsFromServer);
  yield put(loadAllProducts(res.data));
}

function* mySaga() {
  yield takeEvery("PRODUCTS_FETCH_REQUESTED_ASYNC", fetchProducts);
}

export default mySaga;
