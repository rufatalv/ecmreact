import userTypes from "./user/userTypes";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const INITIAL_STATE = {
  currentUser: null,
  userErrors: [],
  resetPasswordSuccess: false
};

const persistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["currentUser"]
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErrors: []
      };
    case userTypes.RESET_PASSWORD_SUCCESS: 
    return{
      ...state,
      resetPasswordSuccess: action.payload
    }
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    case userTypes.USER_ERROR:
      return {
        ...state,
        userErrors: action.payload,
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, userReducer);