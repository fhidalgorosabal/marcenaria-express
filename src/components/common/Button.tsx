import { ButtonType } from "../../types/ButtonType";
import {
  BUTTON_BASE_STYLES,
  BUTTON_VARIANTS,
  BUTTON_SIZES,
} from "../../constants";

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
      {isLoading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
