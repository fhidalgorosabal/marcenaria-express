import { create } from "zustand";
import { persist } from "zustand/middleware";
import { AuthState, LoginData } from "../store/slices/authSlice";

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      loginData: null,
      isAuthenticated: false,
      intendedRoute: null,
      setIntendedRoute: (route: string | null) => set({ intendedRoute: route }),
      login: (loginData: LoginData) =>
        set({ loginData, isAuthenticated: true }),
      logout: () =>
        set({ loginData: null, isAuthenticated: false, intendedRoute: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);
