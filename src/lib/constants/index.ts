export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  PRODUCTS: "/products",
  NOT_FOUND: "*",
} as const;
