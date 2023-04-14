import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, Login, Register, ResetPass, Search, ProductDetails, AdminPanel } from "./pages";
import { ToastContainer } from "react-toastify";
import "./default.scss";
import ProtectedRoutes from "./pages/routes/protectedRoutes/protectedRoutes";
import RootLayout from "./components/layout/RootLayout";
import { useEffect } from "react";
import { checkUserSession } from "./redux/user/user.actions";
import WithAuth from "./hooks/WithAuth";
import Dashboard from "./pages/routes/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import WithAdminAuth from "./hooks/withAdminAuth";
import Cart from "./components/Cart/Cart";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
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
          <Route path={"/"} element={<HomePage />} />
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
