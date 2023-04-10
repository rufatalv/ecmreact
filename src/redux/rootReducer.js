import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
import productsReducer from "./products/products.reducer";
import cartReducer from "./cart/cart.reducer";

export default combineReducers({
    user: userReducer,
    productsData: productsReducer,
    cart: cartReducer
})