import { Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
      <Route element={<PublicRoute />}>
        <Route path={ROUTES.LOGIN} element={<Login />} />
      </Route>

      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.CART} element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
