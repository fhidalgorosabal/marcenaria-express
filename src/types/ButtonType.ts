import { ButtonHTMLAttributes } from "react";

export interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  isScrolled?: boolean;
  withCounter?: boolean;
}

export type ButtonVariant = "primary" | "secondary" | "success" | "outline";
