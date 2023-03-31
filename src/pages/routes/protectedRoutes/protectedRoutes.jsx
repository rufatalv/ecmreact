import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const [isAdmin, setAdmin] = useState(false);
  const auth = useSelector((state) => state.auth.user.email);
  const navigate = useNavigate();
  if (auth === "rufat845@gmail.com") {
    setAdmin(true);
  } else {
    navigate("/");
  }
  console.log(auth);
  return <div>{isAdmin && <Outlet />}</div>;
};

export default ProtectedRoutes;
