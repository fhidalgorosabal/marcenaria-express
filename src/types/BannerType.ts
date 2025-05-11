import { ReactNode } from "react";

export interface BannerType {
  title?: string;
  subtitle?: string;
  content?: string;
  children?: ReactNode;
  className?: string;
}
