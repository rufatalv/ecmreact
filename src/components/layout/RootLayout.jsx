import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import { history } from "../../helpers/history";
import AdminToolbar from "../AdminToolbar/AdminToolbar";

const RootLayout = ({currentUser}) => {
  history.navigate = useNavigate();
  history.location = useLocation();
  return (
    <>
      <Header currentUser ={currentUser} />
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
