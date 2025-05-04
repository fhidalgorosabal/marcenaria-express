import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import { useAuth } from "../../hooks/useAuth";

const NavBar: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrollPage =
    location.pathname === ROUTES.HOME || location.pathname === ROUTES.LOGIN;

  useEffect(() => {
    if (!isScrollPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollPage]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate(ROUTES.LOGIN);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isScrollPage
          ? "bg-white/60 backdrop-blur-md shadow-lg"
          : "bg-transparent/20"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to={ROUTES.HOME}
                className={`text-xl font-bold transition-colors ${
                  isScrolled || !isScrollPage
                    ? "text-gray-700 hover:text-gray-600"
                    : "text-white hover:text-gray-300"
                }`}
              >
                MARCENARIA EXPRESS
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to={ROUTES.HOME}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive(ROUTES.HOME)
                    ? isScrolled || !isScrollPage
                      ? "border-blue-500 text-gray-900"
                      : "border-gray-200 text-white"
                    : isScrolled || !isScrollPage
                    ? "border-transparent text-gray-700 hover:border-gray-600 hover:text-gray-600"
                    : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300"
                }`}
              >
                Inicio
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to={ROUTES.PRODUCTS}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive(ROUTES.PRODUCTS)
                    ? isScrolled || !isScrollPage
                      ? "border-blue-500 text-gray-900"
                      : "border-gray-200 text-white"
                    : isScrolled || !isScrollPage
                    ? "border-transparent text-gray-700 hover:border-gray-600 hover:text-gray-600"
                    : "border-transparent text-gray-400 hover:border-gray-300 hover:text-gray-300"
                }`}
              >
                Productos
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className={`px-4 py-2 rounded transition-colors ${
                  isScrolled || !isScrollPage
                    ? "bg-white/50 text-gray-700 hover:bg-white/80"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
