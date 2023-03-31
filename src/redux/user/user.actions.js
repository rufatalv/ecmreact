
import userTypes from "./userTypes.js";

export const emailSignInStart = (userCredentials) => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials,
});

export const signInSuccess = (user) => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION,
});

export const signUpUserStart = (userCredentials) => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials,
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGN_IN_START
})
export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START,
});
export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS,
});

export const resetPasswordStart =(userCredentials) => ({
  type: userTypes.RESET_PASSWORD_START,
  payload: userCredentials
})

export const resetPasswordSuccess = () => ({
  type: userTypes.RESET_PASSWORD_SUCCESS,
  payload: true
})




export const userError = (error) => ({
  type: userTypes.USER_ERROR,
  payload: error,
});
