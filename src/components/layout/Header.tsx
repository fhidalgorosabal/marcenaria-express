import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ROUTES } from "../../lib/constants";

const Header: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to={ROUTES.HOME}
                className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
              >
                Marcenaria Express
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to={ROUTES.HOME}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                  isActive(ROUTES.HOME)
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
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
                    ? "border-blue-500 text-gray-900"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                }`}
              >
                Productos
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to={ROUTES.LOGIN}
              className={`inline-flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                isActive(ROUTES.LOGIN)
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
              }`}
            >
              Iniciar sesión
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
