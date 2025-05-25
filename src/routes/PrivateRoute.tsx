import { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../hooks";

const PrivateRoute = () => {
  const { isAuthenticated, setIntendedRoute } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      setIntendedRoute(location.pathname);
    }
  }, [isAuthenticated, location.pathname, setIntendedRoute]);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
