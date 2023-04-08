import React, { useState } from "react";
import { BsGearFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import "./styles.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { signOutUserStart } from "../../redux/user/user.actions";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});
const Header = (props) => {
  const [dropdown, setDropdown] = useState(false);
  const { currentUser } = useSelector(mapState);

  const dispatch = useDispatch();
  const signOutFromAccount = () => {
    dispatch(signOutUserStart());
  };
  // if (currentUser) {
  //  currentUser.displayName.split(" ");
  // }
  return (
    <header className="header">
      <div className="headerLeft">
        <BsGearFill size={"24px"} color={"#101010"} />
        <div className="logo">
          <Link to={"/"}>eCommerce</Link>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
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
          <div className='headerProfile'>
            <div className="headerInner">
              <div>{currentUser.displayName}</div>
              <div className="headerImg">
                <img src={currentUser.photoURL} alt="" />
              </div>
              <div
                className="headerArrow"
                onClick={() => setDropdown((current) => !current)}
              >
                <IoIosArrowDown size={"24px"} color={"#101010"} />
              </div>
            </div>
            <div className={dropdown ? "userDropdown userDropdownOpen" : "userDropdown"}>
              <Link className="userDropdown-link" to="/dashboard">
                View Account
                <span role="img" aria-label="user" className="anticon anticon-user">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="user"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path>
                  </svg>
                </span>
              </Link>
              <h6 className="userDropdown-link signOut" onClick={() => {signOutFromAccount()}} role="presentation">
                Sign Out
                <span
                  role="img"
                  aria-label="logout"
                  className="anticon anticon-logout"
                >
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    data-icon="logout"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"></path>
                  </svg>
                </span>
              </h6>
            </div>
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
