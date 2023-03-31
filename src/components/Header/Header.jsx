import React from "react";
import { BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./styles.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/user/user.actions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const Header = (props) => {
  const { currentUser } = useSelector(mapState);
  const dispatch = useDispatch();
  const signOutFromAccount = () => {
    dispatch(signOutUserStart());
  };
  return (
    <header className="header">
      <div className="headerLeft">
        <BsGearFill size={"24px"} color={"#101010"} />
        <div className="logo">
          <Link to={"/"}>AUTOGEAR</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/recommended">Recommended</Link>
          </li>
          <li>
            <Link to="/dashboard">Featured</Link>
          </li>
        </ul>
      </div>
      <div className="headerRight">
        {/* <div className="headerButtons">
          <Link to={"/register"} className="button">
            sign up
          </Link>
          <Link to={"/auth"} className="button button-muted">
            sign in
          </Link>
        </div> */}
        {currentUser ? (
          <div className="headerProfile">
            <div>Hi, {currentUser.displayName}</div>
            <button className="button" onClick={signOutFromAccount}>
              Sign out
            </button>
          </div>
        ) : (
          <div className="headerButtons">
            <Link to={"/register"} className="button">
              sign up
            </Link>
            <Link to={"/auth"} className="button button-muted">
              sign in
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};
export default connect(mapState, null)(Header);
