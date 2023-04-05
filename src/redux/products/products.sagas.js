import { call, put, takeLatest, all } from "redux-saga/effects";
import productsTypes from "./products.types";
import {
  handleAddProduct,
  handleDeleteProduct,
  handleFetchProducts,
} from "./products.helpers";
import { auth } from "../../firebase/utils";
import { fetchProductsStart, setProducts } from "./products.actions";

export function* addProduct({
  payload: { productName, productCategory, productThumbnail, productPrice },
}) {
  try {
    const timestamp = new Date();
    yield handleAddProduct({
      productName,
      productCategory,
      productThumbnail,
      productPrice,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (error) {}
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts() {
  try {
    const products = yield handleFetchProducts();
    yield put(setProducts(products));
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}
export function* deleteProduct({ payload }) {
  try {
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (err) {
    // console.log(err);
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
  ]);
}
