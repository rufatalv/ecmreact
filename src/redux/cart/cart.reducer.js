import cartTypes from "./cart.types";
import {
  handleAddToCart,
  handleReduceCartItem,
  handleRemoveFromCart,
} from "./cart.utils";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";


const INITIAL_STATE = {
  cartItems: [],
};

const persistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["cartData"]
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItem: action.payload,
        }),
      };
    case cartTypes.REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: handleReduceCartItem({
          prevCartItems: state.cartItems,
          cartItemToReduce: action.payload,
        }),
      };
    case cartTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleRemoveFromCart({
          prevCartItems: state.cartItems,
          cartItemToRemove: action.payload,
        }),
      };
    default:
      return state;
  }
};

// export default persistReducer(persistConfig, cartReducer)

export default cartReducer;
