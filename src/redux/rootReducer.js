import { combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import productsReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  productsData: productsReducer,
  cartData: cartReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["user", "cartData"],
};

export default persistReducer(configStorage, rootReducer);
