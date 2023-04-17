import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import {
  Login,
  Register,
  ResetPass,
  Search,
  ProductDetails,
  Dashboard,
  ProtectedRoutes,
  Home,
  AdminPanel,
} from "./pages";
import { Cart, RootLayout } from "./components";
import { checkUserSession } from "./redux/user/user.actions";
import { useDispatch } from "react-redux";
import "./default.scss";
import WithAdminAuth from "./hooks/withAdminAuth";
import { WithAuth } from "./hooks";
import { fetchProductsStart } from "./redux/products/products.actions";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
    dispatch(fetchProductsStart(""));
  }, [dispatch]);
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
      />
      <Routes>
        <Route path={"/"} element={<RootLayout />}>
          <Route path={"/"} element={<Home />} />
          <Route path={"/auth"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/product/:productID"} element={<ProductDetails />} />
          <Route path={"/resetpass"} element={<ResetPass />} />
          <Route path={"/search"} element={<Search />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/search/:filterType"} element={<Search />} />
          <Route
            path={"/admin"}
            element={
              <WithAdminAuth>
                <AdminPanel />
              </WithAdminAuth>
            }
          />
          <Route
            path={"/dashboard"}
            element={
              <WithAuth>
                <Dashboard />
              </WithAuth>
            }
          />
          <Route element={<ProtectedRoutes />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
