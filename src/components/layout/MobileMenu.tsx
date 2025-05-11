import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/constants";
import { STYLES_HEADER } from "../../lib/constants";

export const MobileMenu = ({
  isOpen,
  isActive,
  isAuthenticated,
  onLogout,
  onLogin,
  onClose,
}: {
  isOpen: boolean;
  isActive: (path: string) => boolean;
  isAuthenticated: boolean;
  onLogout: () => void;
  onLogin: () => void;
  onClose: () => void;
}) => (
  <div
    className={`${
      isOpen ? "block" : "hidden"
    } md:hidden transition-all duration-300 ease-in-out`}
  >
    <div className="pt-2 pb-3 space-y-1">
      <Link
        to={ROUTES.HOME}
        className={STYLES_HEADER.mobileNavLink(isActive(ROUTES.HOME))}
        onClick={onClose}
      >
        Inicio
      </Link>
      <Link
        to={ROUTES.PRODUCTS}
        className={STYLES_HEADER.mobileNavLink(isActive(ROUTES.PRODUCTS))}
        onClick={onClose}
      >
        Productos
      </Link>
      <div className="pt-4 pb-3 border-t border-gray-200">
        {isAuthenticated ? (
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-100"
          >
            Cerrar sesión
          </button>
        ) : (
          <button
            onClick={() => {
              onLogin();
              onClose();
            }}
            className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-700 hover:bg-gray-100"
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </div>
  </div>
);
