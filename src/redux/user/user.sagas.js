import userTypes from "./userTypes";
import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  resetPasswordSuccess,
  signInSuccess,
  signOutUserSuccess,
  userError,
} from "./user.actions";
import {
  GoogleProvider,
  auth,
  getCurrentUser,
  handleUserProfile,
} from "../../firebase/utils";
import { toast } from "react-toastify";
import { history } from "../../helpers/history";
import { handleResetPasswordAPI } from "./user.helpers";

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (error) {}
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password).catch((error) => {
      toast.error(error.message)
    });
    yield getSnapshotFromUserAuth(user);
    if (user) {
      toast.success("signed in");
      history.navigate("/");
    }
  } catch (error) {}
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* signUpUser({
  payload: { displayName, email, password, cPassword },
}) {
  try {
    if (password !== cPassword) {
      const err = ["Password don't match"];
      toast.error("Password dont match");
      yield put(userError(err));
      return;
    }
    const { user } = yield auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        toast.error(error.message);
      });
    const additionalData = { displayName };
    yield getSnapshotFromUserAuth(user, additionalData);
    // yield call(handleUserProfile({userAuth: user, additionalData: { displayName }}));
  } catch (err) {
    // console.log(err);
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    // console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut().then((user) => {
      toast.info("Signed out!");
      history.navigate("/");
    });
    yield put(signOutUserSuccess());
  } catch (err) {
    // console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* resetPassword({ payload: { email } }) {
  try {
    yield call(handleResetPasswordAPI, email);
    yield put(resetPasswordSuccess());
  } catch (error) {
    yield put(userError(error));
  }
}

export function* googleSignIn() {
  const { user } = yield auth.signInWithPopup(GoogleProvider);
  yield getSnapshotFromUserAuth(user);
}
export function* onGoogleSignInStart() {
  yield takeLatest(userTypes.GOOGLE_SIGN_IN_START, googleSignIn);
}

export function* onResetPasswordStart() {
  yield takeLatest(userTypes.RESET_PASSWORD_START, resetPassword);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
    call(onGoogleSignInStart),
    call(onResetPasswordStart),
  ]);
}
