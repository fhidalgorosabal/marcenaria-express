import { ButtonType } from "../../types";
import {
  BUTTON_BASE_STYLES,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from "../../constants";
import { useTranslation } from "../../hooks";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  isScrolled = false,
  className = "",
  withCounter = false,
  ...props
}: ButtonType) => {
  const { translate } = useTranslation();
  const getVariantClass = () => {
    const variantClass = BUTTON_VARIANTS[variant];
    return typeof variantClass === "function"
      ? variantClass(isScrolled)
      : variantClass;
  };

  return (
    <button
      className={`${BUTTON_BASE_STYLES} ${getVariantClass()} ${
        BUTTON_SIZES[size]
      } ${withCounter ? "relative" : ""} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? translate("loading-label") : children}
    </button>
  );
};

export default Button;
