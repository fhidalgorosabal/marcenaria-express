import { Link } from "react-router-dom";
import { ROUTES, STYLES_HEADER } from "../../constants";
import { useTranslation } from "../../hooks";

const NavLinks = ({
  isActive,
  isScrolled,
  isScrollPage,
}: {
  isActive: (path: string) => boolean;
  isScrolled: boolean;
  isScrollPage: boolean;
}) => {
  const { translate } = useTranslation();

  return (
    <div className="hidden md:flex md:ml-6 md:space-x-8">
      <Link
        to={ROUTES.HOME}
        className={STYLES_HEADER.navLink(
          isActive(ROUTES.HOME),
          isScrolled,
          isScrollPage
        )}
      >
        {translate("home-menu")}
      </Link>
      <Link
        to={ROUTES.PRODUCTS}
        className={STYLES_HEADER.navLink(
          isActive(ROUTES.PRODUCTS),
          isScrolled,
          isScrollPage
        )}
      >
        {translate("products-menu")}
      </Link>
    </div>
  );
};

export default NavLinks;
