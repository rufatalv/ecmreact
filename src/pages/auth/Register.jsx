import React, { useEffect, useState } from "react";

import { ToastContainer } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

import "./styles.scss";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { googleSignInStart, signUpUserStart } from "../../redux/user/user.actions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErrors: user.userErrors,
});


const Register = () => {
  const { currentUser, userErrors } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (currentUser) {
      reset();
      navigate('/');
    }

  }, [currentUser, navigate]);

  useEffect(() => {
    if (Array.isArray(userErrors) && userErrors.length > 0) {
    }

  }, [userErrors]);

  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setCPassword('');
  };

  const registerUser = event => {
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      password,
      cPassword
    }));
  }
  const signInWithGoogleHandler = () => {
    dispatch(googleSignInStart())
  };
  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="light"
      />
      <div className="auth-content">
        <div className="auth">
          <div className="authLeft">
            <form onSubmit={registerUser}>
              <input
                type="text"
                placeholder="UserName"
                required
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cPassword}
                onChange={(e) => setCPassword(e.target.value)}
              />
              <div className="actions">
                <Link to={"/resetpass"}>Forgot password?</Link>
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>

          <div className="auth-divider">
            <h6>OR</h6>
          </div>

          <div className="authRight">
            <button
              className="button auth-provider-button provider-google"
              type="button"
              onClick={signInWithGoogleHandler}
            >
              <span
                role="img"
                aria-label="google"
                className="anticon anticon-google"
              >
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="google"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8-34.4 23-78.3 36.6-129.9 36.6-99.9 0-184.4-67.5-214.6-158.2-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1 56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100-149.9 0-279.6 86-342.7 211.4-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93 72.5-66.8 114.4-165.2 114.4-282.1 0-27.2-2.4-53.3-6.9-78.5z"></path>
                </svg>
              </span>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
