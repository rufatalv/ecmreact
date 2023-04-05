import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./userReducer";
import productsReducer from "./products/products.reducer";

export default combineReducers({
    user: userReducer,
    productsData: productsReducer,
})