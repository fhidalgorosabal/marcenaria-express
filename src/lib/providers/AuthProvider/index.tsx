import { useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { AuthProviderType } from "../../../types/AuthProviderType";

export const AuthProvider = ({ children }: AuthProviderType) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
      } catch (error) {
        console.error("Error checking auth:", error);
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (token: string) => {
    try {
      localStorage.setItem("token", token);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      console.error("Error during login:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      return true;
    } catch (error) {
      console.error("Error during logout:", error);
      return false;
    }
  };

  const value = {
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
