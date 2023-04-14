import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { history } from "../../helpers/history";
import AdminToolbar from "../AdminToolbar/AdminToolbar";
import Cart from "../Cart/Cart";
import { createPortal } from "react-dom";

const RootLayout = ({currentUser}) => {
  history.navigate = useNavigate();
  const [showCart, setShowCart] = useState(false)
  const handleShowCart = () => {
    setShowCart(showCart => !showCart)
  }
  history.location = useLocation();
  return (
    <>
      <Header onShowCart={handleShowCart} currentUser ={currentUser} />

      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
