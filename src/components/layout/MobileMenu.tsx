import { Link } from "react-router-dom";
import { ROUTES, STYLES_HEADER } from "../../constants";
import { useTranslation } from "../../hooks";

interface MobileMenuProps {
  isOpen: boolean;
  isActive: (path: string) => boolean;
  isAuthenticated: boolean;
  onLogout: () => void;
  onLogin: () => void;
  onClose: () => void;
}

const MobileMenu = ({
  isOpen,
  isActive,
  isAuthenticated,
  onLogout,
  onLogin,
  onClose,
}: MobileMenuProps) => {
  const { translate } = useTranslation();

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          to={ROUTES.HOME}
          className={STYLES_HEADER.mobileNavLink(isActive(ROUTES.HOME))}
          onClick={onClose}
        >
          {translate("home-menu")}
        </Link>
        <Link
          to={ROUTES.PRODUCTS}
          className={STYLES_HEADER.mobileNavLink(isActive(ROUTES.PRODUCTS))}
          onClick={onClose}
        >
          {translate("products-menu")}
        </Link>
        <Link
          to={ROUTES.CART}
          className={STYLES_HEADER.mobileNavLink(isActive(ROUTES.CART))}
          onClick={onClose}
        >
          {translate("cart-menu")}
        </Link>
      </div>

      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="mt-3 px-2 space-y-1">
          {isAuthenticated ? (
            <button
              onClick={() => {
                onLogout();
                onClose();
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {translate("logout-menu")}
            </button>
          ) : (
            <button
              onClick={() => {
                onLogin();
                onClose();
              }}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {!isActive(ROUTES.LOGIN)
                ? translate("login-menu")
                : translate("register-menu")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
