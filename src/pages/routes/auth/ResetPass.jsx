import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordStart } from "../../../redux/user/user.actions";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErrors: user.userErrors,
});
const ResetPass = () => {
  const { resetPasswordSuccess } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (resetPasswordSuccess) {
      navigate("/");
    }
  }, [resetPasswordSuccess, navigate]);
  
  const resetPass = (e) => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  };
  return (
    <>
      <div className="auth-content">
        <div className="auth reset">
          <div className="resetForm">
            <form onSubmit={resetPass} className="">
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPass;
