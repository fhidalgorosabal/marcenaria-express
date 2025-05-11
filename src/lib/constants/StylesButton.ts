import { ButtonVariant } from "../../types/ButtonType";

export const BUTTON_BASE_STYLES =
  "rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

export const BUTTON_VARIANTS: Record<
  ButtonVariant,
  string | ((isScrolled: boolean) => string)
> = {
  primary: "bg-sky-600/90 text-white hover:bg-sky-700/90 focus:ring-sky-500",
  secondary:
    "bg-stone-500/80 text-white hover:bg-stone-300/80 focus:ring-stone-500",
  success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  outline: (isScrolled: boolean) =>
    isScrolled
      ? "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-yellow-800"
      : "border border-white/30 text-white hover:bg-white/10 focus:ring-white",
};

export const BUTTON_SIZES = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "w-full px-1 py-1 text-lg",
  xl: "w-full px-3 py-2 text-xl",
};
