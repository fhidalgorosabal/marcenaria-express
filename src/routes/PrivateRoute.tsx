import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = () => {
  const { isAuthenticated, setIntendedRoute } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    setIntendedRoute(location.pathname);
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
