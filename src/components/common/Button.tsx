import React from "react";
import { ButtonType } from "../../types/ButtonType";

const Button: React.FC<ButtonType> = ({
  children,
  variant = "primary",
  size = "md",
  isLoading = false,
  isScrolled = false,
  className = "",
  ...props
}) => {
  const baseStyles =
    "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
    outline: isScrolled
      ? "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500"
      : "border border-white/30 text-white hover:bg-white/10 focus:ring-white",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "w-full px-1 py-1 text-lg",
    xl: "w-full px-3 py-2 text-xl",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
