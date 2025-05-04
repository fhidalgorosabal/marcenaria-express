export interface ButtonType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "success" | "outline";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  isScrolled?: boolean;
}
