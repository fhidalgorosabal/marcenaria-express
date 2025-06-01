import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { useAuth, useScrollBehavior, useCart } from "../../hooks";
import { ROUTES, STYLES_HEADER } from "../../constants";
import { Button } from "../common";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const isScrollPage =
    location.pathname === ROUTES.HOME ||
    location.pathname === ROUTES.LOGIN ||
    location.pathname === ROUTES.REGISTER;
  const isScrolled = useScrollBehavior(isScrollPage, isMenuOpen);

  const isActive = (path: string) => location.pathname === path;

  const handleLogout = () => {
    toast.info("¡Hasta pronto! Has cerrado sesión correctamente");
    logout();
    navigate(ROUTES.LOGIN);
  };

  const handleLogin = () => {
    navigate(ROUTES.LOGIN);
  };

  const handleRegister = () => {
    navigate(ROUTES.REGISTER);
  };

  const handleCart = () => {
    navigate(ROUTES.CART);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={STYLES_HEADER.header(isScrolled, isScrollPage)}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link
                to={ROUTES.HOME}
                className={STYLES_HEADER.logo(isScrolled, isScrollPage)}
              >
                MARCENARIA EXPRESS
              </Link>
            </div>

            <NavLinks
              isActive={isActive}
              isScrolled={isScrolled}
              isScrollPage={isScrollPage}
            />
          </div>

          <div className="hidden md:flex md:items-center md:ml-6 space-x-4">
            {isAuthenticated && (
              <Button
                onClick={handleCart}
                variant="outline"
                isScrolled={isScrolled || !isScrollPage}
                withCounter
                className="relative"
              >
                <FaShoppingCart size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            )}

            {isAuthenticated ? (
              <Button
                onClick={handleLogout}
                variant="outline"
                isScrolled={isScrolled || !isScrollPage}
              >
                Cerrar sesión
              </Button>
            ) : (
              <Button
                onClick={isActive(ROUTES.LOGIN) ? handleRegister : handleLogin}
                variant="outline"
                isScrolled={isScrolled || !isScrollPage}
              >
                {!isActive(ROUTES.LOGIN) ? "Iniciar sesión" : "Registrarse"}
              </Button>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={STYLES_HEADER.menuButton(isScrolled, isScrollPage)}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        <MobileMenu
          isOpen={isMenuOpen}
          isActive={isActive}
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          onLogin={isActive(ROUTES.LOGIN) ? handleRegister : handleLogin}
          onClose={() => setIsMenuOpen(false)}
        />
      </nav>
    </header>
  );
};

export default NavBar;
