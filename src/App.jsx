import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { HomePage, Login, Register, ResetPass } from "./pages";
import { ToastContainer } from "react-toastify";
import "./default.scss";
import ProtectedRoutes from "./pages/routes/protectedRoutes/protectedRoutes";
import AdminPanel from "./pages/admin/AdminPanel";
import RootLayout from "./components/layout/RootLayout";
import { useEffect } from "react";
import { checkUserSession } from "./redux/user/user.actions";
import WithAuth from "./hooks/WithAuth";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useDispatch } from "react-redux";
import WithAdminAuth from "./hooks/withAdminAuth";
const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);

  return (
    <BrowserRouter>
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
      <Routes>
        <Route path={"/"} element={<RootLayout />}>
          <Route path={"/"} element={<HomePage />} />
          <Route path={"/auth"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/resetpass"} element={<ResetPass />} />
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
